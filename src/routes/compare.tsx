import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { PRODUCTS, formatToman } from "@/lib/data";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "مقایسه‌ی ساعت‌ها — نوا" },
      { name: "description", content: "مقایسه‌ی فنی و ظاهری ساعت‌های لوکس برای انتخاب آگاهانه‌تر." },
      { property: "og:title", content: "مقایسه‌ی ساعت‌ها — نوا" },
      { property: "og:url", content: "/compare" },
    ],
    links: [{ rel: "canonical", href: "/compare" }],
  }),
  component: ComparePage,
});

function ComparePage() {
  const [slugs, setSlugs] = useState<string[]>([
    PRODUCTS[0].slug,
    PRODUCTS[1].slug,
    PRODUCTS[2].slug,
  ]);
  const items = slugs.map((s) => PRODUCTS.find((p) => p.slug === s)!).filter(Boolean);

  function setAt(i: number, v: string) {
    setSlugs((prev) => prev.map((p, idx) => (idx === i ? v : p)));
  }
  function addColumn() {
    if (slugs.length < 4) setSlugs([...slugs, PRODUCTS[0].slug]);
  }
  function removeAt(i: number) {
    if (slugs.length > 2) setSlugs(slugs.filter((_, idx) => idx !== i));
  }

  const rows: Array<[string, (k: typeof items[number]) => string]> = [
    ["برند", (k) => k.brand],
    ["کالکشن", (k) => k.collectionLabel],
    ["قیمت (تومان)", (k) => formatToman(k.price)],
    ["قطر بدنه", (k) => k.diameter],
    ["موتور", (k) => k.movement],
    ["متریال بدنه", (k) => k.caseMaterial],
    ["مقاومت آب", (k) => k.waterResistance],
    ["بند", (k) => k.strap],
    ["مناسب", (k) => k.gender],
    ["موجودی", (k) => (k.inStock ? "موجود" : "ناموجود")],
  ];

  return (
    <PageShell>
      <PageHeader
        eyebrow="مقایسه"
        title="انتخابِ آگاهانه‌ی زمان"
        description="تا چهار ساعت را کنار هم بگذارید و تفاوت‌های فنی و ظاهری را شفاف ببینید."
        crumbs={[{ label: "مقایسه" }]}
      />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="w-40 py-4 text-right text-[10px] uppercase tracking-[0.3em] text-primary"> </th>
                {items.map((p, i) => (
                  <th key={i} className="border-b border-hairline p-4 text-right align-top">
                    <div className="space-y-3">
                      <div className="overflow-hidden bg-surface">
                        <img src={p.img} alt={p.name} className="aspect-[4/5] w-full object-cover" />
                      </div>
                      <select
                        value={p.slug}
                        onChange={(e) => setAt(i, e.target.value)}
                        className="w-full border border-hairline bg-transparent px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        {PRODUCTS.map((x) => (
                          <option key={x.slug} value={x.slug} className="bg-background">{x.name}</option>
                        ))}
                      </select>
                      {slugs.length > 2 && (
                        <button onClick={() => removeAt(i)} className="text-[10px] uppercase tracking-[0.25em] text-foreground/45 hover:text-destructive">
                          حذف ستون
                        </button>
                      )}
                    </div>
                  </th>
                ))}
                {slugs.length < 4 && (
                  <th className="border-b border-hairline p-4 align-top">
                    <button onClick={addColumn} className="hairline w-full py-12 text-xs text-foreground/55 hover:text-primary">
                      + افزودن ساعت
                    </button>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {rows.map(([k, fn]) => (
                <tr key={k} className="border-b border-hairline">
                  <td className="py-4 text-[10px] uppercase tracking-[0.25em] text-foreground/50">{k}</td>
                  {items.map((p, i) => (
                    <td key={i} className="py-4 text-foreground/85">{fn(p)}</td>
                  ))}
                  {slugs.length < 4 && <td />}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  );
}
