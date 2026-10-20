import Link from "next/link";
import GraficoVendas from "@/src/components/GraficoVendas";
import {
  brl,
  diasDeEstoque,
  inteiro,
  mesAnterior,
  mesAtual,
  paraRepor,
  produtos,
  receitaNoMes,
  resumoMensal,
  situacao,
  variacao,
  vendasPorCategoria,
  vendidosNoMes,
} from "@/src/lib/dados";

export default function Dashboard() {
  const crescimento = variacao(mesAtual.valor, mesAnterior.valor);
  const semEstoque = produtos.filter((p) => situacao(p) === "sem-estoque");
  const abaixoDoMinimo = produtos.filter((p) => situacao(p) === "repor");

  // estoque: quem acaba primeiro aparece em cima
  const porUrgencia = [...produtos].sort((a, b) => diasDeEstoque(a) - diasDeEstoque(b));
  // mais vendidos: pela receita do mês
  const maisVendidos = [...produtos].sort((a, b) => receitaNoMes(b) - receitaNoMes(a));
  const maiorReceita = receitaNoMes(maisVendidos[0]);

  return (
    <div className="flex flex-col gap-6">
      {/* título + o que mais importa hoje + a ação principal */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-[22px] font-semibold leading-tight">Outubro na loja</h1>
          <p className="mt-1.5 max-w-[640px] text-muted">
            Vendas {crescimento.pct >= 0 ? "subiram" : "caíram"}{" "}
            <span className={`num font-medium ${crescimento.pct >= 0 ? "text-positive" : "text-negative"}`}>
              {crescimento.texto}
            </span>{" "}
            sobre setembro.{" "}
            {semEstoque.map((p) => p.nome).join(", ")} sem estoque e{" "}
            {abaixoDoMinimo.map((p) => p.nome).join(", ")} abaixo do mínimo.
          </p>
        </div>
        <Link
          href="/produtos?aba=repor"
          className="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-ink px-4 font-medium text-surface transition-opacity hover:opacity-85 active:translate-y-px"
        >
          Ver {paraRepor.length} produtos para repor
        </Link>
      </div>

      {/* cartão principal: KPIs + gráfico + comparação por categoria */}
      <section aria-labelledby="t-vendas" className="rounded-lg border border-line p-4 sm:p-6">
        <h2 id="t-vendas" className="sr-only">Vendas dos últimos seis meses</h2>
        <GraficoVendas dados={resumoMensal} />

        <table className="mt-8 w-full">
          <caption className="mb-1 text-left font-semibold">Vendas por categoria</caption>
          <thead>
            <tr className="text-xs text-muted">
              <th className="py-2 text-left font-normal">Categoria</th>
              <th className="py-2 text-right font-normal">Setembro</th>
              <th className="py-2 text-right font-normal">Outubro</th>
              <th className="py-2 text-right font-normal">Variação</th>
            </tr>
          </thead>
          <tbody className="num">
            {vendasPorCategoria.map((c) => {
              const v = variacao(c.atual, c.anterior);
              return (
                <tr key={c.categoria} className="border-t border-rule">
                  <td className="h-9">{c.categoria}</td>
                  <td className="text-right text-muted">{brl(c.anterior)}</td>
                  <td className="text-right">{brl(c.atual)}</td>
                  <td className={`text-right ${v.pct >= 0 ? "text-positive" : "text-negative"}`}>{v.texto}</td>
                </tr>
              );
            })}
            <tr className="border-t border-line font-semibold">
              <td className="h-9">Total</td>
              <td className="text-right">{brl(mesAnterior.valor)}</td>
              <td className="text-right">{brl(mesAtual.valor)}</td>
              <td className={`text-right ${crescimento.pct >= 0 ? "text-positive" : "text-negative"}`}>{crescimento.texto}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* estoque contra o mínimo: a barra mostra o estoque, o traço é o mínimo */}
        <section aria-labelledby="t-estoque" className="rounded-lg border border-line p-4 sm:p-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="t-estoque" className="font-semibold">Quanto o estoque aguenta</h2>
            <span className="text-xs text-muted">no ritmo de outubro</span>
          </div>
          <ul className="mt-4 flex flex-col gap-4">
            {porUrgencia.map((p) => {
              const s = situacao(p);
              const escala = p.minimo * 3; // a barra cheia = 3x o mínimo
              const dias = diasDeEstoque(p);
              return (
                <li key={p.id}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="truncate">{p.nome}</span>
                    <span
                      className={`num shrink-0 text-right ${
                        s === "sem-estoque" ? "font-medium text-negative" : s === "repor" ? "font-medium text-warning" : "text-muted"
                      }`}
                    >
                      {s === "sem-estoque" ? "Acabou" : `${dias} dias`}
                    </span>
                  </div>
                  <div className="relative mt-1.5 h-2 rounded-full bg-raised">
                    <div
                      className={`h-full rounded-full ${s === "ok" ? "bg-accent" : s === "repor" ? "bg-warning" : ""}`}
                      style={{ width: `${Math.min(p.estoque / escala, 1) * 100}%` }}
                    />
                    <div
                      className="absolute -top-1 h-4 w-0.5 rounded bg-ink"
                      style={{ left: `${(p.minimo / escala) * 100}%` }}
                      title={`Mínimo: ${p.minimo} un.`}
                    />
                  </div>
                  <p className="num mt-1 text-xs text-muted">
                    {p.estoque} un. em estoque · mínimo {p.minimo} · vendeu {vendidosNoMes(p)} em outubro
                  </p>
                </li>
              );
            })}
          </ul>
        </section>

        {/* mais vendidos do mês, pela receita */}
        <section aria-labelledby="t-mais" className="rounded-lg border border-line p-4 sm:p-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="t-mais" className="font-semibold">Mais vendidos em outubro</h2>
            <Link href="/produtos" className="text-xs text-accent hover:underline">
              Ver todos
            </Link>
          </div>
          <ol className="mt-4 flex flex-col gap-4">
            {maisVendidos.map((p) => (
              <li key={p.id}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="truncate">{p.nome}</span>
                  <span className="num shrink-0">{brl(receitaNoMes(p))}</span>
                </div>
                <div className="mt-1.5 h-2 rounded-full bg-raised">
                  <div className="h-full rounded-full bg-bar" style={{ width: `${(receitaNoMes(p) / maiorReceita) * 100}%` }} />
                </div>
                <p className="num mt-1 text-xs text-muted">
                  {inteiro(vendidosNoMes(p))} un. · {brl(p.preco)} cada · {p.categoria}
                </p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
