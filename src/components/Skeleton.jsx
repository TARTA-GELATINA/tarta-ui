import { cn } from "../lib/cn.js";

/**
 * Skeleton — placeholder mientras cargan datos. Usa siempre los
 * tokens warm del sistema (nunca bg-slate-* frío) para que el estado
 * de carga NO cante contra el canvas warm de la app.
 *
 * Uso básico (línea):
 *   <Skeleton className="h-3 w-32" />
 *
 * Uso card:
 *   <Skeleton variant="card" className="h-16" />
 *
 * Variantes:
 *   line (default) → bg color-line (más oscuro, para labels/números)
 *   card           → bg color-surface + border subtle (para cards que
 *                    van a llenarse con contenido)
 *   block          → bg color-muted (para bloques de sub-superficie)
 */
export function Skeleton({ variant = "line", className, style, ...rest }) {
  const bg =
    variant === "card"
      ? "var(--color-surface)"
      : variant === "block"
        ? "var(--color-muted)"
        : "var(--color-line)";

  return (
    <div
      className={cn(
        "animate-pulse rounded",
        variant === "card" && "border border-[var(--color-subtle)]",
        className
      )}
      style={{ background: bg, ...style }}
      aria-hidden
      {...rest}
    />
  );
}

/**
 * SkeletonKanban — layout completo de kanban en loading. N columnas,
 * cada una con M cards placeholder. Usa los mismos tokens warm que
 * el kanban real → cero salto al hidratar.
 */
export function SkeletonKanban({ columns = 3, cardsPerColumn = 3 }) {
  return (
    <div
      className="grid gap-3"
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: columns }).map((_, c) => (
        <div key={c} className="rounded-lg bg-[var(--color-muted)] p-2">
          <Skeleton className="mb-2 h-3 w-20" />
          <div className="space-y-2">
            {Array.from({ length: cardsPerColumn }).map((_, i) => (
              <Skeleton key={i} variant="card" className="h-16" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
