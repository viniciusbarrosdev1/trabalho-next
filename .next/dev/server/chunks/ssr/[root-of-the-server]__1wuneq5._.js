module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/(pages)/produtos/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Produtos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icones$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Icones.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dados.ts [app-rsc] (ecmascript)");
;
;
;
;
// As abas e a busca ficam na URL (?aba=repor&q=mouse), então funcionam até sem JavaScript
const abas = [
    {
        id: "todos",
        rotulo: "Todos",
        filtro: ()=>true
    },
    {
        id: "repor",
        rotulo: "Para repor",
        filtro: (p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["situacao"])(p) !== "ok"
    },
    {
        id: "sem-estoque",
        rotulo: "Sem estoque",
        filtro: (p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["situacao"])(p) === "sem-estoque"
    }
];
function Situacao({ p }) {
    const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["situacao"])(p);
    const estilos = {
        "sem-estoque": "bg-neg-bg text-neg-ink",
        repor: "bg-warn-bg text-warn-ink",
        ok: "bg-pos-bg text-pos-ink"
    };
    const textos = {
        "sem-estoque": "Sem estoque",
        repor: "Abaixo do mínimo",
        ok: "Em estoque"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-block rounded-full px-2 py-0.5 text-xs ${estilos[s]}`,
        children: textos[s]
    }, void 0, false, {
        fileName: "[project]/src/app/(pages)/produtos/page.tsx",
        lineNumber: 29,
        columnNumber: 10
    }, this);
}
async function Produtos({ searchParams }) {
    const params = await searchParams;
    const q = typeof params.q === "string" ? params.q.trim() : "";
    const abaAtiva = abas.find((a)=>a.id === params.aba) ?? abas[0];
    const buscados = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["produtos"].filter((p)=>!q || `${p.nome} ${p.sku} ${p.categoria}`.toLowerCase().includes(q.toLowerCase()));
    const lista = buscados.filter(abaAtiva.filtro);
    const totalEmEstoque = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["centavos"])(lista.reduce((t, p)=>t + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["valorEmEstoque"])(p), 0));
    const link = (aba)=>{
        const u = new URLSearchParams();
        if (aba !== "todos") u.set("aba", aba);
        if (q) u.set("q", q);
        const s = u.toString();
        return s ? `/produtos?${s}` : "/produtos";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-[22px] font-semibold leading-tight",
                children: "Produtos"
            }, void 0, false, {
                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 text-muted",
                children: "Preço, vendas de outubro e estoque de cada item da loja."
            }, void 0, false, {
                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Filtrar produtos",
                className: "mt-6 flex gap-6 overflow-x-auto border-b border-line",
                children: abas.map((a)=>{
                    const ativa = a.id === abaAtiva.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: link(a.id),
                        "aria-current": ativa ? "page" : undefined,
                        className: `-mb-px flex shrink-0 items-center gap-1.5 border-b-2 pb-2.5 transition-colors ${ativa ? "border-ink font-semibold text-ink" : "border-transparent text-muted hover:text-ink"}`,
                        children: [
                            a.rotulo,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "num text-muted font-normal",
                                children: buscados.filter(a.filtro).length
                            }, void 0, false, {
                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this)
                        ]
                    }, a.id, true, {
                        fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        action: "/produtos",
                        role: "search",
                        className: "relative w-full sm:w-[300px]",
                        children: [
                            abaAtiva.id !== "todos" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "aba",
                                value: abaAtiva.id
                            }, void 0, false, {
                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                lineNumber: 79,
                                columnNumber: 39
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-muted",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Icones$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IconeBusca"], {}, void 0, false, {
                                    fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "search",
                                name: "q",
                                defaultValue: q,
                                "aria-label": "Buscar nesta lista",
                                placeholder: "Nome, SKU ou categoria",
                                className: "h-9 w-full rounded-md border border-control pr-3 pl-8 placeholder:text-muted focus:border-accent focus:outline-none"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "num text-muted",
                        children: [
                            lista.length,
                            " ",
                            lista.length === 1 ? "produto" : "produtos",
                            " · ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brl"])(totalEmEstoque),
                            " em estoque"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            lista.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 rounded-lg bg-raised px-6 py-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium",
                        children: "Nenhum produto encontrado"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-muted",
                        children: [
                            q ? `Nada com “${q}” em “${abaAtiva.rotulo}”. ` : "Nenhum produto nesta aba. ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/produtos",
                                className: "text-accent hover:underline",
                                children: "Ver todos os produtos"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "mt-4 hidden w-full md:table",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "text-xs text-muted",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 text-left font-normal",
                                            children: "Produto"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 text-left font-normal",
                                            children: "Categoria"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 text-right font-normal",
                                            children: "Preço"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 text-right font-normal",
                                            children: "Vendidos em out."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 text-right font-normal",
                                            children: "Estoque"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 pl-6 text-left font-normal",
                                            children: "Situação"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2 text-right font-normal",
                                            children: "Valor em estoque"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "num",
                                children: lista.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-t border-rule transition-colors hover:bg-raised",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "h-14",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block font-medium",
                                                        children: p.nome
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-xs text-muted",
                                                        children: p.sku
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "text-muted",
                                                children: p.categoria
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "text-right",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brl"])(p.preco)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "text-right",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inteiro"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["vendidosNoMes"])(p))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "text-right",
                                                children: [
                                                    p.estoque,
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted",
                                                        children: [
                                                            "/ mín. ",
                                                            p.minimo
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "pl-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Situacao, {
                                                    p: p
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: `text-right ${p.estoque === 0 ? "text-muted" : ""}`,
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brl"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["valorEmEstoque"])(p))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "num mt-4 md:hidden",
                        children: lista.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "border-t border-rule py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: p.nome
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dados$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brl"])(p.preco)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 flex items-center justify-between gap-3 text-[13px] text-muted",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    p.estoque,
                                                    " un. / mín. ",
                                                    p.minimo,
                                                    " · ",
                                                    p.sku
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Situacao, {
                                                p: p
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                                lineNumber: 147,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(pages)/produtos/page.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(pages)/produtos/page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(pages)/produtos/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(pages)/produtos/page.tsx [app-rsc] (ecmascript)"));
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1wuneq5._.js.map