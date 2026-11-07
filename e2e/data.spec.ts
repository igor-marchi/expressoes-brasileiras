import { expect, test } from "@playwright/test";

import { entries, interleave } from "../src/data/entries";
import { expressions } from "../src/data/expressions";
import { nounPhrases } from "../src/data/noun-phrases";

test.describe("expressions data", () => {
  test("ids are unique lowercase slugs", () => {
    const ids = entries.map((item) => item.id);

    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) {
      expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  test("every field is filled", () => {
    for (const item of entries) {
      for (const [field, value] of Object.entries(item)) {
        expect(value.trim(), `${item.id}.${field}`).not.toBe("");
      }
    }
  });

  test("texts are not repeated", () => {
    const texts = entries.map((item) => item.text.toLowerCase());

    expect(new Set(texts).size).toBe(texts.length);
  });

  test("the first eight keep their ids, so saved favorites still work", () => {
    expect(expressions.slice(0, 8).map((item) => item.id)).toEqual([
      "burros-nagua",
      "boi-de-piranha",
      "cavalinho-chuva",
      "pe-na-jaca",
      "rodar-baiana",
      "ver-navios",
      "maria-vai-com-as-outras",
      "judas-botas",
    ]);
  });

  test("includes “Botar a barba de molho”", () => {
    expect(entries.map((item) => item.text)).toContain(
      "Botar a barba de molho",
    );
  });

  test("the merged list has every expression and noun phrase", () => {
    expect(entries).toHaveLength(expressions.length + nounPhrases.length);
  });

  test("each list keeps its own order after merging", () => {
    const position = new Map(entries.map((item, index) => [item.id, index]));
    const increasing = (ids: string[]) =>
      ids.every(
        (id, index) =>
          index === 0 || position.get(id)! > position.get(ids[index - 1])!,
      );

    expect(increasing(expressions.map((item) => item.id))).toBe(true);
    expect(increasing(nounPhrases.map((item) => item.id))).toBe(true);
  });

  test("the lists alternate, then the longer one continues alone", () => {
    const paired = nounPhrases.length * 2;

    entries.slice(0, paired).forEach((item, index) => {
      expect(item.kind, `entry ${index + 1}`).toBe(
        index % 2 === 0 ? "expression" : "noun-phrase",
      );
    });
    for (const item of entries.slice(paired)) {
      expect(item.kind).toBe("expression");
    }
  });
});

test.describe("interleave", () => {
  test("takes one of each list in turn", () => {
    expect(interleave(["a", "b", "c"], ["x", "y", "z"])).toEqual([
      "a",
      "x",
      "b",
      "y",
      "c",
      "z",
    ]);
  });

  test("the first list continues alone when it is longer", () => {
    expect(interleave(["a", "b", "c", "d"], ["x"])).toEqual([
      "a",
      "x",
      "b",
      "c",
      "d",
    ]);
  });

  test("the second list continues alone when it is longer", () => {
    expect(interleave(["a"], ["x", "y", "z"])).toEqual(["a", "x", "y", "z"]);
  });

  test("an empty list leaves the other one as it is", () => {
    expect(interleave(["a", "b"], [])).toEqual(["a", "b"]);
    expect(interleave([], ["x", "y"])).toEqual(["x", "y"]);
  });
});
