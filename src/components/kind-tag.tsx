import { KIND_LABEL, type EntryKind } from "@/data/entry";
import { cn } from "@/lib/utils";

export function KindTag({ kind }: { kind: EntryKind }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-[3px] text-xs font-semibold tracking-[0.06em] uppercase",
        kind === "noun-phrase"
          ? "border-accent bg-accent/25 text-foreground"
          : "border-border bg-background text-muted-foreground",
      )}
    >
      {KIND_LABEL[kind]}
    </span>
  );
}
