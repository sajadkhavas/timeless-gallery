import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/data";
import { formatToman } from "@/lib/data";

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group flex flex-col">
      <Link
        to="/shop/$slug"
        params={{ slug: p.slug }}
        className="relative mb-5 block overflow-hidden bg-surface outline outline-1 -outline-offset-1 outline-white/5"
      >
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          width={900}
          height={1200}
          className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        {p.badge && (
          <span className="absolute right-3 top-3 bg-background/85 px-2.5 py-1 text-[9px] uppercase tracking-[0.25em] text-primary backdrop-blur">
            {p.badge}
          </span>
        )}
        {!p.inStock && (
          <span className="absolute left-3 top-3 bg-background/85 px-2.5 py-1 text-[9px] uppercase tracking-[0.25em] text-foreground/70 backdrop-blur">
            ناموجود
          </span>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between bg-background/90 px-4 py-3 text-[11px] backdrop-blur transition-transform duration-500 group-hover:translate-y-0">
          <span className="text-foreground/70">{p.collectionLabel}</span>
          <span className="text-primary">مشاهده‌ی سریع ←</span>
        </div>
      </Link>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/40">{p.brand}</p>
          <h3 className="mt-1 truncate text-base font-medium">{p.name}</h3>
        </div>
        <div className="shrink-0 text-left">
          {p.oldPrice && (
            <p className="text-[11px] text-foreground/40 line-through">{formatToman(p.oldPrice)}</p>
          )}
          <p className="text-sm font-medium text-primary">{formatToman(p.price)}</p>
          <p className="mt-0.5 text-[10px] uppercase tracking-widest text-foreground/40">تومان</p>
        </div>
      </div>
    </article>
  );
}
