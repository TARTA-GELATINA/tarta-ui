import { forwardRef } from "react";
import { cn } from "../lib/cn.js";

/**
 * Input primitive. Wrapper mínimo sobre <input> con los estilos del sistema.
 * Acepta cualquier prop nativo del input (type, placeholder, value, onChange, etc).
 */
export const Input = forwardRef(function Input({ className, ...rest }, ref) {
  return <input ref={ref} className={cn("input", className)} {...rest} />;
});

/**
 * Textarea primitive equivalente.
 */
export const Textarea = forwardRef(function Textarea({ className, rows = 3, ...rest }, ref) {
  return <textarea ref={ref} rows={rows} className={cn("textarea", className)} {...rest} />;
});
