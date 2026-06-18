import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { ARTICLES } from "@/lib/data";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "مجله‌ی نوا — روایت‌های زمان" },
      { name: "description", content: "مقاله‌های تخصصی درباره‌ی ساعت‌سازی، نگهداری، راهنمای خرید و سبک زندگی." },
      { property: "og:title", content: "مجله‌ی نوا" },
      { property: "og:url", content: "/journal" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: JournalPage,
});

function JournalPage() {
  const [feature, ...rest] = ARTICLES;
  return (
    <PageShell>
      <PageHeader
        eyebrow="مجله‌ی زمان"
        title="روایت‌هایی از دلِ کالیبر."
        description="از تحلیل نمایشگاه‌های جهانی تا راهنمای خرید و نگهداری ـ همه‌چیز برای دوستداران ساعت."
        crumbs={[{ label: "مجله" }]}
      />

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <Link to="/journal/$slug" params={{ slug: feature.slug }} className="group grid items-center gap-10 md:grid-cols-2">
            <div className="overflow-hidden bg-surface">
              <img src={feature.img} alt={feature.title} className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary">{feature.category} ـ مقاله‌ی منتخب</p>
              <h2 className="mt-4 text-3xl font-medium leading-tight md:text-5xl group-hover:text-primary">{feature.title}</h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-foreground/65">{feature.excerpt}</p>
              <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-foreground/45">{feature.date} ـ {feature.readingTime}</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="border-t border-hairline px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          {rest.map((a) => (
            <Link key={a.slug} to="/journal/$slug" params={{ slug: a.slug }} className="group block">
              <div className="mb-5 overflow-hidden bg-surface">
                <img src={a.img} alt={a.title} className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{a.category} ـ {a.readingTime}</p>
              <h3 className="mt-3 text-lg font-medium leading-snug group-hover:text-primary">{a.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground/55">{a.excerpt}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-foreground/40">{a.date}</p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
