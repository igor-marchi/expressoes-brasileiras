import { cn } from "@/lib/utils";
import { KindTag } from "@/components/kind-tag";
import type { EntryKind } from "@/data/entry";
import { entries, type Entry } from "@/data/entries";

const labelClass =
  "text-xs font-semibold uppercase tracking-[0.1em] text-primary md:text-[13px]";
const sectionClass =
  "flex flex-col gap-1.5 px-5 py-[18px] md:gap-2 md:px-8 md:py-7";
const bodyClass = "text-[15px] leading-normal md:text-[17px] md:leading-[1.55]";

export function ExpressionCounter({
  index,
  kind,
}: {
  index: number;
  kind: EntryKind;
}) {
  return (
    <div className="flex items-center gap-2.5 md:gap-3">
      <span className="rounded-full bg-accent px-2.5 py-[5px] text-[13px] font-semibold text-accent-foreground md:px-3 md:py-1.5 md:text-sm">
        {index + 1} de {entries.length}
      </span>
      <KindTag kind={kind} />
    </div>
  );
}

export function ExpressionContent({
  expression,
  index,
  showCounter = true,
}: {
  expression: Entry;
  index: number;
  showCounter?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-6 px-5 py-6 md:px-16 md:py-14",
        !showCounter && "pt-5",
      )}
    >
      <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex min-w-0 flex-col gap-5 md:gap-6">
          {showCounter && (
            <ExpressionCounter index={index} kind={expression.kind} />
          )}
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
  );
}
