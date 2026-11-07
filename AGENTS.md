# Expressões do Brasil

App em Next.js que mostra expressões populares brasileiras, uma por vez, com botão "Próximo" e favoritas salvas no navegador.

## Onde está cada coisa

- Comandos (dev, build, lint, e2e): [scripts do package.json](package.json#L6-L15). Use sempre `pnpm`.
- Stack e versões: [package.json](package.json). Sem backend nem banco.
- Rotas: [src/app/](src/app). A home aceita `?expression=<id>` ([page.tsx](src/app/page.tsx)).
- Dados e tipo `Expression`: [src/data/expressions.ts](src/data/expressions.ts).
- Favoritas: [use-favorites.ts](src/hooks/use-favorites.ts).
- Tokens de cor, fonte e raio: [globals.css](src/app/globals.css#L51).
- Testes e2e: [e2e/](e2e) e [playwright.config.ts](playwright.config.ts).
- Design (artefato das telas): [design/](design). O mapa de telas para código está em [design/README.md](design/README.md).

## Design e código sempre em sincronia

Toda alteração que mexe na interface (layout, cores, textos de tela, componentes, estados, telas novas ou removidas) começa no artefato de design, nunca no código. O fluxo está em [design/README.md](design/README.md#como-atualizar):

1. Altere e publique o artefato.
2. Copie os arquivos alterados para [design/](design).
3. Só depois altere o código, para ficar igual ao design.
4. Commite design e código juntos.

Se o pedido pedir mudança de interface, faça o passo 1 antes de editar qualquer arquivo em `src/`. Se encontrar código e design diferentes, avise o usuário e corrija os dois para o mesmo estado, sem deixar um deles desatualizado.

## Convenções

- Texto de interface em pt-BR. O resto (rotas, arquivos, identificadores, código) em inglês.
- Não use hex solto nos componentes; use os tokens. O tema claro é o padrão, o escuro existe só em [`.dark`](src/app/globals.css#L87).
- Ler `searchParams` exige `<Suspense>` por causa dos Cache Components, como em [page.tsx](src/app/page.tsx#L20).
- O cursor dos botões já vem do [CSS global](src/app/globals.css#L136). Não repita nos componentes.
- O `E2E=1` do [playwright.config.ts](playwright.config.ts#L36) esconde o indicador do Next dev ([next.config.ts](next.config.ts#L5)), que cobria botões no mobile.
- Ao mexer em tela ou comportamento, atualize o design (ver acima) e os testes em `e2e/`. Antes de concluir, rode `pnpm format`, `pnpm lint`, `pnpm exec tsc --noEmit` e `pnpm test:e2e`.
- Commits: sempre no padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) (ex.: `feat: adicionar página de favoritas`, `fix: corrigir cursor dos botões`). Neste projeto, ao concluir uma alteração, faça sempre o commit e o push para o `origin/main`, sem esperar novo pedido (autorização do dono do repositório). Isso vale só para este repositório e só para commit e push em `main`.
- Formatação: Prettier, configurado em [.prettierrc.json](.prettierrc.json). Ele ordena as classes do Tailwind.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
