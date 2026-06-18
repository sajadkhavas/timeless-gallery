import { Link } from "@tanstack/react-router";
import { BRAND_MANIFESTO, IMG } from "@/lib/data";

export function ExperienceStage() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.68_0.07_75/0.16),transparent_28%),linear-gradient(180deg,transparent,oklch(0.12_0.003_60/0.72))]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="reveal space-y-7">
          <p className="text-[10px] uppercase tracking-[0.5em] text-primary">
            NOVA EXPERIENCE / 01
          </p>
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-foreground/45">
              {BRAND_MANIFESTO.signature}
            </p>
            <h1 className="max-w-4xl text-balance text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              زمان، امضای شماست.
            </h1>
          </div>
          <p className="max-w-[58ch] text-pretty text-base leading-loose text-foreground/62 md:text-lg">
            وارد گالری نوا شوید؛ جایی که ساعت‌ها محصول نیستند، بلکه بیانیه‌ای از سلیقه، دقت و ارزش
            ثانیه‌ها هستند.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/shop"
              className="group inline-flex items-center gap-3 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              یافتن ساعت شما
              <span className="transition-transform group-hover:-translate-x-1" aria-hidden>
                ←
              </span>
            </Link>
            <Link
              to="/collections"
              className="px-1 py-3 text-sm font-medium text-foreground/78 underline-offset-8 hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              کشف کالکشن‌ها
            </Link>
          </div>
        </div>

        <div className="relative reveal" style={{ animationDelay: "180ms" }}>
          <div className="absolute -inset-6 rounded-full border border-primary/10 blur-3xl" />
          <div className="group relative overflow-hidden border border-hairline bg-surface/70 p-3 shadow-[0_40px_120px_oklch(0_0_0/0.28)]">
            <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,oklch(1_0_0/0.08)_38%,transparent_58%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            <img
              src={IMG.hero}
              alt="ساعت شاخص نوا در فضای گالری تاریک و برنزی"
              width={1280}
              height={1440}
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.025] md:aspect-[5/6]"
              fetchPriority="high"
            />
            <div className="absolute bottom-5 right-5 max-w-[18rem] border border-hairline bg-background/82 p-4 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.35em] text-primary">
                Signature piece
              </p>
              <p className="mt-2 text-lg font-medium">آتریوم توربیون</p>
              <p className="mt-2 text-xs leading-relaxed text-foreground/55">
                شماره ۰۱ از ۲۴؛ قطعه‌ای برای کسانی که زمان را امضا می‌کنند.
              </p>
            </div>
          </div>
          <div className="absolute -left-4 top-10 hidden h-32 w-20 border border-primary/20 bg-background/30 backdrop-blur md:block" />
        </div>
      </div>
    </section>
  );
}
