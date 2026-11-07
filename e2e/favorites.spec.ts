import { expect, test } from "@playwright/test";

import { open, PAGE_SIZE, storedFavorites } from "./helpers";

test.describe("favorites on the home screen", () => {
  test("Favoritar toggles the button state", async ({ page }) => {
    await open(page, "/");
    const toggle = page.getByRole("button", { name: "Favoritar" });

    await expect(toggle).toHaveAttribute("aria-pressed", "false");
    await toggle.click();

    const active = page.getByRole("button", { name: "Remover dos favoritos" });
    await expect(active).toHaveAttribute("aria-pressed", "true");
    await expect(active).toContainText("Favoritada");

    await active.click();
    await expect(
      page.getByRole("button", { name: "Favoritar" }),
    ).toHaveAttribute("aria-pressed", "false");
  });

  test("favorite is saved in localStorage by expression id", async ({
    page,
  }) => {
    await open(page, "/");

    await page.getByRole("button", { name: "Favoritar" }).click();

    expect(await storedFavorites(page)).toEqual(["burros-nagua"]);
  });

  test("favorite survives a reload", async ({ page }) => {
    await open(page, "/");
    await page.getByRole("button", { name: "Favoritar" }).click();

    await open(page, "/");

    await expect(
      page.getByRole("button", { name: "Remover dos favoritos" }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  test("each expression keeps its own favorite state", async ({ page }) => {
    await open(page, "/");
    await page.getByRole("button", { name: "Favoritar" }).click();

    await page.getByRole("button", { name: "Próximo" }).click();
    await expect(
      page.getByRole("button", { name: "Favoritar" }),
    ).toHaveAttribute("aria-pressed", "false");

    await page.getByRole("button", { name: "Favoritar" }).click();
    expect(await storedFavorites(page)).toEqual([
      "burros-nagua",
      "boi-de-piranha",
    ]);
  });
});

test.describe("favorites on the list", () => {
  test("star toggles a card and saves it", async ({ page }) => {
    await open(page, "/expressions");

    await page
      .getByRole("button", { name: "Adicionar aos favoritos" })
      .nth(3)
      .click();

    await expect(
      page.getByRole("button", { name: "Remover dos favoritos" }),
    ).toHaveCount(1);
    expect(await storedFavorites(page)).toEqual(["pe-na-jaca"]);

    await page.getByRole("button", { name: "Remover dos favoritos" }).click();
    await expect(
      page.getByRole("button", { name: "Adicionar aos favoritos" }),
    ).toHaveCount(PAGE_SIZE);
    expect(await storedFavorites(page)).toEqual([]);
  });

  test("clicking the star does not open the expression", async ({ page }) => {
    await open(page, "/expressions");

    await page
      .getByRole("button", { name: "Adicionar aos favoritos" })
      .first()
      .click();

    await expect(page).toHaveURL(/\/expressions$/);
  });

  test("favorite set on the list shows on the home screen", async ({
    page,
  }) => {
    await open(page, "/expressions");
    await page
      .getByRole("button", { name: "Adicionar aos favoritos" })
      .nth(3)
      .click();

    await open(page, "/?expression=pe-na-jaca");

    await expect(
      page.getByRole("button", { name: "Remover dos favoritos" }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  test("favorite set on the home screen shows on the list", async ({
    page,
  }) => {
    await open(page, "/");
    await page.getByRole("button", { name: "Favoritar" }).click();

    await open(page, "/expressions");

    await expect(
      page.getByRole("button", { name: "Remover dos favoritos" }),
    ).toHaveCount(1);
  });
});

test.describe("favorites page", () => {
  test("shows the empty state when nothing is saved", async ({ page }) => {
    await open(page, "/favorites");

    await expect(
      page.getByText("Você ainda não favoritou nada."),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Nenhuma favorita ainda" }),
    ).toBeVisible();
  });

  test("empty state link goes to all expressions", async ({ page }) => {
    await open(page, "/favorites");

    await page.getByRole("link", { name: "Ver todas as expressões" }).click();

    await expect(page).toHaveURL(/\/expressions$/);
  });

  test("lists saved expressions in the original order", async ({ page }) => {
    await open(page, "/expressions");
    await page
      .getByRole("button", { name: "Adicionar aos favoritos" })
      .nth(5)
      .click();
    await page
      .getByRole("button", { name: "Adicionar aos favoritos" })
      .nth(0)
      .click();

    await open(page, "/favorites");

    await expect(page.getByText("2 expressões salvas.")).toBeVisible();
    const cards = page.locator("main a");
    await expect(cards).toHaveCount(2);
    await expect(cards.nth(0)).toContainText("Dar com os burros n'água");
    await expect(cards.nth(1)).toContainText("Ficar a ver navios");
  });

  test("uses the singular when there is one favorite", async ({ page }) => {
    await open(page, "/");
    await page.getByRole("button", { name: "Favoritar" }).click();

    await open(page, "/favorites");

    await expect(page.getByText("1 expressão salva.")).toBeVisible();
  });

  test("removing the last favorite shows the empty state", async ({ page }) => {
    await open(page, "/");
    await page.getByRole("button", { name: "Favoritar" }).click();
    await open(page, "/favorites");

    await page.getByRole("button", { name: "Remover dos favoritos" }).click();

    await expect(
      page.getByText("Você ainda não favoritou nada."),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Nenhuma favorita ainda" }),
    ).toBeVisible();
    expect(await storedFavorites(page)).toEqual([]);
  });

  test("clicking a saved card opens that expression", async ({ page }) => {
    await open(page, "/?expression=rodar-baiana");
    await page.getByRole("button", { name: "Favoritar" }).click();
    await open(page, "/favorites");

    await page.getByRole("link", { name: /Rodar a baiana/ }).click();

    await expect(page).toHaveURL(/\/\?expression=rodar-baiana$/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Rodar a baiana",
    );
  });
});

test.describe("favorites storage", () => {
  test("corrupted storage does not break the app", async ({ page }) => {
    await page.addInitScript(() =>
      localStorage.setItem("favorites", "not-json{"),
    );
    await open(page, "/favorites");

    await expect(
      page.getByText("Você ainda não favoritou nada."),
    ).toBeVisible();
  });

  test("storage with the wrong shape is ignored", async ({ page }) => {
    await page.addInitScript(() =>
      localStorage.setItem("favorites", JSON.stringify({ a: 1 })),
    );
    await open(page, "/favorites");

    await expect(
      page.getByText("Você ainda não favoritou nada."),
    ).toBeVisible();
  });

  test("ids that do not exist are not listed", async ({ page }) => {
    await page.addInitScript(() =>
      localStorage.setItem(
        "favorites",
        JSON.stringify(["pe-na-jaca", "ghost"]),
      ),
    );
    await open(page, "/favorites");

    await expect(page.locator("main a")).toHaveCount(1);
    await expect(page.getByText("1 expressão salva.")).toBeVisible();
  });

  test("a change in one tab shows up in another tab", async ({ context }) => {
    const first = await context.newPage();
    const second = await context.newPage();
    await open(first, "/favorites");
    await open(second, "/");

    await second.getByRole("button", { name: "Favoritar" }).click();

    await expect(first.getByText("1 expressão salva.")).toBeVisible();
  });
});
