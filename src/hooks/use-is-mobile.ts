"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(max-width: 767px)";

function subscribe(listener: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", listener);
  return () => media.removeEventListener("change", listener);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

/**
 * Whether the screen is phone-sized. `undefined` until the browser is
 * known (server render and hydration), so callers can avoid a layout flash.
 */
export function useIsMobile(): boolean | undefined {
  return useSyncExternalStore(subscribe, getSnapshot, () => undefined);
}
