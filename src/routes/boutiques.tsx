import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { BOUTIQUES } from "@/lib/data";

export const Route = createFileRoute("/boutiques")({
  head: () => ({
    meta: [
      { title: "بوتیک‌های نوا — تهران، اصفهان، مشهد" },
      {
        name: "description",
        content: "نشانی، تلفن و ساعات کاری بوتیک‌های فیزیکی گالری نوا در ایران.",
      },
      { property: "og:url", content: "/boutiques" },
    ],
    links: [{ rel: "canonical", href: "/boutiques" }],
  }),
  component: BoutiquesPage,
});

function BoutiquesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="بوتیک‌ها"
        title="در شهرتان، در دسترس شماست."
        description="آتلیه و بوتیک‌های نوا برای تجربه‌ی حضوری ساعت‌ها و گفت‌وگو با مشاوران تخصصی، آماده‌ی پذیرایی از شما هستند."
        crumbs={[{ label: "بوتیک‌ها" }]}
      />

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {BOUTIQUES.map((b) => (
            <article key={b.city} className="hairline overflow-hidden">
              <div className="aspect-[4/3] bg-surface">
                <div className="grid h-full place-items-center text-xs text-foreground/40">
                  نقشه‌ی {b.city}
                </div>
              </div>
              <div className="space-y-3 p-6">
                <p className="text-[10px] uppercase tracking-[0.35em] text-primary">{b.city}</p>
                <h3 className="text-xl font-medium">{b.name}</h3>
                <p className="text-sm leading-relaxed text-foreground/65">{b.address}</p>
                <div className="space-y-1 border-t border-hairline pt-3 text-xs text-foreground/55">
                  <p>تلفن: {b.phone}</p>
                  <p>ساعات کاری: {b.hours}</p>
                </div>
                <a
                  href={`tel:${b.phone}`}
                  className="mt-2 inline-block border-b border-primary/40 pb-1 text-xs font-medium hover:border-primary"
                >
                  رزرو زمان بازدید
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
