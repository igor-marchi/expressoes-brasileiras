import type { Page } from "@playwright/test";

import { entries } from "../src/data/entries";

export const TOTAL_EXPRESSIONS = entries.length;
export const PAGE_SIZE = 10;
export const MOBILE_PAGE_SIZE = 5;
export const MOBILE_TOTAL_PAGES = Math.ceil(
  TOTAL_EXPRESSIONS / MOBILE_PAGE_SIZE,
);
export const TOTAL_PAGES = Math.ceil(TOTAL_EXPRESSIONS / PAGE_SIZE);
export const TAIL_SIZE = TOTAL_EXPRESSIONS - PAGE_SIZE * (TOTAL_PAGES - 1);
export const SECOND = entries[1];
export const THIRD = entries[2];
export const positionOf = (id: string) =>
  entries.findIndex((item) => item.id === id) + 1;
export const FIRST_NOUN_PHRASE = entries.find(
  (item) => item.kind === "noun-phrase",
)!;
export const FIRST_EXPRESSION = entries[0];
export const LAST_EXPRESSION = entries[entries.length - 1];

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

/** Drags across the expression slider, like a finger swipe. */
export async function swipe(
  page: Page,
  direction: "left" | "right",
  distance = 150,
) {
  const box = await page.getByTestId("swiper").boundingBox();
  const y = box!.y + box!.height / 2;
  const startX = box!.x + box!.width / 2;
  const endX = startX + (direction === "left" ? -distance : distance);

  await page.mouse.move(startX, y);
  await page.mouse.down();
  await page.mouse.move((startX + endX) / 2, y, { steps: 5 });
  await page.mouse.move(endX, y, { steps: 5 });
  await page.mouse.up();
}
