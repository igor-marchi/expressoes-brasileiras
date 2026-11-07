"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "favorites";
const SERVER_SNAPSHOT: string[] = [];

let current: string[] | null = null;
const listeners = new Set<() => void>();

function load(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed)
      ? parsed.filter((item): item is string => typeof item === "string")
      : [];
  } catch {
    return [];
  }
}

function getSnapshot(): string[] {
  if (current === null) {
    current = load();
  }
  return current;
}

function getServerSnapshot(): string[] {
  return SERVER_SNAPSHOT;
}

function emit() {
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  function handleStorage(event: StorageEvent) {
    if (event.key === STORAGE_KEY || event.key === null) {
      current = load();
      emit();
    }
  }

  window.addEventListener("storage", handleStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function toggle(id: string) {
  const list = getSnapshot();
  current = list.includes(id)
    ? list.filter((item) => item !== id)
    : [...list, id];

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
  } catch {
    // Storage unavailable: favorites last only until the page reloads.
  }

  emit();
}

function subscribeNoop() {
  return () => {};
}

export function useFavorites() {
  const ids = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const loaded = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );

  return {
    ids,
    loaded,
    isFavorite: (id: string) => ids.includes(id),
    toggle,
  };
}
