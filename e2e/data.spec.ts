import { expect, test } from "@playwright/test";

import { entries, interleave } from "../src/data/entries";
import { expressions } from "../src/data/expressions";
import { nounPhrases } from "../src/data/noun-phrases";
import { slang } from "../src/data/slang";

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

  test("descriptions carry no hedging or notices", () => {
    const notice =
      /não é (documentada|certa)|não se sabe ao certo|segundo a versão|diz-se que|conta-se que|\u2014/i;
    const hedge = /\bprovavelmente\b|\btalvez\b|\bsupostamente\b|\bteriam?\b/i;

    for (const item of entries) {
      for (const field of ["meaning", "origin", "why", "example"] as const) {
        expect(item[field], `${item.id}.${field}`).not.toMatch(notice);
      }
      expect(item.origin, `${item.id}.origin`).not.toMatch(hedge);
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

  test("the merged list has every expression, noun phrase and slang term", () => {
    expect(entries).toHaveLength(
      expressions.length + nounPhrases.length + slang.length,
    );
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
    expect(increasing(slang.map((item) => item.id))).toBe(true);
  });

  test("the lists alternate, then the longer ones continue", () => {
    const order = ["expression", "noun-phrase", "slang"];
    const rounds = slang.length;

    entries.slice(0, rounds * 3).forEach((item, index) => {
      expect(item.kind, `entry ${index + 1}`).toBe(order[index % 3]);
    });

    const afterSlang = entries.slice(
      rounds * 3,
      nounPhrases.length * 2 + rounds,
    );
    afterSlang.forEach((item, index) => {
      expect(item.kind, `entry ${rounds * 3 + index + 1}`).toBe(
        index % 2 === 0 ? "expression" : "noun-phrase",
      );
    });
    for (const item of entries.slice(nounPhrases.length * 2 + rounds)) {
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

  test("works with three lists", () => {
    expect(interleave(["a", "b", "c"], ["x", "y"], ["1"])).toEqual([
      "a",
      "x",
      "1",
      "b",
      "y",
      "c",
    ]);
  });

  test("works with a single list or none", () => {
    expect(interleave(["a", "b"])).toEqual(["a", "b"]);
    expect(interleave()).toEqual([]);
  });
});
