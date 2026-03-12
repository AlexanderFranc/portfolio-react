
const rubricaBData = [
  { criterio: 'C1', opciones: [{ val: 1 }, { val: 0.75 }] },
  { criterio: 'C2', opciones: [{ val: 1 }, { val: 0.75 }] }
];

const estado = {
  rubricas: {
    '123': {
      B: { 0: 1, 1: 0.75 }
    }
  }
};

function normalizarCalificacion(v) {
  if (typeof v === 'number') return v;
  if (v == null) return 0;
  const s = String(v).trim();
  const asNum = Number(s);
  if (!isNaN(asNum)) return asNum;
  return 0;
}

function calcularSubtotal(selecciones) {
  return Object.values(selecciones || {}).reduce((acc, v) => acc + normalizarCalificacion(v), 0);
}

const r = estado.rubricas['123'];
const subtotalB = calcularSubtotal(r.B);
console.log('Subtotal B:', subtotalB);
