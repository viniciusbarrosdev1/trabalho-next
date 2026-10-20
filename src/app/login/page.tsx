"use client"; // precisa ser client component porque usa estado (useState) e eventos

import { useState } from "react";
import { useRouter } from "next/navigation";

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
      setErro("E-mail ou senha incorretos");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 p-4">
      <form
        onSubmit={entrar}
        className="w-full max-w-sm bg-white text-gray-800 rounded-2xl shadow-xl p-8 space-y-5"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold">Bem-vindo 👋</h1>
          <p className="text-sm text-gray-500">Entre na sua conta</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@teste.com"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="123456"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        {erro && <p className="text-sm text-red-600">{erro}</p>}

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg py-2 transition"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
