# Expressões do Brasil

App que mostra expressões populares brasileiras, uma por vez: significado, origem, por que se diz assim e um exemplo de uso. Um botão "Próximo" passa para a seguinte, e as expressões favoritas ficam salvas no navegador.

## Telas

- **Início** (`/`): uma expressão por vez, com o botão "Próximo". Abre uma expressão específica com `/?expression=<id>`.
- **Todas** (`/expressions`): lista com busca por texto ou significado.
- **Favoritas** (`/favorites`): as expressões marcadas com a estrela.

## Tecnologias

Next.js, React, Tailwind CSS e shadcn/ui. Não tem backend nem banco de dados: as expressões ficam em [src/data/expressions.ts](src/data/expressions.ts) e as favoritas no `localStorage`. As versões estão no [package.json](package.json).

## Como rodar

Use [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

Os comandos estão em [package.json](package.json#L6-L15). Os principais:

- `pnpm dev`: servidor de desenvolvimento.
- `pnpm build`: build de produção.
- `pnpm lint`: ESLint.
- `pnpm format`: formata o código com Prettier.
- `pnpm test:e2e`: testes de ponta a ponta com Playwright.

## Testes

Os testes e2e ficam em [e2e/](e2e) e cobrem desktop e celular. O Playwright sobe o app sozinho na porta 3100. Localmente ele usa o Chrome instalado; no CI, rode antes `pnpm exec playwright install`.

```bash
pnpm test:e2e       # roda tudo
pnpm test:e2e:ui    # abre o modo interativo
```

## Para quem contribui

As convenções do projeto (idioma, tokens de design, commits) estão no [AGENTS.md](AGENTS.md).
