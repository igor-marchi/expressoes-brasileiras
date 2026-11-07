export type EntryKind = "expression" | "noun-phrase";

/** How an entry is classified, as shown on the cards. */
export const KIND_LABEL: Record<EntryKind, string> = {
  expression: "Expressão popular",
  "noun-phrase": "Locução substantiva",
};

/** What a data file holds for each entry. */
export type EntryData = {
  id: string;
  text: string;
  meaning: string;
  origin: string;
  why: string;
  example: string;
};

/** An entry of the merged list, tagged with the list it came from. */
export type Entry = EntryData & { kind: EntryKind };
