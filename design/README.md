# Design

Cópia dos arquivos do artefato de design: https://claude.ai/artifact/CAypXFxEYz2DocA4wYSJvm (privado, só o dono abre).

O artefato é a fonte da verdade da interface. Estes arquivos ficam no repositório para o design acompanhar o código no histórico do git.

| Arquivo | Tela | Código |
| --- | --- | --- |
| [Main.dc.html](Main.dc.html) | Expressão (desktop) | [expression-viewer.tsx](../src/components/expression-viewer.tsx) |
| [Mobile.dc.html](Mobile.dc.html) | Expressão (celular) | [expression-viewer.tsx](../src/components/expression-viewer.tsx) |
| [Todas.dc.html](Todas.dc.html) | Todas as expressões | [expression-list.tsx](../src/components/expression-list.tsx) |
| [Favoritas.dc.html](Favoritas.dc.html) | Favoritas | [favorites-list.tsx](../src/components/favorites-list.tsx) |
| [FavoritasVazio.dc.html](FavoritasVazio.dc.html) | Favoritas sem itens | [favorites-list.tsx](../src/components/favorites-list.tsx) |
| [canvas.json](canvas.json) | Posição das telas no canvas | |

O cabeçalho aparece em todas as telas: [site-header.tsx](../src/components/site-header.tsx).

## Como atualizar

1. Altere o artefato primeiro (publique no mesmo link).
2. Copie os arquivos alterados para esta pasta, sem editá-los à mão: o conteúdo precisa ficar idêntico ao do artefato.
3. Só então altere o código.
4. Commite design e código juntos.

Esta pasta fica fora do Prettier ([.prettierignore](../.prettierignore)) para os arquivos não mudarem de formato ao serem copiados.
