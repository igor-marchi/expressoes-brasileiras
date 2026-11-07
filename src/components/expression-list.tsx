"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import { ExpressionCardLink } from "@/components/expression-card-link";
import { ListPagination } from "@/components/list-pagination";
import { expressions } from "@/data/expressions";

const PAGE_SIZE = 20;

function normalize(value: string) {
  return value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function parsePage(value: string | null) {
  const page = Number.parseInt(value ?? "", 10);
  return Number.isFinite(page) && page > 0 ? page : 1;
}

function updateUrl(query: string, page: number, mode: "push" | "replace") {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (page > 1) params.set("page", String(page));

  const search = params.toString();
  const url = `${window.location.pathname}${search ? `?${search}` : ""}`;

  if (mode === "push") {
    window.history.pushState(null, "", url);
  } else {
    window.history.replaceState(null, "", url);
  }
}

export function ExpressionList() {
  const initial = useSearchParams();
  const [query, setQuery] = useState(initial.get("q") ?? "");
  const [requestedPage, setRequestedPage] = useState(
    parsePage(initial.get("page")),
  );

  useEffect(() => {
    function handlePopState() {
      const params = new URLSearchParams(window.location.search);
      setQuery(params.get("q") ?? "");
      setRequestedPage(parsePage(params.get("page")));
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const term = normalize(query.trim());

  const items = expressions
    .map((expression, index) => ({ expression, index }))
    .filter(
      ({ expression }) =>
        !term ||
        normalize(expression.text).includes(term) ||
        normalize(expression.meaning).includes(term),
    );

  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const page = Math.min(requestedPage, totalPages);
  const start = (page - 1) * PAGE_SIZE;
  const pageItems = items.slice(start, start + PAGE_SIZE);

  function handleSearch(value: string) {
    setQuery(value);
    setRequestedPage(1);
    updateUrl(value.trim(), 1, "replace");
  }

  function handlePageChange(next: number) {
    setRequestedPage(next);
    updateUrl(query.trim(), next, "push");
    window.scrollTo({ top: 0 });
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-5 py-8 md:px-16 md:py-12">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight md:text-5xl">
            Todas as expressões
          </h1>
          <p className="text-lg text-muted-foreground">
            {expressions.length} expressões. Escolha uma para ver origem e
            significado.
          </p>
        </div>
        <div className="flex min-h-12 w-full items-center gap-3 rounded-full border border-input bg-card px-5 md:w-80">
          <Search className="size-5 text-muted-foreground" aria-hidden="true" />
          <label htmlFor="search" className="sr-only">
            Buscar expressão
          </label>
          <input
            id="search"
            type="text"
            value={query}
            onChange={(event) => handleSearch(event.target.value)}
            placeholder="Buscar expressão"
            className="min-w-0 flex-1 bg-transparent text-base outline-none"
          />
        </div>
      </div>

      {items.length === 0 ? (
        <p className="text-muted-foreground">Nenhuma expressão encontrada.</p>
      ) : (
        <>
          <div className="grid gap-4 md:grid-cols-2">
            {pageItems.map(({ expression, index }) => (
              <ExpressionCardLink
                key={expression.id}
                expression={expression}
                position={index + 1}
                total={expressions.length}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <ListPagination
              page={page}
              totalPages={totalPages}
              from={start + 1}
              to={start + pageItems.length}
              total={items.length}
              onChange={handlePageChange}
            />
          )}
        </>
      )}
    </main>
  );
}
