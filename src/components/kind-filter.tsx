"use client";

import { Check } from "lucide-react";

import type { EntryKind } from "@/data/entry";
import { useKindFilter } from "@/hooks/use-kind-filter";
import { cn } from "@/lib/utils";

const OPTIONS: { kind: EntryKind; label: string }[] = [
  { kind: "expression", label: "Expressões" },
  { kind: "noun-phrase", label: "Locuções" },
  { kind: "slang", label: "Gírias" },
];

export function KindFilter({ className }: { className?: string }) {
  const { isOn, toggle } = useKindFilter();

  return (
    <div
      role="group"
      aria-label="Filtrar por tipo"
      className={cn("flex flex-wrap items-center gap-2.5", className)}
    >
      <span className="text-[13px] font-semibold tracking-[0.08em] text-muted-foreground uppercase">
        Mostrar
      </span>
      {OPTIONS.map(({ kind, label }) => {
        const active = isOn(kind);
        return (
          <button
            key={kind}
            type="button"
            aria-pressed={active}
            onClick={() => toggle(kind)}
            className={cn(
              "inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-[15px] font-semibold",
              active
                ? "border-primary bg-primary text-primary-foreground"
                : "border-input bg-card text-muted-foreground hover:bg-secondary",
            )}
          >
            {active && <Check className="size-4" aria-hidden="true" />}
            {label}
          </button>
        );
      })}
    </div>
  );
}
