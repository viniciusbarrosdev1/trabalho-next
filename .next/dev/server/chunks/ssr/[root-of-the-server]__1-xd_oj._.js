module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/(pages)/dashboard/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GraficoVendas$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GraficoVendas.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dados.ts [app-rsc] (ecmascript)");
;
;
;
;
function Dashboard() {
    const crescimento = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["variacao"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mesAtual"].valor, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mesAnterior"].valor);
    const semEstoque = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["produtos"].filter((p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["situacao"])(p) === "sem-estoque");
    const abaixoDoMinimo = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["produtos"].filter((p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["situacao"])(p) === "repor");
    // estoque: quem acaba primeiro aparece em cima
    const porUrgencia = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["produtos"]
    ].sort((a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["diasDeEstoque"])(a) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["diasDeEstoque"])(b));
    // mais vendidos: pela receita do mês
    const maisVendidos = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["produtos"]
    ].sort((a, b)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["receitaNoMes"])(b) - (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["receitaNoMes"])(a));
    const maiorReceita = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["receitaNoMes"])(maisVendidos[0]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-[22px] font-semibold leading-tight",
                                children: "Outubro na loja"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 max-w-[640px] text-muted",
                                children: [
                                    "Vendas ",
                                    crescimento.pct >= 0 ? "subiram" : "caíram",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `num font-medium ${crescimento.pct >= 0 ? "text-positive" : "text-negative"}`,
                                        children: crescimento.texto
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    "sobre setembro.",
                                    " ",
                                    semEstoque.map((p)=>p.nome).join(", "),
                                    " sem estoque e",
                                    " ",
                                    abaixoDoMinimo.map((p)=>p.nome).join(", "),
                                    " abaixo do mínimo."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/produtos?aba=repor",
                        className: "inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-ink px-4 font-medium text-surface transition-opacity hover:opacity-85 active:translate-y-px",
                        children: [
                            "Ver ",
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["paraRepor"].length,
                            " produtos para repor"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-labelledby": "t-vendas",
                className: "rounded-lg border border-line p-4 sm:p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "t-vendas",
                        className: "sr-only",
                        children: "Vendas dos últimos seis meses"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GraficoVendas$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        dados: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resumoMensal"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "mt-8 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                                className: "mb-1 text-left font-semibold",
                                children: "Vendas por categoria"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "text-xs text-muted",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 text-left font-normal",
                                            children: "Categoria"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 text-right font-normal",
                                            children: "Setembro"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 text-right font-normal",
                                            children: "Outubro"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 text-right font-normal",
                                            children: "Variação"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "num",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["vendasPorCategoria"].map((c)=>{
                                        const v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["variacao"])(c.atual, c.anterior);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "border-t border-rule",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "h-9",
                                                    children: c.categoria
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right text-muted",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brl"])(c.anterior)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brl"])(c.atual)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: `text-right ${v.pct >= 0 ? "text-positive" : "text-negative"}`,
                                                    children: v.texto
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, c.categoria, true, {
                                            fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-t border-line font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "h-9",
                                                children: "Total"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "text-right",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brl"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mesAnterior"].valor)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "text-right",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brl"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mesAtual"].valor)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `text-right ${crescimento.pct >= 0 ? "text-positive" : "text-negative"}`,
                                                children: crescimento.texto
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-labelledby": "t-estoque",
                        className: "rounded-lg border border-line p-4 sm:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "t-estoque",
                                        className: "font-semibold",
                                        children: "Quanto o estoque aguenta"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-muted",
                                        children: "no ritmo de outubro"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-4 flex flex-col gap-4",
                                children: porUrgencia.map((p)=>{
                                    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["situacao"])(p);
                                    const escala = p.minimo * 3; // a barra cheia = 3x o mínimo
                                    const dias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["diasDeEstoque"])(p);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-baseline justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate",
                                                        children: p.nome
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `num shrink-0 text-right ${s === "sem-estoque" ? "font-medium text-negative" : s === "repor" ? "font-medium text-warning" : "text-muted"}`,
                                                        children: s === "sem-estoque" ? "Acabou" : `${dias} dias`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative mt-1.5 h-2 rounded-full bg-raised",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `h-full rounded-full ${s === "ok" ? "bg-accent" : s === "repor" ? "bg-warning" : ""}`,
                                                        style: {
                                                            width: `${Math.min(p.estoque / escala, 1) * 100}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -top-1 h-4 w-0.5 rounded bg-ink",
                                                        style: {
                                                            left: `${p.minimo / escala * 100}%`
                                                        },
                                                        title: `Mínimo: ${p.minimo} un.`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "num mt-1 text-xs text-muted",
                                                children: [
                                                    p.estoque,
                                                    " un. em estoque · mínimo ",
                                                    p.minimo,
                                                    " · vendeu ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["vendidosNoMes"])(p),
                                                    " em outubro"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-labelledby": "t-mais",
                        className: "rounded-lg border border-line p-4 sm:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "t-mais",
                                        className: "font-semibold",
                                        children: "Mais vendidos em outubro"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/produtos",
                                        className: "text-xs text-accent hover:underline",
                                        children: "Ver todos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "mt-4 flex flex-col gap-4",
                                children: maisVendidos.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-baseline justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "truncate",
                                                        children: p.nome
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "num shrink-0",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brl"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["receitaNoMes"])(p))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                lineNumber: 146,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1.5 h-2 rounded-full bg-raised",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full rounded-full bg-bar",
                                                    style: {
                                                        width: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["receitaNoMes"])(p) / maiorReceita * 100}%`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "num mt-1 text-xs text-muted",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inteiro"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["vendidosNoMes"])(p)),
                                                    " un. · ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brl"])(p.preco),
                                                    " cada · ",
                                                    p.categoria
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(pages)/dashboard/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(pages)/dashboard/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(pages)/dashboard/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/src/components/GraficoVendas.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/GraficoVendas.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/GraficoVendas.tsx", "default");
}),
"[project]/src/components/GraficoVendas.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/GraficoVendas.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/GraficoVendas.tsx <module evaluation>", "default");
}),
"[project]/src/components/GraficoVendas.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GraficoVendas$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/GraficoVendas.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GraficoVendas$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/GraficoVendas.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GraficoVendas$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/dados.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1-xd_oj._.js.map