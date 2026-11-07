import { expect, test } from "@playwright/test";

import {
  FIRST_NOUN_PHRASE,
  open,
  PAGE_SIZE,
  positionOf,
  THIRD,
  TOTAL_EXPRESSIONS,
} from "./helpers";

test.describe("all expressions", () => {
  test("lists every expression with its position and meaning", async ({
    page,
  }) => {
    await open(page, "/expressions");

    await expect(
      page.getByText(`${TOTAL_EXPRESSIONS} expressões. Escolha uma`),
    ).toBeVisible();
    await expect(page.locator("main a")).toHaveCount(PAGE_SIZE);
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

    await page.getByRole("link", { name: new RegExp(THIRD.text) }).click();

    await expect(page).toHaveURL(new RegExp(`/\\?expression=${THIRD.id}$`));
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      THIRD.text,
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
    await expect(page.locator("main a")).toHaveCount(PAGE_SIZE);
  });

  test("filtered cards keep their original position number", async ({
    page,
  }) => {
    await open(page, "/expressions");

    await page.getByLabel("Buscar expressão").fill("pe na jaca");

    await expect(
      page.getByText(`${positionOf("pe-na-jaca")} de ${TOTAL_EXPRESSIONS}`, {
        exact: true,
      }),
    ).toBeVisible();
  });

  test("each card shows how the entry is classified", async ({ page }) => {
    await open(page, "/expressions");
    const cards = page.locator("main a");

    await expect(cards.first()).toContainText("Expressão popular");

    await page.getByLabel("Buscar expressão").fill(FIRST_NOUN_PHRASE.text);
    await expect(
      page.getByRole("link", { name: new RegExp(FIRST_NOUN_PHRASE.text) }),
    ).toContainText("Locução substantiva");
  });
});
