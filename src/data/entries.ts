import type { Entry } from "@/data/entry";
import { expressions } from "@/data/expressions";
import { nounPhrases } from "@/data/noun-phrases";

export type { Entry, EntryKind } from "@/data/entry";

/**
 * Takes one item of each list in turn (first, second, first, second...).
 * When one list ends, the other continues alone. Each list keeps its order.
 */
export function interleave<T>(first: T[], second: T[]): T[] {
  const merged: T[] = [];
  const length = Math.max(first.length, second.length);
  for (let index = 0; index < length; index++) {
    if (index < first.length) merged.push(first[index]);
    if (index < second.length) merged.push(second[index]);
  }
  return merged;
}

/** Every expression and noun phrase, alternating between the two lists. */
export const entries: Entry[] = interleave<Entry>(
  expressions.map((item) => ({ ...item, kind: "expression" as const })),
  nounPhrases.map((item) => ({ ...item, kind: "noun-phrase" as const })),
);
