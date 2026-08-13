import { forwardRef } from "react";
import { cn } from "../lib/cn.js";

/**
 * Button primitive. Variants: primary | secondary | ghost | outline | danger.
 * Sizes: sm | md (default) | lg.
 *
 * Uso:
 *   <Button variant="primary">Save</Button>
 *   <Button variant="ghost" size="sm">Cancel</Button>
 *
 * className se acumula al final para overrides puntuales sin forkear.
 */
export const Button = forwardRef(function Button(
  { variant = "secondary", size = "md", className, children, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        "btn",
        `btn-${variant}`,
        size !== "md" && `btn-${size}`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
});
