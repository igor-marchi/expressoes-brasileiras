import Link from "next/link";

import { FavoriteStar } from "@/components/favorite-star";
import { KindTag } from "@/components/kind-tag";
import type { Entry } from "@/data/entries";

type Props = {
  expression: Entry;
  position: number;
  total: number;
};

export function ExpressionCardLink({ expression, position, total }: Props) {
  return (
    <div className="relative flex flex-col">
      <Link
        href={`/?expression=${expression.id}`}
        className="flex flex-1 flex-col gap-2 rounded-lg border border-border bg-card py-6 pr-[68px] pl-7 hover:border-primary"
      >
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-[13px] font-semibold tracking-[0.08em] text-primary uppercase">
            {position} de {total}
          </span>
          <KindTag kind={expression.kind} />
        </div>
        <span className="font-heading text-[26px] leading-[1.1] font-extrabold">
          {expression.text}
        </span>
        <span className="text-base leading-[1.45] text-muted-foreground">
          {expression.meaning}
        </span>
      </Link>
      <FavoriteStar id={expression.id} />
    </div>
  );
}
