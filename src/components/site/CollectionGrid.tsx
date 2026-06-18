import { Link } from "@tanstack/react-router";
import type { Collection } from "@/lib/data";

export function CollectionGrid({ collections }: { collections: Collection[] }) {
  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
      {collections.map((c) => (
        <Link
          key={c.slug}
          to="/shop"
          search={{ collection: c.slug }}
          className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <div className="relative mb-5 overflow-hidden bg-surface outline outline-1 -outline-offset-1 outline-white/5">
            <img
              src={c.img}
              alt={c.title}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
            />
            <span className="absolute right-3 top-3 text-[9px] uppercase tracking-[0.3em] text-foreground/60">
              {c.label}
            </span>
          </div>
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="truncate text-lg font-medium group-hover:text-primary">{c.title}</h3>
              <p className="mt-1 text-xs text-foreground/50">{c.subtitle}</p>
            </div>
            <p className="shrink-0 text-[10px] uppercase tracking-widest text-foreground/40">
              {c.count} اثر
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
