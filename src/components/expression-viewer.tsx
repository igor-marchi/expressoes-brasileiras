"use client";

import { useState } from "react";
import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { expressions } from "@/data/expressions";
import { useFavorites } from "@/hooks/use-favorites";

const labelClass =
  "text-xs font-semibold uppercase tracking-[0.1em] text-primary md:text-[13px]";
const sectionClass =
  "flex flex-col gap-1.5 px-5 py-[18px] md:gap-2 md:px-8 md:py-7";
const bodyClass = "text-[15px] leading-normal md:text-[17px] md:leading-[1.55]";

export function ExpressionViewer({ initialIndex }: { initialIndex: number }) {
  const [index, setIndex] = useState(initialIndex);
  const expression = expressions[index];
  const { isFavorite, toggle } = useFavorites();
  const favorite = isFavorite(expression.id);

  function handleNext() {
    setIndex((current) => (current + 1) % expressions.length);
  }

  return (
    <main className="flex flex-1 flex-col">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-6 px-5 py-6 md:px-16 md:py-14">
        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex min-w-0 flex-col gap-5 md:gap-6">
            <div className="flex items-center gap-2.5 md:gap-3">
              <span className="rounded-full bg-accent px-2.5 py-[5px] text-[13px] font-semibold text-accent-foreground md:px-3 md:py-1.5 md:text-sm">
                {index + 1} de {expressions.length}
              </span>
              <span className="text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase md:text-sm">
                Expressão popular
              </span>
            </div>
            <h1 className="font-heading text-[42px] leading-[1.05] font-extrabold tracking-tight text-balance md:text-[68px] md:leading-[1.02]">
              {expression.text}
            </h1>
            <p className="max-w-[460px] text-lg leading-[1.4] md:text-[22px]">
              {expression.meaning}
            </p>
          </div>

          <div className="flex min-w-0 flex-col divide-y divide-border rounded-lg border border-border bg-card">
            <section className={sectionClass}>
              <h2 className={labelClass}>Origem</h2>
              <p className={bodyClass}>{expression.origin}</p>
            </section>
            <section className={sectionClass}>
              <h2 className={labelClass}>Por que se diz assim</h2>
              <p className={bodyClass}>{expression.why}</p>
            </section>
            <section className={sectionClass}>
              <h2 className={labelClass}>Exemplo</h2>
              <p className={cn(bodyClass, "italic")}>“{expression.example}”</p>
            </section>
          </div>
        </div>
      </div>

      <footer className="sticky bottom-0 border-t border-border bg-background px-5 pt-4 pb-7 md:static md:mx-auto md:w-full md:max-w-6xl md:border-t-0 md:px-16 md:pt-0 md:pb-14">
        <div className="flex flex-wrap items-center justify-between gap-6 md:border-t md:border-border md:pt-8">
          <div className="hidden items-center gap-2 md:flex" aria-hidden="true">
            {expressions.map((item, dotIndex) => (
              <span
                key={item.id}
                className={cn(
                  "h-2 rounded-full",
                  dotIndex === index ? "w-7 bg-primary" : "w-2 bg-input",
                )}
              />
            ))}
          </div>
          <div className="flex w-full gap-3 md:w-auto">
            <Button
              variant="outline"
              onClick={() => toggle(expression.id)}
              aria-pressed={favorite}
              aria-label={favorite ? "Remover dos favoritos" : "Favoritar"}
              className="size-14 shrink-0 gap-2.5 rounded-full border-input bg-card text-lg font-semibold hover:bg-secondary md:h-[52px] md:w-auto md:px-6"
            >
              <Star
                className={cn(
                  "size-6 stroke-primary",
                  favorite ? "fill-accent" : "fill-transparent",
                )}
              />
              <span className="hidden md:inline">
                {favorite ? "Favoritada" : "Favoritar"}
              </span>
            </Button>
            <Button
              onClick={handleNext}
              className="h-14 flex-1 gap-3 rounded-full px-7 text-lg font-semibold md:h-[52px] md:flex-none"
            >
              Próximo
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}
