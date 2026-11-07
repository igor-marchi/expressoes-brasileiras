"use client";

import Link from "next/link";
import { Star } from "lucide-react";

import { ExpressionCardLink } from "@/components/expression-card-link";
import { entries } from "@/data/entries";
import { useFavorites } from "@/hooks/use-favorites";

function countLabel(count: number) {
  if (count === 0) return "Você ainda não favoritou nada.";
  if (count === 1) return "1 expressão salva.";
  return `${count} expressões salvas.`;
}

export function FavoritesList() {
  const { ids, loaded } = useFavorites();

  const items = entries
    .map((expression, index) => ({ expression, index }))
    .filter(({ expression }) => ids.includes(expression.id));

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-5 py-8 md:px-16 md:py-12">
      <div className="flex flex-col gap-2">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight md:text-5xl">
          Favoritas
        </h1>
        <p className="text-lg text-muted-foreground">
          {loaded ? countLabel(items.length) : " "}
        </p>
      </div>

      {loaded && items.length === 0 && (
        <div className="flex flex-col items-center gap-5 rounded-lg border border-border bg-card px-6 py-[72px] text-center">
          <div className="flex size-[72px] items-center justify-center rounded-full border border-border bg-background">
            <Star className="size-8 text-muted-foreground" aria-hidden="true" />
          </div>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight">
            Nenhuma favorita ainda
          </h2>
          <p className="max-w-[420px] text-lg leading-normal text-muted-foreground">
            Toque na estrela de uma expressão para guardá-la aqui e reler
            depois.
          </p>
          <Link
            href="/expressions"
            className="inline-flex min-h-[52px] items-center rounded-full bg-primary px-7 text-lg font-semibold text-primary-foreground"
          >
            Ver todas as expressões
          </Link>
        </div>
      )}

      {loaded && items.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {items.map(({ expression, index }) => (
            <ExpressionCardLink
              key={expression.id}
              expression={expression}
              position={index + 1}
              total={entries.length}
            />
          ))}
        </div>
      )}
    </main>
  );
}
