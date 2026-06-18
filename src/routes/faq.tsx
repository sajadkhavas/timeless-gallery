import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { FAQS } from "@/lib/data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "سؤالات متداول — نوا" },
      { name: "description", content: "پاسخ پرسش‌های متداول درباره‌ی اصالت، گارانتی، ارسال و خدمات گالری نوا." },
      { property: "og:title", content: "سؤالات متداول — نوا" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageShell>
      <PageHeader
        eyebrow="پشتیبانی"
        title="پاسخ به آنچه می‌خواهید بدانید."
        description="هر آنچه ممکن است پیش از خرید یا پس از آن از ما بپرسید، اینجا گردآوری شده است."
        crumbs={[{ label: "سؤالات متداول" }]}
      />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl divide-y divide-hairline border-y border-hairline">
          {FAQS.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-6 py-6 text-right"
              >
                <span className="text-base font-medium text-foreground/90">{f.q}</span>
                <span className={`text-primary transition-transform ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <p className="pb-6 text-sm leading-loose text-foreground/65">{f.a}</p>
              )}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center text-sm text-foreground/55">
          پرسشی دارید که در اینجا نیامده؟ تیم پشتیبانی نوا در ساعات کاری پاسخگوی شماست.
        </p>
      </section>
    </PageShell>
  );
}
