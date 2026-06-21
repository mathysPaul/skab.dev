import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-2 rounded-full font-mono leading-none",
  {
    variants: {
      variant: {
        soft: "bg-brand-soft text-brand",
        outline: "border border-line bg-white text-body",
        neutral: "bg-white/90 text-ink",
      },
      size: {
        sm: "px-2.5 py-1 text-[11px]",
        md: "px-3.5 py-1.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "soft",
      size: "sm",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** color of the leading status dot (e.g. var(--success)); omit for no dot */
  dot?: string
}

function Badge({ className, variant, size, dot, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span
          aria-hidden
          className="size-2 rounded-full"
          style={{ background: dot, boxShadow: `0 0 0 4px color-mix(in srgb, ${dot} 18%, transparent)` }}
        />
      )}
      {children}
    </span>
  )
}

export { Badge, badgeVariants }
