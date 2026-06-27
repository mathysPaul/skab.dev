"use client";

import * as React from "react";

import type { StackCategory, Tech } from "@/lib/data-access/types";

function TechTile({ tech }: { tech: Tech }) {
  const [imgError, setImgError] = React.useState(false);
  const initials = tech.name.replace(/[^A-Za-z]/g, "").slice(0, 2);
  const showInitials = !tech.logo || imgError;

  return (
    <div className="group relative">
      <button
        type="button"
        aria-label={`${tech.name} — ${tech.note}`}
        className="relative flex aspect-square w-full items-center justify-center rounded-[18px] border border-line bg-white transition-all duration-200 hover:-translate-y-1.5 hover:border-brand hover:shadow-[0_16px_30px_-16px_rgba(78,72,160,0.6)] focus-visible:-translate-y-1.5 focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {showInitials ? (
          <span className="font-mono text-base font-bold text-brand">{initials}</span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={tech.logo as string}
            alt=""
            onError={() => setImgError(true)}
            className="size-10 object-contain transition-transform group-hover:scale-110"
          />
        )}
      </button>

      {/* Tooltip — shown on hover, keyboard focus and tap (focus-within) */}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 z-10 -translate-x-1/2 translate-y-1.5 whitespace-nowrap rounded-[11px] bg-ink px-3 py-2 text-center opacity-0 shadow-[0_12px_28px_-10px_rgba(20,18,50,0.5)] transition-all duration-200 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <span className="block text-[13px] font-bold leading-tight text-white">{tech.name}</span>
        <span className="mt-0.5 block font-mono text-[11px] text-white/70">{tech.note}</span>
      </span>
    </div>
  );
}

function TechGrid({ stack }: { stack: StackCategory[] }) {
  return (
    <div className="flex flex-col gap-7">
      {stack.map((group) => (
        <div key={group.label}>
          <p className="mb-3.5 font-mono text-xs tracking-[1.5px] text-muted-ink">{group.label}</p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(72px,1fr))] gap-3.5">
            {group.items.map((tech) => (
              <TechTile key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export { TechGrid };
