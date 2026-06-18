import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { PRODUCTS, formatToman } from "@/lib/data";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "سبد خرید — نوا" },
      { name: "description", content: "جمع‌بندی خرید شما در گالری نوا." },
      { property: "og:url", content: "/cart" },
    ],
    links: [{ rel: "canonical", href: "/cart" }],
  }),
  component: CartPage,
});

function CartPage() {
  const [items, setItems] = useState([
    { slug: PRODUCTS[0].slug, qty: 1 },
    { slug: PRODUCTS[1].slug, qty: 1 },
  ]);
  const [code, setCode] = useState("");

  const lines = items
    .map((it) => ({ p: PRODUCTS.find((p) => p.slug === it.slug)!, qty: it.qty }))
    .filter((l) => l.p);

  const sub = lines.reduce((s, l) => s + l.p.price * l.qty, 0);
  const shipping = sub > 0 ? 1_500_000 : 0;
  const total = sub + shipping;

  function setQty(slug: string, qty: number) {
    if (qty < 1) return;
    setItems((prev) => prev.map((p) => (p.slug === slug ? { ...p, qty } : p)));
  }
  function remove(slug: string) {
    setItems((prev) => prev.filter((p) => p.slug !== slug));
  }

  return (
    <PageShell>
      <PageHeader eyebrow="سبد خرید" title="سفارش شما" crumbs={[{ label: "سبد خرید" }]} />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {lines.length === 0 ? (
            <div className="hairline grid place-items-center gap-4 p-20 text-center">
              <p className="text-sm text-foreground/55">سبد خرید شما خالی است.</p>
              <Link
                to="/shop"
                className="bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                مرور فروشگاه
              </Link>
            </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:gap-16">
              <ul className="divide-y divide-hairline border-y border-hairline">
                {lines.map((l) => (
                  <li key={l.p.slug} className="flex items-start gap-5 py-6">
                    <Link
                      to="/shop/$slug"
                      params={{ slug: l.p.slug }}
                      className="block size-24 shrink-0 overflow-hidden bg-surface md:size-28"
                    >
                      <img src={l.p.img} alt={l.p.name} className="size-full object-cover" />
                    </Link>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/45">
                        {l.p.brand}
                      </p>
                      <h3 className="mt-1 truncate text-base font-medium">{l.p.name}</h3>
                      <p className="mt-1 text-xs text-foreground/55">{l.p.collectionLabel}</p>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <div className="inline-flex items-center border border-hairline">
                          <button
                            onClick={() => setQty(l.p.slug, l.qty - 1)}
                            className="px-3 py-1.5 text-sm"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-sm">
                            {l.qty.toLocaleString("fa-IR")}
                          </span>
                          <button
                            onClick={() => setQty(l.p.slug, l.qty + 1)}
                            className="px-3 py-1.5 text-sm"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => remove(l.p.slug)}
                          className="text-[11px] uppercase tracking-[0.25em] text-foreground/50 hover:text-destructive"
                        >
                          حذف
                        </button>
                      </div>
                    </div>
                    <div className="shrink-0 text-left">
                      <p className="text-sm font-medium text-primary">
                        {formatToman(l.p.price * l.qty)}
                      </p>
                      <p className="text-[10px] uppercase tracking-widest text-foreground/40">
                        تومان
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <aside className="hairline self-start p-6">
                <p className="text-[10px] uppercase tracking-[0.35em] text-primary">
                  خلاصه‌ی سفارش
                </p>
                <dl className="mt-6 space-y-3 text-sm">
                  <Row k="جمع کالاها" v={`${formatToman(sub)} تومان`} />
                  <Row k="هزینه‌ی ارسال" v={`${formatToman(shipping)} تومان`} />
                </dl>

                <div className="mt-6 flex gap-2">
                  <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="کد تخفیف"
                    className="flex-1 border border-hairline bg-transparent px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  />
                  <button className="border border-hairline px-4 py-2 text-xs hover:border-primary">
                    اعمال
                  </button>
                </div>

                <div className="mt-6 flex items-baseline justify-between border-t border-hairline pt-4">
                  <span className="text-xs uppercase tracking-[0.25em] text-foreground/55">
                    مبلغ نهایی
                  </span>
                  <span className="text-2xl font-medium text-primary">{formatToman(total)}</span>
                </div>

                <Link
                  to="/checkout"
                  className="mt-6 block bg-primary py-3 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  ادامه به پرداخت
                </Link>
                <Link
                  to="/shop"
                  className="mt-3 block text-center text-xs text-foreground/55 hover:text-primary"
                >
                  ← ادامه‌ی خرید
                </Link>
              </aside>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between text-foreground/70">
      <dt>{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
