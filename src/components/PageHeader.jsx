import { cn } from "../lib/cn.js";

/**
 * PageHeader — chrome uniforme de header de página para todas las
 * apps del suite. Un solo componente asegura mismo layout, mismo
 * padding, misma jerarquía.
 *
 * Layout:
 *   - Border-bottom subtle sobre bg-surface
 *   - Title (h1) a la izquierda
 *   - `children` = actions a la derecha (filtros, botones)
 *   - SIN subtitle. La guía prohíbe párrafos explicativos bajo headers.
 *
 * Uso:
 *   <PageHeader title="Social Studio">
 *     <Button variant="secondary">Generate ideas</Button>
 *     <Button variant="primary">+ New post</Button>
 *   </PageHeader>
 *
 * Si necesitas breadcrumb encima del title, pasa `eyebrow`:
 *   <PageHeader eyebrow="Email Studio" title="Brand Assets" />
 */
export function PageHeader({ title, eyebrow, className, children }) {
  return (
    <header className={cn("flex-shrink-0", className)}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 pb-4 pt-12 sm:px-6 sm:pt-16 md:px-10">
        <div className="min-w-0 flex-1">
          {eyebrow && (
            <p className="eyebrow mb-1">{eyebrow}</p>
          )}
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
            {title}
          </h1>
        </div>
        {children && (
          <div className="flex flex-shrink-0 items-center gap-2">
            {children}
          </div>
        )}
      </div>
    </header>
  );
}
