import type { Metadata } from "next";

import { ExpressionList } from "@/components/expression-list";

export const metadata: Metadata = {
  title: "Todas as expressões",
};

export default function ExpressionsPage() {
  return <ExpressionList />;
}
