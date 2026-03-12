const Logger = {
  log: (msg, ...args) => { console.log(`[APP] ${msg}`, ...args); },
  error: (msg, ...args) => { console.error(`[APP ERROR] ${msg}`, ...args); },
  warn: (msg, ...args) => { console.warn(`[APP WARN] ${msg}`, ...args); }
};

const hospitales = [
  { id: 'h1', nombre: 'Hospital Metropolitano' },
  { id: 'h2', nombre: 'Hospital Eugenio Espejo' },
  { id: 'h3', nombre: 'Hospital Pablo Arturo Suárez' }
];

const estudiantesIniciales = [
  { id: 'e1', nombre: 'Ana López' },
  { id: 'e2', nombre: 'Carlos Pérez' },
  { id: 'e3', nombre: 'María González' }
];

const opcionesCalificacion = [
  { value: 1, label: 'E = 1 Excelente' },
  { value: 0.75, label: 'S = 0.75 Satisfactorio' },
  { value: 0.5, label: 'A = 0.5 Aceptable' },
  { value: 0.25, label: 'D = 0.25 Deficiente' },
  { value: 0, label: 'MD = 0 Muy Deficiente' }
];

const opcionesCalificacionB = [
  { value: 1, label: 'E = 1 Excelente' },
  { value: 0.75, label: 'S = 0.75 Satisfactorio' },
  { value: 0.5, label: 'A = 0.5 Aceptable' },
  { value: 0.25, label: 'D = 0.25 Deficiente' },
  { value: 0, label: 'MD = 0 Muy Deficiente' }
];

const preguntasRubricaA = [
  'Asume con responsabilidad su práctica y acepta sugerencias',
  'Cumplimiento del horario acordado en la planificación',
  'Trata a las personas con dignidad y sin prejuicios',
  'Colabora con actividades programadas por la institución',
  'Su lenguaje es empático, ético y respetuoso'
];

const preguntasRubricaB = [
  'Conocimientos',
  'Actitud',
  'Destrezas',
  'Historia clínica y documentación institucional',
  'Presentación y Bioseguridad'
];

const rubricaBData = [
  {
    criterio: 'Conocimientos médicos',
    opciones: [
      { val: 1, text: 'Siempre (más 90%) demuestra conocimientos acordes con su nivel de formación. Responde con solvencia las preguntas del tutor' },
      { val: 0.75, text: 'Mayoría (75%) de las ocasiones demuestra conocimientos acordes con su nivel de formación. Responde a las preguntas del tutor en la mayoría de las ocasiones.' },
      { val: 0.5, text: 'Alrededor del 50% de las ocasiones demuestra un conocimiento acorde con su nivel de formación y responde a las preguntas del tutor' },
      { val: 0.25, text: 'Alrededor de un 25% demuestra un conocimiento acorde con su nivel de formación y responde a las preguntas del tutor' },
      { val: 0, text: 'No tiene conocimientos acordes con su nivel de formación. Tiene vacíos severos.' }
    ]
  },
  {
    criterio: 'Actitud',
    opciones: [
      { val: 1, text: 'Muestra gran interés en aprender y siempre trabaja adecuadamente en equipo con sus compañeros y personal sanitario' },
      { val: 0.75, text: 'En el 75% de los casos muestra gran interés en aprender y trabaja adecuadamente en equipo con sus compañeros y personal sanitario' },
      { val: 0.5, text: 'Alrededor del 50% de las ocasiones muestra gran interés en aprender y trabaja adecuadamente en equipo con sus compañeros y personal sanitario' },
      { val: 0.25, text: 'Mínimo interés en aprender. Se le dificulta trabajar en equipo' },
      { val: 0, text: 'Ningún interés en aprender, no participa en las actividades de la práctica con el equipo' }
    ]
  },
  {
    criterio: 'Destrezas',
    opciones: [
      { val: 1, text: 'Ha realizado procedimientos con la guía del tutor. Al examinar a un paciente aplica siempre la técnica adecuada.' },
      { val: 0.75, text: 'Ha realizado algunos procedimientos con la guía del tutor. Al examinar un paciente aplica casi siempre la técnica adecuada.' },
      { val: 0.5, text: 'Pocos procedimientos con la guía del tutor. Al examinar un paciente aplica en ocasiones la técnica adecuada' },
      { val: 0.25, text: 'Algún procedimiento con la guía del tutor. Al examinar a un paciente, mínima aplicación de la técnica adecuada' },
      { val: 0, text: 'No ha realizado procedimientos con la guía del tutor. Al examinar a un paciente, no aplica la técnica adecuada' }
    ]
  },
  {
    criterio: 'Historias clínicas o documentación institucional',
    opciones: [
      { val: 1, text: 'Al realizar historias clínicas, la información de la historia clínica es completa y ordenada. La redacción es adecuada' },
      { val: 0.75, text: 'Al realizar historias clínicas. La información de la historia clínica es bastante completa y ordenada. La redacción es buena.' },
      { val: 0.5, text: 'Hay algunos vacíos en la información de la historia clínica, la información puede estar desordenada. La redacción es aceptable' },
      { val: 0.25, text: 'La información de la historia clínica es incompleta y esta desordenada. La redacción es deficiente' },
      { val: 0, text: 'La información es incompleta, muy desordenada y con una redacción muy deficiente.' }
    ]
  },
  {
    criterio: 'Presentación y Bioseguridad',
    opciones: [
      { val: 1, text: 'Su presentación personal es adecuada (cabello recogido, no utiliza joyas, rasurado, uñas cortas) Utiliza el uniforme de prácticas de la UISEK y cumple normas de bioseguridad.' },
      { val: 0.75, text: 'No cumple con algún aspecto de presentación personal, pero utiliza el uniforme de prácticas de la UISEK y cumple normas de bioseguridad.' },
      { val: 0.5, text: 'Hay descuido en su presentación personal en varios aspectos, pero utiliza el uniforme de prácticas de la UISEK y cumple normas de bioseguridad.' },
      { val: 0.25, text: 'Hay descuido en su presentación personal y utiliza el uniforme diferente al de prácticas de la UISEK o no cumple con normas de bioseguridad' },
      { val: 0, text: 'No cumple con normas de bioseguridad o no acude con el uniforme de la UISEK' }
    ]
  }
];

function navegar(url) {
  if (!url || typeof url !== 'string' || url.includes('@')) {
    console.warn('navegar: invalid URL, redirecting to dashboard', url);
    url = '/dashboard';
  }
  
  // Clean up any potential duplicate slashes
  url = url.replace('//', '/');

  const router = document.querySelector('ion-router');
  const isDashboard = url.includes('dashboard');
  const comp = isDashboard ? 'page-dashboard' : 'page-login';
  
  // AGGRESSIVE REMOVAL of conflicting components
  if (isDashboard) {
    // Remove login components immediately
    document.querySelectorAll('page-login').forEach(el => el.remove());
    const fb = document.getElementById('fallback-app');
    if (fb) { fb.style.display = 'none'; fb.remove(); }
    const fbDash = document.getElementById('fb-dashboard');
    if (fbDash) fbDash.remove();
    
    // Ensure dashboard container is visible
    const app = document.querySelector('ion-app');
    if (app) app.classList.remove('fallback-block');
  } else {
    document.querySelectorAll('page-dashboard').forEach(el => el.remove());
  }

  try { localStorage.setItem('last_route', url); } catch(e) {}
  
  if (router && typeof router.push === 'function') {
    router.push(url);
  } else {
    location.hash = `#${url}`;
  }
  
  const ensure = () => {
    // Re-check removal for dashboard
    if (isDashboard) {
       document.querySelectorAll('page-login').forEach(el => el.remove());
       const fb = document.getElementById('fallback-app');
       if (fb) { fb.style.display = 'none'; fb.remove(); }
    }
    
    const exists = document.querySelector(comp);
    if (!exists) {
      console.log(`[navegar] Component ${comp} not found, mounting fallback`);
      montarFallback(comp);
    }
  };
  
  if (window.customElements && window.customElements.whenDefined) {
    window.customElements.whenDefined(comp).then(() => setTimeout(ensure, 50));
  }
  setTimeout(ensure, 300);
  setTimeout(ensure, 1000); // Double check
}

function guardarLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function leerLocal(key, fallback) {
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;
  try { return JSON.parse(raw); } catch { return fallback; }
}

function normalizarCalificacion(v) {
  if (typeof v === 'number') return v;
  if (v == null) return 0;
  const s = String(v).trim();
  
  const asNum = Number(s);
  if (!isNaN(asNum)) return asNum;

  if (s.includes('E') && s.includes('5')) return 5;
  if (s.toUpperCase().includes('MB') && s.includes('4')) return 4;
  if (s === 'B' || s.includes('B') && s.includes('3')) return 3;
  if (s.toUpperCase().includes('R') && s.includes('2')) return 2;
  if (s.toUpperCase().includes('M') && s.includes('1')) return 1;
  return 0;
}

function apiBase(path) {
  const cfg = (window.__CONFIG__ && window.__CONFIG__.API_BASE_URL) || localStorage.getItem('API_BASE_URL') || '';
  let base = String(cfg || '').trim();
  if (!base) base = String(window.location && window.location.origin || '').trim();
  base = base.replace(/\/$/, '');
  if (!/\/api$/i.test(base)) base = base + '/api';
  return base;
}

