import type { Page } from "@playwright/test";

export const TOTAL_EXPRESSIONS = 8;

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
