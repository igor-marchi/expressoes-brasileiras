import { Suspense } from "react";

import { ExpressionViewer } from "@/components/expression-viewer";
import { entries } from "@/data/entries";

async function SelectedExpression({
  searchParams,
}: {
  searchParams: PageProps<"/">["searchParams"];
}) {
  const { expression } = await searchParams;
  const id = typeof expression === "string" ? expression : undefined;
  const found = entries.some((item) => item.id === id);

  return <ExpressionViewer key={id} initialId={found && id ? id : null} />;
}

export default function Home({ searchParams }: PageProps<"/">) {
  return (
    <Suspense fallback={<main className="flex-1" />}>
      <SelectedExpression searchParams={searchParams} />
    </Suspense>
  );
}
