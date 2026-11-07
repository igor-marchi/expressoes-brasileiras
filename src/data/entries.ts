import type { Entry } from "@/data/entry";
import { expressions } from "@/data/expressions";
import { nounPhrases } from "@/data/noun-phrases";
import { slang } from "@/data/slang";

export type { Entry, EntryKind } from "@/data/entry";

/**
 * Takes one item of each list in turn (first, second, third, first...).
 * When a list ends, the others keep alternating. Each list keeps its order.
 */
export function interleave<T>(...lists: T[][]): T[] {
  const merged: T[] = [];
  const length = Math.max(0, ...lists.map((list) => list.length));
  for (let index = 0; index < length; index++) {
    for (const list of lists) {
      if (index < list.length) merged.push(list[index]);
    }
  }
  return merged;
}

/** Every expression, noun phrase and slang term, alternating between the lists. */
export const entries: Entry[] = interleave<Entry>(
  expressions.map((item) => ({ ...item, kind: "expression" as const })),
  nounPhrases.map((item) => ({ ...item, kind: "noun-phrase" as const })),
  slang.map((item) => ({ ...item, kind: "slang" as const })),
);
