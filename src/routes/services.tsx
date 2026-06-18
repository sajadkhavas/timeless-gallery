import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "خدمات نوا — گارانتی، اصالت و سرویس" },
      {
        name: "description",
        content: "خدمات تخصصی نوا؛ ضمانت اصالت مادام‌العمر، سرویس دوره‌ای، تعویض بند و ارسال امن.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    t: "ضمانت اصالت مادام‌العمر",
    d: "هر ساعت با کارت اصالت اختصاصی نوا و شناسنامه‌ی بین‌المللی برند تحویل می‌شود؛ امکان استعلام در هر زمان فراهم است.",
  },
  {
    t: "گارانتی دوساله",
    d: "تمام محصولات شامل گارانتی بین‌المللی برند و تعمیر تخصصی در آتلیه‌ی نوا هستند.",
  },
  {
    t: "سرویس دوره‌ای",
    d: "سرویس کالیبراسیون، روغن‌کاری و بازرسیِ مقاومت آب در آتلیه‌ی نوا با ساعت‌سازان متخصص.",
  },
  {
    t: "تعویض بند",
    d: "مجموعه‌ی متنوعی از بندهای چرم، فلز و لاستیک؛ تعویض رایگان برای مشتریان نوا.",
  },
  {
    t: "ارسال امن و بیمه‌شده",
    d: "ارسال اختصاصی در سراسر ایران با بسته‌بندی ایمن و بیمه‌ی کامل.",
  },
  {
    t: "سفارش اختصاصی",
    d: "تأمین قطعات نایاب و کلکسیونی به سفارش شما با همراهی مشاوران نوا.",
  },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="خدمات"
        title="فراتر از فروش؛ تجربه‌ای ماندگار."
        description="در نوا، رابطه‌ی ما با شما از لحظه‌ی خرید آغاز می‌شود؛ نه آنکه پایان یابد."
        crumbs={[{ label: "خدمات" }]}
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-px bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <article
              key={s.t}
              className="group bg-background p-10 transition-colors hover:bg-[oklch(0.18_0.003_60)]"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{`خدمت ${String(i + 1).padStart(2, "۰")}`}</p>
              <h3 className="mt-5 text-xl font-medium">{s.t}</h3>
              <p className="mt-3 text-sm leading-loose text-foreground/60">{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-hairline bg-[oklch(0.18_0.003_60)] px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-8 text-[10px] uppercase tracking-[0.4em] text-primary">
            آیینِ بسته‌بندی
          </p>
          <h2 className="text-balance text-2xl font-medium leading-relaxed md:text-3xl">
            هر بسته‌ای که از نوا خارج می‌شود، تجربه‌ای از وسواس است.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-loose text-foreground/60">
            از جعبه‌ی چوبی دست‌ساز تا دستمال میکروفایبر، گواهی اصالت و دفترچه‌ی مراقبت ـ همه چیز در
            یک هماهنگی کامل به دست شما می‌رسد.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
