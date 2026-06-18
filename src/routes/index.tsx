import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { COLLECTIONS, PRODUCTS, ARTICLES, IMG } from "@/lib/data";

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
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBand />
      <Collections />
      <Featured />
      <Philosophy />
      <Journal />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative px-6 pb-20 pt-32 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-12 space-y-6 md:max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary">گالری زمان — ۱۴۰۳</p>
          <h1 className="text-balance text-4xl font-medium leading-[1.15] tracking-tight md:text-6xl lg:text-7xl">
            توالیِ هنر و زمان.
          </h1>
          <p className="max-w-[56ch] text-pretty text-base leading-relaxed text-foreground/60">
            مجموعه‌ای از نایاب‌ترین قطعات مهندسی سوئیس، با گزینش و ضمانت اصالتِ «نوا». ساعت‌هایی که
            فراتر از شمارش ثانیه‌ها، داستان می‌گویند.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/collections"
              className="group inline-flex items-center gap-3 bg-primary py-2.5 pl-3 pr-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <svg
                className="size-4 transition-transform group-hover:-translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              مشاهده‌ی کالکشن‌ها
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-foreground/80 underline-offset-8 hover:underline"
            >
              درباره‌ی برند
            </Link>
          </div>
        </div>

        <div className="relative reveal" style={{ animationDelay: "200ms" }}>
          <div className="relative w-full overflow-hidden bg-surface outline outline-1 -outline-offset-1 outline-white/5">
            <img
              src={IMG.hero}
              alt="مکانیسم توربیون ساعت لوکس با چرخ‌دنده‌های برنزی"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover md:aspect-[16/9]"
            />
          </div>
          <div className="absolute -bottom-4 left-4 hairline bg-background p-5 md:left-8 md:p-6">
            <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-primary">مدل ویژه</p>
            <p className="text-sm font-medium">آتریوم ـ نسخه ۲۰۲۴</p>
            <p className="mt-1 text-[11px] text-foreground/50">شماره‌ی ۰۱ از ۲۴</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const trustItems = [
  {
    title: "ضمانت اصالت مادام‌العمر",
    desc: "تمامی قطعات دارای شناسنامه‌ی بین‌المللی و کارت اصالت نوا هستند.",
  },
  {
    title: "ارسال امن و بیمه‌شده",
    desc: "ارسال اختصاصی در سراسر ایران با بسته‌بندی ایمن و بیمه‌ی کامل.",
  },
  { title: "خدمات پس از فروش", desc: "سرویس دوره‌ای، تعویض بند و تعمیر تخصصی در آتلیه‌ی نوا." },
];

function TrustBand() {
  return (
    <section className="border-y border-hairline bg-[oklch(0.18_0.003_60)] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {trustItems.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="grid size-9 shrink-0 place-items-center rounded-full border border-primary/30">
              <svg
                className="size-4 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-foreground/55">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
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
