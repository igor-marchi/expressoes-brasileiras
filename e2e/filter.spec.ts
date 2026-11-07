import { expect, test } from "@playwright/test";

import { entries } from "../src/data/entries";
import { FIRST_NOUN_PHRASE, open } from "./helpers";

const EXPRESSIONS = entries.filter((item) => item.kind === "expression");
const NOUN_PHRASES = entries.filter((item) => item.kind === "noun-phrase");

const expressionsChip = (page: import("@playwright/test").Page) =>
  page.getByRole("button", { name: "Expressões", exact: true });
const nounPhrasesChip = (page: import("@playwright/test").Page) =>
  page.getByRole("button", { name: "Locuções", exact: true });

async function storedKinds(page: import("@playwright/test").Page) {
  return page.evaluate(() => localStorage.getItem("kinds"));
}

test.describe("kind filter", () => {
  test("starts with both types selected", async ({ page }) => {
    await open(page, "/expressions");

    await expect(expressionsChip(page)).toHaveAttribute("aria-pressed", "true");
    await expect(nounPhrasesChip(page)).toHaveAttribute("aria-pressed", "true");
    await expect(
      page.getByText(`${entries.length} expressões. Escolha`),
    ).toBeVisible();
  });

  test("list shows only the selected type and updates the count", async ({
    page,
  }) => {
    await open(page, "/expressions");

    await expressionsChip(page).click();
    await expect(expressionsChip(page)).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    await expect(
      page.getByText(`${NOUN_PHRASES.length} expressões. Escolha`),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: new RegExp(FIRST_NOUN_PHRASE.text) }),
    ).toBeVisible();
    await expect(page.getByText("Expressão popular")).toHaveCount(0);

    await expressionsChip(page).click();
    await nounPhrasesChip(page).click();
    await expect(
      page.getByText(`${EXPRESSIONS.length} expressões. Escolha`),
    ).toBeVisible();
    await expect(page.getByText("Locução substantiva")).toHaveCount(0);
  });

  test("the last selected type cannot be removed", async ({ page }) => {
    await open(page, "/expressions");

    await expressionsChip(page).click();
    await nounPhrasesChip(page).click();

    await expect(nounPhrasesChip(page)).toHaveAttribute("aria-pressed", "true");
    await expect(
      page.getByText(`${NOUN_PHRASES.length} expressões. Escolha`),
    ).toBeVisible();
  });

  test("the choice is kept after reloading", async ({ page }) => {
    await open(page, "/expressions");
    await nounPhrasesChip(page).click();
    expect(await storedKinds(page)).toBe(JSON.stringify(["expression"]));

    await open(page, "/expressions");
    await expect(nounPhrasesChip(page)).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    await expect(
      page.getByText(`${EXPRESSIONS.length} expressões. Escolha`),
    ).toBeVisible();
  });

  test("an unreadable stored value falls back to both types", async ({
    page,
  }) => {
    await page.addInitScript(() => localStorage.setItem("kinds", "[]"));
    await open(page, "/expressions");

    await expect(expressionsChip(page)).toHaveAttribute("aria-pressed", "true");
    await expect(nounPhrasesChip(page)).toHaveAttribute("aria-pressed", "true");
  });

  test("expression screen navigates only through the selected type", async ({
    page,
  }) => {
    await page.addInitScript(() =>
      localStorage.setItem("kinds", JSON.stringify(["noun-phrase"])),
    );
    await open(page, "/");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      NOUN_PHRASES[0].text,
    );
    await expect(
      page.getByText(`1 de ${NOUN_PHRASES.length}`, { exact: true }),
    ).toBeVisible();

    await page.keyboard.press("ArrowRight");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      NOUN_PHRASES[1].text,
    );
    await expect(
      page.getByText(`2 de ${NOUN_PHRASES.length}`, { exact: true }),
    ).toBeVisible();

    await page.keyboard.press("ArrowLeft");
    await page.keyboard.press("ArrowLeft");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      NOUN_PHRASES[NOUN_PHRASES.length - 1].text,
    );
  });

  test("opening an entry of a hidden type shows the next visible one", async ({
    page,
  }) => {
    await page.addInitScript(() =>
      localStorage.setItem("kinds", JSON.stringify(["expression"])),
    );
    await open(page, `/?expression=${FIRST_NOUN_PHRASE.id}`);

    const following = entries
      .slice(entries.indexOf(FIRST_NOUN_PHRASE) + 1)
      .find((item) => item.kind === "expression")!;

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      following.text,
    );
    await expect(
      page.getByText(
        `${EXPRESSIONS.indexOf(following) + 1} de ${EXPRESSIONS.length}`,
        {
          exact: true,
        },
      ),
    ).toBeVisible();
  });

  test("the filter is on the expression screen and applies right away", async ({
    page,
  }) => {
    await open(page, "/");

    await expect(expressionsChip(page)).toHaveAttribute("aria-pressed", "true");
    await expect(nounPhrasesChip(page)).toHaveAttribute("aria-pressed", "true");

    await expressionsChip(page).click();

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      NOUN_PHRASES[0].text,
    );
    await expect(
      page.getByText(`1 de ${NOUN_PHRASES.length}`, { exact: true }),
    ).toBeVisible();
    expect(await storedKinds(page)).toBe(JSON.stringify(["noun-phrase"]));
  });

  test("the choice made on the expression screen is kept in the list", async ({
    page,
  }) => {
    await open(page, "/");
    await nounPhrasesChip(page).click();

    await open(page, "/expressions");
    await expect(nounPhrasesChip(page)).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    await expect(
      page.getByText(`${EXPRESSIONS.length} expressões. Escolha`),
    ).toBeVisible();
  });
});
