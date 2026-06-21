import * as React from "react"

import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow: string
  title: React.ReactNode
  /** heading level — h2 in sections, h1 on page headers */
  as?: "h1" | "h2"
  className?: string
}

/** Monospaced eyebrow label above a title, used across sections and page headers. */
function SectionHeading({ eyebrow, title, as = "h2", className }: SectionHeadingProps) {
  const Heading = as
  return (
    <div className={className}>
      <p className="font-mono text-[13px] uppercase tracking-[2px] text-brand">
        {eyebrow}
      </p>
      <Heading
        className={cn(
          "mt-2.5 font-bold tracking-tight text-ink",
          as === "h1" ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"
        )}
      >
        {title}
      </Heading>
    </div>
  )
}

export { SectionHeading }
