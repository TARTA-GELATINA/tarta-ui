import { forwardRef } from "react";
import { cn } from "../lib/cn.js";

/**
 * Checkbox primitive — look pro tipo Linear/Notion.
 *
 * Cuadrado 16px con radius sutil. En reposo: border subtle sobre
 * surface. Al chequear: fill slate-900 con check blanco. Transición
 * 150ms cubic-bezier(0.16,1,0.3,1).
 *
 * Uso:
 *   <Checkbox label="Show sent" checked={x} onChange={setX} />
 *
 * Sin label:
 *   <Checkbox checked={x} onChange={setX} />
 *
 * El wrapper es <label> — el clic en el texto también toggle-a. Sin
 * ring/box-shadow feo del browser default. Focus visible via
 * --shadow-focus del sistema.
 */
export const Checkbox = forwardRef(function Checkbox(
  { label, checked, onChange, disabled, className, id, ...rest },
  ref
) {
  const inputId = id ?? `chk-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <label
      htmlFor={inputId}
      className={cn(
        "inline-flex cursor-pointer items-center gap-2 select-none",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      <span className="relative inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center">
        {/* Input real oculto (sr-only) pero interactivo. accent-color
            del navegador se ignora porque el input no se ve. */}
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          checked={!!checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          className="peer sr-only"
          {...rest}
        />
        {/* Cuadrado visual — sigue el estado del peer input */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-md border-[1.5px] border-[var(--color-line)] bg-[var(--color-surface)] transition-all peer-hover:border-[var(--text-muted)] peer-checked:border-[var(--text-primary)] peer-checked:bg-[var(--text-primary)] peer-focus-visible:shadow-[var(--shadow-focus)]"
        />
        {/* Check icon — visible solo cuando el peer input está checked */}
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
          className="pointer-events-none relative h-[13px] w-[13px] text-white opacity-0 transition-opacity peer-checked:opacity-100"
        >
          <path
            d="M3.5 8.5 6.5 11.5 12.5 5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {label && (
        <span className="text-sm text-[var(--text-primary)]">{label}</span>
      )}
    </label>
  );
});
