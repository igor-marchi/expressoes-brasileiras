import { Suspense } from "react";
import type { Metadata } from "next";

import { ExpressionList } from "@/components/expression-list";

export const metadata: Metadata = {
  title: "Todas as expressões",
};

export default function ExpressionsPage() {
  return (
    <Suspense fallback={<main className="flex-1" />}>
      <ExpressionList />
    </Suspense>
  );
}
