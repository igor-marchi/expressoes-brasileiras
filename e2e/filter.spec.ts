import { expect, test, type Page } from "@playwright/test";

import { entries, type EntryKind } from "../src/data/entries";
import { open } from "./helpers";

const ALL: EntryKind[] = ["expression", "noun-phrase", "slang"];
const LABEL: Record<EntryKind, string> = {
  expression: "Expressões",
  "noun-phrase": "Locuções",
  slang: "Gírias",
};
const TAG: Record<EntryKind, string> = {
  expression: "Expressão popular",
  "noun-phrase": "Locução substantiva",
  slang: "Gíria",
};

const of = (...kinds: EntryKind[]) =>
  entries.filter((item) => kinds.includes(item.kind));
const chip = (page: Page, kind: EntryKind) =>
  page.getByRole("button", { name: LABEL[kind], exact: true });
const count = (page: Page, total: number) =>
  page.getByText(`${total} expressões. Escolha`);
const hide = (page: Page, ...kinds: EntryKind[]) =>
  page.addInitScript(
    (value) => localStorage.setItem("hidden-kinds", value),
    JSON.stringify(kinds),
  );
const storedHidden = (page: Page) =>
  page.evaluate(() => localStorage.getItem("hidden-kinds"));
const heading = (page: Page) => page.getByRole("heading", { level: 1 });
const counter = (page: Page, position: number, total: number) =>
  page.getByText(`${position} de ${total}`, { exact: true });

test.describe("kind filter", () => {
  test("starts with every type selected", async ({ page }) => {
    await open(page, "/expressions");

    for (const kind of ALL) {
      await expect(chip(page, kind)).toHaveAttribute("aria-pressed", "true");
    }
    await expect(count(page, entries.length)).toBeVisible();
  });

  test("the list shows only the selected types and updates the count", async ({
    page,
  }) => {
    await open(page, "/expressions");

    await chip(page, "expression").click();
    await expect(chip(page, "expression")).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    await expect(count(page, of("noun-phrase", "slang").length)).toBeVisible();
    await expect(page.getByText(TAG.expression, { exact: true })).toHaveCount(
      0,
    );

    await chip(page, "expression").click();
    await chip(page, "noun-phrase").click();
    await chip(page, "slang").click();
    await expect(count(page, of("expression").length)).toBeVisible();
    await expect(
      page.getByText(TAG["noun-phrase"], { exact: true }),
    ).toHaveCount(0);
    await expect(page.getByText(TAG.slang, { exact: true })).toHaveCount(0);
  });

  test("the last selected type cannot be removed", async ({ page }) => {
    await open(page, "/expressions");

    await chip(page, "expression").click();
    await chip(page, "noun-phrase").click();
    await chip(page, "slang").click();

    await expect(chip(page, "slang")).toHaveAttribute("aria-pressed", "true");
    await expect(count(page, of("slang").length)).toBeVisible();
  });

  test("the choice is kept after reloading", async ({ page }) => {
    await open(page, "/expressions");
    await chip(page, "slang").click();
    expect(await storedHidden(page)).toBe(JSON.stringify(["slang"]));

    await open(page, "/expressions");
    await expect(chip(page, "slang")).toHaveAttribute("aria-pressed", "false");
    await expect(
      count(page, of("expression", "noun-phrase").length),
    ).toBeVisible();
  });

  test("a type the saved choice does not know about starts selected", async ({
    page,
  }) => {
    await hide(page, "noun-phrase");
    await open(page, "/expressions");

    await expect(chip(page, "slang")).toHaveAttribute("aria-pressed", "true");
    await expect(chip(page, "noun-phrase")).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  test("a saved choice that hides everything falls back to every type", async ({
    page,
  }) => {
    await hide(page, ...ALL);
    await open(page, "/expressions");

    for (const kind of ALL) {
      await expect(chip(page, kind)).toHaveAttribute("aria-pressed", "true");
    }
  });

  test("expression screen navigates only through the selected types", async ({
    page,
  }) => {
    await hide(page, "expression", "noun-phrase");
    const slang = of("slang");
    await open(page, "/");

    await expect(heading(page)).toHaveText(slang[0].text);
    await expect(counter(page, 1, slang.length)).toBeVisible();

    await page.keyboard.press("ArrowRight");
    await expect(heading(page)).toHaveText(slang[1].text);
    await expect(counter(page, 2, slang.length)).toBeVisible();

    await page.keyboard.press("ArrowLeft");
    await page.keyboard.press("ArrowLeft");
    await expect(heading(page)).toHaveText(slang[slang.length - 1].text);
  });

  test("opening an entry of a hidden type shows the next visible one", async ({
    page,
  }) => {
    await hide(page, "noun-phrase");
    const hidden = entries.find((item) => item.kind === "noun-phrase")!;
    const visible = of("expression", "slang");
    const following = entries
      .slice(entries.indexOf(hidden) + 1)
      .find((item) => item.kind !== "noun-phrase")!;
    await open(page, `/?expression=${hidden.id}`);

    await expect(heading(page)).toHaveText(following.text);
    await expect(
      counter(page, visible.indexOf(following) + 1, visible.length),
    ).toBeVisible();
  });

  test("a slang entry shows its own label", async ({ page }) => {
    const slang = of("slang")[0];
    await open(page, `/?expression=${slang.id}`);

    await expect(heading(page)).toHaveText(slang.text);
    await expect(page.getByText(TAG.slang, { exact: true })).toBeVisible();
  });

  test("the filter is on the expression screen and applies right away", async ({
    page,
  }) => {
    await open(page, "/");

    for (const kind of ALL) {
      await expect(chip(page, kind)).toHaveAttribute("aria-pressed", "true");
    }

    await chip(page, "expression").click();
    await chip(page, "slang").click();

    const nouns = of("noun-phrase");
    await expect(heading(page)).toHaveText(nouns[0].text);
    await expect(counter(page, 1, nouns.length)).toBeVisible();
    expect(await storedHidden(page)).toBe(
      JSON.stringify(["expression", "slang"]),
    );
  });

  test("the choice made on the expression screen is kept in the list", async ({
    page,
  }) => {
    await open(page, "/");
    await chip(page, "noun-phrase").click();

    await open(page, "/expressions");
    await expect(chip(page, "noun-phrase")).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    await expect(count(page, of("expression", "slang").length)).toBeVisible();
  });
});
