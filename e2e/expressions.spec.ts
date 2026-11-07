import { expect, test } from "@playwright/test";

import { open, TOTAL_EXPRESSIONS } from "./helpers";

test.describe("all expressions", () => {
  test("lists every expression with its position and meaning", async ({
    page,
  }) => {
    await open(page, "/expressions");

    await expect(
      page.getByText(`${TOTAL_EXPRESSIONS} expressões. Escolha uma`),
    ).toBeVisible();
    await expect(page.locator("main a")).toHaveCount(TOTAL_EXPRESSIONS);
    await expect(
      page.getByText(`1 de ${TOTAL_EXPRESSIONS}`, { exact: true }),
    ).toBeVisible();
    await expect(
      page.getByText("Fracassar, ver um plano dar errado."),
    ).toBeVisible();
  });

  test("clicking a card opens that expression on the home screen", async ({
    page,
  }) => {
    await open(page, "/expressions");

    await page.getByRole("link", { name: /Ficar a ver navios/ }).click();

    await expect(page).toHaveURL(/\/\?expression=ver-navios$/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Ficar a ver navios",
    );
  });

  test("search filters by title", async ({ page }) => {
    await open(page, "/expressions");

    await page.getByLabel("Buscar expressão").fill("cavalinho");

    await expect(page.locator("main a")).toHaveCount(1);
    await expect(
      page.getByRole("link", { name: /Tirar o cavalinho da chuva/ }),
    ).toBeVisible();
  });

  test("search ignores accents and letter case", async ({ page }) => {
    await open(page, "/expressions");

    await page.getByLabel("Buscar expressão").fill("PE NA JACA");

    await expect(page.getByRole("link", { name: /Pé na jaca/ })).toBeVisible();
    await expect(page.locator("main a")).toHaveCount(1);
  });

  test("search also matches the meaning", async ({ page }) => {
    await open(page, "/expressions");

    await page
      .getByLabel("Buscar expressão")
      .fill("perder a compostura em publico");

    await expect(page.locator("main a")).toHaveCount(1);
    await expect(
      page.getByRole("link", { name: /Rodar a baiana/ }),
    ).toBeVisible();
  });

  test("search with no match shows an empty message", async ({ page }) => {
    await open(page, "/expressions");

    await page.getByLabel("Buscar expressão").fill("xyz inexistente");

    await expect(page.getByText("Nenhuma expressão encontrada.")).toBeVisible();
    await expect(page.locator("main a")).toHaveCount(0);
  });

  test("clearing the search brings every card back", async ({ page }) => {
    await open(page, "/expressions");
    const search = page.getByLabel("Buscar expressão");

    await search.fill("cavalinho");
    await expect(page.locator("main a")).toHaveCount(1);

    await search.fill("");
    await expect(page.locator("main a")).toHaveCount(TOTAL_EXPRESSIONS);
  });

  test("filtered cards keep their original position number", async ({
    page,
  }) => {
    await open(page, "/expressions");

    await page.getByLabel("Buscar expressão").fill("pe na jaca");

    await expect(
      page.getByText(`4 de ${TOTAL_EXPRESSIONS}`, { exact: true }),
    ).toBeVisible();
  });
});
