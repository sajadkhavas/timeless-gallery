import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { COLLECTIONS } from "@/lib/data";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "کالکشن‌ها — نوا" },
      { name: "description", content: "مرور کالکشن‌های ساعت‌های لوکس نوا؛ کلاسیک، اسپرت لوکس و نسخه‌ی میراثی." },
      { property: "og:title", content: "کالکشن‌ها — نوا" },
      { property: "og:url", content: "/collections" },
    ],
    links: [{ rel: "canonical", href: "/collections" }],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="کالکشن‌ها"
        title="گزینشی از مجموعه‌های نوا"
        description="هر کالکشن، روایتی متفاوت از زمان است؛ از سنّتِ کلاسیک سوئیس تا روح ماجراجویانه‌ی ساعت‌های اسپرت لوکس."
        crumbs={[{ label: "کالکشن‌ها" }]}
      />
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-16">
          {COLLECTIONS.map((c, i) => (
            <article key={c.slug} className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${i % 2 ? "md:[direction:ltr]" : ""}`}>
              <Link to="/shop" search={{ collection: c.slug }} className="group block md:[direction:rtl]">
                <div className="relative overflow-hidden bg-surface outline outline-1 -outline-offset-1 outline-white/5">
                  <img src={c.img} alt={c.title} className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
                  <span className="absolute right-4 top-4 text-[10px] uppercase tracking-[0.3em] text-foreground/70">{c.label}</span>
                </div>
              </Link>
              <div className="md:[direction:rtl]">
                <p className="text-[10px] uppercase tracking-[0.4em] text-primary">{`کالکشن ${String(i + 1).padStart(2, "۰")}`}</p>
                <h2 className="mt-4 text-3xl font-medium md:text-5xl">{c.title}</h2>
                <p className="mt-3 text-sm text-foreground/55">{c.subtitle}</p>
                <p className="mt-6 max-w-md text-pretty text-base leading-loose text-foreground/70">{c.desc}</p>
                <div className="mt-8 flex items-center gap-6 text-[11px] uppercase tracking-[0.25em] text-foreground/45">
                  <span>{c.count} اثر در کالکشن</span>
                  <span>گزینش نوا</span>
                </div>
                <Link to="/shop" search={{ collection: c.slug }} className="mt-10 inline-flex items-center gap-3 border-b border-primary/40 pb-2 text-sm font-medium hover:border-primary">
                  ورود به کالکشن
                  <span aria-hidden>←</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
