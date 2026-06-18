import { createFileRoute } from "@tanstack/react-router";
import heroWatch from "@/assets/hero-watch.jpg";
import collectionClassic from "@/assets/collection-classic.jpg";
import collectionSport from "@/assets/collection-sport.jpg";
import collectionHeritage from "@/assets/collection-heritage.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "نوا — گالری ساعت‌های لوکس" },
      { name: "description", content: "گالری «نوا»؛ مجموعه‌ای از نایاب‌ترین ساعت‌های مکانیکی سوئیسی با ضمانت اصالت مادام‌العمر برای کلکسیونرهای ایرانی." },
      { property: "og:title", content: "نوا — گالری ساعت‌های لوکس" },
      { property: "og:description", content: "تجربه‌ی زمان در یک گالری دیجیتال؛ ساعت‌های کلکسیونی با ضمانت اصالت." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const collections = [
  {
    title: "میراث کلاسیک",
    subtitle: "طراحی مینیمال، دقت ابدی",
    price: "۴۸۰,۰۰۰,۰۰۰",
    label: "Classique",
    img: collectionClassic,
  },
  {
    title: "اسپرت ـ لوکس",
    subtitle: "برای ماجراجویی‌های بی‌انتها",
    price: "۳۲۰,۰۰۰,۰۰۰",
    label: "Sport Luxe",
    img: collectionSport,
  },
  {
    title: "نسخه‌ی میراثی",
    subtitle: "ساعت‌هایی با روح زمان",
    price: "۶۲۰,۰۰۰,۰۰۰",
    label: "Heritage",
    img: collectionHeritage,
  },
] as const;

function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBand />
      <Collections />
      <Philosophy />
      <Journal />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button aria-label="باز کردن فهرست" className="-mr-1 p-1">
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-foreground/70">
            فهرست
          </span>
        </div>

        <a href="/" className="text-lg font-semibold tracking-tight text-primary">
          «نوا»
        </a>

        <div className="flex items-center gap-4">
          <button className="hidden text-xs font-medium text-foreground/80 sm:inline">
            جستجو
          </button>
          <button aria-label="سبد خرید" className="relative">
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative px-6 pb-20 pt-32 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-12 space-y-6 md:max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-primary">
            گالری زمان — ۱۴۰۳
          </p>
          <h1 className="text-balance text-4xl font-medium leading-[1.15] tracking-tight md:text-6xl lg:text-7xl">
            توالیِ هنر و زمان.
          </h1>
          <p className="max-w-[56ch] text-pretty text-base leading-relaxed text-foreground/60">
            مجموعه‌ای از نایاب‌ترین قطعات مهندسی سوئیس، با گزینش و ضمانت
            اصالتِ «نوا». ساعت‌هایی که فراتر از شمارش ثانیه‌ها، داستان می‌گویند.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="group inline-flex items-center gap-3 bg-primary py-2.5 pl-3 pr-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              <svg className="size-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              مشاهده‌ی آثار شاخص
            </button>
            <button className="text-sm font-medium text-foreground/80 underline-offset-8 hover:underline">
              درباره‌ی برند
            </button>
          </div>
        </div>

        <div className="relative reveal" style={{ animationDelay: "200ms" }}>
          <div className="relative w-full overflow-hidden bg-surface outline outline-1 -outline-offset-1 outline-white/5">
            <img
              src={heroWatch}
              alt="مکانیسم توربیون ساعت لوکس با چرخ‌دنده‌های برنزی"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 left-4 hairline bg-background p-5 md:left-8 md:p-6">
            <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-primary">
              مدل ویژه
            </p>
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
  {
    title: "خدمات پس از فروش",
    desc: "سرویس دوره‌ای، تعویض بند و تعمیر تخصصی در آتلیه‌ی نوا.",
  },
];

