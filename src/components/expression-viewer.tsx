"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

import {
  ExpressionContent,
  ExpressionCounter,
} from "@/components/expression-content";
import { ExpressionSwiper } from "@/components/expression-swiper";
import { KindFilter } from "@/components/kind-filter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { entries } from "@/data/entries";
import type { Entry } from "@/data/entry";
import { useFavorites } from "@/hooks/use-favorites";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useFilteredEntries } from "@/hooks/use-kind-filter";
import {
  saveLastExpression,
  useLastExpression,
} from "@/hooks/use-last-expression";

/** Position of the current entry among the visible ones. When its type is
 * turned off, the next visible entry in the usual order takes its place. */
function resolveIndex(items: Entry[], id: string | undefined) {
  const at = items.findIndex((item) => item.id === id);
  if (at >= 0) return at;

  const position = entries.findIndex((item) => item.id === id);
  if (position < 0) return 0;

  const visible = new Set(items.map((item) => item.id));
  for (let step = 1; step <= entries.length; step++) {
    const candidate = entries[(position + step) % entries.length];
    if (visible.has(candidate.id)) {
      return items.findIndex((item) => item.id === candidate.id);
    }
  }
  return 0;
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
  );
}

export function ExpressionViewer({ initialId }: { initialId: string | null }) {
  const [selected, setSelected] = useState(initialId);
  const { items, loaded } = useFilteredEntries();
  const lastId = useLastExpression();
  const isMobile = useIsMobile();
  const { isFavorite, toggle } = useFavorites();

  const total = items.length;
  const index = resolveIndex(items, selected ?? lastId ?? undefined);
  const expression = items[index];
  const favorite = isFavorite(expression.id);
  const ready =
    isMobile !== undefined &&
    loaded &&
    (selected !== null || lastId !== undefined);

  useEffect(() => {
    if (ready) {
      saveLastExpression(expression.id);
    }
  }, [ready, expression.id]);

  const goTo = useCallback(
    (target: number) => {
      setSelected(items[(target + items.length) % items.length].id);
    },
    [items],
  );

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        event.defaultPrevented ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        isTypingTarget(event.target)
      ) {
        return;
      }

      if (event.key === "ArrowRight") {
        goTo(index + 1);
      } else if (event.key === "ArrowLeft") {
        goTo(index - 1);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index, goTo]);

  if (!ready) {
    return <main className="flex-1" />;
  }

  const favoriteButton = (
    <Button
      variant="outline"
      onClick={() => toggle(expression.id)}
      aria-pressed={favorite}
      aria-label={favorite ? "Remover dos favoritos" : "Favoritar"}
      className={cn(
        "gap-2.5 rounded-full border-input bg-card text-lg font-semibold hover:bg-secondary",
        isMobile ? "h-14 w-full" : "h-[52px] px-6",
      )}
    >
      <Star
        className={cn(
          "size-6 stroke-primary",
          favorite ? "fill-accent" : "fill-transparent",
        )}
      />
      {favorite ? "Favoritada" : "Favoritar"}
    </Button>
  );

  if (isMobile) {
    return (
      <main className="flex min-h-0 flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 pt-6">
          <KindFilter />
          <ExpressionCounter
            index={index}
            total={total}
            kind={expression.kind}
          />
        </div>
        <ExpressionSwiper
          items={items}
          index={index}
          onChange={(target) => setSelected(items[target].id)}
        />

        <footer className="sticky bottom-0 z-10 flex flex-col gap-3.5 border-t border-border bg-background px-5 pt-3 pb-7">
          <p
            aria-hidden="true"
            className="flex items-center justify-center gap-2.5 text-[13px] font-medium text-muted-foreground"
          >
            <ChevronLeft className="size-4" />
            Deslize para o lado
            <ChevronRight className="size-4" />
          </p>
          {favoriteButton}
        </footer>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-6xl px-16 pt-10">
        <KindFilter />
      </div>
      <ExpressionContent expression={expression} index={index} total={total} />

      <footer className="mx-auto w-full max-w-6xl px-16 pb-14">
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
          <div
            role="progressbar"
            aria-label="Progresso"
            aria-valuemin={1}
            aria-valuemax={total}
            aria-valuenow={index + 1}
            className="h-2 w-64 overflow-hidden rounded-full bg-input"
          >
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${((index + 1) / total) * 100}%` }}
            />
          </div>
          <div className="flex gap-3">
            {favoriteButton}
            <Button
              variant="outline"
              onClick={() => goTo(index - 1)}
              aria-keyshortcuts="ArrowLeft"
              className="h-[52px] gap-3 rounded-full border-input bg-card px-7 text-lg font-semibold hover:bg-secondary"
            >
              <ArrowLeft className="size-5" />
              Anterior
            </Button>
            <Button
              onClick={() => goTo(index + 1)}
              aria-keyshortcuts="ArrowRight"
              className="h-[52px] gap-3 rounded-full px-7 text-lg font-semibold"
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
