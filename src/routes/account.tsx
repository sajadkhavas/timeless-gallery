import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { PRODUCTS, formatToman } from "@/lib/data";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "حساب کاربری — نوا" },
      { name: "description", content: "سفارش‌ها، علاقه‌مندی‌ها، آدرس‌ها و پشتیبانی شخصی شما در نوا." },
      { property: "og:url", content: "/account" },
    ],
    links: [{ rel: "canonical", href: "/account" }],
  }),
  component: AccountPage,
});

const TABS = [
  { k: "orders", l: "سفارش‌ها" },
  { k: "wishlist", l: "علاقه‌مندی‌ها" },
  { k: "addresses", l: "آدرس‌ها" },
  { k: "support", l: "پشتیبانی" },
] as const;

const ORDERS = [
  { id: "NV-۱۴۰۳۲۲۸", date: "۲۸ اردیبهشت ۱۴۰۳", status: "تحویل‌شده", total: 480_000_000, items: 1 },
  { id: "NV-۱۴۰۳۱۹۵", date: "۱۹ اردیبهشت ۱۴۰۳", status: "در حال آماده‌سازی", total: 320_000_000, items: 1 },
  { id: "NV-۱۴۰۳۰۷۱", date: "۷ فروردین ۱۴۰۳", status: "تحویل‌شده", total: 620_000_000, items: 1 },
];

function AccountPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]["k"]>("orders");
  return (
    <PageShell>
      <PageHeader
        eyebrow="حساب کاربری"
        title="سلام، آرمان."
        description="مرور سفارش‌ها، علاقه‌مندی‌ها و تنظیمات شخصی شما در گالری نوا."
        crumbs={[{ label: "حساب کاربری" }]}
      />
      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[220px_1fr]">
          <aside>
            <ul className="space-y-1 text-sm">
              {TABS.map((t) => (
                <li key={t.k}>
                  <button
                    onClick={() => setTab(t.k)}
                    className={`block w-full border-r-2 py-2 pr-4 text-right transition-colors ${tab === t.k ? "border-primary text-primary" : "border-transparent text-foreground/65 hover:text-foreground"}`}
                  >
                    {t.l}
                  </button>
                </li>
              ))}
              <li>
                <button className="block w-full border-r-2 border-transparent py-2 pr-4 text-right text-foreground/50 hover:text-destructive">
                  خروج از حساب
                </button>
              </li>
            </ul>
          </aside>

          <div>
            {tab === "orders" && (
              <div className="divide-y divide-hairline border-y border-hairline">
                {ORDERS.map((o) => (
                  <div key={o.id} className="flex flex-wrap items-center justify-between gap-4 py-5">
                    <div>
                      <p className="text-sm font-medium">سفارش {o.id}</p>
                      <p className="mt-1 text-xs text-foreground/55">{o.date} ـ {o.items.toLocaleString("fa-IR")} قطعه</p>
                    </div>
                    <p className="text-xs text-primary">{o.status}</p>
                    <p className="text-sm">{formatToman(o.total)} ت</p>
                    <button className="text-[11px] uppercase tracking-[0.25em] text-foreground/55 hover:text-primary">پیگیری</button>
                  </div>
                ))}
              </div>
            )}

            {tab === "wishlist" && (
              <div className="grid gap-8 sm:grid-cols-2">
                {PRODUCTS.slice(0, 4).map((p) => (
                  <Link key={p.slug} to="/product/$slug" params={{ slug: p.slug }} className="group flex gap-4 hairline p-4">
                    <div className="size-24 shrink-0 overflow-hidden bg-surface">
                      <img src={p.img} alt={p.name} className="size-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/45">{p.brand}</p>
                      <h3 className="mt-1 truncate text-base font-medium group-hover:text-primary">{p.name}</h3>
                      <p className="mt-2 text-sm text-primary">{formatToman(p.price)} ت</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {tab === "addresses" && (
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  { t: "منزل ـ تهران", a: "خیابان فرشته، بن‌بست آرام، پلاک ۱۲، واحد ۳" },
                  { t: "محل کار ـ تهران", a: "بلوار میرداماد، برج اطلس، طبقه‌ی ۸" },
                ].map((x) => (
                  <div key={x.t} className="hairline p-6">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-primary">{x.t}</p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/75">{x.a}</p>
                    <div className="mt-4 flex gap-3 text-[11px] uppercase tracking-[0.25em] text-foreground/55">
                      <button className="hover:text-primary">ویرایش</button>
                      <button className="hover:text-destructive">حذف</button>
                    </div>
                  </div>
                ))}
                <button className="hairline grid place-items-center p-6 text-sm text-foreground/55 hover:text-primary">
                  + افزودن نشانی جدید
                </button>
              </div>
            )}

            {tab === "support" && (
              <div className="hairline p-8 text-sm leading-loose text-foreground/70">
                تیم پشتیبانی نوا در ساعات کاری از طریق تلفن ۰۲۱-۲۲۰۰۰۰۰۰ و واتساپ
                ۰۹۱۲۰۰۰۰۰۰۰ پاسخگوی شماست. هم‌چنین می‌توانید از <Link to="/contact" className="text-primary hover:underline">فرم تماس</Link> استفاده کنید.
              </div>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
