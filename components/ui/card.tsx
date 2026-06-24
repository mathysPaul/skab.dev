import * as React from "react";

import { cn } from "@/lib/utils";

/** Soft surface card matching the portfolio design (line border + faint fill). */
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-card border border-line bg-surface-soft", className)} {...props} />
));
Card.displayName = "Card";

export { Card };
