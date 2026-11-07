import { expect, test } from "@playwright/test";

import { open } from "./helpers";

test.describe("navigation", () => {
  test("header links navigate between the three screens", async ({ page }) => {
    await open(page, "/");
    const header = page.getByRole("banner");

    await header.getByRole("link", { name: "Todas" }).click();
    await expect(page).toHaveURL(/\/expressions$/);
    await expect(
      page.getByRole("heading", { level: 1, name: "Todas as expressões" }),
    ).toBeVisible();

    await header.getByRole("link", { name: "Favoritas" }).click();
    await expect(page).toHaveURL(/\/favorites$/);
    await expect(
      page.getByRole("heading", { level: 1, name: "Favoritas" }),
    ).toBeVisible();

    await header.getByRole("link", { name: "Início" }).click();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Dar com os burros n'água",
    );
  });

  test("brand link goes back to the home screen", async ({ page }) => {
    await open(page, "/expressions");
    await page
      .getByRole("banner")
      .getByRole("link", { name: "Expressões do Brasil" })
      .click();
    await expect(page).toHaveURL(/\/$/);
  });

  test("current page link is underlined in the nav", async ({ page }) => {
    await open(page, "/expressions");
    const nav = page.getByRole("banner").getByRole("navigation");

    await expect(nav.getByRole("link", { name: "Todas" })).toHaveClass(
      /border-accent/,
    );
    await expect(nav.getByRole("link", { name: "Início" })).not.toHaveClass(
      /border-accent/,
    );
  });

  test("each page has its own title", async ({ page }) => {
    await open(page, "/");
    await expect(page).toHaveTitle("Expressões do Brasil");

    await open(page, "/expressions");
    await expect(page).toHaveTitle("Todas as expressões");

    await open(page, "/favorites");
    await expect(page).toHaveTitle("Favoritas");
  });

  test("document language is pt-BR", async ({ page }) => {
    await open(page, "/");
    await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  });

  test("unknown routes return 404", async ({ page }) => {
    const response = await page.goto("/todas");
    expect(response?.status()).toBe(404);
  });
});
