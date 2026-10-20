O que é NEXT

Next é um frameworkr baseado em react, ele ajuda com roteamento, otimizações, estrutura de pastas prontas, servidor, etc.

Começando pelas rotas
Você não configura rotas, as pastas viram URL, e o arquivo page.tsx dela vira página.

aqui nos temos a rota de
/login
/

e dentro de (pages)
/dashboard
/produtos

essas são as rotas do projeto

(pages) com parenteses é só uma pasta de orgsanização, ela nao entra na URL

layout.tsx é a moldura que envolve todas as páginas, o html e o body.

global.css é o css global que importa o tailwind.

2. cada página é uma função que retorna HTML (JSX)
o export default é o que o next procura para saber o que mostrar.


3. Server Component x Client Component
No Next novo, todo component  roda no servidor por padrão. o Servidor monta o HTML e envia pronto, o que é mais rápido.

O servidor não pode ter interação (digitarm clicar, guardar estado); Para isso voce escreve "use client" na primeira linha . FOi o que fiz no login, porque ele usa useState e eventos.

4. Navegação
Link, troca sem recarregar a página.
router.push("/rota") faz a mesma troca, mas pelo código. o Login usa isso depois de validar a senha

sinceramente, nao entendi a diferença