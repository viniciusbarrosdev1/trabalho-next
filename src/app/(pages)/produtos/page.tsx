import Link from "next/link";
import { IconeBusca } from "@/src/components/Icones";
import {
  brl,
  centavos,
  inteiro,
  produtos,
  situacao,
  valorEmEstoque,
  vendidosNoMes,
  type Produto,
} from "@/src/lib/dados";

// As abas e a busca ficam na URL (?aba=repor&q=mouse), então funcionam até sem JavaScript
const abas = [
  { id: "todos", rotulo: "Todos", filtro: () => true },
  { id: "repor", rotulo: "Para repor", filtro: (p: Produto) => situacao(p) !== "ok" },
  { id: "sem-estoque", rotulo: "Sem estoque", filtro: (p: Produto) => situacao(p) === "sem-estoque" },
];

function Situacao({ p }: { p: Produto }) {
  const s = situacao(p);
  const estilos = {
    "sem-estoque": "bg-neg-bg text-neg-ink",
    repor: "bg-warn-bg text-warn-ink",
    ok: "bg-pos-bg text-pos-ink",
  };
  const textos = { "sem-estoque": "Sem estoque", repor: "Abaixo do mínimo", ok: "Em estoque" };
  return <span className={`inline-block rounded-full px-2 py-0.5 text-xs ${estilos[s]}`}>{textos[s]}</span>;
}

export default async function Produtos({ searchParams }: PageProps<"/produtos">) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q.trim() : "";
  const abaAtiva = abas.find((a) => a.id === params.aba) ?? abas[0];

  const buscados = produtos.filter(
    (p) => !q || `${p.nome} ${p.sku} ${p.categoria}`.toLowerCase().includes(q.toLowerCase())
  );
  const lista = buscados.filter(abaAtiva.filtro);
  const totalEmEstoque = centavos(lista.reduce((t, p) => t + valorEmEstoque(p), 0));

  const link = (aba: string) => {
    const u = new URLSearchParams();
    if (aba !== "todos") u.set("aba", aba);
    if (q) u.set("q", q);
    const s = u.toString();
    return s ? `/produtos?${s}` : "/produtos";
  };

  return (
    <div>
      <h1 className="text-[22px] font-semibold leading-tight">Produtos</h1>
      <p className="mt-1.5 text-muted">Preço, vendas de outubro e estoque de cada item da loja.</p>

      {/* abas com a contagem de cada uma */}
      <nav aria-label="Filtrar produtos" className="mt-6 flex gap-6 overflow-x-auto border-b border-line">
        {abas.map((a) => {
          const ativa = a.id === abaAtiva.id;
          return (
            <Link
              key={a.id}
              href={link(a.id)}
              aria-current={ativa ? "page" : undefined}
              className={`-mb-px flex shrink-0 items-center gap-1.5 border-b-2 pb-2.5 transition-colors ${
                ativa ? "border-ink font-semibold text-ink" : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {a.rotulo}
              <span className="num text-muted font-normal">{buscados.filter(a.filtro).length}</span>
            </Link>
          );
        })}
      </nav>

      {/* busca + resumo */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <form action="/produtos" role="search" className="relative w-full sm:w-[300px]">
          {abaAtiva.id !== "todos" && <input type="hidden" name="aba" value={abaAtiva.id} />}
          <span className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-muted">
            <IconeBusca />
          </span>
          <input
            type="search"
            name="q"
            defaultValue={q}
            aria-label="Buscar nesta lista"
            placeholder="Nome, SKU ou categoria"
            className="h-9 w-full rounded-md border border-control pr-3 pl-8 placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </form>
        <p className="num text-muted">
          {lista.length} {lista.length === 1 ? "produto" : "produtos"} · {brl(totalEmEstoque)} em estoque
        </p>
      </div>

      {lista.length === 0 ? (
        <div className="mt-6 rounded-lg bg-raised px-6 py-12 text-center">
          <p className="font-medium">Nenhum produto encontrado</p>
          <p className="mt-1 text-muted">
            {q ? `Nada com “${q}” em “${abaAtiva.rotulo}”. ` : "Nenhum produto nesta aba. "}
            <Link href="/produtos" className="text-accent hover:underline">
              Ver todos os produtos
            </Link>
          </p>
        </div>
      ) : (
        <>
          {/* tabela (tablet e computador) */}
          <table className="mt-4 hidden w-full md:table">
            <thead>
              <tr className="text-xs text-muted">
                <th className="py-2 text-left font-normal">Produto</th>
                <th className="py-2 text-left font-normal">Categoria</th>
                <th className="py-2 text-right font-normal">Preço</th>
                <th className="py-2 text-right font-normal">Vendidos em out.</th>
                <th className="py-2 text-right font-normal">Estoque</th>
                <th className="py-2 pl-6 text-left font-normal">Situação</th>
                <th className="py-2 text-right font-normal">Valor em estoque</th>
              </tr>
            </thead>
            <tbody className="num">
              {lista.map((p) => (
                <tr key={p.id} className="border-t border-rule transition-colors hover:bg-raised">
                  <td className="h-14">
                    <span className="block font-medium">{p.nome}</span>
                    <span className="block text-xs text-muted">{p.sku}</span>
                  </td>
                  <td className="text-muted">{p.categoria}</td>
                  <td className="text-right">{brl(p.preco)}</td>
                  <td className="text-right">{inteiro(vendidosNoMes(p))}</td>
                  <td className="text-right">
                    {p.estoque} <span className="text-muted">/ mín. {p.minimo}</span>
                  </td>
                  <td className="pl-6">
                    <Situacao p={p} />
                  </td>
                  <td className={`text-right ${p.estoque === 0 ? "text-muted" : ""}`}>{brl(valorEmEstoque(p))}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* lista em duas linhas (celular) */}
          <ul className="num mt-4 md:hidden">
            {lista.map((p) => (
              <li key={p.id} className="border-t border-rule py-3">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-medium">{p.nome}</span>
                  <span>{brl(p.preco)}</span>
                </div>
                <div className="mt-1 flex items-center justify-between gap-3 text-[13px] text-muted">
                  <span>
                    {p.estoque} un. / mín. {p.minimo} · {p.sku}
                  </span>
                  <Situacao p={p} />
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
