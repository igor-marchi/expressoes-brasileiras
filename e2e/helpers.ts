import type { Page } from "@playwright/test";

import { expressions } from "../src/data/expressions";

export const TOTAL_EXPRESSIONS = expressions.length;
export const FIRST_EXPRESSION = expressions[0];
export const LAST_EXPRESSION = expressions[expressions.length - 1];

/**
 * Navigates and waits for React to hydrate, so clicks are not lost
 * on server-rendered markup that has no handlers attached yet.
 */
export async function open(page: Page, url: string) {
  await page.goto(url);
  await page.waitForFunction(() => {
    const link = document.querySelector("header a");
    return (
      !!link && Object.keys(link).some((key) => key.startsWith("__reactProps"))
    );
  });
}

export async function storedFavorites(page: Page): Promise<string[]> {
  return page.evaluate(() =>
    JSON.parse(localStorage.getItem("favorites") ?? "[]"),
  );
}
