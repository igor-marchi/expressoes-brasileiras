"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";

import { ExpressionContent } from "@/components/expression-content";
import { entries } from "@/data/entries";
import { cn } from "@/lib/utils";

const SWIPE_DISTANCE = 60;
const SETTLE_MS = 200;

type Phase = "idle" | "dragging" | "settling";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ExpressionSwiper({
  index,
  onChange,
}: {
  index: number;
  onChange: (index: number) => void;
}) {
  const total = entries.length;
  const previous = (index + total - 1) % total;
  const next = (index + 1) % total;

  const [offset, setOffset] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const container = useRef<HTMLDivElement>(null);
  const touch = useRef<{ x: number; y: number; id: number } | null>(null);
  const axis = useRef<"x" | "y" | null>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function handlePointerDown(event: PointerEvent) {
    if (phase === "settling") return;
    touch.current = { x: event.clientX, y: event.clientY, id: event.pointerId };
    axis.current = null;
  }

  function handlePointerMove(event: PointerEvent) {
    const start = touch.current;
    if (!start || event.pointerId !== start.id) return;

    const moveX = event.clientX - start.x;
    const moveY = event.clientY - start.y;

    if (axis.current === null) {
      if (Math.abs(moveX) < 8 && Math.abs(moveY) < 8) return;
      axis.current = Math.abs(moveX) > Math.abs(moveY) ? "x" : "y";
      if (axis.current === "x") {
        container.current?.setPointerCapture(event.pointerId);
        setPhase("dragging");
      }
    }

    if (axis.current === "x") {
      setOffset(moveX);
    }
  }

  function handlePointerEnd() {
    const wasSwipe = touch.current !== null && axis.current === "x";
    touch.current = null;
    axis.current = null;
    if (!wasSwipe) return;

    const direction =
      offset <= -SWIPE_DISTANCE ? 1 : offset >= SWIPE_DISTANCE ? -1 : 0;
    const width = container.current?.offsetWidth ?? 0;
    const instant = prefersReducedMotion();

    function settle() {
      if (direction !== 0) {
        onChange(direction === 1 ? next : previous);
      }
      setPhase("idle");
      setOffset(0);
    }

    if (instant) {
      settle();
      return;
    }

    setPhase("settling");
    setOffset(direction === 0 ? 0 : -direction * width);
    timer.current = window.setTimeout(settle, SETTLE_MS);
  }

  return (
    <div
      ref={container}
      data-testid="swiper"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      className="relative flex min-h-0 flex-1 touch-pan-y flex-col overflow-hidden select-none"
    >
      <div
        className={cn(
          "relative flex flex-1 flex-col",
          phase === "settling" && "transition-transform duration-200 ease-out",
        )}
        style={{ transform: `translateX(${offset}px)` }}
      >
        <div
          className="absolute inset-y-0 -left-full flex w-full flex-col"
          aria-hidden
          inert
        >
          <ExpressionContent
            expression={entries[previous]}
            index={previous}
            showCounter={false}
          />
        </div>
        <div className="flex flex-1 flex-col">
          <ExpressionContent
            expression={entries[index]}
            index={index}
            showCounter={false}
          />
        </div>
        <div
          className="absolute inset-y-0 left-full flex w-full flex-col"
          aria-hidden
          inert
        >
          <ExpressionContent
            expression={entries[next]}
            index={next}
            showCounter={false}
          />
        </div>
      </div>
    </div>
  );
}
