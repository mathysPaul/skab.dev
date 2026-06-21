import * as React from "react"

import { cn } from "@/lib/utils"

/** Small monospaced chip used for tech labels. */
function Tag({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-secondary px-2.5 py-1 font-mono text-[11px] leading-none text-body",
        className
      )}
      {...props}
    />
  )
}

export { Tag }
