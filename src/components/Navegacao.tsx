"use client"; // usa estado (menu aberto no celular) e a rota atual

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Marca from "./Marca";
import { IconeMenu, IconeProdutos, IconeSair, IconeVisaoGeral } from "./Icones";

const links = [
  { href: "/dashboard", rotulo: "Visão geral", Icone: IconeVisaoGeral },
  { href: "/produtos", rotulo: "Produtos", Icone: IconeProdutos },
];

function Lista({ aoClicar }: { aoClicar?: () => void }) {
  const rota = usePathname();
  return (
    <nav aria-label="Principal" className="flex flex-col gap-0.5">
      {links.map(({ href, rotulo, Icone }) => {
        const ativo = rota.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            onClick={aoClicar}
            aria-current={ativo ? "page" : undefined}
            className={`flex h-8 items-center gap-2.5 rounded-lg px-2.5 transition-colors ${
              ativo ? "bg-active text-ink" : "text-muted hover:bg-active/60 hover:text-ink"
            }`}
          >
            <Icone />
            {rotulo}
          </Link>
        );
      })}
    </nav>
  );
}

function Rodape() {
  return (
    <div className="flex items-center gap-2.5 px-2.5">
      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-active text-xs font-semibold text-accent">
        A
      </span>
      <div className="min-w-0 flex-1 leading-tight">
        <p className="truncate text-ink">Administrador</p>
        <p className="truncate text-xs text-muted">admin@teste.com</p>
      </div>
      <Link href="/login" aria-label="Sair" title="Sair" className="rounded-md p-1.5 text-muted hover:bg-active hover:text-ink">
        <IconeSair />
      </Link>
    </div>
  );
}

function NomeDaLoja() {
  return (
    <Link href="/dashboard" className="flex items-center gap-2.5 px-2.5">
      <Marca />
      <span className="leading-tight">
        <span className="block font-semibold text-ink">PCzão</span>
        <span className="block text-xs text-muted">Loja principal</span>
      </span>
    </Link>
  );
}

// Barra lateral (computador) + botão de menu (celular)
export default function Navegacao() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      {/* computador: barra lateral fixa */}
      <aside className="sticky top-0 hidden h-screen w-[228px] shrink-0 flex-col gap-7 px-3 pt-3 pb-4 md:flex">
        <div className="flex h-9 items-center">
          <NomeDaLoja />
        </div>
        <Lista />
        <div className="mt-auto">
          <Rodape />
        </div>
      </aside>

      {/* celular: botão que abre o menu */}
      <button
        type="button"
        onClick={() => setAberto(true)}
        aria-label="Abrir menu"
        aria-expanded={aberto}
        className="fixed top-2 left-2 z-20 grid size-9 place-items-center rounded-lg text-ink hover:bg-active md:hidden"
      >
        <IconeMenu />
      </button>

      {aberto && (
        <div className="fixed inset-0 z-30 md:hidden">
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setAberto(false)}
            className="absolute inset-0 bg-ink/30"
          />
          <div className="absolute inset-y-0 left-0 flex w-[268px] flex-col gap-7 bg-ground px-3 pt-3 pb-4 shadow-xl">
            <div className="flex h-9 items-center">
              <NomeDaLoja />
            </div>
            <Lista aoClicar={() => setAberto(false)} />
            <div className="mt-auto">
              <Rodape />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
