import { expect, test } from "@playwright/test";

import { expressions } from "../src/data/expressions";

test.describe("expressions data", () => {
  test("ids are unique lowercase slugs", () => {
    const ids = expressions.map((item) => item.id);

    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) {
      expect(id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });

  test("every field is filled", () => {
    for (const item of expressions) {
      for (const [field, value] of Object.entries(item)) {
        expect(value.trim(), `${item.id}.${field}`).not.toBe("");
      }
    }
  });

  test("texts are not repeated", () => {
    const texts = expressions.map((item) => item.text.toLowerCase());

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
    expect(expressions.map((item) => item.text)).toContain(
      "Botar a barba de molho",
    );
  });
});
