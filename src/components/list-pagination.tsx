import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  page: number;
  totalPages: number;
  from: number;
  to: number;
  total: number;
  onChange: (page: number) => void;
};

function visiblePages(page: number, totalPages: number): (number | "gap")[] {
  if (totalPages <= 6) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
  if (page <= 3) {
    return [1, 2, 3, 4, "gap", totalPages];
  }
  if (page >= totalPages - 2) {
    return [
      1,
      "gap",
      ...Array.from({ length: 4 }, (_, i) => totalPages - 3 + i),
    ];
  }
  return [1, "gap", page - 1, page, page + 1, "gap", totalPages];
}

export function ListPagination({
  page,
  totalPages,
  from,
  to,
  total,
  onChange,
}: Props) {
  return (
    <nav
      aria-label="Paginação"
      className="flex flex-col gap-1.5 border-t border-border pt-5 md:flex-row md:items-center md:justify-between md:gap-4 md:pt-6"
    >
      <p className="text-center text-[15px] text-muted-foreground md:text-left">
        Mostrando {from} a {to} de {total}
      </p>
      <p className="mb-2.5 text-center text-base font-semibold md:hidden">
        Página {page} de {totalPages}
      </p>
      <div className="flex gap-3 md:items-center md:justify-end md:gap-2">
        <Button
          variant="outline"
          disabled={page <= 1}
          onClick={() => onChange(page - 1)}
          aria-label="Página anterior"
          className="h-[52px] min-w-0 flex-1 gap-2 rounded-full border-input bg-card text-base font-semibold hover:bg-secondary md:h-11 md:flex-none md:px-[18px]"
        >
          <ArrowLeft className="size-[18px]" />
          Anterior
        </Button>

        <div className="hidden items-center gap-2 md:flex">
          {visiblePages(page, totalPages).map((item, index) =>
            item === "gap" ? (
              <span
                key={`gap-${index}`}
                aria-hidden="true"
                className="flex size-11 items-center justify-center text-base font-semibold text-muted-foreground"
              >
                …
              </span>
            ) : (
              <Button
                key={item}
                variant="outline"
                onClick={() => onChange(item)}
                aria-label={`Página ${item}`}
                aria-current={item === page ? "page" : undefined}
                className={cn(
                  "size-11 rounded-full text-base font-semibold",
                  item === page
                    ? "border-primary bg-primary text-primary-foreground hover:bg-primary"
                    : "border-input bg-card hover:bg-secondary",
                )}
              >
                {item}
              </Button>
            ),
          )}
        </div>

        <Button
          disabled={page >= totalPages}
          onClick={() => onChange(page + 1)}
          aria-label="Próxima página"
          className="h-[52px] min-w-0 flex-1 gap-2 rounded-full text-base font-semibold md:h-11 md:flex-none md:px-[18px]"
        >
          Próxima
          <ArrowRight className="size-[18px]" />
        </Button>
      </div>
    </nav>
  );
}
