import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { LuxuryInput } from "@/components/site/LuxuryInput";
import { ProductGrid } from "@/components/site/ProductGrid";
import { ArticleCard } from "@/components/site/ArticleCard";
import { PRODUCTS, ARTICLES } from "@/lib/data";

const searchSchema = z.object({ q: z.string().optional() });

export const Route = createFileRoute("/search")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "جست‌وجو — نوا" },
      {
        name: "description",
        content: "جست‌وجوی ساعت‌های لوکس، کالکشن‌ها و مقاله‌های تخصصی گالری نوا.",
      },
      { property: "og:title", content: "جست‌وجو در نوا" },
      { property: "og:url", content: "/search" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/search" }],
  }),
  component: SearchPage,
});

function SearchPage() {
  const { q } = Route.useSearch();
  const [term, setTerm] = useState(q ?? "");
  const normalized = term.trim().toLowerCase();
  const products = useMemo(
    () =>
      PRODUCTS.filter((p) =>
        [p.name, p.brand, p.collectionLabel, p.story].join(" ").toLowerCase().includes(normalized),
      ),
    [normalized],
  );
  const articles = useMemo(
    () =>
      ARTICLES.filter((a) =>
        [a.title, a.excerpt, a.category].join(" ").toLowerCase().includes(normalized),
      ),
    [normalized],
  );

  return (
    <PageShell>
      <PageHeader
        eyebrow="جست‌وجو"
        title="ساعت، کالکشن یا روایت موردنظرتان را بیابید."
        description="جست‌وجوی سریع میان قطعات منتخب و مقاله‌های نوا."
        crumbs={[{ label: "جست‌وجو" }]}
      />
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <label
            className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-primary"
            htmlFor="site-search"
          >
            عبارت جست‌وجو
          </label>
          <LuxuryInput
            id="site-search"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
            placeholder="مثلاً توربیون، اسپرت یا نگهداری"
            autoFocus
          />
          <p className="mt-3 text-xs text-foreground/45">
            {products.length.toLocaleString("fa-IR")} محصول و{" "}
            {articles.length.toLocaleString("fa-IR")} مقاله یافت شد.
          </p>
        </div>
      </section>
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <ProductGrid products={normalized ? products : PRODUCTS} />
        </div>
      </section>
      <section className="border-t border-hairline px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-medium">نتایج مجله</h2>
            <Link to="/journal" className="text-xs text-primary hover:underline">
              همه مقاله‌ها
            </Link>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {(normalized ? articles : ARTICLES.slice(0, 3)).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
