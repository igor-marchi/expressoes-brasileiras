"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Início" },
  { href: "/expressions", label: "Todas" },
  { href: "/favorites", label: "Favoritas" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-16 md:py-6">
        <Link href="/" className="flex items-center gap-2.5 md:gap-3">
          <span className="flex size-[30px] items-center justify-center rounded-full bg-primary md:size-9">
            <span className="size-[11px] rotate-45 bg-accent md:size-3.5" />
          </span>
          <span className="font-heading text-[19px] font-extrabold md:text-[22px]">
            Expressões do Brasil
          </span>
        </Link>

        <nav className="hidden gap-8 text-base font-medium md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "pb-1 hover:text-primary",
                link.href === pathname && "border-b-2 border-accent",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="flex size-11 items-center justify-center md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-border px-5 py-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