async function apiPost(path, data) {
  const base = apiBase(path);
  if (!base) throw new Error('no_base');
  const url = base.replace(/\/$/, '') + '/' + path.replace(/^\//, '');
  const session = leerLocal('session', {});
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Provider': session.provider || 'local', 'X-User': session.user || '' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('http_' + res.status);
  return res.json().catch(() => ({}));
}

async function apiGet(path) {
  const session = leerLocal('session', {});
  const headers = { 'Content-Type': 'application/json', 'X-Provider': session.provider || 'local', 'X-User': session.user || '' };
  const base = apiBase(path);
  if (!base) throw new Error('no_base');
  const url = base.replace(/\/$/, '') + '/' + String(path || '').replace(/^\//, '');
  const res = await fetch(url, { method: 'GET', headers });
  if (!res.ok) throw new Error('http_' + res.status);
  return res.json().catch(() => ([]));
}

function decodeJwt(token) {
  const parts = String(token).split('.');
  if (parts.length !== 3) return null;
  const base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
  try { return JSON.parse(atob(base64)); } catch { return null; }
}

function isNativePlatform() {
  try {
    return !!(window.Capacitor && typeof window.Capacitor.getPlatform === 'function' && window.Capacitor.getPlatform() !== 'web');
  } catch (e) {
    return false;
  }
}

function getAllowedDomains() {
  const cfg = (window.__CONFIG__ && window.__CONFIG__.ALLOWED_DOMAINS) || localStorage.getItem('ALLOWED_DOMAINS');
  if (!cfg) return ['uisek.edu.ec'];
  const arr = Array.isArray(cfg) ? cfg : String(cfg).split(',');
  return arr.map(s => String(s).trim().toLowerCase()).filter(Boolean);
}

function nombreDesdeEmail(email) {
  const local = String(email || '').split('@')[0] || '';
  const parts = local.replace(/[._]/g, ' ').replace(/\d+/g, '').split(' ').filter(Boolean);
  const first = parts[0] || local;
  const second = parts[1] || '';
  const cap = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
  return [cap(first), cap(second)].filter(Boolean).join(' ');
}

function ensureGoogleGsiReady(maxMs = 45000) {
  if (window.google && window.google.accounts && window.google.accounts.id) return Promise.resolve(true);
  if (window.__GSI_READY_PROMISE) return window.__GSI_READY_PROMISE;
  window.__GSI_READY_PROMISE = new Promise((resolve) => {
    const existing = document.querySelector('script[src^="/gsi/client"], script[src$="/gsi/client"], script[src^="https://accounts.google.com/gsi/client"]');
    if (!existing) {
      const s = document.createElement('script');
      s.src = '/gsi/client';
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }
    const start = Date.now();
    const tick = () => {
      if (window.google && window.google.accounts && window.google.accounts.id) return resolve(true);
      if (Date.now() - start >= maxMs) return resolve(false);
      setTimeout(tick, 250);
    };
    tick();
  });
  return window.__GSI_READY_PROMISE;
}

function initGoogleSignIn(containerId) {
  const clientId = (window.__CONFIG__ && window.__CONFIG__.GOOGLE_CLIENT_ID) || localStorage.getItem('GOOGLE_CLIENT_ID');
  const firstEl = document.getElementById(containerId);

  if (!firstEl) return;

  const el = firstEl;
  const setStatus = (html) => {
    let st = el.querySelector('[data-gsi-status="1"]');
    if (!html) {
      if (st) st.remove();
      return;
    }
    if (!st) {
      st = document.createElement('div');
      st.setAttribute('data-gsi-status', '1');
      st.style.cssText = 'color:red;font-size:12px;margin-top:6px;';
      el.appendChild(st);
    }
    st.innerHTML = html;
  };

  if (!clientId) {
    setStatus('Falta GOOGLE_CLIENT_ID.');
    console.warn('Falta GOOGLE_CLIENT_ID');
    return;
  }

  const handleBackendLogin = async (email, fullName) => {
    if (!email) return;
    try {
      const res = await apiPost('login/GoogleLogin', {
        email: email,
        nombreAplicacion: 'Zeus'
      });

      if (res && res.estaAutenticado) {
        guardarLocal('session', {
          user: res.email,
          name: (res.nombresUsuario || '') + ' ' + (res.apellidosUsuario || ''),
          token: res.seguridad ? res.seguridad.key : null,
          refreshToken: res.refreshToken,
          provider: 'google',
          userData: res
        });
        try { localStorage.setItem('MANUAL_EMAIL', email); } catch (e) {}
        try { localStorage.setItem('last_route', '/dashboard'); } catch (e) {}

        setTimeout(() => {
          navegar('/dashboard');

          const loginPage = document.querySelector('page-login');
          if (loginPage) loginPage.remove();

          const dash = document.querySelector('page-dashboard');
          if (!dash) montarFallback('page-dashboard');

          const fb = document.getElementById('fallback-app');
          if (fb) fb.remove();
          const fbDash = document.getElementById('fb-dashboard');
          if (fbDash) fbDash.remove();
          document.querySelector('ion-app')?.classList.remove('fallback-block');
        }, 50);

        setTimeout(() => {
          if ((location.hash || '') !== '#/dashboard') location.hash = '#/dashboard';
          if (!document.querySelector('page-dashboard')) montarFallback('page-dashboard');
        }, 800);
      } else {
        const msg = res.mensaje || 'Su usuario no está registrado o activo en el sistema ZEUS.';
        try {
          const alert = document.createElement('ion-alert');
          alert.header = 'Acceso Denegado';
          alert.message = msg;
          alert.buttons = ['Cerrar'];
          document.body.appendChild(alert);
          alert.present();
        } catch (e) {
          alert(msg);
        }
      }
    } catch (error) {
      console.error('Error en login Google:', error);
      alert('Error al validar el usuario con el servidor.');
    }
  };

  if (isNativePlatform()) {
    const ensureButton = () => {
      let existingBtn = el.querySelector('button.google-custom-btn');
      if (existingBtn) return existingBtn;
      el.innerHTML = '';

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'google-custom-btn';
      btn.innerHTML = `
        <div class="g-icon" style="background: white; border-radius: 50%; padding: 2px; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; margin-right: 12px;">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48">
            <g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g>
          </svg>
        </div>
        <span class="g-text">Acceder con Google</span>
      `;
      btn.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1a73e8;
        color: #ffffff;
        border: none;
        border-radius: 24px;
        padding: 4px 24px 4px 4px;
        font-family: 'Google Sans', Roboto, arial, sans-serif;
        font-weight: 500;
        font-size: 14px;
        height: 40px;
        cursor: pointer;
        width: 100%;
        max-width: 400px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.2);
        transition: background-color .218s, box-shadow .218s;
        margin-top: 10px;
      `;
      btn.onmouseover = () => { btn.style.backgroundColor = '#185abc'; btn.style.boxShadow = '0 1px 3px rgba(0,0,0,0.3)'; };
      btn.onmouseout = () => { btn.style.backgroundColor = '#1a73e8'; btn.style.boxShadow = '0 1px 2px rgba(0,0,0,0.2)'; };
      el.appendChild(btn);
      return btn;
    };

    const btn = ensureButton();
    setStatus('');

    if (!btn.__nativeBound) {
      btn.__nativeBound = true;
      btn.addEventListener('click', async () => {
        setStatus('');
        btn.disabled = true;
        btn.style.opacity = '0.7';
        try {
          const ok = await ensureGoogleGsiReady();
          if (!ok) {
            setStatus('No se pudo cargar Google Sign-In. Revise su conexión.');
            return;
          }

          try {
            window.google.accounts.id.disableAutoSelect();
          } catch (e) {}

          if (!window.__GSI_NATIVE_INITED) {
            window.google.accounts.id.initialize({
              client_id: clientId,
              auto_select: false,
              context: 'signup',
              callback: async (resp) => {
                const payload = decodeJwt(resp && resp.credential);
                const email = payload && payload.email;
                const fullName = (payload && (payload.name || ((payload.given_name || '') + ' ' + (payload.family_name || '')))) || '';
                if (!email) {
                  setStatus('No se pudo obtener el correo de Google.');
                  return;
                }
                await handleBackendLogin(email, fullName);
              }
            });
            window.__GSI_NATIVE_INITED = true;
          }

          let host = el.querySelector('#gsi-btn-host-native');
          if (!host) {
            host = document.createElement('div');
            host.id = 'gsi-btn-host-native';
            host.style.cssText = 'margin-top:10px;display:flex;justify-content:center;';
            el.appendChild(host);
          } else {
            host.innerHTML = '';
          }

          window.google.accounts.id.renderButton(host, {
            theme: 'filled_blue',
            size: 'large',
            text: 'signin_with',
            shape: 'pill'
          });

          try {
            window.google.accounts.id.prompt();
          } catch (e) {}

          setStatus('Toca el botón de Google que apareció para continuar.');
        } catch (e) {
          const msg = (e && (e.message || e.error || e.toString())) ? String(e.message || e.error || e.toString()) : 'Error';
          setStatus(`No se pudo iniciar sesión con Google. ${msg}`);
        } finally {
          btn.disabled = false;
          btn.style.opacity = '';
        }
      });
    }
    return;
  }

  ensureGoogleGsiReady().then((ok) => {
    if (!ok) {
      setStatus('Error cargando Google Sign-In. Revise su conexión.');
      return;
    }

    setStatus('');

    const lastEmail = (leerLocal('session', null) || {}).user || '';

  function toggleManualLogin(hide) {
    const ionList = document.querySelector('ion-content.login ion-list');
    const forgot = document.querySelector('#forgot');
    const loginBtn = document.querySelector('#login');
    if (ionList) ionList.style.display = '';
    if (forgot) forgot.style.display = '';
    if (loginBtn) loginBtn.style.display = '';
    const fbUser = document.getElementById('fb-user');
    const fbPass = document.getElementById('fb-pass');
    const fbLogin = document.getElementById('fb-login');
    const fbForgot = document.getElementById('fb-forgot');
    if (fbUser) fbUser.style.display = '';
    if (fbPass) fbPass.style.display = '';
    if (fbLogin) fbLogin.style.display = '';
    if (fbForgot) fbForgot.style.display = '';
  }

  window.google.accounts.id.disableAutoSelect(); // Resetea selecciones previas para forzar el selector
  window.google.accounts.id.initialize({
      client_id: clientId,
      auto_select: false,
      // hosted_domain removido para permitir usar cualquier cuenta (personal o institucional)
      // login_hint removido para permitir cambiar de cuenta
      context: 'signup', // Forzamos contexto de registro para evitar "Sign in as..."
      callback: async (resp) => {
      const selectBy = resp && resp.select_by;
      const payload = decodeJwt(resp && resp.credential);
      const email = payload && payload.email;
      const fullName = (payload && (payload.name || ((payload.given_name || '') + ' ' + (payload.family_name || '')))) || '';
      if (!email) return;

      await handleBackendLogin(email, fullName);
      }
    });
    
    window.__GSI_INITED = true;

    if (!el.getAttribute('data-gsi-rendered')) {
      el.innerHTML = '';
      const btnHost = document.createElement('div');
      btnHost.id = 'gsi-btn-host';
      el.appendChild(btnHost);
      try {
        window.google.accounts.id.renderButton(btnHost, {
          theme: 'filled_blue',
          size: 'large',
          text: 'signin_with',
          shape: 'pill'
        });
        el.setAttribute('data-gsi-rendered', '1');
      } catch (e) {
        setStatus('No se pudo inicializar el botón de Google. Revise su conexión.');
      }
    }
  let restored = false;
  const restore = () => { if (!restored) { restored = true; toggleManualLogin(false); } };
  const isLoginRoute = (location.hash || '').replace(/^#/, '') === '/login';
  const hasLoginButton = !!document.getElementById('google-signin');
  if (!window.__GSI_PROMPTED && isLoginRoute && hasLoginButton) {
    toggleManualLogin(false);
    window.__GSI_PROMPTED = true;
  }
  });
}
window.initGoogleSignIn = initGoogleSignIn;

function montarFallback(componentName) {
  let app = document.querySelector('ion-app');
  if (!app) {
    app = document.createElement('ion-app');
    document.body.appendChild(app);
  } else {
    // Clear previous children to prevent overlap
    app.innerHTML = '';
  }
  const el = document.createElement(componentName);
  app.appendChild(el);
}

function waitFor(tag, ms = 1200) {
  return new Promise(resolve => {
    let done = false;
    customElements.whenDefined(tag).then(() => {
      if (!done) { done = true; resolve(true); }
    });
    setTimeout(() => { if (!done) { done = true; resolve(false); } }, ms);
  });
}

// Removed handleLoginClick to prevent hardcoded bypass


// Initialize body class based on current hash
// updateBodyClass(location.hash);
// window.addEventListener('hashchange', () => updateBodyClass(location.hash));

class PageLogin extends HTMLElement {
  disconnectedCallback() {
    if (this.checker) clearInterval(this.checker);
  }

  connectedCallback() {
    this.style.display = 'none'; // Prevent flash
    
    // Initialize Theme
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    const h = (location.hash || '').replace(/^#/, '');
    const last = localStorage.getItem('last_route');
    const session = leerLocal('session', null);
    
    // Si hay sesión o ruta de dashboard, intentar navegar, pero NO eliminarse preventivamente
    // para evitar que se muestre el fallback de index.html
    if (h.includes('dashboard') || (last && last.includes('dashboard')) || (session && session.user)) {
      console.log('[PageLogin] Session detected, redirecting to dashboard...');
      
      // Ocultar visualmente para evitar flash del login mientras redirige
      this.style.display = 'none'; 
      this.style.visibility = 'hidden';

      setTimeout(() => {
        if (window.navegar) window.navegar('/dashboard');
      }, 100);
      return; // Stop rendering
    }
    this.style.display = 'block'; // Show explicitly

    this.innerHTML = `
      <ion-page>
        <ion-content>
        <div class="main-layout-container">
           <header class="app-header">
           </header>
           <main class="app-body">
             <section class="col-main  hidden md:block">
             </section>
          
             <aside class="col-sidebar">
               <div class="theme-toggle-btn" id="theme-toggle">
                 <ion-icon name="contrast-outline" style="font-size: 20px;"></ion-icon>
               </div>
               
               <div class="sidebar-content-wrapper">
                 <img src="/uisek-logo.png" alt="Logo UISEK" 
                  class="right-column-image"> 
                <h1 class="sidebar-title">EXTERNADO/INTERNADO<br><span style="font-size: 22px;">UISEK</span></h1>
                
                <div class="google-signin-button">
                  <div class="loginCenter">
                    <div id="google-signin"></div>
                  </div>
                 </div>

                 <!-- Inputs manuales ocultos para compatibilidad -->
                 <div style="display:none;">
                   <input id="login-user" placeholder="docente@uisek.edu.ec" autocomplete="username" />
                   <input id="login-pass" type="password" placeholder="••••••••" autocomplete="current-password" />
                   <button id="login">INGRESAR AL SISTEMA</button>
                   <button id="forgot">¿Olvidaste tu contraseña?</button>
                 </div>
               </div>

               <div class="waves-container">
                 <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                   viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"> 
                   <defs> 
                     <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /> 
                   </defs> 
                   <g class="parallax"> 
                     <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(8, 83, 148, 0.7)" /> 
                     <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(8, 83, 148, 0.5)" /> 
                     <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(8, 83, 148, 0.3)" /> 
                     <use xlink:href="#gentle-wave" x="48" y="7" fill="rgb(8, 83, 148)" /> 
                   </g> 
                 </svg> 
               </div> 
             </aside> 
           </main> 
          
           <footer class="app-footer"> 
             <p>&copy; 2025 - Universidad Internacional SEK - Dirección de Tecnología</p> 
           </footer> 
        </div>
        </ion-content>
      </ion-page>
    `;

    const ionApp = document.querySelector('ion-app');
    if (ionApp) ionApp.classList.remove('fallback-block');
    
    // Single, robust listener
    setTimeout(() => {
      const toggleBtn = this.querySelector('#theme-toggle');

      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          document.body.classList.toggle('dark-mode');
          const isDark = document.body.classList.contains('dark-mode');
          localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
      }
    }, 100);

    setTimeout(() => {
      const btn = this.querySelector('#login');
        if(btn) btn.addEventListener('click', async () => {
            const u = this.querySelector('#login-user').value?.trim();
            const p = this.querySelector('#login-pass').value?.trim();
            if (!u || !p) {
                const alert = await this.crearAlerta('Campos requeridos', 'Ingrese usuario y contraseña');
                await alert.present();
                return;
            }
            const domain = (String(u).split('@')[1] || '').toLowerCase();
            const allowed = getAllowedDomains();
            if (!allowed.includes(domain)) {
                const alert = await this.crearAlerta('Acceso restringido', `Use su cuenta institucional (@${allowed.join(', @')}).`);
                await alert.present();
                return;
            }
            guardarLocal('session', { user: u, name: nombreDesdeEmail(u) });
            navegar('/dashboard');
        });

        const forgot = this.querySelector('#forgot');
        if(forgot) forgot.addEventListener('click', async () => {
            const alert = await this.crearAlerta('Recuperación de contraseña', 'Comuníquese con soporte de UISEK o use el portal ZEUS para recuperar su contraseña.');
            await alert.present();
        });
    }, 100);

    const prev = leerLocal('session', null);
    if (prev && prev.user) {
      const iu = this.querySelector('#login-user');
      if (iu) iu.value = prev.user;
    }
    try {
      const mu = localStorage.getItem('MANUAL_EMAIL');
      const mp = localStorage.getItem('manual_pass');
      const iu2 = this.querySelector('#login-user');
      const ip2 = this.querySelector('#login-pass');
      if (iu2 && mu && !iu2.value) iu2.value = mu;
      if (ip2 && mp) ip2.value = mp;
    } catch(e) {}

    if (window.initGoogleSignIn) window.initGoogleSignIn('google-signin');

    const ensureClosedOnDashboard = () => {
      const h = (location.hash || '').replace(/^#/, '');
      if (h.startsWith('/dashboard')) {
        const fb = document.getElementById('fallback-app');
        if (fb) fb.remove();
        const fbDash = document.getElementById('fb-dashboard');
        if (fbDash) fbDash.remove();
        const ionApp = document.querySelector('ion-app');
        if (ionApp) ionApp.classList.remove('fallback-block');
        this.remove();
      }
    };
    ensureClosedOnDashboard();
    window.addEventListener('hashchange', ensureClosedOnDashboard);
  }

  // moved to PageDashboard

  crearAlerta(header, message) {
    const alert = document.createElement('ion-alert');
    alert.header = header;
    alert.message = message;
    alert.buttons = ['Cerrar'];
    document.body.appendChild(alert);
    return alert;
  }
}

class PageDashboard extends HTMLElement {
  constructor() {
    super();
    const s = leerLocal('session', null);
    const userData = (s && s.userData) ? s.userData : {};
    this.userData = userData;
    
    this.estado = {
      hospitalId: leerLocal('hospitalId', ''),
      fecha: leerLocal('fecha', ''),
      horaInicio: leerLocal('horaInicio', ''),
      horaFin: leerLocal('horaFin', ''),
      estudiantes: leerLocal('estudiantes', estudiantesIniciales),
      asistencia: leerLocal('asistencia', {}),
      rubricas: leerLocal('rubricas', {}),
      observaciones: leerLocal('observaciones', {}),
      recomendaciones: leerLocal('recomendaciones', {}),
      
      tutor: leerLocal('tutor', '') || (s ? s.name : ''),
      ci: leerLocal('ci', '') || (userData.dniUsuario || userData.DniUsuario || ''),
      correo: leerLocal('correo', '') || (s ? s.user : ''),
      departamento: leerLocal('departamento', '') || (userData.usuarioperfil && userData.usuarioperfil.length > 0 ? (userData.usuarioperfil[0].nombrePerfil || userData.usuarioperfil[0].NombrePerfil || '') : ''),
      
      horarios: leerLocal('horarios', {}),
      vista: leerLocal('vista', null),
      asistenciaTipo: leerLocal('asistenciaTipo', 'grupal'),
      hospitalNombre: leerLocal('hospitalNombre', ''),
      asistenciaMateria: leerLocal('asistenciaMateria', 'm1'),
      tema: leerLocal('tema', ''),
      grupos: leerLocal('grupos', [1, 2]),
      grupoHorarios: leerLocal('grupoHorarios', { m1: { fecha: '', inicio: '', fin: '' }, m2: { fecha: '', inicio: '', fin: '' } }),
      periodo: '',
      periodosDisponibles: []
    };
  }

  async cargarPeriodos() {
    this.estado.periodosDisponibles = [];
    try {
      console.log('Intentando cargar periodos...');
      const data = await apiGet('/GestionExternado/Periodo');
      console.log('Periodos recibidos:', data);
      if (Array.isArray(data)) {
        this.estado.periodosDisponibles = data.map(p => {
          const id = (p && (p.idPeriodo ?? p.IdPeriodo ?? p.IDPERIODO ?? p.idperiodo));
          const desc = (p && (p.descripcionPeriodo ?? p.DescripcionPeriodo ?? p.DESCRIPCION_PERIODO ?? p.descripcionperiodo));
          return {
            value: id != null ? String(id) : '',
            label: desc != null ? String(desc) : ''
          };
        }).filter(x => x.value && x.label);
      }
    } catch (e) {
      console.error('Error cargando periodos:', e);
      Logger.error('Error cargando periodos', e);
    }
    this.render();
    this.bind();
  }

  connectedCallback() {
    console.log('[PageDashboard] ConnectedCallback started');
    
    // Apply Theme from LocalStorage or default to Light
    // Logic: if theme is 'dark', add class. Otherwise (light or null), remove class.
    // The user explicitly asked for dashboard to follow the theme set in login.
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
       document.body.classList.add('dark-mode');
    } else {
       document.body.classList.remove('dark-mode');
    }

    this.cargarPeriodos();
    const h = (location.hash || '').replace(/^#/, '');
    const hv = this.vistaDesdeHash();
    
    // Determine view
    if (h === '/dashboard') {
      this.estado.vista = null;
    } else if (hv) {
      this.estado.vista = hv;
    } else {
      const last = leerLocal('last_route', null);
      if (last && last.startsWith('/dashboard/')) {
        const v = last.split('/')[2];
        if (v && ['docente','asistencia','rubrica'].includes(v)) this.estado.vista = v;
      } else if (last === '/dashboard') {
        this.estado.vista = null;
      }
    }
    console.log('[PageDashboard] Vista determined:', this.estado.vista);

    try {
      this.render();
    } catch (e) {
      Logger.error('Error rendering dashboard', e);
      this.innerHTML = `<div style="padding:20px;color:red;background:white;z-index:99999;position:fixed;top:0;left:0;width:100%;height:100%;">Error cargando dashboard: ${e.message}. <button onclick="localStorage.clear();location.reload()">Reset</button></div>`;
    }
    this.updateViewsDisplay();
    setTimeout(() => {
      const ready = !!this.querySelector('#guardar');
      // Only re-render if we expect 'guardar' button (grupal assistance) but it's missing,
      // OR if we generally suspect rendering failed. 
      // For now, we just ensure we re-bind if we re-render.
      if (!ready && this.estado.vista === 'asistencia' && this.estado.asistenciaTipo === 'grupal') { 
         this.render(); 
         this.bind();
         this.updateViewsDisplay();
      } else if (!this.querySelector('#custom-menu-toggle')) {
         // Also re-render if critical UI is missing
         this.render();
         this.bind();
         this.updateViewsDisplay();
      }
    }, 300);
    const fb = document.getElementById('fallback-app');
    if (fb) fb.remove();
    const fbDash = document.getElementById('fb-dashboard');
    if (fbDash) fbDash.remove();
    const ionApp = document.querySelector('ion-app');
    if (ionApp) ionApp.classList.remove('fallback-block');
    this.bind();
    
    // Safety check: ensure we are visible
    this.style.display = 'block';
    this.style.visibility = 'visible';
    
    this.handleHashChange = () => {
      const h2 = (location.hash || '').replace(/^#/, '');
      const v = this.vistaDesdeHash();
      if (h2 === '/dashboard') {
        this.estado.vista = null;
        this.render();
        this.bind();
        this.updateViewsDisplay();
      } else if (v && v !== this.estado.vista) {
        this.estado.vista = v;
        guardarLocal('vista', v);
        this.render();
        this.bind();
        this.updateViewsDisplay();
      }
    };
    window.addEventListener('hashchange', this.handleHashChange);

    // Event delegation for time inputs (HI/HF) in Asistencia Grupal
    if (!this._inputDelegated) {
      this._inputDelegated = true;
      this.addEventListener('input', (e) => {
        const t = e.target;
        if (t.matches && t.matches('input[data-inicio-estudiante], input[data-fin-estudiante]')) {
          // Validation applies to both 'grupal' and 'individual' modes
          // if (this.estado.asistenciaTipo !== 'grupal') return;

          let val = t.value.replace(/[^0-9]/g, '');
          let finalVal = val;
          
          if (val.length >= 3) {
             let h = parseInt(val.substring(0, 2));
             let m = val.substring(2, 4);
             
             // Logic: 0-23 hours (24-hour format)
             if (h > 23) {
               // Maybe typed 240 -> 2:40
               h = parseInt(val.substring(0, 1));
               m = val.substring(1, 3);
             }
             // No lower limit check needed as 0 is valid
             
             if (m.length === 2 && parseInt(m) > 59) m = '59';
             
             finalVal = h + ':' + m;
          } else if (val.length === 2) {
             let h = parseInt(val);
             if (h > 23) {
                // e.g. 25 -> 2:5
                finalVal = val[0] + ':' + val[1];
             }
             // Allow 0-23
          } else if (val.length === 1) {
             // Allow 0 as first char
          }
          
          if (t.value !== finalVal) {
             t.value = finalVal;
          }
          
          const id = t.getAttribute('data-inicio-estudiante') || t.getAttribute('data-fin-estudiante');
          const type = t.getAttribute('data-inicio-estudiante') ? 'inicio' : 'fin';
          
          this.estado.horarios[id] = this.estado.horarios[id] || { fecha: '', inicio: '', fin: '' };
          this.estado.horarios[id][type] = finalVal;
          guardarLocal('horarios', this.estado.horarios);
        }
      });
      
      // Delegated listener for Search in Individual View
      this.addEventListener('ionInput', (e) => {
        if (e.target && e.target.id === 'busqueda-estudiante') {
           const term = (e.target.value || '').toLowerCase();
           const container = this.querySelector('#estudiantes-lista-container');
           if (container) {
             const items = container.querySelectorAll('.student-item');
             items.forEach(item => {
               const nameEl = item.querySelector('.student-info div');
               const name = nameEl ? nameEl.textContent.toLowerCase() : '';
               if (name.includes(term)) {
                 item.style.display = 'block';
               } else {
                 item.style.display = 'none';
               }
             });
           }
        }
      });
    }
  }

  disconnectedCallback() {
    if (this.handleHashChange) {
      window.removeEventListener('hashchange', this.handleHashChange);
    }
  }


  vistaDesdeHash() {
    try {
      const h = (location.hash || '').replace(/^#/, '');
      const m = h.match(/^\/dashboard\/(docente|asistencia|rubrica)(?:\?.*)?$/);
      if (m && m[1]) return m[1];
      const q = h.split('?')[1] || '';
      const params = new URLSearchParams(q);
      const v = params.get('vista');
      if (v && ['docente','asistencia','rubrica'].includes(v)) return v;
      return null;
    } catch(e) { return null; }
  }

  render() {
    // Reset summary list to default (all students) at start of render
    this.currentStudentsForSummary = this.estado.estudiantes;

    const hospitalOptions = hospitales.map(h => `<ion-select-option value="${h.id}">${h.nombre}</ion-select-option>`).join('');
    const hospitalNombre = (this.estado.hospitalNombre != null && this.estado.hospitalNombre !== '')
      ? this.estado.hospitalNombre
      : ((hospitales.find(h => h.id === this.estado.hospitalId) || {}).nombre || '');
    const estudiantesBase = this.estado.estudiantes;
    // Asignar grupos por defecto si no existen (legacy support)
    const midLegacy = Math.ceil(estudiantesBase.length / 2);
    estudiantesBase.forEach((e, i) => {
      if (!e.grupo) e.grupo = (i < midLegacy) ? 1 : 2;
      if (!e.materia) e.materia = 'm1'; // Asumimos m1 por defecto para los originales
    });

    const nombresMateria2 = ['Dario Guerron','Melissa Novoa','Federico Sanchez'];
    
    // Filtrar y preparar estudiantes según la materia actual
    let estudiantesAsist = [];
    if (this.estado.asistenciaMateria === 'm2') {
      // Para M2: tomamos los originales (m1) y los renombramos (mock), MÁS los que sean explícitamente m2
      const originalesRenombrados = estudiantesBase
        .filter(e => e.materia === 'm1' || !e.materia)
        .map((e, i) => ({ ...e, nombre: nombresMateria2[i % nombresMateria2.length], originalId: e.id })); // Usamos originalId para no perder ref si fuera necesario, aunque el ID sigue siendo e.id
      
      const nuevosM2 = estudiantesBase.filter(e => e.materia === 'm2');
      estudiantesAsist = [...originalesRenombrados, ...nuevosM2];
    } else {
      // Para M1: solo los de m1
      estudiantesAsist = estudiantesBase.filter(e => e.materia === 'm1' || !e.materia);
    }

    const generarGruposHTML = (renderer) => {
      return this.estado.grupos.map(gId => {
        const estGrupo = estudiantesAsist.filter(e => e.grupo == gId);
        const htmlEstudiantes = estGrupo.map(e => renderer(e)).join('');
        return `
          <div class="students-grid" data-grupo-container="${gId}">${htmlEstudiantes}</div>
        `;
      }).join('');
    };

    const estudiantesUIAsist = (this.estado.asistenciaTipo === 'grupal') ? (() => {
       // Lógica de rotación: 2 estudiantes por día comenzando el 26/02/2026
       const fechaRef = new Date(2026, 1, 26); // 26 Feb 2026
       const hoy = new Date();
       const refTime = new Date(fechaRef.getFullYear(), fechaRef.getMonth(), fechaRef.getDate()).getTime();
       const hoyTime = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()).getTime();
       const daysPassed = Math.floor((hoyTime - refTime) / (1000 * 60 * 60 * 24));
       const idx = Math.max(0, daysPassed);
       
       const batchSize = 2;
       const totalBatches = Math.ceil(estudiantesAsist.length / batchSize);
       // Si no hay estudiantes, evitar división por cero o errores
       if (totalBatches === 0) return '';
       
       const currentBatch = idx % totalBatches;
       const start = currentBatch * batchSize;
       const end = start + batchSize;
       const studentsToShow = estudiantesAsist.slice(start, end);
       this.currentStudentsForSummary = studentsToShow;
       
       return `<div class="students-grid">` + 
         studentsToShow.map(e => this.renderEstudianteAsistencia(e)).join('') + 
         `</div>`;
     })() : estudiantesAsist.map(e => this.renderEstudianteAsistencia(e)).join('');
    
    // Para rúbrica usamos lógica similar pero con su propio render
    // Nota: La rúbrica debería seguir la misma lógica de estudiantes que asistencia
    const estudiantesUIRub = generarGruposHTML((e) => this.renderEstudianteRubrica(e));

    const estudiantesUIDoc = this.estado.estudiantes.map(e => this.renderEstudiante(e)).join('');
    const resumen = this.contarResumen();
    const completos = this.contarCompletos();
    const sess = leerLocal('session', null) || {};
    const _rawName = sess.name || nombreDesdeEmail(sess.user || '');
    const _partsName = String(_rawName).trim().split(/\s+/).filter(Boolean);
    const displayName = [(_partsName[0] || _rawName), 'FRANCO'].filter(Boolean).join(' ');
    
    // Check for admin role (case insensitive)
    const isAdmin = (this.userData.usuarioperfil || []).some(p => 
      (p.nombrePerfil || p.NombrePerfil || '').toLowerCase().includes('admin')
    );
    
    const userEmail = (sess.user || '').trim().toLowerCase();
    const isJhonatan = userEmail === 'jhonatan.franco@uisek.edu.ec';
    const showFullMenu = !isAdmin || isJhonatan;
    
    const displayDoc = (this.estado.vista === 'docente') ? 'block' : 'none';
    const displayAsis = (this.estado.vista === 'asistencia') ? 'block' : 'none';
    const displayRub = (this.estado.vista === 'rubrica') ? 'block' : 'none';
    
    const prevSidebar = this.querySelector('.sidebar-container');
    const isMobile = window.innerWidth <= 768;
    const shouldCollapse = prevSidebar ? prevSidebar.classList.contains('collapsed') : isMobile;
    const sidebarClass = shouldCollapse ? 'sidebar-container collapsed' : 'sidebar-container';

    this.innerHTML = `
      <ion-header class="main-header" style="z-index: 1000; position: absolute; top: 0; left: 0; width: 100%;">
          <ion-toolbar class="main-toolbar">
            <ion-buttons slot="start">
              <ion-button id="custom-menu-toggle" class="header-btn">
                <ion-icon slot="icon-only" name="menu"></ion-icon>
              </ion-button>
              <div class="header-title">
                Gestión de Externado - Medicina
              </div>
            </ion-buttons>
            <ion-buttons slot="end">
            <ion-button id="user-profile-trigger">
              <div style="width: 32px; height: 32px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
                <ion-icon name="person" color="primary" style="font-size: 20px;"></ion-icon>
              </div>
            </ion-button>
          </ion-buttons>
          <ion-popover trigger="user-profile-trigger" dismiss-on-select="true" alignment="end">
            <ion-content>
              <ion-list lines="none">
                <ion-item lines="full">
                  <ion-icon slot="start" name="person-circle-outline" color="primary"></ion-icon>
                  <ion-label class="ion-text-wrap">
                    <p style="font-size: 0.8rem;">Usuario</p>
                    <h2 style="font-weight: 600;">${displayName}</h2>
                  </ion-label>
                </ion-item>
                <ion-item button id="logout" detail="false">
                  <ion-icon slot="start" name="log-out-outline" color="danger"></ion-icon>
                  <ion-label color="danger">Salir</ion-label>
                </ion-item>
              </ion-list>
            </ion-content>
          </ion-popover>
          </ion-toolbar>
      </ion-header>

      <div class="dashboard-body">
        <aside class="${sidebarClass}" id="sidebar">
            <div class="sidebar-logo-container">
              <img src="/uisek-logo.png" alt="UISEK" class="sidebar-logo"/>
            </div>
            <ion-list class="sidebar-list">
                <ion-item id="menu-docente" button detail="true" class="sidebar-item" data-vista="docente">
                    <ion-icon slot="start" name="person-outline"></ion-icon>
                    <ion-label>${isAdmin ? 'Info. Empleado' : 'Info. Tutor'}</ion-label>
                </ion-item>
                <ion-item id="menu-asistencia" button detail="true" class="sidebar-item" data-vista="asistencia" style="display: ${showFullMenu ? 'block' : 'none'};">
                    <ion-icon slot="start" name="checkbox-outline"></ion-icon>
                    <ion-label>Asistencia grupal</ion-label>
                </ion-item>
                 <ion-item id="menu-asistencia-2" button detail="true" class="sidebar-item" data-vista="asistencia" style="display: ${showFullMenu ? 'block' : 'none'};">
                    <ion-icon slot="start" name="checkbox-outline"></ion-icon>
                    <ion-label>Asistencia individual</ion-label>
                </ion-item>
                <ion-item id="menu-rubrica" button detail="true" class="sidebar-item" data-vista="rubrica" style="display: ${showFullMenu ? 'block' : 'none'};">
                    <ion-icon slot="start" name="list-outline"></ion-icon>
                    <ion-label>Rúbrica</ion-label>
                </ion-item>
            </ion-list>
        </aside>

        <div class="main-content-wrapper">
            <div data-view="docente" style="display:${displayDoc}">
              <div class="view-wrap">
                <div class="fields-grid">
                  <div class="col">
                    <ion-item><ion-label position="stacked">Tutor</ion-label><ion-input id="tutor" value="${this.estado.tutor}"></ion-input></ion-item>
                    <ion-item><ion-label position="stacked">CI</ion-label><ion-input id="ci" value="${this.estado.ci || ''}"></ion-input></ion-item>
                    <ion-item><ion-label position="stacked">Correo Institucional</ion-label><ion-input id="correo" type="email" value="${this.estado.correo || ''}"></ion-input></ion-item>
                  </div>
                  <div class="col">
                    ${!isAdmin ? `<ion-item><ion-label position="stacked">Hospital</ion-label><ion-input id="hospital-input" value="${hospitalNombre || ''}"></ion-input></ion-item>` : ''}
                    <ion-item><ion-label position="stacked">Área/Departamento</ion-label><ion-input id="departamento" value="${this.estado.departamento}"></ion-input></ion-item>
                  </div>
                </div>
              </div>
            </div>

            <div data-view="asistencia" style="display:${displayAsis}">
              <div class="view-wrap">
                ${this.estado.asistenciaTipo === 'grupal' ? (() => { 
                  const g = (this.estado.grupoHorarios || {})[this.estado.asistenciaMateria] || { fecha: '', inicio: '', fin: '' }; 
                  const clearBtn = this.estado.periodo ? `<div style="text-align:right;padding:0 16px;"><ion-button fill="clear" class="btn-clear-periodo" style="height: auto; min-height: 40px;">Limpiar filtro</ion-button></div>` : '';
                  const dropdown = clearBtn + `
                <ion-item lines="none" style="--background: transparent;">
                  <ion-label>Periodo</ion-label>
                  <ion-select class="periodo-select" value="${this.estado.periodo}" interface="popover" placeholder="Seleccionar">
                    ${(this.estado.periodosDisponibles || []).map(p => `<ion-select-option value="${p.value}">${p.label}</ion-select-option>`).join('')}
                  </ion-select>
                </ion-item>`;
                  
                  if (!this.estado.periodo) return dropdown;

                  // Mostrar fecha actual
                  const hoy = new Date();
                  const dia = String(hoy.getDate()).padStart(2, '0');
                  const mes = String(hoy.getMonth() + 1).padStart(2, '0');
                  const anio = hoy.getFullYear();
                  const fechaDisplay = `Fecha: ${dia}/${mes}/${anio}`;
                  
                  // Asegurar que el estado tenga la fecha actual para guardar
                  const offset = hoy.getTimezoneOffset() * 60000;
                  const isoDate = (new Date(hoy - offset)).toISOString().slice(0, 10);
                  if (g.fecha !== isoDate) { 
                    g.fecha = isoDate; 
                    this.estado.fecha = isoDate;
                  }

                  return dropdown + `
                <ion-segment id="materia-segment" value="${this.estado.asistenciaMateria}" style="margin:8px 0;">
                  <ion-segment-button value="m1">Materia 1</ion-segment-button>
                  <ion-segment-button value="m2">Materia 2</ion-segment-button>
                </ion-segment>
                <ion-item lines="none" style="--padding-start: 0; margin-top: 8px;">
                  <ion-label>${fechaDisplay}</ion-label>
                </ion-item>
                <ion-item lines="none" style="--padding-start: 0; margin-bottom: 8px;">
                  <ion-label style="margin-right: 8px;">Tema:</ion-label>
                  <ion-input id="tema-input" value="${this.estado.tema}" placeholder="Escriba el tema..." style="--padding-start: 0;"></ion-input>
                </ion-item>`; })() : ''}
                ${this.estado.asistenciaTipo === 'individual' ? (() => {
                  const clearBtn = this.estado.periodo ? `<div style="text-align:right;padding:0 16px;"><ion-button fill="clear" class="btn-clear-periodo" style="height: auto; min-height: 40px;">Limpiar filtro</ion-button></div>` : '';
                  const dropdown = clearBtn + `
                <ion-item lines="none" style="--background: transparent;">
                  <ion-label>Periodo</ion-label>
                  <ion-select class="periodo-select" value="${this.estado.periodo}" interface="popover" placeholder="Seleccionar">
                    ${(this.estado.periodosDisponibles || []).map(p => `<ion-select-option value="${p.value}">${p.label}</ion-select-option>`).join('')}
                  </ion-select>
                </ion-item>`;
                  
                  if (!this.estado.periodo) return dropdown;

                  // Mostrar fecha actual (mismo estilo que grupal)
                  const hoy = new Date();
                  const dia = String(hoy.getDate()).padStart(2, '0');
                  const mes = String(hoy.getMonth() + 1).padStart(2, '0');
                  const anio = hoy.getFullYear();
                  const fechaDisplay = `Fecha: ${dia}/${mes}/${anio}`;

                  return dropdown + `
                <ion-segment id="materia-segment" value="${this.estado.asistenciaMateria}" style="margin:8px 0;">
                  <ion-segment-button value="m1">Materia 1</ion-segment-button>
                  <ion-segment-button value="m2">Materia 2</ion-segment-button>
                </ion-segment>
                <ion-item lines="none" style="--padding-start: 0; margin-top: 8px;">
                  <ion-label>${fechaDisplay}</ion-label>
                </ion-item>
                <ion-item lines="none" style="--padding-start: 0; margin-bottom: 8px;">
                  <ion-label style="margin-right: 8px;">Tema:</ion-label>
                  <ion-input id="tema-input" value="${this.estado.tema}" placeholder="Escriba el tema..." style="--padding-start: 0;"></ion-input>
                </ion-item>
                `; })() : ''}
                ${this.estado.periodo ? `
                ${this.estado.asistenciaTipo === 'grupal' ? `
                ${estudiantesUIAsist}
                ` : `
                <ion-searchbar placeholder="Buscar estudiante..." id="busqueda-estudiante" style="padding-left:0; padding-right:0;"></ion-searchbar>
                <div id="estudiantes-lista-container">
                  ${estudiantesUIAsist}
                </div>
                `}
                ${this.estado.asistenciaTipo === 'grupal' ? `
                <div class="summary-bar" style="margin-top:8px;justify-content:flex-start;gap:8px;">
                  <span class="summary-chip" id="sum-presentes">Presentes: ${resumen.presentes}</span>
                  <span class="summary-chip" id="sum-ausentes">Ausentes: ${resumen.ausentes}</span>
                </div>
                ` : ''}
                ${this.estado.asistenciaTipo === 'grupal' ? `
                <div class="actions" style="display:flex;gap:8px;margin-top:12px;justify-content:flex-end;">
                  <ion-button id="guardar" class="primary-btn" color="primary">Guardar asistencia</ion-button>
                </div>
                ` : ''}
                ` : ''}
              </div>
            </div>

            <div data-view="rubrica" style="display:${displayRub}">
              <div class="view-wrap">
                ${this.estado.periodo ? `<div style="text-align:right;padding:0 16px;"><ion-button size="small" fill="clear" class="btn-clear-periodo">Limpiar filtro</ion-button></div>` : ''}
                <ion-item lines="none" style="--background: transparent;">
                  <ion-label>Periodo</ion-label>
                  <ion-select class="periodo-select" value="${this.estado.periodo}" interface="popover" placeholder="Seleccionar">
                    ${(this.estado.periodosDisponibles || []).map(p => `<ion-select-option value="${p.value}">${p.label}</ion-select-option>`).join('')}
                  </ion-select>
                </ion-item>
                ${this.estado.periodo ? `
                <ion-segment id="materia-segment" value="${this.estado.asistenciaMateria}" style="margin:8px 0;">
                  <ion-segment-button value="m1">Materia 1</ion-segment-button>
                  <ion-segment-button value="m2">Materia 2</ion-segment-button>
                </ion-segment>

                <div style="margin-bottom: 16px; border-radius: 8px; border: 1px solid #e0e0e0; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                  <table style="width: 100%; border-collapse: collapse; text-align: center; table-layout: fixed;">
                    <tr style="background-color: #f9fafb;">
                      <td style="padding: 8px 2px; border-right: 1px solid #e0e0e0; vertical-align: top;">
                        <div style="height: 32px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #2c3e50; font-size: 0.7rem; line-height: 1.1;">Excelente</div>
                        <div style="color: #7f8c8d; font-size: 0.7rem; margin-top: 4px;">E = 1</div>
                      </td>
                      <td style="padding: 8px 2px; border-right: 1px solid #e0e0e0; vertical-align: top;">
                        <div style="height: 32px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #2c3e50; font-size: 0.7rem; line-height: 1.1; word-break: break-word;">Satisfac- torio</div>
                        <div style="color: #7f8c8d; font-size: 0.7rem; margin-top: 4px;">S = 0.75</div>
                      </td>
                      <td style="padding: 8px 2px; border-right: 1px solid #e0e0e0; vertical-align: top;">
                        <div style="height: 32px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #2c3e50; font-size: 0.7rem; line-height: 1.1;">Aceptable</div>
                        <div style="color: #7f8c8d; font-size: 0.7rem; margin-top: 4px;">A = 0.50</div>
                      </td>
                      <td style="padding: 8px 2px; border-right: 1px solid #e0e0e0; vertical-align: top;">
                        <div style="height: 32px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #2c3e50; font-size: 0.7rem; line-height: 1.1;">Deficiente</div>
                        <div style="color: #7f8c8d; font-size: 0.7rem; margin-top: 4px;">D = 0.25</div>
                      </td>
                      <td style="padding: 8px 2px; vertical-align: top;">
                        <div style="height: 32px; display: flex; align-items: center; justify-content: center; font-weight: 600; color: #2c3e50; font-size: 0.7rem; line-height: 1.1;">Muy deficiente</div>
                        <div style="color: #7f8c8d; font-size: 0.7rem; margin-top: 4px;">MD = 0</div>
                      </td>
                    </tr>
                  </table>
                </div>

                ${estudiantesUIRub}
                ` : ''}
              </div>
            </div>
        </div>
      </div>
    `;
  }

  renderEstudianteAsistencia(e) {
    const asistencia = this.estado.asistencia[e.id];
    const h = this.estado.horarios[e.id] ?? { fecha: '', inicio: '', fin: '' };
    const isGrupal = this.estado.asistenciaTipo === 'grupal';
    
    // Always use compact style (same as grupal) for individual view
    return `
      <div class="student-item" data-id="${e.id}">
        <ion-item lines="none" class="student-row" style="--padding-start: 0;">
          <!-- Avatar removed for both views -->
          <ion-label class="student-info" style="min-width: 80px; margin-right: 0; display: flex; align-items: center;">
            <div style="margin: 0;">${e.nombre}</div>
            <!-- ID removed for both views -->
          </ion-label>
          
          <!-- Time inputs always visible inline -->
          <div class="time-inputs" style="display: flex; flex-direction: row; align-items: center; gap: 4px; margin-right: 8px;">
            <div style="display: flex; align-items: center;">
              <span style="font-size: 0.75em; margin-right: 2px; color: var(--ion-color-medium);">HI:</span>
              <input type="text" value="${h.inicio || ''}" placeholder="--:--" data-inicio-estudiante="${e.id}" style="border: none; border-bottom: 1px solid #ccc; padding: 1px 0; font-size: 0.85em; width: 45px; text-align: center; background: transparent;">
            </div>
            <div style="display: flex; align-items: center;">
              <span style="font-size: 0.75em; margin-right: 2px; color: var(--ion-color-medium);">HF:</span>
              <input type="text" value="${h.fin || ''}" placeholder="--:--" data-fin-estudiante="${e.id}" style="border: none; border-bottom: 1px solid #ccc; padding: 1px 0; font-size: 0.85em; width: 45px; text-align: center; background: transparent;">
            </div>
          </div>
          
          <ion-segment class="presence-segment ${asistencia === true ? 'present' : (asistencia === false ? 'absent' : '')}" value="${asistencia === true ? 'presente' : (asistencia === false ? 'ausente' : '')}" data-presencia="${e.id}" style="width: 80px; min-width: 80px; margin-left: auto;">
            <ion-segment-button value="presente" style="min-width: 0; --padding-start: 0; --padding-end: 0;">
              <ion-label>P</ion-label>
            </ion-segment-button>
            <ion-segment-button value="ausente" style="min-width: 0; --padding-start: 0; --padding-end: 0;">
              <ion-label>A</ion-label>
            </ion-segment-button>
          </ion-segment>
        </ion-item>
        
        <!-- 'Fecha' button removed for individual view as requested -->
        
        ${!isGrupal ? `
        <ion-button data-save-asistencia="${e.id}" color="primary" size="small" style="margin:8px 0 12px auto; display:block">Guardar</ion-button>
        ` : ''}
      </div>
    `;
  }

  renderEstudianteRubrica(e) {
    const r = this.estado.rubricas[e.id] ?? { A: {}, B: {} };
    const h = this.estado.horarios[e.id] ?? { fecha: '', inicio: '', fin: '' };
    const subtotalA = this.calcularSubtotal(r.A);
    const subtotalB = this.calcularSubtotal(r.B);
    const total = subtotalA + subtotalB;
    const completo = [0,1,2,3,4].every(i => typeof r.A[i] === 'number') && [0,1,2,3,4].every(i => typeof r.B[i] === 'number');
    const obs = this.estado.observaciones[e.id] ?? '';
    const rec = this.estado.recomendaciones[e.id] ?? '';

    const preguntasA = preguntasRubricaA.map((q, i) => this.renderPregunta(e.id, 'A', i, r.A[i])).join('');
    const preguntasB = this.renderTablaRubricaB(e.id, r.B);

    return `
      <div class="student-item ${completo ? 'complete' : 'incomplete'}" data-id="${e.id}">
        <ion-item lines="none">
          <ion-avatar slot="start"><ion-icon name="reader-outline"></ion-icon></ion-avatar>
          <ion-label>
            <div>${e.nombre}</div>
            <ion-note>${e.id}</ion-note>
          </ion-label>
        </ion-item>
        
        <!-- Time inputs for Rubrica -->
        <div class="time-inputs" style="display: flex; flex-direction: row; align-items: center; gap: 4px; margin-left: 16px; margin-bottom: 8px;">
            <div style="display: flex; align-items: center;">
              <span style="font-size: 0.75em; margin-right: 2px; color: var(--ion-color-medium);">HI:</span>
              <input type="text" value="${h.inicio || ''}" placeholder="--:--" data-inicio-estudiante="${e.id}" style="border: none; border-bottom: 1px solid #ccc; padding: 1px 0; font-size: 0.85em; width: 45px; text-align: center; background: transparent;">
            </div>
            <div style="display: flex; align-items: center;">
              <span style="font-size: 0.75em; margin-right: 2px; color: var(--ion-color-medium);">HF:</span>
              <input type="text" value="${h.fin || ''}" placeholder="--:--" data-fin-estudiante="${e.id}" style="border: none; border-bottom: 1px solid #ccc; padding: 1px 0; font-size: 0.85em; width: 45px; text-align: center; background: transparent;">
            </div>
        </div>

        <ion-button fill="outline" size="small" data-toggle-horario="${e.id}" style="margin:8px 0 8px 16px;">Fecha</ion-button>
        <div class="horario-est" data-horario="${e.id}" style="display:none; padding: 0 16px;">
          <ion-item><ion-label position="stacked">Fecha</ion-label><ion-datetime presentation="date" value="${h.fecha || ''}" data-fecha-estudiante="${e.id}" style="max-width: 290px; margin: 0 auto; height: 310px; min-height: 0; overflow: hidden;"></ion-datetime></ion-item>
        </div>

        <ion-button fill="outline" size="small" data-toggle-rubrica="${e.id}" style="margin:8px 0 8px 16px;">Rúbrica</ion-button>
        <div class="rubrica-panel" data-rubrica="${e.id}" style="display:none;">
          <ion-item lines="full" class="rubric-section-header" data-toggle-section="A-${e.id}" button detail="false">
            <ion-label class="rubric-title" style="display:flex; align-items:center;">
              Rúbrica A <span class="toggle-icon-text" style="margin-left:8px; font-weight:bold; color:var(--ion-color-primary);">▶</span>
            </ion-label>
          </ion-item>
          <div id="rubrica-A-${e.id}-content" style="display:none;">
            ${preguntasA}
          </div>
          <ion-item>
            <ion-label>Subtotal 1</ion-label>
            <ion-note slot="end" data-sub-a="${e.id}">${subtotalA > 0 ? subtotalA : ''}</ion-note>
          </ion-item>

          <ion-item lines="full" class="rubric-section-header" data-toggle-section="B-${e.id}" button detail="false">
            <ion-label class="rubric-title" style="display:flex; align-items:center;">
              Rúbrica B <span class="toggle-icon-text" style="margin-left:8px; font-weight:bold; color:var(--ion-color-primary);">▶</span>
            </ion-label>
          </ion-item>
          <div id="rubrica-B-${e.id}-content" style="display:none;">
            ${preguntasB}
          </div>
          <ion-item>
            <ion-label>Subtotal 2</ion-label>
            <ion-note slot="end" data-sub-b="${e.id}">${subtotalB > 0 ? subtotalB : ''}</ion-note>
          </ion-item>

          <ion-item>
            <ion-label>Total general</ion-label>
            <ion-note slot="end" data-total="${e.id}">${total > 0 ? total : ''}</ion-note>
          </ion-item>
          <ion-item lines="full"><ion-label class="rubric-title">Observaciones del docente-tutor(a)</ion-label></ion-item>
          <ion-item>
            <ion-textarea data-obs="${e.id}" placeholder="Escriba observaciones" value="${obs}"></ion-textarea>
          </ion-item>
          <ion-item lines="full"><ion-label class="rubric-title">Recomendaciones del docente-tutor(a)</ion-label></ion-item>
          <ion-item>
            <ion-textarea data-rec="${e.id}" placeholder="Escriba recomendaciones" value="${rec}"></ion-textarea>
          </ion-item>
          <ion-button data-save-rubrica="${e.id}" color="primary" size="small" style="margin:8px 0 12px auto; display:block">Guardar</ion-button>
        </div>
      </div>
    `;
  }

  renderEstudiante(e) {
    const asistencia = this.estado.asistencia[e.id];
    const r = this.estado.rubricas[e.id] ?? { A: {}, B: {} };
    const h = this.estado.horarios[e.id] ?? { fecha: '', inicio: '', fin: '' };
    const preguntasA = preguntasRubricaA.map((q, i) => this.renderPregunta(e.id, 'A', i, r.A[i])).join('');
    const subtotalA = this.calcularSubtotal(r.A);
    const preguntasB = this.renderTablaRubricaB(e.id, r.B);
    const subtotalB = this.calcularSubtotal(r.B);
    const total = subtotalA + subtotalB;
    const completo = [0,1,2,3,4].every(i => typeof r.A[i] === 'number') && [0,1,2,3,4].every(i => typeof r.B[i] === 'number');
    const obs = this.estado.observaciones[e.id] ?? '';
    const rec = this.estado.recomendaciones[e.id] ?? '';
    return `
      <div class="student-item ${completo ? 'complete' : 'incomplete'}" data-id="${e.id}">
        <ion-item lines="none">
          <ion-avatar slot="start"><ion-icon name="person-circle-outline"></ion-icon></ion-avatar>
          <ion-label>
            <div>${e.nombre}</div>
            <ion-note>${e.id}</ion-note>
          </ion-label>
          <ion-segment class="presence-segment ${asistencia === true ? 'present' : (asistencia === false ? 'absent' : '')}" value="${asistencia === true ? 'presente' : (asistencia === false ? 'ausente' : '')}" data-presencia="${e.id}" style="width: 100%">
            <ion-segment-button value="presente">Presente</ion-segment-button>
            <ion-segment-button value="ausente">Ausente</ion-segment-button>
          </ion-segment>
        </ion-item>
        <ion-item><ion-label position="stacked">Fecha (estudiante)</ion-label><ion-datetime presentation="date" value="${h.fecha || ''}" data-fecha-estudiante="${e.id}"></ion-datetime></ion-item>
        <ion-item lines="full" class="rubric-section-header" data-toggle-section="A-${e.id}" button detail="false">
          <ion-label class="rubric-title" style="display:flex; align-items:center;">
            Rúbrica A <span class="toggle-icon-text" style="margin-left:8px; font-weight:bold; color:var(--ion-color-primary);">▶</span>
          </ion-label>
        </ion-item>
        <div id="rubrica-A-${e.id}-content" style="display:none;">
          ${preguntasA}
        </div>
        <ion-item>
          <ion-label>Subtotal 1</ion-label>
          <ion-note slot="end" data-sub-a="${e.id}">${subtotalA > 0 ? subtotalA : ''}</ion-note>
        </ion-item>
        <ion-item lines="full" class="rubric-section-header" data-toggle-section="B-${e.id}" button detail="false">
          <ion-label class="rubric-title" style="display:flex; align-items:center;">
            Rúbrica B <span class="toggle-icon-text" style="margin-left:8px; font-weight:bold; color:var(--ion-color-primary);">▶</span>
          </ion-label>
        </ion-item>
        <div id="rubrica-B-${e.id}-content" style="display:none;">
          ${preguntasB}
        </div>
        <ion-item>
          <ion-label>Subtotal 2</ion-label>
          <ion-note slot="end" data-sub-b="${e.id}">${subtotalB > 0 ? subtotalB : ''}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>Total general</ion-label>
          <ion-note slot="end" data-total="${e.id}">${total > 0 ? total : ''}</ion-note>
        </ion-item>
        <ion-item lines="full"><ion-label class="rubric-title">Observaciones del docente-tutor(a)</ion-label></ion-item>
        <ion-item>
          <ion-textarea data-obs="${e.id}" placeholder="Escriba observaciones" value="${obs}"></ion-textarea>
        </ion-item>
        <ion-item lines="full"><ion-label class="rubric-title">Recomendaciones del docente-tutor(a)</ion-label></ion-item>
        <ion-item>
          <ion-textarea data-rec="${e.id}" placeholder="Escriba recomendaciones" value="${rec}"></ion-textarea>
        </ion-item>
      </div>
    `;
  }

    renderTablaRubricaB(estudianteId, valores) {
    let html = `<div class="rubrica-b-container">`;
    rubricaBData.forEach((row, index) => {
      const currentVal = valores[index];
      // Map currentVal to the selected option index to show description
      const selectedOpt = row.opciones.find(o => o.val == currentVal);
      const descText = selectedOpt ? selectedOpt.text : 'Seleccione una calificación para ver la descripción.';
      
      html += `
        <ion-card class="rubrica-card" style="margin: 10px 0; padding: 15px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <div style="font-weight: 700; font-size: 1rem; margin-bottom: 15px; color: #333;">${index + 1}. ${row.criterio}</div>
          <div class="rubric-buttons-row" style="display: flex; gap: 8px; justify-content: space-between; margin-bottom: 15px;">
      `;
      
      // Buttons with scores (1 to 0)
      // Mapping: Val 1 (index 0), Val 0.75 (index 1), Val 0.5 (index 2), Val 0.25 (index 3), Val 0 (index 4)
      const buttons = [
        { label: '1', val: 1, color: 'primary', optIndex: 0 },
        { label: '0.75', val: 0.75, color: 'primary', optIndex: 1 },
        { label: '0.50', val: 0.5, color: 'primary', optIndex: 2 },
        { label: '0.25', val: 0.25, color: 'primary', optIndex: 3 },
        { label: '0', val: 0, color: 'primary', optIndex: 4 }
      ];
      
      buttons.forEach(btn => {
         const isSelected = currentVal == btn.val;
         const btnStyle = isSelected 
            ? `background-color: var(--ion-color-${btn.color}); color: white; border-color: var(--ion-color-${btn.color}); box-shadow: 0 2px 4px rgba(0,0,0,0.2); transform: scale(1.05);` 
            : `background-color: white; color: #444; border: 1px solid #e0e0e0;`;
         
         html += `
           <div class="rubric-btn-b" 
             data-rubrica="${estudianteId}|B|${index}" 
             data-value="${btn.val}"
             data-desc="${row.opciones[btn.optIndex].text}"
             data-color="${btn.color}"
             style="
               flex: 1; 
               text-align: center; 
               padding: 12px 0; 
               border-radius: 6px; 
               cursor: pointer; 
               font-weight: bold;
               font-size: 0.9rem;
               transition: all 0.2s ease;
               ${btnStyle}
             ">
             ${btn.label}
           </div>
         `;
      });
      
      html += `
          </div>
          <div class="rubric-desc-box" style="
            background-color: #f8f9fa; 
            padding: 12px; 
            border-left: 4px solid var(--ion-color-primary); 
            font-size: 0.9rem; 
            color: #555;
            min-height: 50px;
            border-radius: 0 4px 4px 0;
            line-height: 1.4;
          ">
            ${descText}
          </div>
        </ion-card>
      `;
    });
    html += `</div>`;
    return html;
  }

  renderPregunta(estudianteId, rubricaKey, index, valor) {
    const texto = rubricaKey === 'A' ? preguntasRubricaA[index] : preguntasRubricaB[index];
    const opciones = rubricaKey === 'A' ? opcionesCalificacion : opcionesCalificacionB;
    
    const chips = opciones.map(o => {
      const isSelected = valor == o.value;
      const color = isSelected ? 'primary' : 'medium';
      const outline = isSelected ? '' : 'outline="true"';
      const labelShort = o.value;
      const letter = o.label.split('=')[0].trim();
      const displayText = (rubricaKey === 'A') ? `<b>${labelShort}</b>` : `<b>${labelShort}</b> - ${letter}`;
      
      return `
        <ion-chip 
          class="rubric-chip" 
          data-rubrica="${estudianteId}|${rubricaKey}|${index}" 
          data-value="${o.value}"
          color="${color}" 
          ${outline}
          style="min-width: 50px; text-align: center; justify-content: center;"
        >
          <ion-label>${displayText}</ion-label>
        </ion-chip>
      `;
    }).join('');

    return `
      <div style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
        <div style="margin-bottom: 8px; font-size: 14px; color: #333; line-height: 1.4;">${texto}</div>
        <div class="rubric-options" style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; -webkit-overflow-scrolling: touch;">
          ${chips}
        </div>
      </div>
    `;
  }

  calcularSubtotal(selecciones) {
    return Object.values(selecciones || {}).reduce((acc, v) => acc + normalizarCalificacion(v), 0);
  }

  bind() {
    this.querySelectorAll('.btn-clear-periodo').forEach(btn => {
      btn.addEventListener('click', () => {
        this.estado.periodo = '';
        this.estado.tema = '';
        this.estado.asistenciaMateria = 'm1';
        
        // Reset full state
        this.estado.rubricas = {};
        this.estado.horarios = {};
        this.estado.observaciones = {};
        this.estado.recomendaciones = {};
        
        guardarLocal('tema', '');
        guardarLocal('asistenciaMateria', 'm1');
        guardarLocal('rubricas', {});
        guardarLocal('horarios', {});
        guardarLocal('observaciones', {});
        guardarLocal('recomendaciones', {});
        
        this.render();
        this.bind();
        this.updateViewsDisplay();
      });
    });

    this.querySelectorAll('.periodo-select').forEach(sel => {
      sel.addEventListener('ionChange', (ev) => {
        const v = ev.detail.value;
        if (v && v !== this.estado.periodo) {
          this.estado.periodo = v;
          guardarLocal('periodo', v);
          this.render();
          this.bind();
          this.updateViewsDisplay();
        }
      });
    });

    const toggleBtn = this.querySelector('#custom-menu-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const sidebar = this.querySelector('.sidebar-container');
        if (sidebar) sidebar.classList.toggle('collapsed');
      });
    }

    const toggleHorario = this.querySelector('#toggle-horario-grupal');
    if (toggleHorario) {
      toggleHorario.addEventListener('click', () => {
        const content = this.querySelector('#horario-grupal-content');
        if (content) {
          const isHidden = content.style.display === 'none';
          content.style.display = isHidden ? 'block' : 'none';
          const icon = toggleHorario.querySelector('ion-icon');
          if (icon) icon.name = isHidden ? 'chevron-up-outline' : 'chevron-down-outline';
        }
      });
    }

    this.querySelector('#logout').addEventListener('click', () => {
      try { localStorage.removeItem('session'); } catch(e) {}
      try { localStorage.removeItem('last_route'); } catch(e) {}
      location.hash = '#/login';
      location.reload();
    });

    const cambiar = (v) => {
      this.estado.vista = v;
      this.estado.periodo = '';
      guardarLocal('periodo', '');
      guardarLocal('vista', v);
      
      // Close sidebar on mobile when navigating
      if (window.innerWidth <= 768) {
        const sidebar = this.querySelector('.sidebar-container');
        if (sidebar) sidebar.classList.add('collapsed');
      }

      const m = document.querySelector('ion-menu');
      if (m && typeof m.close === 'function') m.close();
      this.updateViewsDisplay();
      /*
      try {
        const toast = document.createElement('ion-toast');
        toast.message = `Vista: ${v}`;
        toast.duration = 900;
        toast.color = 'primary';
        document.body.appendChild(toast);
        toast.present();
      } catch(e) {}
      */
      this.render();
      this.bind();
      this.updateViewsDisplay();
    };
    this.querySelectorAll('ion-menu-toggle[data-vista]').forEach(t => {
      t.addEventListener('click', () => {
        const v = t.getAttribute('data-vista');
        try { localStorage.setItem('last_route', `/dashboard/${v}`); } catch(e) {}
        location.hash = `#/dashboard/${v}`;
        if (v === 'asistencia') {
          this.estado.asistenciaTipo = (t.id === 'menu-asistencia-2') ? 'individual' : 'grupal';
          guardarLocal('asistenciaTipo', this.estado.asistenciaTipo);
        }
        cambiar(v);
      });
    });
    const idMap = [
      ['#menu-docente','docente'],
      ['#menu-asistencia','asistencia'],
      ['#menu-asistencia-2','asistencia'],
      ['#menu-rubrica','rubrica']
    ];
    idMap.forEach(([sel, v]) => {
      const el = this.querySelector(sel);
      if (el) el.addEventListener('click', (ev) => {
        ev.preventDefault(); ev.stopPropagation();
        try { localStorage.setItem('last_route', `/dashboard/${v}`); } catch(e) {}
        location.hash = `#/dashboard/${v}`;
        if (v === 'asistencia') {
          this.estado.asistenciaTipo = (sel === '#menu-asistencia-2') ? 'individual' : 'grupal';
          guardarLocal('asistenciaTipo', this.estado.asistenciaTipo);
        }
        cambiar(v);
      });
    });

    if (!window.__vistaDelegation) {
      window.__vistaDelegation = true;
      document.body.addEventListener('click', (ev) => {
        const t = ev.target && (ev.target.closest ? ev.target.closest('[data-vista]') : null);
        if (t) {
          const v = t.getAttribute('data-vista');
          if (v && ['docente','asistencia','rubrica'].includes(v)) {
            try { localStorage.setItem('last_route', `/dashboard/${v}`); } catch(e) {}
            location.hash = `#/dashboard/${v}`;
            cambiar(v);
          }
        }
      });
    }

    if (!window.__logoutDelegation) {
      window.__logoutDelegation = true;
      document.body.addEventListener('click', (ev) => {
        const path = (typeof ev.composedPath === 'function') ? ev.composedPath() : [];
        const out = (path.find && path.find(el => el && el.id === 'logout')) || (ev.target && (ev.target.closest ? ev.target.closest('#logout') : null));
        if (out) {
          ev.preventDefault(); ev.stopPropagation();
          try { localStorage.removeItem('session'); } catch(e) {}
          try { localStorage.removeItem('last_route'); } catch(e) {}
          location.hash = '#/login';
          location.reload();
        }
      }, { capture: true });
    }

    const menuList = this.querySelector('.sidebar-list');
    if (menuList) {
      menuList.addEventListener('click', (ev) => {
        const hit = ev.target && (ev.target.closest ? ev.target.closest('#menu-docente, #menu-asistencia, #menu-asistencia-2, #menu-rubrica') : null);
        if (hit) {
          const id = hit.id || '';
          const v = id.indexOf('docente')>-1 ? 'docente' : id.indexOf('asistencia')>-1 ? 'asistencia' : 'rubrica';
          try { localStorage.setItem('last_route', `/dashboard/${v}`); } catch(e) {}
          location.hash = `#/dashboard/${v}`;
          if (v === 'asistencia') {
            this.estado.asistenciaTipo = (id.indexOf('asistencia-2')>-1) ? 'individual' : 'grupal';
            guardarLocal('asistenciaTipo', this.estado.asistenciaTipo);
          }
          cambiar(v);
        }
      }, { capture: true });
    }

    this.querySelector('#hospital')?.addEventListener('ionChange', (ev) => {
      this.estado.hospitalId = ev.detail.value;
    });
    const fechaEl = this.querySelector('#fecha');
    if (fechaEl) fechaEl.addEventListener('ionChange', (ev) => {
      this.estado.fecha = ev.detail.value;
    });
    const horaInicioEl = this.querySelector('#hora-inicio');
    if (horaInicioEl) horaInicioEl.addEventListener('ionChange', (ev) => {
      this.estado.horaInicio = ev.target.value;
    });
    const horaFinEl = this.querySelector('#hora-fin');
    if (horaFinEl) horaFinEl.addEventListener('ionChange', (ev) => {
      this.estado.horaFin = ev.target.value;
    });
    const dep = this.querySelector('#departamento');
    if (dep) dep.addEventListener('ionChange', (ev) => { this.estado.departamento = ev.detail.value; });
    const tut = this.querySelector('#tutor');
    if (tut) tut.addEventListener('ionChange', (ev) => { this.estado.tutor = ev.detail.value; });
    const ci = this.querySelector('#ci');
    if (ci) ci.addEventListener('ionChange', (ev) => { this.estado.ci = ev.detail.value; });
    const correo = this.querySelector('#correo');
    if (correo) correo.addEventListener('ionChange', (ev) => { this.estado.correo = ev.detail.value; });
    const hospInput = this.querySelector('#hospital-input');
    if (hospInput) hospInput.addEventListener('ionChange', (ev) => { this.estado.hospitalNombre = ev.detail.value; });

    const gf = this.querySelector('#grupo-fecha');
    if (gf) gf.addEventListener('ionChange', (ev) => {
      const m = this.estado.asistenciaMateria || 'm1';
      this.estado.grupoHorarios[m] = this.estado.grupoHorarios[m] || { fecha: '', inicio: '', fin: '' };
      this.estado.grupoHorarios[m].fecha = ev.detail.value;
      guardarLocal('grupoHorarios', this.estado.grupoHorarios);
      this.estado.fecha = ev.detail.value;
    });
    const gi = this.querySelector('#grupo-inicio');
    if (gi) gi.addEventListener('ionChange', (ev) => {
      const m = this.estado.asistenciaMateria || 'm1';
      this.estado.grupoHorarios[m] = this.estado.grupoHorarios[m] || { fecha: '', inicio: '', fin: '' };
      this.estado.grupoHorarios[m].inicio = ev.target.value;
      guardarLocal('grupoHorarios', this.estado.grupoHorarios);
      this.estado.horaInicio = ev.target.value;
    });
    const gfin = this.querySelector('#grupo-fin');
    if (gfin) gfin.addEventListener('ionChange', (ev) => {
      const m = this.estado.asistenciaMateria || 'm1';
      this.estado.grupoHorarios[m] = this.estado.grupoHorarios[m] || { fecha: '', inicio: '', fin: '' };
      this.estado.grupoHorarios[m].fin = ev.target.value;
      guardarLocal('grupoHorarios', this.estado.grupoHorarios);
      this.estado.horaFin = ev.target.value;
    });
    this.querySelectorAll('#materia-segment').forEach(ms => {
      try { ms.value = this.estado.asistenciaMateria; } catch(e) {}
      ms.addEventListener('ionChange', (ev) => {
        const v = (ev.detail && ev.detail.value) || ev.target?.value;
        if (!v) return;
        this.estado.asistenciaMateria = v;
        guardarLocal('asistenciaMateria', v);
        const g = (this.estado.grupoHorarios || {})[v] || { fecha: '', inicio: '', fin: '' };
        this.estado.fecha = g.fecha || '';
        this.estado.horaInicio = g.inicio || '';
        this.estado.horaFin = g.fin || '';
        this.render();
        this.bind();
        this.updateViewsDisplay();
      });
      ms.addEventListener('click', (ev) => {
        const btn = ev.target && ev.target.closest ? ev.target.closest('ion-segment-button') : null;
        const v = btn?.getAttribute('value');
        if (!v) return;
        this.estado.asistenciaMateria = v;
        guardarLocal('asistenciaMateria', v);
        const g = (this.estado.grupoHorarios || {})[v] || { fecha: '', inicio: '', fin: '' };
        this.estado.fecha = g.fecha || '';
        this.estado.horaInicio = g.inicio || '';
        this.estado.horaFin = g.fin || '';
        this.render();
        this.bind();
        this.updateViewsDisplay();
      });
    });

    // Manejo de botones "Nuevo" (Estudiante) por Grupo
    this.querySelectorAll('.btn-add-student').forEach(btn => {
      btn.addEventListener('click', async () => {
        const grupoId = parseInt(btn.getAttribute('data-grupo'));
        const alert = document.createElement('ion-alert');
        alert.header = `Añadir estudiante al Grupo ${grupoId}`;
        alert.inputs = [{ name: 'nombre', placeholder: 'Nombre completo' }];
        alert.buttons = [
          { text: 'Cancelar', role: 'cancel' },
          { text: 'Añadir', handler: ({ nombre }) => {
            if (!nombre) return;
            const id = `e${Date.now()}`;
            const materia = this.estado.asistenciaMateria || 'm1';
            this.estado.estudiantes.push({ id, nombre, grupo: grupoId, materia });
            guardarLocal('estudiantes', this.estado.estudiantes);
            // this.estado.asistencia[id] = false; // Removed default selection per user request
            this.estado.rubricas[id] = { A: {}, B: {} };
            this.estado.observaciones[id] = '';
            this.estado.recomendaciones[id] = '';
            this.render();
            this.bind();
          }}
        ];
        document.body.appendChild(alert);
        await alert.present();
      });
    });

    // Manejo de botones "Agregar Grupo"
    const addGroupHandler = async () => {
      const alert = document.createElement('ion-alert');
      alert.header = 'Agregar Nuevo Grupo';
      alert.message = '¿Desea crear un nuevo grupo de estudiantes?';
      alert.buttons = [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Crear', handler: () => {
          const maxGrupo = Math.max(...(this.estado.grupos || [0]), 0);
          const nuevoGrupo = maxGrupo + 1;
          this.estado.grupos.push(nuevoGrupo);
          guardarLocal('grupos', this.estado.grupos);
          this.render();
          this.bind();
        }}
      ];
      document.body.appendChild(alert);
      await alert.present();
    };

    const btnGroupIds = ['#add-group-btn', '#add-group-btn-ind', '#add-group-btn-rub'];
      btnGroupIds.forEach(id => {
        const el = this.querySelector(id);
        if (el) el.addEventListener('click', addGroupHandler);
      });

      // Rubric section toggles
      this.querySelectorAll('.rubric-section-header').forEach(header => {
        header.addEventListener('click', () => {
          const key = header.getAttribute('data-toggle-section');
          const content = this.querySelector(`#rubrica-${key}-content`);
          if (content) {
            const isHidden = content.style.display === 'none';
            content.style.display = isHidden ? 'block' : 'none';
            const icon = header.querySelector('span.toggle-icon-text');
            if (icon) icon.textContent = isHidden ? '▼' : '▶';
          }
        });
      });

      const addBtn = this.querySelector('#add-student');
    if (addBtn) addBtn.addEventListener('click', async () => {
      const alert = document.createElement('ion-alert');
      alert.header = 'Añadir estudiante';
      alert.inputs = [{ name: 'nombre', placeholder: 'Nombre completo' }];
      alert.buttons = [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Añadir', handler: ({ nombre }) => {
          if (!nombre) return;
          const id = `e${Date.now()}`;
          this.estado.estudiantes.push({ id, nombre });
          // this.estado.asistencia[id] = false; // Removed default selection per user request
          this.estado.rubricas[id] = { A: {}, B: {} };
          this.estado.observaciones[id] = '';
          this.estado.recomendaciones[id] = '';
          this.render();
          this.bind();
        }}
      ];
      document.body.appendChild(alert);
      await alert.present();
    });

    this.querySelectorAll('ion-segment[data-presencia]').forEach(s => {
      s.addEventListener('ionChange', (ev) => {
        const id = ev.target.getAttribute('data-presencia');
        const v = ev.detail.value === 'presente';
        this.estado.asistencia[id] = v;
        ev.target.classList.toggle('present', v);
        ev.target.classList.toggle('absent', !v);
        const resumen = this.contarResumen();
        const p = this.querySelector('#sum-presentes');
        const a = this.querySelector('#sum-ausentes');
        if (p) p.textContent = `Presentes: ${resumen.presentes}`;
        if (a) a.textContent = `Ausentes: ${resumen.ausentes}`;
      });
    });

    // Event delegation for rubric chips (click)
          if (!this._rubricaChipListener) {
            this._rubricaChipListener = (ev) => {
              const target = ev.target.closest('.rubric-chip, .rubric-cell, .rubric-cell-accordion, .rubric-btn-b');
              if (!target) return;
              
              const key = target.getAttribute('data-rubrica');
              const valStr = target.getAttribute('data-value');
              if (!key || !valStr) return;
              
              const [estudianteId, rubricaKey, indexStr] = key.split('|');
              const index = Number(indexStr);
              const val = normalizarCalificacion(valStr);
              
              this.estado.rubricas[estudianteId] = this.estado.rubricas[estudianteId] || { A: {}, B: {} };
              this.estado.rubricas[estudianteId].A = this.estado.rubricas[estudianteId].A || {};
              this.estado.rubricas[estudianteId].B = this.estado.rubricas[estudianteId].B || {};
              
              // Lógica para toggle (pintar/despintar) solo en Rúbrica B
              let finalVal = val;
              if (rubricaKey === 'B') {
                  const currentVal = this.estado.rubricas[estudianteId][rubricaKey][index];
                  // Si el valor clickeado es el mismo que ya estaba, lo quitamos (despintamos)
                  if (currentVal === val) {
                      delete this.estado.rubricas[estudianteId][rubricaKey][index];
                      finalVal = null; // Indicador para la UI
                  } else {
                      // Si es diferente, lo asignamos (pintamos el nuevo)
                      this.estado.rubricas[estudianteId][rubricaKey][index] = val;
                  }
              } else {
                  // Comportamiento normal para Rúbrica A (siempre selecciona)
                  this.estado.rubricas[estudianteId][rubricaKey][index] = val;
              }
              
              // Update UI of chips (Rúbrica A)
              const parent = target.closest('.rubric-options');
              if (parent) {
                  parent.querySelectorAll('.rubric-chip').forEach(c => {
                      const cVal = normalizarCalificacion(c.getAttribute('data-value'));
                      const isSel = cVal === val; // Rúbrica A always uses selected val
                      c.color = isSel ? 'primary' : 'medium';
                      if (isSel) {
                          c.removeAttribute('outline');
                      } else {
                          c.setAttribute('outline', 'true');
                      }
                  });
              }

              // Update UI of table cells (Rubrica B - OLD TABLE)
              const row = target.closest('tr');
              if (row) {
                  row.querySelectorAll('.rubric-cell').forEach(c => {
                      const cVal = normalizarCalificacion(c.getAttribute('data-value'));
                      const isSel = cVal === finalVal;
                      if (isSel) {
                          c.style.backgroundColor = 'var(--ion-color-primary, #3880ff)';
                          c.style.color = '#fff';
                      } else {
                          c.style.backgroundColor = '#fff';
                          c.style.color = '#333';
                      }
                  });
              }

              // Update UI of accordion items (Rubrica B - OLD ACCORDION)
              const list = target.closest('ion-list');
              if (list) {
                  list.querySelectorAll('.rubric-cell-accordion').forEach(item => {
                      const cVal = normalizarCalificacion(item.getAttribute('data-value'));
                      const isSel = cVal === finalVal;
                      
                      item.color = isSel ? 'primary' : '';
                      const icon = item.querySelector('ion-icon');
                      if (icon) {
                        icon.name = isSel ? 'checkmark-circle' : 'ellipse-outline';
                      }
                  });
              }

              // Update UI of NEW Rubrica B Cards (Buttons)
              const card = target.closest('.rubrica-card');
              if (card) {
                  card.querySelectorAll('.rubric-btn-b').forEach(b => {
                     const bVal = normalizarCalificacion(b.getAttribute('data-value'));
                     const bColor = b.getAttribute('data-color');
                     const isSel = bVal === finalVal;
                     
                     if (isSel) {
                         b.style.backgroundColor = `var(--ion-color-${bColor})`;
                         b.style.color = 'white';
                         b.style.borderColor = `var(--ion-color-${bColor})`;
                         b.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
                         b.style.transform = 'scale(1.05)';
                         
                         // Update description
                         const descBox = card.querySelector('.rubric-desc-box');
                         if (descBox) {
                             descBox.innerText = b.getAttribute('data-desc');
                         }
                     } else {
                         b.style.backgroundColor = 'white';
                         b.style.color = '#444';
                         b.style.border = '1px solid #e0e0e0';
                         b.style.boxShadow = 'none';
                         b.style.transform = 'scale(1)';
                     }
                  });
                  
                  if (finalVal === null) {
                      const descBox = card.querySelector('.rubric-desc-box');
                      if (descBox) descBox.innerText = 'Seleccione una calificación para ver la descripción.';
                  }
              }
              
              const containers = this.querySelectorAll(`.student-item[data-id="${estudianteId}"]`);
        const r = this.estado.rubricas[estudianteId];
        
        // Helper para sumar
        const calc = (obj) => Object.values(obj || {}).reduce((acc, v) => acc + (parseFloat(v) || 0), 0);
        
        const subtotalA = calc(r.A);
        const subtotalB = calc(r.B);
        
        containers.forEach(container => {
          if (container) {
            container.querySelectorAll(`ion-note[data-sub-a="${estudianteId}"]`).forEach(el => {
              el.textContent = subtotalA > 0 ? String(parseFloat(subtotalA.toFixed(2))) : '';
            });
            container.querySelectorAll(`ion-note[data-sub-b="${estudianteId}"]`).forEach(el => {
              el.textContent = subtotalB > 0 ? String(parseFloat(subtotalB.toFixed(2))) : '';
            });
            
            const totalEl = container.querySelector(`ion-note[data-total="${estudianteId}"]`);
            const total = subtotalA + subtotalB;
            if (totalEl) totalEl.textContent = total > 0 ? String(parseFloat(total.toFixed(2))) : '';
            
            const completo = [0,1,2,3,4].every(i => typeof r.A[i] === 'number') && [0,1,2,3,4].every(i => typeof r.B[i] === 'number');

            container.classList.toggle('complete', completo);
            container.classList.toggle('incomplete', !completo);
          }
        });
        
        const sumComp = this.querySelector('#sum-completos');
        if (sumComp) sumComp.textContent = `Completos: ${this.contarCompletos()}`;
      };
      this.addEventListener('click', this._rubricaChipListener);
    }

    this.querySelectorAll('ion-datetime[data-fecha-estudiante]').forEach(dt => {
      dt.addEventListener('ionChange', (ev) => {
        const id = dt.getAttribute('data-fecha-estudiante');
        this.estado.horarios[id] = this.estado.horarios[id] || { fecha: '', inicio: '', fin: '' };
        this.estado.horarios[id].fecha = ev.detail.value;
      });
    });

    // Delegación de eventos para inputs de hora (ya que pueden ser dinámicos o nativos)
    const handleTimeInput = (ev) => {
      const target = ev.target;
      if (target.matches('input[type="time"][data-inicio-estudiante]') || target.matches('ion-input[data-inicio-estudiante]')) {
        const id = target.getAttribute('data-inicio-estudiante');
        this.estado.horarios[id] = this.estado.horarios[id] || { fecha: '', inicio: '', fin: '' };
        this.estado.horarios[id].inicio = target.value;
      }
      if (target.matches('input[type="time"][data-fin-estudiante]') || target.matches('ion-input[data-fin-estudiante]')) {
        const id = target.getAttribute('data-fin-estudiante');
        this.estado.horarios[id] = this.estado.horarios[id] || { fecha: '', inicio: '', fin: '' };
        this.estado.horarios[id].fin = target.value;
      }
    };
    this.addEventListener('change', handleTimeInput);
    this.addEventListener('ionChange', handleTimeInput);

    const temaInput = this.querySelector('#tema-input');
    if (temaInput) {
      temaInput.addEventListener('ionChange', (ev) => {
        this.estado.tema = ev.detail.value;
        guardarLocal('tema', this.estado.tema);
      });
    }

    this.querySelectorAll('ion-textarea[data-obs]').forEach(t => {
      t.addEventListener('ionChange', (ev) => {
        const id = ev.target.getAttribute('data-obs');
        this.estado.observaciones[id] = ev.detail.value;
      });
    });

    this.querySelectorAll('ion-textarea[data-rec]').forEach(t => {
      t.addEventListener('ionChange', (ev) => {
        const id = ev.target.getAttribute('data-rec');
        this.estado.recomendaciones[id] = ev.detail.value;
      });
    });

    const guardarBtn = this.querySelector('#guardar');
    if (guardarBtn) guardarBtn.addEventListener('click', async () => {
      guardarLocal('hospitalId', this.estado.hospitalId);
      guardarLocal('fecha', this.estado.fecha);
      guardarLocal('horaInicio', this.estado.horaInicio);
      guardarLocal('horaFin', this.estado.horaFin);
      guardarLocal('estudiantes', this.estado.estudiantes);
      guardarLocal('asistencia', this.estado.asistencia);
      guardarLocal('rubricas', this.estado.rubricas);
      guardarLocal('observaciones', this.estado.observaciones);
      guardarLocal('recomendaciones', this.estado.recomendaciones);
      guardarLocal('departamento', this.estado.departamento);
      guardarLocal('tutor', this.estado.tutor);
      guardarLocal('tema', this.estado.tema);
      guardarLocal('horarios', this.estado.horarios);

      let msg = 'Información guardada localmente.';
      let color = 'success';
      try {
        const payload = {
          hospitalId: this.estado.hospitalId,
          departamento: this.estado.departamento,
          tutor: this.estado.tutor,
          tema: this.estado.tema,
          fecha: this.estado.fecha,
          horaInicio: this.estado.horaInicio,
          horaFin: this.estado.horaFin,
          estudiantes: this.estado.estudiantes,
          asistencia: this.estado.asistencia,
          rubricas: this.estado.rubricas,
          observaciones: this.estado.observaciones,
          recomendaciones: this.estado.recomendaciones
        };
        if (apiBase()) {
          await apiPost('/externado/jornada', payload);
          msg = 'Guardado en servidor de la universidad.';
        } else {
          msg = 'Guardado local. Configure API_BASE_URL para enviar a servidor.';
          color = 'medium';
        }
      } catch(e) {
        msg = 'Servidor no disponible. Se guardó localmente.';
        color = 'warning';
      }
      const toast = document.createElement('ion-toast');
      toast.message = msg;
      toast.duration = 2500;
      toast.color = color;
      document.body.appendChild(toast);
      await toast.present();
    });

    const limpiarBtn = this.querySelector('#limpiar');
    if (limpiarBtn) limpiarBtn.addEventListener('click', () => {
      Object.keys(this.estado.rubricas).forEach(id => { this.estado.rubricas[id] = { A: {}, B: {} }; });
      this.render();
      this.bind();
    });

    this.querySelectorAll('ion-button[data-toggle-horario]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-toggle-horario');
        const scope = btn.closest('.student-item') || this;
        const panel = scope.querySelector(`.horario-est[data-horario="${id}"]`);
        if (!panel) return;
        const isHidden = panel.style.display === 'none' || panel.style.display === '';
        panel.style.display = isHidden ? 'block' : 'none';
      });
    });

    this.querySelectorAll('ion-button[data-save-asistencia]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-save-asistencia');
        guardarLocal('asistencia', this.estado.asistencia);
        guardarLocal('horarios', this.estado.horarios);
        let msg = `Asistencia guardada para ${id}`;
        let color = 'success';
        if (apiBase()) {
          try {
            await apiPost('/externado/asistencia', {
              estudianteId: id,
              presente: !!this.estado.asistencia[id],
              horario: this.estado.horarios[id] || { fecha: '', inicio: '', fin: '' }
            });
            msg = 'Asistencia guardada en servidor.';
          } catch(e) {
            msg = 'Servidor no disponible. Se guardó localmente.';
            color = 'warning';
          }
        }
        const toast = document.createElement('ion-toast');
        toast.message = msg;
        toast.duration = 2000;
        toast.color = color;
        document.body.appendChild(toast);
        await toast.present();
        
        // --- EMAIL SENDING LOGIC (TEST) ---
        // Only for individual view and specific student (Carlos Perez)
        if (this.estado.asistenciaTipo === 'individual') {
                    const student = this.estado.estudiantes.find(s => s.id === id);
                    // Check for both accented and unaccented versions to be safe
                    if (student && (student.nombre.toLowerCase().includes('carlos perez') || student.nombre.toLowerCase().includes('carlos pérez'))) {
                        
                        // Get dynamic period label
                        let periodoLabel = 'ABRIL 2026 (2026-3)'; // Default fallback
                        if (this.estado.periodo && this.estado.periodosDisponibles) {
                             const pObj = this.estado.periodosDisponibles.find(p => p.value == this.estado.periodo);
                             if (pObj) periodoLabel = pObj.label;
                        }

                        const targetEmail = 'jhonatan.franco@uisek.edu.ec';
                
                console.log(`[EMAIL TEST] Attempting to send email to ${targetEmail} for student ${student.nombre}`);

                // Simular delay para UX
                const loading = document.createElement('ion-loading');
                loading.message = 'Enviando correo de prueba...';
                loading.duration = 5000; // Timeout just in case
                document.body.appendChild(loading);
                await loading.present();

                try {
                    // Using localhost:5002 based on launchSettings.json
                    const response = await fetch('http://localhost:5002/api/GestionExternado/Asistencia/send-test-email', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            toEmail: targetEmail,
                            cc: '',
                            subject: 'Solicitud de Asistencia',
                            title: 'Solicitud de Asistencia',
                            nombreCoordinador: 'Coordinador',
                            cedulaDocente: '1803403821', // Mocked
                            nombreDocente: student.nombre.toUpperCase(),
                            nombreFacultad: 'FACULTAD DE CIENCIAS DE LA SALUD',
                            periodo: periodoLabel,
                            estadoSolicitud: 'SOLICITADO',
                            observacionSolicitud: '',
                            idDedicacion: 1, // 1=Tiempo Completo, 2=Tiempo Parcial
                            tipoUsuario: 'DOCENTE'
                        })
                    });

                    await loading.dismiss();

                    if (response.ok) {
                        const alert = document.createElement('ion-alert');
                        alert.header = 'Correo Enviado';
                        alert.subHeader = `Para: ${targetEmail}`;
                        alert.message = `El correo ha sido enviado exitosamente a través del backend.`;
                        alert.buttons = ['OK'];
                        document.body.appendChild(alert);
                        await alert.present();
                    } else {
                        console.error('Error sending email:', response.statusText);
                        const errorAlert = document.createElement('ion-alert');
                        errorAlert.header = 'Error al Enviar Correo';
                        errorAlert.message = `Hubo un error al intentar enviar el correo. Código: ${response.status}`;
                        errorAlert.buttons = ['OK'];
                        document.body.appendChild(errorAlert);
                        await errorAlert.present();
                    }
                } catch (error) {
                    await loading.dismiss();
                    console.error('Network error sending email:', error);
                     const errorAlert = document.createElement('ion-alert');
                        errorAlert.header = 'Error de Conexión';
                        errorAlert.message = `No se pudo conectar con el backend para enviar el correo. Asegúrate de que el servidor esté corriendo en el puerto 5002.`;
                        errorAlert.buttons = ['OK'];
                        document.body.appendChild(errorAlert);
                        await errorAlert.present();
                }
            }
        }
        // --- END EMAIL SENDING LOGIC ---
      });
    });

    this.querySelectorAll('ion-button[data-toggle-rubrica]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-toggle-rubrica');
        const panel = this.querySelector(`.rubrica-panel[data-rubrica="${id}"]`);
        if (!panel) return;
        const isHidden = panel.style.display === 'none' || panel.style.display === '';
        panel.style.display = isHidden ? 'block' : 'none';
      });
    });

    this.querySelectorAll('ion-button[data-save-rubrica]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-save-rubrica');
        guardarLocal('rubricas', this.estado.rubricas);
        guardarLocal('observaciones', this.estado.observaciones);
        guardarLocal('recomendaciones', this.estado.recomendaciones);
        guardarLocal('horarios', this.estado.horarios);
        let msg = `Rúbrica guardada para ${id}`;
        let color = 'success';
        if (apiBase()) {
          try {
            await apiPost('/externado/rubrica', {
              estudianteId: id,
              rubricas: this.estado.rubricas[id],
              observacion: this.estado.observaciones[id] || '',
              recomendacion: this.estado.recomendaciones[id] || '',
              horario: this.estado.horarios[id] || { fecha: '', inicio: '', fin: '' }
            });
            msg = 'Rúbrica guardada en servidor.';
          } catch(e) {
            msg = 'Servidor no disponible. Se guardó localmente.';
            color = 'warning';
          }
        }
        const toast = document.createElement('ion-toast');
        toast.message = msg;
        toast.duration = 2000;
        toast.color = color;
        document.body.appendChild(toast);
        await toast.present();
      });
    });

    this.querySelectorAll('ion-datetime[data-fecha-estudiante]').forEach(dt => {
      dt.addEventListener('ionChange', (ev) => {
        const id = dt.getAttribute('data-fecha-estudiante');
        const val = ev.detail.value;
        this.estado.horarios[id] = this.estado.horarios[id] || { fecha: '', inicio: '', fin: '' };
        this.estado.horarios[id].fecha = val;
        guardarLocal('horarios', this.estado.horarios);
      });
    });
    this.querySelectorAll('ion-input[data-inicio-estudiante]').forEach(dt => {
      dt.addEventListener('ionChange', (ev) => {
        const id = dt.getAttribute('data-inicio-estudiante');
        const val = ev.detail.value;
        this.estado.horarios[id] = this.estado.horarios[id] || { fecha: '', inicio: '', fin: '' };
        this.estado.horarios[id].inicio = val;
        guardarLocal('horarios', this.estado.horarios);
      });
    });
    this.querySelectorAll('ion-input[data-fin-estudiante]').forEach(dt => {
      dt.addEventListener('ionChange', (ev) => {
        const id = dt.getAttribute('data-fin-estudiante');
        const val = ev.detail.value;
        this.estado.horarios[id] = this.estado.horarios[id] || { fecha: '', inicio: '', fin: '' };
        this.estado.horarios[id].fin = val;
        guardarLocal('horarios', this.estado.horarios);
      });
    });
    
  }

  updateViewsDisplay() {
    try {
      const views = ['docente','asistencia','rubrica'];
      views.forEach(v => {
        const el = this.querySelector(`[data-view="${v}"]`);
        if (el) el.style.display = (this.estado.vista === v) ? 'block' : 'none';
      });
    } catch(e) {}
  }

  contarResumen() {
    const list = this.currentStudentsForSummary || this.estado.estudiantes;
    const total = list.length;
    const presentes = list.filter(e => this.estado.asistencia[e.id] === true).length;
    const ausentes = total - presentes;
    return { total, presentes, ausentes };
  }

  contarCompletos() {
    return this.estado.estudiantes.filter(e => {
      const r = this.estado.rubricas[e.id] || { A: {}, B: {} };
      return [0,1,2,3,4].every(i => typeof r.A[i] === 'number') && [0,1,2,3,4].every(i => typeof r.B[i] === 'number');
    }).length;
  }
}

