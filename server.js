const express = require('express');
const path = require('path');
const http = require('http');
const https = require('https');
const { URL } = require('url');

const Logger = {
  log: (msg, ...args) => { console.log(`[SERVER] ${new Date().toISOString()} ${msg}`, ...args); },
  error: (msg, ...args) => { console.error(`[SERVER ERROR] ${new Date().toISOString()} ${msg}`, ...args); }
};

const app = express();
const PORT = 5052;

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(Buffer.isBuffer(c) ? c : Buffer.from(c)));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function proxyRequestAttempt({ targetBase, pathSuffix, method, headers, body }, res) {
  const targetUrl = new URL(targetBase.replace(/\/$/, '') + pathSuffix);
  const isHttps = targetUrl.protocol === 'https:';
  const lib = isHttps ? https : http;
  const agent = isHttps ? new https.Agent({ rejectUnauthorized: false }) : undefined;

  const reqHeaders = { ...headers };
  delete reqHeaders.host;
  delete reqHeaders['content-length'];
  delete reqHeaders['accept-encoding'];

  const opts = {
    protocol: targetUrl.protocol,
    hostname: targetUrl.hostname,
    port: targetUrl.port || (isHttps ? 443 : 80),
    method,
    path: targetUrl.pathname + targetUrl.search,
    headers: {
      ...reqHeaders,
      host: targetUrl.host,
      ...(body && body.length ? { 'content-length': String(body.length) } : {})
    },
    agent
  };

  return new Promise((resolve, reject) => {
    const upstream = lib.request(opts, (up) => {
      const statusCode = up.statusCode || 502;
      res.status(statusCode);
      Object.entries(up.headers || {}).forEach(([k, v]) => {
        if (!k) return;
        const key = String(k).toLowerCase();
        if (key === 'content-encoding') return;
        if (key === 'transfer-encoding') return;
        if (v == null) return;
        res.setHeader(k, v);
      });
      up.pipe(res);
      resolve(true);
    });

    upstream.setTimeout(5000, () => upstream.destroy(new Error('upstream_timeout')));
    upstream.on('error', reject);

    if (body && body.length) upstream.write(body);
    upstream.end();
  });
}

app.all('/api/*', async (req, res) => {
  try {
    const body = await readBody(req);
    const suffix = req.originalUrl.replace(/^\/api/, '');
    const targets = [
      'https://localhost:7033/api',
      'http://localhost:5002/api'
    ];

    let lastErr = null;
    for (const targetBase of targets) {
      try {
        await proxyRequestAttempt({
          targetBase,
          pathSuffix: suffix,
          method: req.method,
          headers: req.headers,
          body
        }, res);
        return;
      } catch (e) {
        lastErr = e;
      }
    }
    res.status(502).json({ ok: false, error: 'no_upstream', message: String(lastErr && lastErr.message || lastErr || 'No upstream') });
  } catch (e) {
    res.status(500).json({ ok: false, error: 'proxy_failed', message: String(e && e.message || e) });
  }
});

app.get('/uisek-logo.png', (req, res) => {
  const url = 'https://reconocimiento.uisek.edu.ec/Account/Images/logo.png';
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (up) => {
    const statusCode = up.statusCode || 502;
    if (statusCode >= 400) {
      res.status(statusCode).end();
      up.resume();
      return;
    }
    res.setHeader('content-type', up.headers['content-type'] || 'image/png');
    res.setHeader('cache-control', 'public, max-age=86400');
    up.pipe(res);
  }).on('error', () => {
    res.status(502).end();
  });
});

app.get('/gsi/client', (req, res) => {
  const url = 'https://accounts.google.com/gsi/client';
  const host = (req.headers && req.headers.host) ? String(req.headers.host) : 'localhost:' + PORT;
  const referer = `http://${host}/`;
  https.get(url, {
    headers: {
      'User-Agent': 'curl/8.0',
      'Accept': '*/*',
      'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
      'Sec-Fetch-Dest': 'script',
      'Sec-Fetch-Mode': 'no-cors',
      'Sec-Fetch-Site': 'cross-site',
      'Referer': referer
    }
  }, (up) => {
    const statusCode = up.statusCode || 502;
    if (statusCode >= 400) {
      res.status(statusCode).end();
      up.resume();
      return;
    }
    res.setHeader('content-type', 'application/javascript; charset=utf-8');
    res.setHeader('cache-control', 'public, max-age=3600');
    up.pipe(res);
  }).on('error', () => {
    res.status(502).end();
  });
});

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(__dirname));

app.listen(PORT, '0.0.0.0', () => {
  Logger.log(`Server running at http://localhost:${PORT}/`);
});
