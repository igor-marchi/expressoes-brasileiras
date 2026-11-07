"use client";

import { Star } from "lucide-react";

import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";

export function FavoriteStar({ id }: { id: string }) {
  const { isFavorite, toggle } = useFavorites();
  const favorite = isFavorite(id);

  return (
    <button
      type="button"
      aria-label={
        favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
      }
      aria-pressed={favorite}
      onClick={() => toggle(id)}
      className="absolute top-3.5 right-3.5 flex size-11 items-center justify-center rounded-full hover:bg-secondary"
    >
      <Star
        className={cn(
          "size-6",
          favorite
            ? "fill-accent stroke-primary"
            : "fill-transparent stroke-muted-foreground",
        )}
      />
    </button>
  );
}
