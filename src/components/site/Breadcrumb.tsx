import { Link } from "@tanstack/react-router";

export function Breadcrumb({ items }: { items: Array<{ to?: string; label: string }> }) {
  return (
    <nav
      aria-label="مسیر صفحه"
      className="mb-8 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-foreground/45"
    >
      <Link
        to="/"
        className="rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        خانه
      </Link>
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center gap-2">
          <span aria-hidden>/</span>
          {item.to ? (
            <Link
              to={item.to}
              className="rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground/70">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
