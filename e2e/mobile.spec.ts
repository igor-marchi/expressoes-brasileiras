import { expect, test } from "@playwright/test";

import {
  FIRST_EXPRESSION,
  LAST_EXPRESSION,
  open,
  MOBILE_PAGE_SIZE,
  MOBILE_TOTAL_PAGES,
  swipe,
} from "./helpers";

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

  test("swiping left shows the next expression and right goes back", async ({
    page,
  }) => {
    await open(page, "/");
    const title = page.getByRole("heading", { level: 1 });
    await expect(title).toHaveText(FIRST_EXPRESSION.text);

    await swipe(page, "left");
    await expect(title).toHaveText("Boi de piranha");

    await swipe(page, "right");
    await expect(title).toHaveText(FIRST_EXPRESSION.text);

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);
  });

  test("swiping right on the first expression wraps to the last", async ({
    page,
  }) => {
    await open(page, "/");

    await swipe(page, "right");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      LAST_EXPRESSION.text,
    );
  });

  test("a short drag does not change the expression", async ({ page }) => {
    await open(page, "/");

    await swipe(page, "left", 30);

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      FIRST_EXPRESSION.text,
    );
  });

  test("the position is saved after swiping", async ({ page }) => {
    await open(page, "/");
    await swipe(page, "left");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Boi de piranha",
    );

    await open(page, "/");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Boi de piranha",
    );
  });

  test("there are no Anterior and Próximo buttons", async ({ page }) => {
    await open(page, "/");
    await expect(page.getByText("Deslize para o lado")).toBeVisible();

    await expect(page.getByRole("button", { name: "Próximo" })).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Anterior" })).toHaveCount(0);
  });

  test("favorite button is full width with its label and works", async ({
    page,
  }) => {
    await open(page, "/");
    const toggle = page.getByRole("button", { name: "Favoritar" });

    await expect(toggle).toContainText("Favoritar");
    await toggle.click();

    await expect(
      page.getByRole("button", { name: "Remover dos favoritos" }),
    ).toHaveAttribute("aria-pressed", "true");
    await expect(
      page.getByRole("button", { name: "Remover dos favoritos" }),
    ).toContainText("Favoritada");
  });

  test("list shows one column and no horizontal scroll", async ({ page }) => {
    await open(page, "/expressions");

    const cards = page.locator("main a");
    await expect(cards).toHaveCount(MOBILE_PAGE_SIZE);
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

    await expect(
      nav.getByText(`Página 1 de ${MOBILE_TOTAL_PAGES}`),
    ).toBeVisible();
    await expect(
      nav.getByRole("button", { name: "Página 2", exact: true }),
    ).toBeHidden();

    await nav.getByRole("button", { name: "Próxima página" }).click();

    await expect(
      nav.getByText(`Página 2 de ${MOBILE_TOTAL_PAGES}`),
    ).toBeVisible();
    await expect(page).toHaveURL(/page=2$/);
  });

  test("pagination fits a narrow 320px screen", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 700 });
    await open(page, "/expressions");
    const nav = page.getByRole("navigation", { name: "Paginação" });
    await expect(nav).toBeVisible();

    const next = await nav
      .getByRole("button", { name: "Próxima página" })
      .boundingBox();
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );

    expect(next!.x + next!.width).toBeLessThanOrEqual(320);
    expect(overflow).toBe(false);
  });
});
