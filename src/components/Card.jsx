import { forwardRef } from "react";
import { cn } from "../lib/cn.js";

/**
 * Card primitive. Container base del sistema.
 *
 * Props:
 *   hover     Enable hover state (translate-y + shadow pop)
 *   premium   Variant premium con radius mayor y elevación
 *   as        Custom tag (div por default)
 *
 * Sin padding built-in — el consumer aplica p-4, p-5, p-6 según necesite.
 */
export const Card = forwardRef(function Card(
  { hover = false, premium = false, as: Tag = "div", className, children, ...rest },
  ref
) {
  return (
    <Tag
      ref={ref}
      className={cn(
        "card",
        hover && "card-hover",
        premium && "card-premium",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
});
