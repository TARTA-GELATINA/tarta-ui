import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "../lib/cn.js";

/**
 * Tabs con underline animado (sliding).
 *
 * El underline es un <span> absoluto cuyo left/width interpolan a la
 * posición del tab activo. Sigue el pattern de la guía
 * (design-system/interactions), 220ms cubic-bezier(0.16, 1, 0.3, 1).
 *
 * Uso:
 *   <Tabs
 *     tabs={[{ id: "compose", label: "Compose" }, { id: "live", label: "Live" }]}
 *     activeId={tab}
 *     onChange={setTab}
 *   />
 *
 * Cada tab puede llevar `count` opcional que renderiza un contador
 * pequeño al lado del label.
 */
export function Tabs({ tabs, activeId, onChange, className, size = "md" }) {
  const containerRef = useRef(null);
  const tabRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const node = tabRefs.current[activeId];
    if (!node || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();
    setIndicator({
      left: nodeRect.left - containerRect.left,
      width: nodeRect.width,
    });
  }, [activeId, tabs]);

  useEffect(() => {
    const onResize = () => {
      const node = tabRefs.current[activeId];
      if (!node || !containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      setIndicator({
        left: nodeRect.left - containerRect.left,
        width: nodeRect.width,
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeId]);

  return (
    <div
      ref={containerRef}
      role="tablist"
      className={cn("relative flex", className)}
      style={{ borderBottom: "0.5px solid var(--color-subtle)" }}
    >
      {tabs.map((t) => {
        const isActive = t.id === activeId;
        return (
          <button
            key={t.id}
            ref={(el) => (tabRefs.current[t.id] = el)}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(t.id)}
            className={cn(
              "relative inline-flex items-center gap-2 whitespace-nowrap font-medium transition-colors",
              size === "sm" ? "px-3 py-2 text-xs" : "px-4 py-2.5 text-sm",
              isActive
                ? "text-slate-900"
                : "text-slate-500 hover:text-slate-700"
            )}
          >
            {t.label}
            {typeof t.count === "number" && (
              <span
                className={cn(
                  "inline-flex min-w-[18px] items-center justify-center rounded-full px-1.5 text-[10px] font-semibold",
                  isActive ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
                )}
              >
                {t.count}
              </span>
            )}
          </button>
        );
      })}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 h-0.5"
        style={{
          left: indicator.left,
          width: indicator.width,
          background: "var(--text-primary)",
          transition:
            "left 220ms cubic-bezier(0.16, 1, 0.3, 1), width 220ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />
    </div>
  );
}
