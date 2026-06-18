import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Nav />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs?: Array<{ to?: string; label: string }>;
}) {
  return (
    <header className="border-b border-hairline px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {crumbs && (
          <nav aria-label="مسیر صفحه" className="mb-8 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-foreground/45">
            <Link to="/" className="hover:text-primary">خانه</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                <span aria-hidden>/</span>
                {c.to ? (
                  <Link to={c.to} className="hover:text-primary">{c.label}</Link>
                ) : (
                  <span className="text-foreground/70">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-primary">{eyebrow}</p>
        <h1 className="text-balance text-3xl font-medium leading-tight md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-foreground/60 md:text-base">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
