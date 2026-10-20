"use client"; // precisa ser client component porque usa estado (useState) e eventos

import { useState } from "react";
import { useRouter } from "next/navigation";
import Marca from "@/src/components/Marca";

export default function Login() {
  const router = useRouter(); // serve para trocar de página pelo código
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function entrar(e: React.FormEvent) {
    e.preventDefault(); // impede a página de recarregar ao enviar o form

    // Login "de mentirinha" (sem banco de dados), só para a demonstração
    if (email === "admin@teste.com" && senha === "123456") {
      router.push("/dashboard");
    } else {
      setErro("E-mail ou senha incorretos. Confira os dados de teste abaixo.");
    }
  }

  const campo =
    "h-10 w-full rounded-md border border-control bg-surface px-3 text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-[400px]">
        <div className="mb-6 flex items-center gap-2.5">
          <Marca tamanho={28} />
          <span className="text-[17px] font-semibold">PCzão</span>
        </div>

        <form onSubmit={entrar} className="rounded-2xl border border-line bg-surface p-6 sm:p-8" noValidate>
          <h1 className="text-[22px] font-semibold leading-tight">Entrar no painel da loja</h1>
          <p className="mt-1.5 text-muted">Vendas, pedidos e estoque em um só lugar.</p>

          <div className="mt-6 flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="mb-1.5 block font-medium">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErro("");
                }}
                placeholder="voce@pczao.com.br"
                className={campo}
                aria-invalid={!!erro}
              />
            </div>

            <div>
              <label htmlFor="senha" className="mb-1.5 block font-medium">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                autoComplete="current-password"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                  setErro("");
                }}
                className={campo}
                aria-invalid={!!erro}
              />
            </div>

            {erro && (
              <p role="alert" className="rounded-md bg-neg-bg px-3 py-2 text-neg-ink">
                {erro}
              </p>
            )}

            <button
              type="submit"
              className="mt-2 h-10 w-full rounded-md bg-ink font-medium text-surface transition-opacity hover:opacity-85 active:translate-y-px"
            >
              Entrar
            </button>
          </div>
        </form>

        <p className="mt-4 text-center text-muted">
          Conta de teste: <span className="text-ink">admin@teste.com</span> · senha <span className="text-ink">123456</span>
        </p>
      </div>
    </main>
  );
}
