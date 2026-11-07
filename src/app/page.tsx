import { Suspense } from "react";

import { ExpressionViewer } from "@/components/expression-viewer";
import { expressions } from "@/data/expressions";

async function SelectedExpression({
  searchParams,
}: {
  searchParams: PageProps<"/">["searchParams"];
}) {
  const { expression } = await searchParams;
  const id = typeof expression === "string" ? expression : undefined;
  const found = expressions.findIndex((item) => item.id === id);

  return <ExpressionViewer key={id} initialIndex={found >= 0 ? found : 0} />;
}

export default function Home({ searchParams }: PageProps<"/">) {
  return (
    <Suspense fallback={<main className="flex-1" />}>
      <SelectedExpression searchParams={searchParams} />
    </Suspense>
  );
}
