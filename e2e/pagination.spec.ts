import { expect, test, type Page } from "@playwright/test";

import {
  open,
  PAGE_SIZE,
  TAIL_SIZE,
  TOTAL_EXPRESSIONS,
  TOTAL_PAGES,
} from "./helpers";

const cards = (page: Page) => page.locator("main a");
const pagination = (page: Page) =>
  page.getByRole("navigation", { name: "Paginação" });
const goTo = (page: Page, number: number) =>
  pagination(page).getByRole("button", {
    name: `Página ${number}`,
    exact: true,
  });

test.describe("pagination", () => {
  test("starts on page 1 with a full page of cards", async ({ page }) => {
    await open(page, "/expressions");

    await expect(cards(page)).toHaveCount(PAGE_SIZE);
    await expect(
      pagination(page).getByText(
        `Mostrando 1 a ${PAGE_SIZE} de ${TOTAL_EXPRESSIONS}`,
      ),
    ).toBeVisible();
    await expect(goTo(page, 1)).toHaveAttribute("aria-current", "page");
  });

  test("Anterior is disabled on the first page", async ({ page }) => {
    await open(page, "/expressions");

    await expect(
      pagination(page).getByRole("button", { name: "Página anterior" }),
    ).toBeDisabled();
  });

  test("Próxima goes to the next page and updates the URL", async ({
    page,
  }) => {
    await open(page, "/expressions");

    await pagination(page)
      .getByRole("button", { name: "Próxima página" })
      .click();

    await expect(page).toHaveURL(/\/expressions\?page=2$/);
    await expect(
      page.getByText(`${PAGE_SIZE + 1} de ${TOTAL_EXPRESSIONS}`, {
        exact: true,
      }),
    ).toBeVisible();
    await expect(goTo(page, 2)).toHaveAttribute("aria-current", "page");
  });

  test("a page number jumps straight to that page", async ({ page }) => {
    await open(page, "/expressions");

    await goTo(page, 3).click();

    await expect(page).toHaveURL(/page=3$/);
    await expect(
      page.getByText(`${PAGE_SIZE * 2 + 1} de ${TOTAL_EXPRESSIONS}`, {
        exact: true,
      }),
    ).toBeVisible();
  });

  test("the last page shows the remaining cards and disables Próxima", async ({
    page,
  }) => {
    await open(page, `/expressions?page=${TOTAL_PAGES}`);

    await expect(cards(page)).toHaveCount(TAIL_SIZE);
    await expect(
      pagination(page).getByText(
        `Mostrando ${PAGE_SIZE * (TOTAL_PAGES - 1) + 1} a ${TOTAL_EXPRESSIONS} de ${TOTAL_EXPRESSIONS}`,
      ),
    ).toBeVisible();
    await expect(
      pagination(page).getByRole("button", { name: "Próxima página" }),
    ).toBeDisabled();
  });

  test("opening the URL with ?page= shows that page", async ({ page }) => {
    await open(page, "/expressions?page=2");

    await expect(
      page.getByText(`${PAGE_SIZE + 1} de ${TOTAL_EXPRESSIONS}`, {
        exact: true,
      }),
    ).toBeVisible();
  });

  test("an invalid or out of range page is corrected", async ({ page }) => {
    await open(page, "/expressions?page=abc");
    await expect(goTo(page, 1)).toHaveAttribute("aria-current", "page");

    await open(page, "/expressions?page=9999");
    await expect(goTo(page, TOTAL_PAGES)).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  test("the browser back button returns to the previous page", async ({
    page,
  }) => {
    await open(page, "/expressions");
    await goTo(page, 2).click();
    await expect(page).toHaveURL(/page=2$/);

    await page.goBack();

    await expect(page).toHaveURL(/\/expressions$/);
    await expect(goTo(page, 1)).toHaveAttribute("aria-current", "page");
  });

  test("coming back from an expression keeps the page", async ({ page }) => {
    await open(page, "/expressions");
    await goTo(page, 2).click();
    await expect(page).toHaveURL(/page=2$/);

    await cards(page).first().click();
    await expect(page).toHaveURL(/\/\?expression=/);
    await page.goBack();

    await expect(page).toHaveURL(/page=2$/);
    await expect(goTo(page, 2)).toHaveAttribute("aria-current", "page");
  });

  test("searching paginates the results and goes back to page 1", async ({
    page,
  }) => {
    await open(page, "/expressions?page=3");

    await page.getByLabel("Buscar expressão").fill("cavalinho");

    await expect(cards(page)).toHaveCount(1);
    await expect(pagination(page)).toBeHidden();
    await expect(page).toHaveURL(/\?q=cavalinho$/);
  });

  test("a search with many results keeps its own pages", async ({ page }) => {
    await open(page, "/expressions");

    await page.getByLabel("Buscar expressão").fill("de");

    await expect(page).toHaveURL(/\?q=de$/);
    await expect(cards(page)).toHaveCount(PAGE_SIZE);
    await pagination(page)
      .getByRole("button", { name: "Próxima página" })
      .click();
    await expect(page).toHaveURL(/q=de&page=2$/);
  });

  test("the search from the URL is restored on load", async ({ page }) => {
    await open(page, "/expressions?q=cavalinho");

    await expect(page.getByLabel("Buscar expressão")).toHaveValue("cavalinho");
    await expect(cards(page)).toHaveCount(1);
  });

  test("shows the ellipsis between distant pages", async ({ page }) => {
    await open(page, "/expressions?page=5");

    await expect(goTo(page, 1)).toBeVisible();
    await expect(goTo(page, 4)).toBeVisible();
    await expect(goTo(page, 6)).toBeVisible();
    await expect(goTo(page, TOTAL_PAGES)).toBeVisible();
    await expect(goTo(page, 2)).toHaveCount(0);
  });
});
