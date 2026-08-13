import { forwardRef } from "react";
import { cn } from "../lib/cn.js";

/**
 * Badge primitive. Pill estática con color semántico.
 *
 * Tones: neutral (default) | accent | success | warning | danger | info
 *
 * Uso:
 *   <Badge tone="success">Complete</Badge>
 *   <Badge tone="danger">Overdue</Badge>
 */
export const Badge = forwardRef(function Badge(
  { tone = "neutral", className, children, ...rest },
  ref
) {
  return (
    <span
      ref={ref}
      className={cn("badge", `badge-${tone}`, className)}
      {...rest}
    >
      {children}
    </span>
  );
});
