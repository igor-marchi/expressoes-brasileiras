"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "last-expression";

function read(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function subscribe() {
  return () => {};
}

export function saveLastExpression(id: string) {
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // Storage unavailable: the position is only kept until the page reloads.
  }
}

/**
 * Id of the last expression seen. `undefined` means it was not read yet
 * (server render and hydration); `null` means nothing is stored.
 */
export function useLastExpression(): string | null | undefined {
  return useSyncExternalStore(subscribe, read, () => undefined);
}