function TrustBand() {
  return (
    <section className="border-y border-hairline bg-[oklch(0.18_0.003_60)] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {trustItems.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <div className="grid size-9 shrink-0 place-items-center rounded-full border border-primary/30">
              <svg className="size-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-foreground/55">
                {item.desc}
              </p>
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
            <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-primary">
              کالکشن‌ها
            </p>
            <h2 className="text-2xl font-medium md:text-4xl">آثار منتخبِ فصل</h2>
          </div>
          <a href="#" className="shrink-0 border-b border-primary/40 pb-1 text-xs font-medium hover:border-primary">
            مشاهده‌ی همه
          </a>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {collections.map((c, i) => (
            <article key={c.title} className="group" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="relative mb-5 overflow-hidden bg-surface outline outline-1 -outline-offset-1 outline-white/5">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={900}
                  height={1200}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute right-3 top-3 text-[9px] uppercase tracking-[0.3em] text-foreground/50">
                  {c.label}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="truncate text-lg font-medium">{c.title}</h3>
                  <p className="mt-1 text-xs text-foreground/50">{c.subtitle}</p>
                </div>
                <div className="shrink-0 text-left">
                  <p className="text-sm font-medium text-primary">{c.price}</p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-widest text-foreground/40">
                    تومان
                  </p>
                </div>
              </div>
            </article>
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
        <p className="mb-10 text-[10px] uppercase tracking-[0.5em] text-primary">
          فلسفه‌ی ما
        </p>
        <h2 className="text-balance text-2xl font-medium leading-[1.5] md:text-4xl md:leading-[1.45]">
          زمان، تنها نجوایی است که در سکوت شنیده می‌شود.
        </h2>
        <p className="mx-auto mt-10 max-w-[52ch] text-pretty text-sm leading-loose text-foreground/55 md:text-base">
          در «نوا»، هر ساعت قطعه‌ای از تاریخ شخصی شماست. ما با وسواس، تنها
          آثاری را برمی‌گزینیم که توازنِ میان سنت و نوآوری را به کمال رسانده
          باشند.
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
        <div className="hairline relative overflow-hidden p-8 md:grid md:grid-cols-2 md:gap-12 md:p-12">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-primary">
              مجله‌ی زمان
            </p>
            <h3 className="text-xl font-medium md:text-3xl">
              کالیبر ۲۴ ـ نگاهی به نمایشگاهِ ژنو
            </h3>
            <p className="mt-4 max-w-[44ch] text-sm leading-relaxed text-foreground/55">
              بررسی تخصصی مکانیسم‌های تازه و گرایش‌های طراحی در مهم‌ترین رویداد
              ساعت‌سازی امسال.
            </p>
            <button className="group mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em]">
              مطالعه‌ی مقاله
              <svg className="size-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
          </div>
          <div className="mt-8 hidden items-end md:mt-0 md:flex">
            <div className="grid w-full grid-cols-2 gap-px bg-hairline text-center">
              {[
                { k: "۱۲", v: "مقاله‌ی ماه" },
                { k: "۲۴", v: "برند معرفی‌شده" },
                { k: "۹۸٪", v: "رضایت خوانندگان" },
                { k: "۰۸", v: "راهنمای خرید" },
              ].map((s) => (
                <div key={s.v} className="bg-background p-6">
                  <p className="text-2xl font-medium text-primary">{s.k}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-foreground/50">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-hairline px-6 pb-12 pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <div className="text-2xl font-semibold text-primary">«نوا»</div>
            <p className="max-w-sm text-xs leading-loose text-foreground/55">
              تهران، خیابان فرشته، ساختمان آریا، طبقه‌ی اول.
              <br />
              تلفن: ۰۲۱-۲۲۰۰۰۰۰۰ — واتساپ: ۰۹۱۲۰۰۰۰۰۰۰
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
              ساعات کاری ـ شنبه تا چهارشنبه ۱۰ تا ۲۰
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary">خدمات</p>
            <ul className="space-y-3 text-xs text-foreground/70">
              <li>نگهداری و سرویس</li>
              <li>تأیید اصالت</li>
              <li>سفارش اختصاصی</li>
              <li>تعویض بند</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary">راهنمایی</p>
            <ul className="space-y-3 text-xs text-foreground/70">
              <li>سؤالات متداول</li>
              <li>ارسال و بازگشت</li>
              <li>گارانتی و اصالت</li>
              <li>تماس با ما</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 md:flex-row">
          <p className="text-[10px] tracking-[0.2em] text-foreground/40">
            © ۱۴۰۳ ـ تمامی حقوق برای گالریِ نوا محفوظ است.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-[0.3em] text-foreground/40">
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-primary">Telegram</a>
            <a href="#" className="hover:text-primary">Journal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
