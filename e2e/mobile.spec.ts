import { expect, test } from "@playwright/test";

import { open, PAGE_SIZE, TOTAL_EXPRESSIONS, TOTAL_PAGES } from "./helpers";

test.describe("mobile", () => {
  test("desktop nav is hidden and the menu button is shown", async ({
    page,
  }) => {
    await open(page, "/");

    await expect(
      page.getByRole("button", { name: "Abrir menu" }),
    ).toBeVisible();
    await expect(
      page.getByRole("banner").getByRole("link", { name: "Todas" }),
    ).toBeHidden();
  });

  test("menu button opens and closes the menu", async ({ page }) => {
    await open(page, "/");
    const toggle = page.getByRole("button", { name: "Abrir menu" });

    await toggle.click();
    await expect(
      page.getByRole("button", { name: "Fechar menu" }),
    ).toHaveAttribute("aria-expanded", "true");
    await expect(
      page.getByRole("banner").getByRole("link", { name: "Favoritas" }),
    ).toBeVisible();

    await page.getByRole("button", { name: "Fechar menu" }).click();
    await expect(
      page.getByRole("banner").getByRole("link", { name: "Favoritas" }),
    ).toBeHidden();
  });

  test("choosing a menu link navigates and closes the menu", async ({
    page,
  }) => {
    await open(page, "/");
    await page.getByRole("button", { name: "Abrir menu" }).click();

    await page.getByRole("banner").getByRole("link", { name: "Todas" }).click();

    await expect(page).toHaveURL(/\/expressions$/);
    await expect(
      page.getByRole("button", { name: "Abrir menu" }),
    ).toBeVisible();
    await expect(
      page.getByRole("banner").getByRole("link", { name: "Favoritas" }),
    ).toBeHidden();
  });

  test("Próximo works and the page does not scroll sideways", async ({
    page,
  }) => {
    await open(page, "/");

    await page.getByRole("button", { name: "Próximo" }).click();

    await expect(page.getByText(`2 de ${TOTAL_EXPRESSIONS}`)).toBeVisible();
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);
  });

  test("favorite button is icon-only and works", async ({ page }) => {
    await open(page, "/");
    const toggle = page.getByRole("button", { name: "Favoritar" });

    await expect(toggle.locator("span")).toBeHidden();
    await toggle.click();

    await expect(
      page.getByRole("button", { name: "Remover dos favoritos" }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  test("list shows one column and no horizontal scroll", async ({ page }) => {
    await open(page, "/expressions");

    const cards = page.locator("main a");
    await expect(cards).toHaveCount(PAGE_SIZE);
    await expect(cards.nth(1)).toBeVisible();
    const first = await cards.nth(0).boundingBox();
    const second = await cards.nth(1).boundingBox();
    expect(second!.y).toBeGreaterThan(first!.y);
    expect(second!.x).toBe(first!.x);

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);
  });

  test("pagination is compact and Próxima works", async ({ page }) => {
    await open(page, "/expressions");
    const nav = page.getByRole("navigation", { name: "Paginação" });

    await expect(nav.getByText(`Página 1 de ${TOTAL_PAGES}`)).toBeVisible();
    await expect(
      nav.getByRole("button", { name: "Página 2", exact: true }),
    ).toBeHidden();

    await nav.getByRole("button", { name: "Próxima página" }).click();

    await expect(nav.getByText(`Página 2 de ${TOTAL_PAGES}`)).toBeVisible();
    await expect(page).toHaveURL(/page=2$/);
  });
});