customElements.define('page-login', PageLogin);
customElements.define('page-dashboard', PageDashboard);

window.addEventListener('load', async () => {
  // Hide static fallback IMMEDIATELY if session exists
  const sess = leerLocal('session', null);
  const initialHash = (location.hash || '').replace(/^#/, '');
  if ((sess && sess.user) || initialHash.startsWith('/dashboard')) {
      const fb = document.getElementById('fallback-app');
      if (fb) { fb.style.display = 'none'; fb.style.visibility = 'hidden'; }
      // Also hide main body content from index.html if possible (it has no ID but class app-body)
      const staticBody = document.querySelector('body > .app-body');
      if (staticBody) { staticBody.style.display = 'none'; }
  }

  let current = location.hash ? location.hash.replace(/^#/, '') : null;
  if (current && !/^\/(login|dashboard(?:\/(docente|asistencia|rubrica))?)$/.test(current)) {
    current = null;
  }
  const last = leerLocal('last_route', null);
  const initial = (sess && sess.user) ? '/dashboard' : '/login';
  if (!current) {
    location.hash = `#${initial}`;
    const comp = initial.includes('dashboard') ? 'page-dashboard' : 'page-login';
    const fb = document.getElementById('fallback-app');
    const fbDash = document.getElementById('fb-dashboard');
    if (!document.querySelector(comp) && !fbDash) {
      montarFallback(comp);
    }
  }
  setTimeout(() => {
    const h = (location.hash || '').replace(/^#/, '');
    const hasLogin = !!document.querySelector('page-login');
    const hasDash = !!document.querySelector('page-dashboard');
    if (h === '/login' && !hasLogin) montarFallback('page-login');
    if (h.startsWith('/dashboard') && !hasDash) montarFallback('page-dashboard');
  }, 800);
  const ensureCorrectView = () => {
    try {
      const h = (location.hash || '').replace(/^#/, '');
      console.log('[ensureCorrectView] Checking view for hash:', h);
      
      const fb = document.getElementById('fallback-app');
      const fbDash = document.getElementById('fb-dashboard');

      if (h.startsWith('/dashboard')) {
        // Forcefully remove login component and fallback
        const logins = document.querySelectorAll('page-login');
        if (logins.length > 0) console.log('[ensureCorrectView] Removing page-login components');
        logins.forEach(el => {
            el.style.display = 'none';
            el.remove();
        });
        
        if (fb) { 
            fb.style.display = 'none'; 
            fb.style.visibility = 'hidden';
            fb.remove(); 
        }
        
        if (fbDash) { fbDash.style.display = 'none'; fbDash.remove(); }
        
        const app = document.querySelector('ion-app');
        if (app) app.classList.remove('fallback-block');

        let dash = document.querySelector('page-dashboard');
        if (!dash) {
          console.log('[ensureCorrectView] page-dashboard missing, mounting it');
          montarFallback('page-dashboard');
          dash = document.querySelector('page-dashboard');
        }
        if (dash) {
          if (dash.style.display === 'none') {
             console.log('[ensureCorrectView] page-dashboard was hidden, showing it');
             dash.style.display = 'block';
          }
          dash.style.zIndex = '9999'; // Force high z-index
          dash.style.position = 'absolute';
          dash.style.top = '0';
          dash.style.left = '0';
          dash.style.width = '100%';
          dash.style.height = '100%';
          dash.style.backgroundColor = '#f4f5f8';
        }
      } else if (h === '/login' || h === '') {
        // Estamos en login: eliminar dashboard
        document.querySelectorAll('page-dashboard').forEach(el => el.remove());
        
        // Si no hay login ni fallback, montar login
        if (!document.querySelector('page-login') && !document.getElementById('fallback-app')) {
          montarFallback('page-login');
        }
      }
    } catch(e) {
      console.error('Error ensuring correct view', e);
    }
  };

  // Ejecutar validación inicial
  ensureCorrectView();
  
  // Listeners
  window.addEventListener('hashchange', ensureCorrectView);
  window.addEventListener('popstate', ensureCorrectView); // Para navegación por historial
  
  // Intervalo de seguridad para corregir estado visual (menos agresivo)
  setInterval(() => {
    const h = (location.hash || '').replace(/^#/, '');
    if (h.startsWith('/dashboard')) {
       const login = document.querySelector('page-login');
       if (login) login.remove();
       const fb = document.getElementById('fallback-app');
       if (fb) fb.remove();
    }
  }, 2000);

  const ids = ['google-signin', 'fb-google-signin'];
  ids.forEach(id => { if (document.getElementById(id) && window.initGoogleSignIn) window.initGoogleSignIn(id); });
});
