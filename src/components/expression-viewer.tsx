"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";

import { ExpressionContent } from "@/components/expression-content";
import { ExpressionSwiper } from "@/components/expression-swiper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { expressions } from "@/data/expressions";
import { useFavorites } from "@/hooks/use-favorites";
import { useIsMobile } from "@/hooks/use-is-mobile";
import {
  saveLastExpression,
  useLastExpression,
} from "@/hooks/use-last-expression";

const total = expressions.length;

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return (
    target.isContentEditable ||
    ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
  );
}

export function ExpressionViewer({
  initialIndex,
}: {
  initialIndex: number | null;
}) {
  const [selected, setSelected] = useState(initialIndex);
  const lastId = useLastExpression();
  const isMobile = useIsMobile();
  const { isFavorite, toggle } = useFavorites();

  const lastIndex = expressions.findIndex((item) => item.id === lastId);
  const index = selected ?? Math.max(lastIndex, 0);
  const expression = expressions[index];
  const favorite = isFavorite(expression.id);
  const ready =
    isMobile !== undefined && (selected !== null || lastId !== undefined);

  useEffect(() => {
    if (ready) {
      saveLastExpression(expression.id);
    }
  }, [ready, expression.id]);

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
        setSelected((index + 1) % total);
      } else if (event.key === "ArrowLeft") {
        setSelected((index + total - 1) % total);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index]);

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
        <ExpressionSwiper index={index} onChange={setSelected} />

        <footer className="flex flex-col gap-3.5 border-t border-border bg-background px-5 pt-3 pb-7">
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
      <ExpressionContent expression={expression} index={index} />

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
              onClick={() => setSelected((index + total - 1) % total)}
              aria-keyshortcuts="ArrowLeft"
              className="h-[52px] gap-3 rounded-full border-input bg-card px-7 text-lg font-semibold hover:bg-secondary"
            >
              <ArrowLeft className="size-5" />
              Anterior
            </Button>
            <Button
              onClick={() => setSelected((index + 1) % total)}
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
