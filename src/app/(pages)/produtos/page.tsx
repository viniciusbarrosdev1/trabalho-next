import Link from "next/link";

// Lista de produtos (dados fixos)
const produtos = [
  { id: 1, nome: "Notebook Gamer", categoria: "Informática", preco: 4500, estoque: 12 },
  { id: 2, nome: "Mouse Sem Fio", categoria: "Periféricos", preco: 89.9, estoque: 54 },
  { id: 3, nome: "Teclado Mecânico", categoria: "Periféricos", preco: 249.9, estoque: 0 },
  { id: 4, nome: "Monitor 24\"", categoria: "Informática", preco: 899, estoque: 20 },
  { id: 5, nome: "Headset USB", categoria: "Áudio", preco: 159.9, estoque: 7 },
];

export default function Produtos() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto space-y-4">
        <Link href="/dashboard" className="text-indigo-600 hover:underline text-sm">
          ← Voltar ao dashboard
        </Link>
        <h1 className="text-2xl font-bold">Produtos</h1>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-sm text-gray-500">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Nome</th>
                <th className="p-3">Categoria</th>
                <th className="p-3">Preço</th>
                <th className="p-3">Estoque</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((p) => (
                <tr key={p.id} className="border-t">
                  <td className="p-3">{p.id}</td>
                  <td className="p-3 font-medium">{p.nome}</td>
                  <td className="p-3">{p.categoria}</td>
                  <td className="p-3">
                    {p.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                  </td>
                  <td className="p-3">
                    {p.estoque > 0 ? (
                      <span className="text-green-600">{p.estoque} un.</span>
                    ) : (
                      <span className="text-red-600">Sem estoque</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
