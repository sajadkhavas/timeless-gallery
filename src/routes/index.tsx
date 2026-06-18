import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { ExperienceStage } from "@/components/site/ExperienceStage";
import { ExperiencePillars } from "@/components/site/ExperiencePillars";
import { JourneyTimeline } from "@/components/site/JourneyTimeline";
import { COLLECTIONS, PRODUCTS, ARTICLES } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "نوا — گالری ساعت‌های لوکس" },
      {
        name: "description",
        content:
          "گالری «نوا»؛ مجموعه‌ای از نایاب‌ترین ساعت‌های مکانیکی سوئیسی با ضمانت اصالت مادام‌العمر برای کلکسیونرهای ایرانی.",
      },
      { property: "og:title", content: "نوا — گالری ساعت‌های لوکس" },
      {
        property: "og:description",
        content: "تجربه‌ی زمان در یک گالری دیجیتال؛ ساعت‌های کلکسیونی با ضمانت اصالت.",
      },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <ExperienceStage />
      <ExperiencePillars />
      <Collections />
      <JourneyTimeline />
      <Featured />
      <Philosophy />
      <Journal />
      <Footer />
    </div>
  );
}

function Collections() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-primary">کالکشن‌ها</p>
            <h2 className="text-2xl font-medium md:text-4xl">آثار منتخبِ فصل</h2>
          </div>
          <Link
            to="/collections"
            className="shrink-0 border-b border-primary/40 pb-1 text-xs font-medium hover:border-primary"
          >
            مشاهده‌ی همه
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {COLLECTIONS.map((c) => (
            <Link key={c.slug} to="/shop" search={{ collection: c.slug }} className="group block">
              <div className="relative mb-5 overflow-hidden bg-surface outline outline-1 -outline-offset-1 outline-white/5">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute right-3 top-3 text-[9px] uppercase tracking-[0.3em] text-foreground/60">
                  {c.label}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-medium">{c.title}</h3>
                  <p className="mt-1 text-xs text-foreground/50">{c.subtitle}</p>
                </div>
                <p className="shrink-0 text-[10px] uppercase tracking-widest text-foreground/40">
                  {c.count} اثر
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="border-t border-hairline px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-primary">قطعاتِ منتخب</p>
            <h2 className="text-2xl font-medium md:text-4xl">گزیده‌ای از این فصل</h2>
          </div>
          <Link
            to="/shop"
            className="shrink-0 border-b border-primary/40 pb-1 text-xs font-medium hover:border-primary"
          >
            تمام محصولات
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {PRODUCTS.slice(0, 3).map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="bg-[oklch(0.18_0.003_60)] px-6 py-32 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-10 text-[10px] uppercase tracking-[0.5em] text-primary">فلسفه‌ی ما</p>
        <h2 className="text-balance text-2xl font-medium leading-[1.5] md:text-4xl md:leading-[1.45]">
          زمان، تنها نجوایی است که در سکوت شنیده می‌شود.
        </h2>
        <p className="mx-auto mt-10 max-w-[52ch] text-pretty text-sm leading-loose text-foreground/55 md:text-base">
          در «نوا»، هر ساعت قطعه‌ای از تاریخ شخصی شماست. ما با وسواس، تنها آثاری را برمی‌گزینیم که
          توازنِ میان سنت و نوآوری را به کمال رسانده باشند.
        </p>
        <div className="mt-12 inline-flex items-center gap-3">
          <span className="h-px w-8 bg-primary/60" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">
            نوا — تهران
          </span>
          <span className="h-px w-8 bg-primary/60" />
        </div>
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-primary">مجله‌ی زمان</p>
            <h2 className="text-2xl font-medium md:text-4xl">روایت‌های تازه</h2>
          </div>
          <Link
            to="/journal"
            className="shrink-0 border-b border-primary/40 pb-1 text-xs font-medium hover:border-primary"
          >
            تمام مقاله‌ها
          </Link>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {ARTICLES.slice(0, 3).map((a) => (
            <Link
              key={a.slug}
              to="/journal/$slug"
              params={{ slug: a.slug }}
              className="group block"
            >
              <div className="mb-5 overflow-hidden bg-surface">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary">
                {a.category} ـ {a.readingTime}
              </p>
              <h3 className="mt-3 text-lg font-medium leading-snug group-hover:text-primary">
                {a.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-foreground/55">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
