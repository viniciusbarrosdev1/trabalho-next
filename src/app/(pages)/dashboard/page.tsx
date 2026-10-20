import Link from "next/link";

// Dados fixos só para exibir nos cartões
const cartoes = [
  { titulo: "Vendas do mês", valor: "R$ 48.250", cor: "bg-green-500" },
  { titulo: "Pedidos", valor: "326", cor: "bg-blue-500" },
  { titulo: "Clientes", valor: "1.204", cor: "bg-purple-500" },
  { titulo: "Produtos em estoque", valor: "87", cor: "bg-orange-500" },
];

const vendasPorMes = [
  { mes: "Mai", valor: 30 },
  { mes: "Jun", valor: 45 },
  { mes: "Jul", valor: 38 },
  { mes: "Ago", valor: 60 },
  { mes: "Set", valor: 52 },
  { mes: "Out", valor: 80 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Barra do topo */}
      <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">📊 Meu Dashboard</h1>
        <nav className="flex gap-4 text-sm">
          <Link href="/produtos" className="text-indigo-600 font-semibold hover:underline">
            Ver produtos
          </Link>
          <Link href="/login" className="text-gray-500 hover:underline">
            Sair
          </Link>
        </nav>
      </header>

      <main className="p-6 max-w-5xl mx-auto space-y-8">
        {/* Cartões com números */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cartoes.map((c) => (
            <div key={c.titulo} className={`${c.cor} text-white rounded-xl p-5 shadow`}>
              <p className="text-sm opacity-90">{c.titulo}</p>
              <p className="text-3xl font-bold mt-1">{c.valor}</p>
            </div>
          ))}
        </section>

        {/* Gráfico de barras feito só com divs */}
        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold mb-4">Vendas por mês (em mil R$)</h2>
          <div className="flex items-end gap-4 h-48">
            {vendasPorMes.map((v) => (
              <div key={v.mes} className="flex-1 flex flex-col items-center justify-end h-full">
                <span className="text-xs mb-1">{v.valor}</span>
                <div
                  className="w-full bg-indigo-500 rounded-t"
                  style={{ height: `${v.valor}%` }}
                />
                <span className="text-xs mt-1 text-gray-500">{v.mes}</span>
              </div>
            ))}
          </div>
        </section>

        <Link
          href="/produtos"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg px-5 py-2"
        >
          Ir para a lista de produtos →
        </Link>
      </main>
    </div>
  );
}
