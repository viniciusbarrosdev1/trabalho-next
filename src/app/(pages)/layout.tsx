import Navegacao from "@/src/components/Navegacao";
import { IconeBusca } from "@/src/components/Icones";

// Moldura de todas as páginas internas (dashboard, produtos):
// barra lateral + barra do topo num fundo cinza-azulado, e o conteúdo numa "folha" branca.
export default function LayoutInterno({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen">
      <Navegacao />

      <div className="flex min-w-0 flex-1 flex-col">
        {/* barra do topo: a busca leva para a lista de produtos já filtrada */}
        <header className="flex h-12 shrink-0 items-center justify-center pr-2 pl-12 md:pl-0">
          <form action="/produtos" role="search" className="relative w-full max-w-[548px]">
            <span className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-muted">
              <IconeBusca />
            </span>
            <input
              type="search"
              name="q"
              aria-label="Buscar produto"
              placeholder="Buscar produto por nome ou SKU"
              className="h-8 w-full rounded-md border border-line bg-surface pr-3 pl-8 text-ink placeholder:text-muted focus:border-accent focus:outline-none"
            />
          </form>
        </header>

        {/* a folha branca */}
        <main className="flex-1 border-line bg-surface md:mr-2 md:mb-2 md:rounded-2xl md:border">
          <div className="mx-auto max-w-[1180px] px-4 py-6 md:px-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
