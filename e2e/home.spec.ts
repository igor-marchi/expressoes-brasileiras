import { expect, test } from "@playwright/test";

import { open, TOTAL_EXPRESSIONS } from "./helpers";

test.describe("home", () => {
  test("shows the first expression with its details", async ({ page }) => {
    await open(page, "/");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Dar com os burros n'água",
    );
    await expect(page.getByText(`1 de ${TOTAL_EXPRESSIONS}`)).toBeVisible();
    await expect(
      page.getByText("Fracassar, ver um plano dar errado."),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Origem" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Por que se diz assim" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Exemplo" })).toBeVisible();
  });

  test("Próximo shows the next expression", async ({ page }) => {
    await open(page, "/");

    await page.getByRole("button", { name: "Próximo" }).click();

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Boi de piranha",
    );
    await expect(page.getByText(`2 de ${TOTAL_EXPRESSIONS}`)).toBeVisible();
  });

  test("Próximo goes through every expression and wraps to the first", async ({
    page,
  }) => {
    await open(page, "/");
    const title = page.getByRole("heading", { level: 1 });
    const seen = [await title.innerText()];

    for (let step = 1; step < TOTAL_EXPRESSIONS; step++) {
      await page.getByRole("button", { name: "Próximo" }).click();
      await expect(
        page.getByText(`${step + 1} de ${TOTAL_EXPRESSIONS}`),
      ).toBeVisible();
      seen.push(await title.innerText());
    }

    expect(new Set(seen).size).toBe(TOTAL_EXPRESSIONS);

    await page.getByRole("button", { name: "Próximo" }).click();
    await expect(page.getByText(`1 de ${TOTAL_EXPRESSIONS}`)).toBeVisible();
    await expect(title).toHaveText("Dar com os burros n'água");
  });

  test("progress dots follow the current expression", async ({ page }) => {
    await open(page, "/");
    const dots = page.locator("footer [aria-hidden='true'] > span");

    await expect(dots).toHaveCount(TOTAL_EXPRESSIONS);
    await expect(dots.nth(0)).toHaveClass(/bg-primary/);

    await page.getByRole("button", { name: "Próximo" }).click();

    await expect(dots.nth(0)).toHaveClass(/bg-input/);
    await expect(dots.nth(1)).toHaveClass(/bg-primary/);
  });

  test("?expression= opens that expression", async ({ page }) => {
    await open(page, "/?expression=pe-na-jaca");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Pé na jaca",
    );
    await expect(page.getByText(`4 de ${TOTAL_EXPRESSIONS}`)).toBeVisible();
  });

  test("an unknown ?expression= falls back to the first one", async ({
    page,
  }) => {
    await open(page, "/?expression=does-not-exist");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Dar com os burros n'água",
    );
  });

  test("Próximo continues from the expression opened by the URL", async ({
    page,
  }) => {
    await open(page, "/?expression=judas-botas");

    await page.getByRole("button", { name: "Próximo" }).click();

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Dar com os burros n'água",
    );
  });
});
