"use client";

import { MARQUEE_ITEMS } from "@/data/reviews";

export default function ProductMarquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative overflow-hidden border-y border-navy/10 bg-navy text-white">
      <div className="marquee-track flex w-max items-center gap-0 py-3.5 hover:[animation-play-state:paused] sm:py-4">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center">
            <span className="px-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-steel-light sm:px-5 sm:text-xs">
              {item}
            </span>
            <span className="text-gold" aria-hidden>
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
