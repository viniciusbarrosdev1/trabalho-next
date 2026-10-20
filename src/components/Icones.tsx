// Ícones simples de traço, 16px
const base = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const IconeVisaoGeral = () => (
  <svg {...base}><path d="M2.5 13.5V8M6.2 13.5V4M9.8 13.5V6.5M13.5 13.5V2.5" /></svg>
);
export const IconeProdutos = () => (
  <svg {...base}><path d="M2.5 5 8 2.5 13.5 5v6L8 13.5 2.5 11z" /><path d="M2.5 5 8 7.5 13.5 5M8 7.5v6" /></svg>
);
export const IconeSair = () => (
  <svg {...base}><path d="M6 2.5H3.5v11H6M10 5l3 3-3 3M13 8H6.5" /></svg>
);
export const IconeBusca = () => (
  <svg {...base}><circle cx="7" cy="7" r="4.5" /><path d="m10.5 10.5 3 3" /></svg>
);
export const IconeMenu = () => (
  <svg {...base} width={20} height={20}><path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" /></svg>
);
