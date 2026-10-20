// Dados de exemplo da loja (sem banco de dados).
// Regra: todo total é CALCULADO a partir das linhas, nunca digitado à mão,
// assim os números da tela sempre batem entre si.

export type Categoria = "Informática" | "Periféricos" | "Áudio";

export type Produto = {
  id: number;
  sku: string;
  nome: string;
  categoria: Categoria;
  preco: number; // em R$
  estoque: number; // unidades na loja hoje
  minimo: number; // abaixo disso, precisa repor
  vendidos: number[]; // unidades vendidas por mês, na ordem de `meses`
};

export const meses = ["Mai", "Jun", "Jul", "Ago", "Set", "Out"];
export const mesesPorExtenso = ["maio", "junho", "julho", "agosto", "setembro", "outubro"];
const DIAS_NO_MES_ATUAL = 31; // outubro

export const produtos: Produto[] = [
  { id: 1, sku: "NB-G15", nome: "Notebook Gamer", categoria: "Informática", preco: 4500, estoque: 12, minimo: 4, vendidos: [3, 4, 3, 5, 4, 5] },
  { id: 2, sku: "MS-W20", nome: "Mouse Sem Fio", categoria: "Periféricos", preco: 89.9, estoque: 54, minimo: 20, vendidos: [40, 46, 44, 55, 50, 62] },
  { id: 3, sku: "TC-M87", nome: "Teclado Mecânico", categoria: "Periféricos", preco: 249.9, estoque: 0, minimo: 8, vendidos: [15, 17, 16, 21, 20, 24] },
  { id: 4, sku: "MN-24F", nome: "Monitor 24\"", categoria: "Informática", preco: 899, estoque: 20, minimo: 6, vendidos: [6, 7, 6, 9, 9, 10] },
  { id: 5, sku: "HS-U70", nome: "Headset USB", categoria: "Áudio", preco: 159.9, estoque: 7, minimo: 10, vendidos: [18, 20, 19, 25, 24, 30] },
];

// Pedidos por mês (um pedido pode ter vários itens, então é sempre <= unidades)
const pedidosPorMes = [70, 80, 75, 95, 90, 108];

// ---------- funções de ajuda ----------

// arredonda para centavos (evita 0.1 + 0.2 = 0.30000000000000004)
export const centavos = (n: number) => Math.round(n * 100) / 100;
const somar = (lista: number[]) => centavos(lista.reduce((a, b) => a + b, 0));

export const brl = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const inteiro = (n: number) => n.toLocaleString("pt-BR");

// variação percentual com sinal: "+19,7%" ou "−3,2%"
export function variacao(atual: number, anterior: number) {
  const pct = ((atual - anterior) / anterior) * 100;
  const texto = Math.abs(pct).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  return { pct, texto: `${pct >= 0 ? "+" : "−"}${texto}%` };
}

// ---------- números calculados ----------

export const resumoMensal = meses.map((mes, i) => {
  const valor = somar(produtos.map((p) => p.preco * p.vendidos[i]));
  const pedidos = pedidosPorMes[i];
  const unidades = produtos.reduce((t, p) => t + p.vendidos[i], 0);
  return { mes, valor, pedidos, unidades, ticket: centavos(valor / pedidos) };
});

const ATUAL = meses.length - 1; // outubro
export const mesAtual = resumoMensal[ATUAL];
export const mesAnterior = resumoMensal[ATUAL - 1];

export const categorias: Categoria[] = ["Informática", "Periféricos", "Áudio"];
export const vendasPorCategoria = categorias.map((categoria) => {
  const daCategoria = produtos.filter((p) => p.categoria === categoria);
  return {
    categoria,
    anterior: somar(daCategoria.map((p) => p.preco * p.vendidos[ATUAL - 1])),
    atual: somar(daCategoria.map((p) => p.preco * p.vendidos[ATUAL])),
  };
});

export type SituacaoEstoque = "sem-estoque" | "repor" | "ok";

export function situacao(p: Produto): SituacaoEstoque {
  if (p.estoque === 0) return "sem-estoque";
  if (p.estoque < p.minimo) return "repor";
  return "ok";
}

// quantos dias o estoque dura no ritmo de vendas do mês atual
export function diasDeEstoque(p: Produto) {
  const porDia = p.vendidos[ATUAL] / DIAS_NO_MES_ATUAL;
  return Math.floor(p.estoque / porDia);
}

export const vendidosNoMes = (p: Produto) => p.vendidos[ATUAL];
export const receitaNoMes = (p: Produto) => centavos(p.preco * p.vendidos[ATUAL]);
export const valorEmEstoque = (p: Produto) => centavos(p.preco * p.estoque);

export const paraRepor = produtos.filter((p) => situacao(p) !== "ok");

// Conferências: se algum número não bater, aparece um aviso no console
console.assert(
  somar(vendasPorCategoria.map((c) => c.atual)) === mesAtual.valor,
  "Soma das categorias diferente do total do mês"
);
console.assert(
  resumoMensal.every((m) => m.pedidos <= m.unidades),
  "Mais pedidos do que unidades vendidas"
);
