(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/GraficoVendas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GraficoVendas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dados.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client"; // as abas (Vendas / Pedidos / Ticket médio) trocam o gráfico com um clique
;
;
const metricas = [
    {
        chave: "valor",
        rotulo: "Vendas",
        formatar: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brl"],
        eixo: (n)=>n === 0 ? "0" : `${(n / 1000).toLocaleString("pt-BR", {
                maximumFractionDigits: 1
            })} mil`
    },
    {
        chave: "pedidos",
        rotulo: "Pedidos",
        formatar: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inteiro"],
        eixo: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inteiro"]
    },
    {
        chave: "ticket",
        rotulo: "Ticket médio",
        formatar: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brl"],
        eixo: (n)=>`R$ ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inteiro"])(n)}`
    }
];
// escolhe um topo "redondo" para o eixo (ex.: 48.000 -> 60.000) e o passo das linhas
function escala(maior) {
    const bruto = maior / 4;
    const potencia = 10 ** Math.floor(Math.log10(bruto));
    const passo = [
        1,
        2,
        2.5,
        5,
        10
    ].map((m)=>m * potencia).find((p)=>p >= bruto);
    const topo = Math.ceil(maior / passo) * passo;
    const linhas = Array.from({
        length: topo / passo + 1
    }, (_, i)=>i * passo);
    return {
        topo,
        linhas
    };
}
function GraficoVendas({ dados }) {
    _s();
    const [ativa, setAtiva] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("valor");
    const metrica = metricas.find((m)=>m.chave === ativa);
    const atual = dados[dados.length - 1];
    const anterior = dados[dados.length - 2];
    const valores = dados.map((d)=>d[ativa]);
    const { topo, linhas } = escala(Math.max(...valores));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "tablist",
                "aria-label": "Métrica do gráfico",
                className: "grid grid-cols-3 border-b border-rule",
                children: metricas.map((m)=>{
                    const selecionada = m.chave === ativa;
                    const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variacao"])(atual[m.chave], anterior[m.chave]);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        role: "tab",
                        type: "button",
                        "aria-selected": selecionada,
                        onClick: ()=>setAtiva(m.chave),
                        className: `-mb-px border-b-2 px-0 pt-1 pb-4 text-left transition-colors sm:pr-6 ${selecionada ? "border-ink" : "border-transparent hover:border-control"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `block font-semibold ${selecionada ? "text-ink" : "text-muted"}`,
                                children: m.rotulo
                            }, void 0, false, {
                                fileName: "[project]/src/components/GraficoVendas.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "num mt-1 block text-[18px] leading-tight text-ink lg:text-[28px]",
                                children: m.formatar(atual[m.chave])
                            }, void 0, false, {
                                fileName: "[project]/src/components/GraficoVendas.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "num mt-1 block text-xs text-muted",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: v.pct >= 0 ? "text-positive" : "text-negative",
                                        children: v.texto
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GraficoVendas.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: [
                                            " vs ",
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mesesPorExtenso"][dados.length - 2]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GraficoVendas.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GraficoVendas.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this)
                        ]
                    }, m.chave, true, {
                        fileName: "[project]/src/components/GraficoVendas.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/GraficoVendas.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                className: "mt-6",
                "aria-label": `${metrica.rotulo} por mês`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-[220px] w-14 shrink-0 text-xs text-muted",
                                children: linhas.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "num absolute right-3 translate-y-1/2",
                                        style: {
                                            bottom: `${l / topo * 100}%`
                                        },
                                        children: metrica.eixo(l)
                                    }, l, false, {
                                        fileName: "[project]/src/components/GraficoVendas.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/GraficoVendas.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-[220px] min-w-0 flex-1",
                                children: [
                                    linhas.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-x-0 h-px bg-rule",
                                            style: {
                                                bottom: `${l / topo * 100}%`
                                            }
                                        }, l, false, {
                                            fileName: "[project]/src/components/GraficoVendas.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-end gap-2 sm:gap-4",
                                        children: dados.map((d, i)=>{
                                            const eAtual = i === dados.length - 1;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "group flex h-full flex-1 flex-col items-center justify-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `num mb-1.5 hidden text-xs whitespace-nowrap sm:block ${eAtual ? "font-semibold text-ink" : "text-muted"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "hidden xl:inline",
                                                                children: metrica.formatar(d[ativa])
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GraficoVendas.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "xl:hidden",
                                                                children: metrica.eixo(d[ativa])
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/GraficoVendas.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/GraficoVendas.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        title: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mesesPorExtenso"][i]}: ${metrica.formatar(d[ativa])}`,
                                                        className: `w-full max-w-14 rounded-t-[3px] transition-[height,background-color] duration-300 ${eAtual ? "bg-accent" : "bg-bar group-hover:bg-control"}`,
                                                        style: {
                                                            height: `${d[ativa] / topo * 100}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/GraficoVendas.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, d.mes, true, {
                                                fileName: "[project]/src/components/GraficoVendas.tsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GraficoVendas.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GraficoVendas.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GraficoVendas.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex gap-2 pl-14 text-xs text-muted sm:gap-4",
                        children: dados.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `flex-1 text-center ${i === dados.length - 1 ? "font-semibold text-ink" : ""}`,
                                children: d.mes
                            }, d.mes, false, {
                                fileName: "[project]/src/components/GraficoVendas.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/GraficoVendas.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GraficoVendas.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GraficoVendas.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(GraficoVendas, "i7gm5z6CdThNxV6O23J5+ZdwpSk=");
_c = GraficoVendas;
var _c;
__turbopack_context__.k.register(_c, "GraficoVendas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/dados.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Dados de exemplo da loja (sem banco de dados).
// Regra: todo total é CALCULADO a partir das linhas, nunca digitado à mão,
// assim os números da tela sempre batem entre si.
__turbopack_context__.s([
    "brl",
    ()=>brl,
    "categorias",
    ()=>categorias,
    "centavos",
    ()=>centavos,
    "diasDeEstoque",
    ()=>diasDeEstoque,
    "inteiro",
    ()=>inteiro,
    "mesAnterior",
    ()=>mesAnterior,
    "mesAtual",
    ()=>mesAtual,
    "meses",
    ()=>meses,
    "mesesPorExtenso",
    ()=>mesesPorExtenso,
    "paraRepor",
    ()=>paraRepor,
    "produtos",
    ()=>produtos,
    "receitaNoMes",
    ()=>receitaNoMes,
    "resumoMensal",
    ()=>resumoMensal,
    "situacao",
    ()=>situacao,
    "valorEmEstoque",
    ()=>valorEmEstoque,
    "variacao",
    ()=>variacao,
    "vendasPorCategoria",
    ()=>vendasPorCategoria,
    "vendidosNoMes",
    ()=>vendidosNoMes
]);
const meses = [
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out"
];
const mesesPorExtenso = [
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro"
];
const DIAS_NO_MES_ATUAL = 31; // outubro
const produtos = [
    {
        id: 1,
        sku: "NB-G15",
        nome: "Notebook Gamer",
        categoria: "Informática",
        preco: 4500,
        estoque: 12,
        minimo: 4,
        vendidos: [
            3,
            4,
            3,
            5,
            4,
            5
        ]
    },
    {
        id: 2,
        sku: "MS-W20",
        nome: "Mouse Sem Fio",
        categoria: "Periféricos",
        preco: 89.9,
        estoque: 54,
        minimo: 20,
        vendidos: [
            40,
            46,
            44,
            55,
            50,
            62
        ]
    },
    {
        id: 3,
        sku: "TC-M87",
        nome: "Teclado Mecânico",
        categoria: "Periféricos",
        preco: 249.9,
        estoque: 0,
        minimo: 8,
        vendidos: [
            15,
            17,
            16,
            21,
            20,
            24
        ]
    },
    {
        id: 4,
        sku: "MN-24F",
        nome: "Monitor 24\"",
        categoria: "Informática",
        preco: 899,
        estoque: 20,
        minimo: 6,
        vendidos: [
            6,
            7,
            6,
            9,
            9,
            10
        ]
    },
    {
        id: 5,
        sku: "HS-U70",
        nome: "Headset USB",
        categoria: "Áudio",
        preco: 159.9,
        estoque: 7,
        minimo: 10,
        vendidos: [
            18,
            20,
            19,
            25,
            24,
            30
        ]
    }
];
// Pedidos por mês (um pedido pode ter vários itens, então é sempre <= unidades)
const pedidosPorMes = [
    70,
    80,
    75,
    95,
    90,
    108
];
const centavos = (n)=>Math.round(n * 100) / 100;
const somar = (lista)=>centavos(lista.reduce((a, b)=>a + b, 0));
const brl = (n)=>n.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
const inteiro = (n)=>n.toLocaleString("pt-BR");
function variacao(atual, anterior) {
    const pct = (atual - anterior) / anterior * 100;
    const texto = Math.abs(pct).toLocaleString("pt-BR", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });
    return {
        pct,
        texto: `${pct >= 0 ? "+" : "−"}${texto}%`
    };
}
const resumoMensal = meses.map((mes, i)=>{
    const valor = somar(produtos.map((p)=>p.preco * p.vendidos[i]));
    const pedidos = pedidosPorMes[i];
    const unidades = produtos.reduce((t, p)=>t + p.vendidos[i], 0);
    return {
        mes,
        valor,
        pedidos,
        unidades,
        ticket: centavos(valor / pedidos)
    };
});
const ATUAL = meses.length - 1; // outubro
const mesAtual = resumoMensal[ATUAL];
const mesAnterior = resumoMensal[ATUAL - 1];
const categorias = [
    "Informática",
    "Periféricos",
    "Áudio"
];
const vendasPorCategoria = categorias.map((categoria)=>{
    const daCategoria = produtos.filter((p)=>p.categoria === categoria);
    return {
        categoria,
        anterior: somar(daCategoria.map((p)=>p.preco * p.vendidos[ATUAL - 1])),
        atual: somar(daCategoria.map((p)=>p.preco * p.vendidos[ATUAL]))
    };
});
function situacao(p) {
    if (p.estoque === 0) return "sem-estoque";
    if (p.estoque < p.minimo) return "repor";
    return "ok";
}
function diasDeEstoque(p) {
    const porDia = p.vendidos[ATUAL] / DIAS_NO_MES_ATUAL;
    return Math.floor(p.estoque / porDia);
}
const vendidosNoMes = (p)=>p.vendidos[ATUAL];
const receitaNoMes = (p)=>centavos(p.preco * p.vendidos[ATUAL]);
const valorEmEstoque = (p)=>centavos(p.preco * p.estoque);
const paraRepor = produtos.filter((p)=>situacao(p) !== "ok");
// Conferências: se algum número não bater, aparece um aviso no console
console.assert(somar(vendasPorCategoria.map((c)=>c.atual)) === mesAtual.valor, "Soma das categorias diferente do total do mês");
console.assert(resumoMensal.every((m)=>m.pedidos <= m.unidades), "Mais pedidos do que unidades vendidas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_00rwn3x._.js.map