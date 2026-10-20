// Marca da loja: um chip de processador desenhado em SVG, na cor de destaque
export default function Marca({ tamanho = 24 }: { tamanho?: number }) {
  return (
    <svg width={tamanho} height={tamanho} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="5" width="14" height="14" rx="2.5" fill="var(--color-accent)" />
      <rect x="9" y="9" width="6" height="6" rx="1" fill="var(--color-surface)" />
      {[8, 12, 16].map((p) => (
        <g key={p} stroke="var(--color-accent)" strokeWidth="1.6" strokeLinecap="round">
          <line x1={p} y1="1.5" x2={p} y2="4" />
          <line x1={p} y1="20" x2={p} y2="22.5" />
          <line x1="1.5" y1={p} x2="4" y2={p} />
          <line x1="20" y1={p} x2="22.5" y2={p} />
        </g>
      ))}
    </svg>
  );
}
