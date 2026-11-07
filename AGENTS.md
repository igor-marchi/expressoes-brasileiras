# Expressões do Brasil

App em Next.js que mostra expressões populares brasileiras, uma por vez, com botão "Próximo" e favoritas salvas no navegador.

## Onde está cada coisa

- Comandos (dev, build, lint, e2e): [scripts do package.json](package.json#L6-L15). Use sempre `pnpm`.
- Stack e versões: [package.json](package.json). Sem backend nem banco.
- Rotas: [src/app/](src/app). A home aceita `?expression=<id>` ([page.tsx](src/app/page.tsx)).
- Dados: [expressions.ts](src/data/expressions.ts) (expressões), [noun-phrases.ts](src/data/noun-phrases.ts) (locuções substantivas) e [slang.ts](src/data/slang.ts) (gírias), cada lista na sua ordem de fama. [entries.ts](src/data/entries.ts) junta as três alternando uma de cada (expressão, locução, gíria, expressão…) e, quando uma acaba, segue com as outras. As listas não dependem uma da outra. Tipos em [entry.ts](src/data/entry.ts).
- Favoritas: [use-favorites.ts](src/hooks/use-favorites.ts).
- Filtro de tipo (lista e tela de expressão; guarda no navegador só os tipos ocultos, para um tipo novo já vir ligado): [use-kind-filter.ts](src/hooks/use-kind-filter.ts) e [kind-filter.tsx](src/components/kind-filter.tsx).
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

## Conteúdo das descrições

Vale para todo texto de expressão, locução e gíria em [src/data](src/data):

- Sem ruído. Explique a origem direto, sem avisar de onde ela vem nem o quanto é certa. Nada de "a origem não é documentada", "a origem não é certa", "segundo a versão mais comum", "diz-se que" ou "conta-se que".
- Sem aviso de sensibilidade, de polêmica nem de uso. Explique a origem como ela é, mesmo em expressões sensíveis.
- Só informação que a pesquisa sustenta. Não invente detalhe para preencher um campo.
- Cada campo diz uma coisa só: `meaning` o sentido, `origin` de onde vem, `why` por que a imagem faz sentido, `example` uma frase de uso.
- Frases curtas, em pt-BR, no indicativo.

## Convenções

- Texto de interface em pt-BR. O resto (rotas, arquivos, identificadores, código) em inglês.
- Não use hex solto nos componentes; use os tokens. O tema claro é o padrão, o escuro existe só em [`.dark`](src/app/globals.css#L87).
- Ler `searchParams` exige `<Suspense>` por causa dos Cache Components, como em [page.tsx](src/app/page.tsx#L20).
- O cursor dos botões já vem do [CSS global](src/app/globals.css#L136). Não repita nos componentes.
- O `E2E=1` do [playwright.config.ts](playwright.config.ts#L36) esconde o indicador do Next dev ([next.config.ts](next.config.ts#L5)), que cobria botões no mobile.
- Ao mexer em tela ou comportamento, atualize o design (ver acima) e os testes em `e2e/`. Antes de concluir, rode `pnpm format`, `pnpm lint`, `pnpm exec tsc --noEmit` e `pnpm test:e2e`.
- Commits: sempre no padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) (ex.: `feat: adicionar página de favoritas`, `fix: corrigir cursor dos botões`). Só commite e faça push quando o usuário pedir.
- Formatação: Prettier, configurado em [.prettierrc.json](.prettierrc.json). Ele ordena as classes do Tailwind.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
