import { LuxuryButton } from "./LuxuryButton";
import { LuxuryInput } from "./LuxuryInput";

export function Newsletter() {
  return (
    <section className="border-t border-hairline px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 bg-[oklch(0.18_0.003_60)] p-8 md:grid-cols-[1fr_420px] md:p-12">
        <div>
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-primary">خبرنامه نوا</p>
          <h2 className="text-2xl font-medium md:text-3xl">
            روایت‌های تازه‌ی ساعت‌سازی را دریافت کنید.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-foreground/60">
            ماهانه فقط یک نامه‌ی گزیده؛ معرفی قطعات کمیاب، راهنمای نگهداری و دعوت‌نامه رویدادهای
            خصوصی.
          </p>
        </div>
        <form
          className="flex flex-col gap-3 sm:flex-row md:self-end"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            ایمیل
          </label>
          <LuxuryInput
            id="newsletter-email"
            type="email"
            inputMode="email"
            placeholder="ایمیل شما"
            aria-label="ایمیل برای عضویت در خبرنامه"
          />
          <LuxuryButton type="submit" className="shrink-0">
            عضویت
          </LuxuryButton>
        </form>
      </div>
    </section>
  );
}
