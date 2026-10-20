"use client"; // as abas (Vendas / Pedidos / Ticket médio) trocam o gráfico com um clique

import { useState } from "react";
import { brl, inteiro, mesesPorExtenso, variacao } from "@/src/lib/dados";

type Mes = { mes: string; valor: number; pedidos: number; ticket: number };

const metricas = [
  { chave: "valor", rotulo: "Vendas", formatar: brl, eixo: (n: number) => (n === 0 ? "0" : `${(n / 1000).toLocaleString("pt-BR", { maximumFractionDigits: 1 })} mil`) },
  { chave: "pedidos", rotulo: "Pedidos", formatar: inteiro, eixo: inteiro },
  { chave: "ticket", rotulo: "Ticket médio", formatar: brl, eixo: (n: number) => `R$ ${inteiro(n)}` },
] as const;

// escolhe um topo "redondo" para o eixo (ex.: 48.000 -> 60.000) e o passo das linhas
function escala(maior: number) {
  const bruto = maior / 4;
  const potencia = 10 ** Math.floor(Math.log10(bruto));
  const passo = [1, 2, 2.5, 5, 10].map((m) => m * potencia).find((p) => p >= bruto)!;
  const topo = Math.ceil(maior / passo) * passo;
  const linhas = Array.from({ length: topo / passo + 1 }, (_, i) => i * passo);
  return { topo, linhas };
}

export default function GraficoVendas({ dados }: { dados: Mes[] }) {
  const [ativa, setAtiva] = useState<(typeof metricas)[number]["chave"]>("valor");
  const metrica = metricas.find((m) => m.chave === ativa)!;

  const atual = dados[dados.length - 1];
  const anterior = dados[dados.length - 2];
  const valores = dados.map((d) => d[ativa]);
  const { topo, linhas } = escala(Math.max(...valores));

  return (
    <div>
      {/* KPIs que também são as abas do gráfico */}
      <div role="tablist" aria-label="Métrica do gráfico" className="grid grid-cols-3 border-b border-rule">
        {metricas.map((m) => {
          const selecionada = m.chave === ativa;
          const v = variacao(atual[m.chave], anterior[m.chave]);
          return (
            <button
              key={m.chave}
              role="tab"
              type="button"
              aria-selected={selecionada}
              onClick={() => setAtiva(m.chave)}
              className={`-mb-px border-b-2 px-0 pt-1 pb-4 text-left transition-colors sm:pr-6 ${
                selecionada ? "border-ink" : "border-transparent hover:border-control"
              }`}
            >
              <span className={`block font-semibold ${selecionada ? "text-ink" : "text-muted"}`}>{m.rotulo}</span>
              <span className="num mt-1 block text-[18px] leading-tight text-ink lg:text-[28px]">
                {m.formatar(atual[m.chave])}
              </span>
              <span className="num mt-1 block text-xs text-muted">
                <span className={v.pct >= 0 ? "text-positive" : "text-negative"}>{v.texto}</span>
                <span className="hidden sm:inline"> vs {mesesPorExtenso[dados.length - 2]}</span>
              </span>
            </button>
          );
        })}
      </div>

      {/* gráfico de barras: outubro na cor de destaque, os meses anteriores em cinza */}
      <figure className="mt-6" aria-label={`${metrica.rotulo} por mês`}>
        <div className="flex">
          <div className="relative h-[220px] w-14 shrink-0 text-xs text-muted">
            {linhas.map((l) => (
              <span key={l} className="num absolute right-3 translate-y-1/2" style={{ bottom: `${(l / topo) * 100}%` }}>
                {metrica.eixo(l)}
              </span>
            ))}
          </div>
          <div className="relative h-[220px] min-w-0 flex-1">
            {linhas.map((l) => (
              <div key={l} className="absolute inset-x-0 h-px bg-rule" style={{ bottom: `${(l / topo) * 100}%` }} />
            ))}
            <div className="absolute inset-0 flex items-end gap-2 sm:gap-4">
              {dados.map((d, i) => {
                const eAtual = i === dados.length - 1;
                return (
                  <div key={d.mes} className="group flex h-full flex-1 flex-col items-center justify-end">
                    <span className={`num mb-1.5 hidden text-xs whitespace-nowrap sm:block ${eAtual ? "font-semibold text-ink" : "text-muted"}`}>
                      <span className="hidden xl:inline">{metrica.formatar(d[ativa])}</span>
                      <span className="xl:hidden">{metrica.eixo(d[ativa])}</span>
                    </span>
                    <div
                      title={`${mesesPorExtenso[i]}: ${metrica.formatar(d[ativa])}`}
                      className={`w-full max-w-14 rounded-t-[3px] transition-[height,background-color] duration-300 ${
                        eAtual ? "bg-accent" : "bg-bar group-hover:bg-control"
                      }`}
                      style={{ height: `${(d[ativa] / topo) * 100}%` }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-2 flex gap-2 pl-14 text-xs text-muted sm:gap-4">
          {dados.map((d, i) => (
            <span key={d.mes} className={`flex-1 text-center ${i === dados.length - 1 ? "font-semibold text-ink" : ""}`}>
              {d.mes}
            </span>
          ))}
        </div>
      </figure>
    </div>
  );
}
