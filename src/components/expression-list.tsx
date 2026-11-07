"use client";

import { useState } from "react";
import { Search } from "lucide-react";

import { ExpressionCardLink } from "@/components/expression-card-link";
import { expressions } from "@/data/expressions";

function normalize(value: string) {
  return value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export function ExpressionList() {
  const [query, setQuery] = useState("");
  const term = normalize(query.trim());

  const items = expressions
    .map((expression, index) => ({ expression, index }))
    .filter(
      ({ expression }) =>
        !term ||
        normalize(expression.text).includes(term) ||
        normalize(expression.meaning).includes(term),
    );

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-5 py-8 md:px-16 md:py-12">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight md:text-5xl">
            Todas as expressões
          </h1>
          <p className="text-lg text-muted-foreground">
            {expressions.length} expressões. Escolha uma para ver origem e
            significado.
          </p>
        </div>
        <div className="flex min-h-12 w-full items-center gap-3 rounded-full border border-input bg-card px-5 md:w-80">
          <Search className="size-5 text-muted-foreground" aria-hidden="true" />
          <label htmlFor="search" className="sr-only">
            Buscar expressão
          </label>
          <input
            id="search"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar expressão"
            className="min-w-0 flex-1 bg-transparent text-base outline-none"
          />
        </div>
      </div>

      {items.length === 0 ? (
        <p className="text-muted-foreground">Nenhuma expressão encontrada.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map(({ expression, index }) => (
            <ExpressionCardLink
              key={expression.id}
              expression={expression}
              position={index + 1}
              total={expressions.length}
            />
          ))}
        </div>
      )}
    </main>
  );
}
