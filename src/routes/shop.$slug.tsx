import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/site/PageShell";
import { ProductCard } from "@/components/site/ProductCard";
import { AssurancePanel } from "@/components/site/AssurancePanel";
import { MaterialStory } from "@/components/site/MaterialStory";
import { findProduct, PRODUCTS, formatToman } from "@/lib/data";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const p = findProduct(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.name} — نوا` : "ساعت — نوا" },
      { name: "description", content: loaderData?.story ?? "جزئیات محصول نوا" },
      { property: "og:title", content: loaderData?.name ?? "نوا" },
      { property: "og:image", content: loaderData?.img ?? "" },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `/shop/${loaderData?.slug ?? ""}` }],
    scripts: loaderData
      ? [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: loaderData.name,
              brand: loaderData.brand,
              description: loaderData.story,
              offers: {
                "@type": "Offer",
                priceCurrency: "IRR",
                price: loaderData.price * 10,
                availability: loaderData.inStock
                  ? "https://schema.org/InStock"
                  : "https://schema.org/OutOfStock",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: loaderData.rating,
                reviewCount: loaderData.reviews,
              },
            }),
          },
        ]
      : [],
  }),
  component: ProductPage,
});

function ProductPage() {
  const p = Route.useLoaderData();
  const [tab, setTab] = useState<"specs" | "story" | "guarantee">("specs");
  const related = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <PageShell>
      <section className="border-b border-hairline px-6 pb-20 pt-12">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-8 text-[11px] uppercase tracking-[0.25em] text-foreground/45">
            <Link to="/" className="hover:text-primary">
              خانه
            </Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-primary">
              فروشگاه
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground/70">{p.name}</span>
          </nav>

          <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <Gallery img={p.img} alt={p.name} />

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-primary">
                {p.brand} ـ {p.collectionLabel}
              </p>
              <h1 className="mt-3 text-3xl font-medium leading-tight md:text-5xl">{p.name}</h1>
              <p className="mt-4 text-sm leading-relaxed text-foreground/65">{p.story}</p>

              <div className="mt-6 flex items-center gap-3 text-xs">
                <span className="text-primary">★ {p.rating.toLocaleString("fa-IR")}</span>
                <span className="text-foreground/50">
                  ({p.reviews.toLocaleString("fa-IR")} نظر)
                </span>
                <span className="h-3 w-px bg-hairline" />
                <span className={p.inStock ? "text-foreground/70" : "text-destructive"}>
                  {p.inStock ? "موجود در آتلیه" : "ناموجود"}
                </span>
              </div>

              <div className="mt-8 flex items-baseline gap-3">
                {p.oldPrice && (
                  <span className="text-sm text-foreground/40 line-through">
                    {formatToman(p.oldPrice)}
                  </span>
                )}
                <span className="text-3xl font-medium text-primary">{formatToman(p.price)}</span>
                <span className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">
                  تومان
                </span>
              </div>

              <div className="mt-10 space-y-4">
                <OptionRow label="بند">
                  <OptionPill active>چرم تمساح</OptionPill>
                  <OptionPill>چرم گاو</OptionPill>
                  <OptionPill>بند فلزی</OptionPill>
                </OptionRow>
                <OptionRow label="سایز">
                  <OptionPill active>{p.diameter}</OptionPill>
                  <OptionPill>۴۲ میلی‌متر</OptionPill>
                </OptionRow>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <button
                  className="bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                  disabled={!p.inStock}
                >
                  افزودن به سبد خرید
                </button>
                <button className="border border-hairline px-6 py-3 text-sm font-medium hover:border-primary">
                  ذخیره در علاقه‌مندی
                </button>
                <Link
                  to="/contact"
                  className="border border-hairline px-6 py-3 text-sm font-medium hover:border-primary"
                >
                  مشاوره‌ی اختصاصی
                </Link>
              </div>

              <div className="mt-10 border-t border-hairline pt-8">
                <AssurancePanel compact />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-20">
            <div className="flex gap-8 border-b border-hairline text-sm">
              {(
                [
                  ["specs", "مشخصات فنی"],
                  ["story", "روایت محصول"],
                  ["guarantee", "ضمانت و خدمات"],
                ] as const
              ).map(([k, l]) => (
                <button
                  key={k}
                  onClick={() => setTab(k)}
                  className={`-mb-px border-b-2 pb-4 transition-colors ${tab === k ? "border-primary text-primary" : "border-transparent text-foreground/55 hover:text-foreground"}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <div className="py-10 text-sm leading-relaxed text-foreground/75">
              {tab === "specs" && (
                <dl className="grid gap-x-12 gap-y-4 sm:grid-cols-2">
                  {[
                    ["قطر بدنه", p.diameter],
                    ["موتور", p.movement],
                    ["متریال بدنه", p.caseMaterial],
                    ["مقاومت آب", p.waterResistance],
                    ["بند", p.strap],
                    ["مناسب", p.gender],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex justify-between gap-4 border-b border-hairline py-3"
                    >
                      <dt className="text-foreground/50">{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {tab === "story" && (
                <p className="max-w-3xl text-pretty leading-loose">
                  {p.story} این قطعه با وسواس در آتلیه‌ی نوا گزینش شده و پیش از تحویل، بازرسیِ کامل
                  کالیبراسیون، مقاومت آب و اصالت قطعات را پشت سر گذاشته است.
                </p>
              )}
              {tab === "guarantee" && (
                <ul className="space-y-3">
                  <li>• گارانتی بین‌المللی برند به مدت دو سال</li>
                  <li>• ضمانت اصالت مادام‌العمر نوا با امکان استعلام</li>
                  <li>• سرویس دوره‌ی پنج‌ساله رایگان در آتلیه‌ی نوا</li>
                  <li>• تعویض بند رایگان برای مشتریان نوا</li>
                </ul>
              )}
            </div>
          </div>

          <div className="mt-12">
            <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-primary">
              Inside the watch
            </p>
            <MaterialStory />
          </div>

          {/* Reviews */}
          <div className="mt-12">
            <h2 className="text-xl font-medium md:text-2xl">نظر کلکسیونرها</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {[
                {
                  n: "آرمان ر.",
                  t: "ساخت بی‌نقص و بسته‌بندی فوق‌العاده. حس واقعی یک قطعه‌ی لوکس.",
                },
                { n: "مهسا ک.", t: "تجربه‌ی خرید بسیار حرفه‌ای؛ تیم نوا در هر مرحله همراه بود." },
              ].map((r) => (
                <div key={r.n} className="hairline p-6">
                  <p className="text-sm leading-relaxed text-foreground/75">«{r.t}»</p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-foreground/45">
                    {r.n}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-10 text-xl font-medium md:text-2xl">قطعات هم‌خانواده</h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {related.map((r) => (
              <ProductCard key={r.slug} p={r} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function OptionRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-foreground/50">{label}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function OptionPill({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <button
      className={`border px-4 py-2 text-xs transition-colors ${active ? "border-primary text-primary" : "border-hairline text-foreground/70 hover:border-foreground/40"}`}
    >
      {children}
    </button>
  );
}

function Gallery({ img, alt }: { img: string; alt: string }) {
  const [active, setActive] = useState(0);
  const imgs = [img, img, img, img];
  return (
    <div className="grid gap-4 md:grid-cols-[80px_1fr]">
      <div className="order-2 flex gap-3 md:order-1 md:flex-col">
        {imgs.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative size-16 overflow-hidden border ${active === i ? "border-primary" : "border-hairline"}`}
          >
            <img src={src} alt="" className="size-full object-cover opacity-80" />
          </button>
        ))}
      </div>
      <div className="order-1 overflow-hidden bg-surface md:order-2">
        <img src={imgs[active]} alt={alt} className="aspect-[4/5] w-full object-cover" />
      </div>
    </div>
  );
}
