"use client";

import { useMemo, useSyncExternalStore } from "react";

import type { Entry, EntryKind } from "@/data/entry";
import { entries } from "@/data/entries";

/** Only the hidden types are stored, so a new type starts turned on. */
const STORAGE_KEY = "hidden-kinds";
const ALL_KINDS: EntryKind[] = ["expression", "noun-phrase", "slang"];

let current: EntryKind[] | null = null;
const listeners = new Set<() => void>();

function load(): EntryKind[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : null;
    if (Array.isArray(parsed)) {
      const kinds = ALL_KINDS.filter((kind) => !parsed.includes(kind));
      if (kinds.length > 0) return kinds;
    }
  } catch {
    // Unreadable value: fall back to showing every type.
  }
  return ALL_KINDS;
}

function getSnapshot(): EntryKind[] {
  if (current === null) {
    current = load();
  }
  return current;
}

function getServerSnapshot(): EntryKind[] {
  return ALL_KINDS;
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

/** Turns a type on or off. The last active type cannot be turned off. */
function toggle(kind: EntryKind) {
  const kinds = getSnapshot();
  let next: EntryKind[];
  if (kinds.includes(kind)) {
    if (kinds.length === 1) return;
    next = kinds.filter((item) => item !== kind);
  } else {
    next = ALL_KINDS.filter((item) => item === kind || kinds.includes(item));
  }
  current = next;

  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(ALL_KINDS.filter((item) => !next.includes(item))),
    );
  } catch {
    // Storage unavailable: the choice lasts only until the page reloads.
  }

  emit();
}

function subscribeNoop() {
  return () => {};
}

export function useKindFilter() {
  const kinds = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const loaded = useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );

  return {
    kinds,
    loaded,
    isOn: (kind: EntryKind) => kinds.includes(kind),
    toggle,
  };
}

/** The entries of the types that are turned on, in their usual order. */
export function useFilteredEntries(): { items: Entry[]; loaded: boolean } {
  const { kinds, loaded } = useKindFilter();
  const items = useMemo(
    () => entries.filter((item) => kinds.includes(item.kind)),
    [kinds],
  );

  return { items, loaded };
}
