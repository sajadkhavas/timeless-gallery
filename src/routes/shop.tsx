import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS, COLLECTIONS } from "@/lib/data";

const search = z.object({
  collection: z.enum(["classic", "sport", "heritage"]).optional(),
});

export const Route = createFileRoute("/shop")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "فروشگاه — نوا" },
      { name: "description", content: "مرور تمام ساعت‌های لوکس موجود در گالری نوا با فیلتر بر اساس کالکشن، جنسیت و قیمت." },
      { property: "og:title", content: "فروشگاه — نوا" },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: ShopPage,
});

const GENDERS = ["مردانه", "زنانه", "یونیسکس"] as const;
const SORTS = [
  { v: "new", l: "جدیدترین" },
  { v: "price-asc", l: "ارزان‌ترین" },
  { v: "price-desc", l: "گران‌ترین" },
  { v: "popular", l: "پرفروش‌ترین" },
] as const;

function ShopPage() {
  const { collection } = Route.useSearch();
  const [col, setCol] = useState<string | undefined>(collection);
  const [gender, setGender] = useState<string | undefined>();
  const [sort, setSort] = useState<string>("new");

  const items = useMemo(() => {
    let list = [...PRODUCTS];
    if (col) list = list.filter((p) => p.collection === col);
    if (gender) list = list.filter((p) => p.gender === gender);
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "popular") list.sort((a, b) => b.reviews - a.reviews);
    return list;
  }, [col, gender, sort]);

  return (
    <PageShell>
      <PageHeader
        eyebrow="فروشگاه"
        title="گزینشِ زمان"
        description="فیلترها را به‌کار بگیرید و قطعه‌ی متناسب با سبک خود را بیابید."
        crumbs={[{ label: "فروشگاه" }]}
      />
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[240px_1fr]">
          <aside className="space-y-10">
            <FilterBlock title="کالکشن">
              <ChoiceList
                value={col}
                onChange={setCol}
                options={COLLECTIONS.map((c) => ({ v: c.slug, l: c.title }))}
              />
            </FilterBlock>
            <FilterBlock title="جنسیت">
              <ChoiceList
                value={gender}
                onChange={setGender}
                options={GENDERS.map((g) => ({ v: g, l: g }))}
              />
            </FilterBlock>
            <FilterBlock title="بازه‌ی قیمت">
              <ul className="space-y-3 text-sm text-foreground/70">
                <li>تا ۳۰۰ میلیون تومان</li>
                <li>۳۰۰ تا ۵۰۰ میلیون تومان</li>
                <li>۵۰۰ میلیون تومان به بالا</li>
              </ul>
            </FilterBlock>
          </aside>

          <div>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-5">
              <p className="text-xs text-foreground/55">
                {items.length.toLocaleString("fa-IR")} اثر یافت شد
              </p>
              <div className="flex items-center gap-3 text-xs">
                <span className="text-foreground/50">مرتب‌سازی:</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="border border-hairline bg-transparent px-3 py-1.5 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {SORTS.map((s) => (
                    <option key={s.v} value={s.v} className="bg-background">
                      {s.l}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {items.length === 0 ? (
              <div className="hairline p-12 text-center text-sm text-foreground/55">
                موردی با این فیلترها یافت نشد.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((p) => (
                  <ProductCard key={p.slug} p={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function FilterBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-primary">{title}</p>
      {children}
    </div>
  );
}

function ChoiceList({
  value,
  onChange,
  options,
}: {
  value?: string;
  onChange: (v: string | undefined) => void;
  options: Array<{ v: string; l: string }>;
}) {
  return (
    <ul className="space-y-2 text-sm">
      <li>
        <button
          onClick={() => onChange(undefined)}
          className={`text-foreground/70 transition-colors hover:text-primary ${!value ? "text-primary" : ""}`}
        >
          همه
        </button>
      </li>
      {options.map((o) => (
        <li key={o.v}>
          <button
            onClick={() => onChange(o.v)}
            className={`text-foreground/70 transition-colors hover:text-primary ${value === o.v ? "text-primary" : ""}`}
          >
            {o.l}
          </button>
        </li>
      ))}
    </ul>
  );
}
