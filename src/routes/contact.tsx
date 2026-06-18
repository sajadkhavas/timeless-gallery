import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تماس با نوا" },
      {
        name: "description",
        content: "راه‌های ارتباط با گالری نوا؛ تلفن، واتساپ، آدرس آتلیه و فرم تماس.",
      },
      { property: "og:title", content: "تماس با نوا" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHeader
        eyebrow="تماس"
        title="گفت‌وگو با تیم نوا"
        description="برای مشاوره‌ی خرید، رزرو بازدید حضوری یا هر پرسش دیگری، ما را در ساعات کاری در دسترس خواهید داشت."
        crumbs={[{ label: "تماس" }]}
      />

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <aside className="space-y-8">
            <InfoBlock title="آتلیه‌ی تهران">
              خیابان فرشته، ساختمان آریا، طبقه‌ی اول
              <br />
              تلفن: ۰۲۱-۲۲۰۰۰۰۰۰
              <br />
              واتساپ: ۰۹۱۲۰۰۰۰۰۰۰
            </InfoBlock>
            <InfoBlock title="ساعات کاری">
              شنبه تا چهارشنبه: ۱۰ تا ۲۰
              <br />
              پنج‌شنبه: ۱۰ تا ۱۸
              <br />
              جمعه: تعطیل
            </InfoBlock>
            <InfoBlock title="شبکه‌های اجتماعی">
              Instagram: @nava.gallery
              <br />
              Telegram: @navagallery
            </InfoBlock>

            <div className="hairline aspect-video w-full bg-surface">
              <div className="grid h-full place-items-center text-xs text-foreground/45">
                نقشه‌ی آتلیه‌ی فرشته
              </div>
            </div>
          </aside>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="hairline space-y-5 p-8"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary">فرم تماس</p>
            <h2 className="text-2xl font-medium">پیامی برای ما بنویسید</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="نام و نام خانوادگی" name="name" />
              <Field label="شماره تماس" name="phone" />
            </div>
            <Field label="ایمیل" name="email" type="email" />
            <Field label="موضوع" name="subject" />
            <div>
              <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-foreground/55">
                پیام
              </label>
              <textarea
                rows={5}
                className="w-full border border-hairline bg-transparent p-3 text-sm focus:border-primary focus:outline-none"
                placeholder="پیام خود را اینجا بنویسید…"
              />
            </div>
            <button className="mt-4 bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              ارسال پیام
            </button>
            {sent && (
              <p className="text-xs text-primary">
                پیام شما دریافت شد. تیم نوا در اولین فرصت پاسخ خواهد داد.
              </p>
            )}
          </form>
        </div>
      </section>
    </PageShell>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.35em] text-primary">{title}</p>
      <p className="mt-3 text-sm leading-loose text-foreground/70">{children}</p>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-foreground/55"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full border border-hairline bg-transparent p-3 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
