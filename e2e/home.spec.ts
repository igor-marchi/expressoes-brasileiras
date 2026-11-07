import { expect, test, type Page } from "@playwright/test";

import {
  FIRST_EXPRESSION,
  FIRST_NOUN_PHRASE,
  positionOf,
  SECOND,
  THIRD,
  LAST_EXPRESSION,
  open,
  TOTAL_EXPRESSIONS,
} from "./helpers";

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
      SECOND.text,
    );
    await expect(page.getByText(`2 de ${TOTAL_EXPRESSIONS}`)).toBeVisible();
  });

  test("Próximo goes through the expressions one by one", async ({ page }) => {
    await open(page, "/");
    const title = page.getByRole("heading", { level: 1 });
    const seen = [await title.innerText()];

    for (let step = 1; step < 10; step++) {
      await page.getByRole("button", { name: "Próximo" }).click();
      await expect(
        page.getByText(`${step + 1} de ${TOTAL_EXPRESSIONS}`),
      ).toBeVisible();
      seen.push(await title.innerText());
    }

    expect(new Set(seen).size).toBe(10);
  });

  test("Próximo wraps from the last expression to the first", async ({
    page,
  }) => {
    await open(page, `/?expression=${LAST_EXPRESSION.id}`);
    await expect(
      page.getByText(`${TOTAL_EXPRESSIONS} de ${TOTAL_EXPRESSIONS}`),
    ).toBeVisible();

    await page.getByRole("button", { name: "Próximo" }).click();

    await expect(page.getByText(`1 de ${TOTAL_EXPRESSIONS}`)).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      FIRST_EXPRESSION.text,
    );
  });

  test("Anterior shows the previous expression", async ({ page }) => {
    await open(page, `/?expression=${SECOND.id}`);

    await page.getByRole("button", { name: "Anterior" }).click();

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      FIRST_EXPRESSION.text,
    );
    await expect(
      page.getByText(`1 de ${TOTAL_EXPRESSIONS}`, { exact: true }),
    ).toBeVisible();
  });

  test("Anterior wraps from the first expression to the last", async ({
    page,
  }) => {
    await open(page, "/");

    await page.getByRole("button", { name: "Anterior" }).click();

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      LAST_EXPRESSION.text,
    );
    await expect(
      page.getByText(`${TOTAL_EXPRESSIONS} de ${TOTAL_EXPRESSIONS}`),
    ).toBeVisible();
  });

  test("the right arrow key shows the next expression", async ({ page }) => {
    await open(page, "/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    await page.keyboard.press("ArrowRight");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      SECOND.text,
    );
  });

  test("the left arrow key shows the previous expression", async ({ page }) => {
    await open(page, `/?expression=${SECOND.id}`);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    await page.keyboard.press("ArrowLeft");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      FIRST_EXPRESSION.text,
    );
  });

  test("the arrow keys wrap around at both ends", async ({ page }) => {
    await open(page, "/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    await page.keyboard.press("ArrowLeft");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      LAST_EXPRESSION.text,
    );

    await page.keyboard.press("ArrowRight");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      FIRST_EXPRESSION.text,
    );
  });

  test("arrow keys with a modifier are left to the browser", async ({
    page,
  }) => {
    await open(page, "/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    await page.keyboard.press("Alt+ArrowLeft");
    await page.keyboard.press("Shift+ArrowRight");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      FIRST_EXPRESSION.text,
    );
  });

  test("progress bar follows the current expression", async ({ page }) => {
    await open(page, "/");
    const bar = page.getByRole("progressbar", { name: "Progresso" });

    await expect(bar).toHaveAttribute("aria-valuemax", `${TOTAL_EXPRESSIONS}`);
    await expect(bar).toHaveAttribute("aria-valuenow", "1");

    await page.getByRole("button", { name: "Próximo" }).click();

    await expect(bar).toHaveAttribute("aria-valuenow", "2");
  });

  test("?expression= opens that expression", async ({ page }) => {
    await open(page, "/?expression=pe-na-jaca");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Pé na jaca",
    );
    await expect(
      page.getByText(`${positionOf("pe-na-jaca")} de ${TOTAL_EXPRESSIONS}`),
    ).toBeVisible();
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
    await open(page, `/?expression=${LAST_EXPRESSION.id}`);

    await page.getByRole("button", { name: "Próximo" }).click();

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Dar com os burros n'água",
    );
  });

  test("shows how the expression is classified", async ({ page }) => {
    await open(page, "/");
    await expect(page.getByText("Expressão popular")).toBeVisible();
    await expect(page.getByText("Locução substantiva")).toHaveCount(0);
  });

  test("a noun phrase is labeled as such", async ({ page }) => {
    await open(page, `/?expression=${FIRST_NOUN_PHRASE.id}`);

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      FIRST_NOUN_PHRASE.text,
    );
    await expect(page.getByText("Locução substantiva")).toBeVisible();
    await expect(page.getByText("Expressão popular")).toHaveCount(0);
  });
});

test.describe("home: last expression", () => {
  const title = (page: Page) => page.getByRole("heading", { level: 1 });
  const next = (page: Page) => page.getByRole("button", { name: "Próximo" });

  test("reopening the site shows the last expression seen", async ({
    page,
  }) => {
    await open(page, "/");
    await next(page).click();
    await next(page).click();
    await expect(title(page)).toHaveText(THIRD.text);

    await open(page, "/");

    await expect(title(page)).toHaveText(THIRD.text);
    await expect(page.getByText(`3 de ${TOTAL_EXPRESSIONS}`)).toBeVisible();
  });

  test("coming back from another page keeps the position", async ({ page }) => {
    await open(page, "/");
    await next(page).click();

    await page.getByRole("link", { name: "Todas", exact: true }).click();
    await expect(page).toHaveURL(/\/expressions$/);
    await page.getByRole("link", { name: "Início", exact: true }).click();

    await expect(title(page)).toHaveText(SECOND.text);
  });

  test("keeps going from where it stopped after a reload", async ({ page }) => {
    await open(page, "/");
    await next(page).click();
    await open(page, "/");

    await next(page).click();

    await expect(title(page)).toHaveText(THIRD.text);
  });

  test("?expression= wins over the saved one and becomes the new saved", async ({
    page,
  }) => {
    await open(page, "/");
    await next(page).click();

    await open(page, "/?expression=pe-na-jaca");
    await expect(title(page)).toHaveText("Pé na jaca");

    await open(page, "/");
    await expect(title(page)).toHaveText("Pé na jaca");
  });

  test("a saved id that no longer exists falls back to the first", async ({
    page,
  }) => {
    await open(page, "/");
    await page.evaluate(() =>
      localStorage.setItem("last-expression", "does-not-exist"),
    );

    await open(page, "/");

    await expect(title(page)).toHaveText("Dar com os burros n'água");
  });

  test("works when storage is unavailable", async ({ page }) => {
    await page.addInitScript(() => {
      Storage.prototype.getItem = () => {
        throw new Error("blocked");
      };
      Storage.prototype.setItem = () => {
        throw new Error("blocked");
      };
    });
    await open(page, "/");

    await next(page).click();

    await expect(title(page)).toHaveText(SECOND.text);
  });
});
