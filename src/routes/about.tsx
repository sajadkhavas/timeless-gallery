import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { IMG } from "@/lib/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "درباره‌ی نوا — گالریِ زمان" },
      { name: "description", content: "داستان برند نوا؛ از وسواس در گزینش قطعات تا ساختن تجربه‌ای ممتاز برای کلکسیونرهای ایرانی." },
      { property: "og:title", content: "درباره‌ی نوا" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { y: "۱۳۹۲", t: "آغاز نوا", d: "گشایش نخستین آتلیه‌ی تخصصی ساعت‌های مکانیکی در تهران." },
  { y: "۱۳۹۵", t: "همکاری بین‌المللی", d: "آغاز همکاری مستقیم با چند برند مستقل سوئیسی." },
  { y: "۱۳۹۸", t: "آتلیه‌ی تعمیرات", d: "افتتاح کارگاه تخصصی سرویس و کالیبراسیون نوا." },
  { y: "۱۴۰۰", t: "گالری دیجیتال", d: "راه‌اندازی فروشگاه آنلاین با ضمانت اصالت مادام‌العمر." },
  { y: "۱۴۰۳", t: "نسخه‌ی نوا اِدیشن", d: "عرضه‌ی نخستین کالکشن اختصاصی نوا با محدودیت ۲۴ قطعه." },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="درباره‌ی نوا"
        title="گالریِ زمان، با امضای ایرانی."
        description="نوا روایتی است از وسواس در جزئیات؛ جایی که هر ساعت پیش از رسیدن به دست شما، با دقت یک هنرمند انتخاب و بازرسی می‌شود."
        crumbs={[{ label: "درباره" }]}
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-20">
          <div className="overflow-hidden bg-surface">
            <img src={IMG.hero} alt="آتلیه‌ی نوا" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="space-y-6">
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary">فلسفه‌ی برند</p>
            <h2 className="text-2xl font-medium leading-snug md:text-4xl">
              ما زمان را نمی‌فروشیم؛ روایتش می‌کنیم.
            </h2>
            <p className="text-pretty leading-loose text-foreground/65">
              برای ما، ساعت بیش از یک ابزار است؛ شناسنامه‌ی شخصی شماست، همراه روزها،
              امضای ساعت‌سازی است که در سکوت کار می‌کند، و امضای کسی است که آن را
              بر مچ می‌بندد. ما با همین نگاه، تنها آثاری را برمی‌گزینیم که سزاوار
              این هم‌نشینی باشند.
            </p>
            <ul className="grid gap-4 pt-4 sm:grid-cols-2">
              {[
                { k: "۱۲", v: "سال تجربه" },
                { k: "۲۴+", v: "برند معتبر" },
                { k: "۹۸٪", v: "رضایت مشتری" },
                { k: "۰۳", v: "بوتیک در ایران" },
              ].map((s) => (
                <li key={s.v} className="hairline p-5">
                  <p className="text-2xl font-medium text-primary">{s.k}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.25em] text-foreground/50">{s.v}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-hairline bg-[oklch(0.18_0.003_60)] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-[10px] uppercase tracking-[0.4em] text-primary">مسیرِ نوا</p>
          <h2 className="mb-14 text-2xl font-medium md:text-3xl">یک دهه گزینش، صبر و وسواس.</h2>
          <ol className="relative space-y-10 border-r border-hairline pr-8">
            {TIMELINE.map((t) => (
              <li key={t.y} className="relative">
                <span className="absolute right-[-37px] top-2 size-3 rounded-full bg-primary outline outline-4 outline-[oklch(0.18_0.003_60)]" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{t.y}</p>
                <h3 className="mt-2 text-lg font-medium">{t.t}</h3>
                <p className="mt-1 text-sm text-foreground/60">{t.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-8 text-[10px] uppercase tracking-[0.5em] text-primary">ارزش‌ها</p>
          <h2 className="text-balance text-2xl font-medium leading-relaxed md:text-3xl">
            اصالت، صبر، و وفاداری به جزئیات ـ سه اصل ثابتِ کاری ما.
          </h2>
        </div>
      </section>
    </PageShell>
  );
}
