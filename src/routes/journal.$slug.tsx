import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ARTICLES } from "@/lib/data";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const a = ARTICLES.find((x) => x.slug === params.slug);
    if (!a) throw notFound();
    return a;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.title} — مجله‌ی نوا` : "مجله — نوا" },
      { name: "description", content: loaderData?.excerpt ?? "" },
      { property: "og:title", content: loaderData?.title ?? "نوا" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: loaderData?.img ?? "" },
    ],
    links: [{ rel: "canonical", href: `/journal/${loaderData?.slug ?? ""}` }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const a = Route.useLoaderData();
  return (
    <PageShell>
      <article className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <nav className="mb-10 text-[11px] uppercase tracking-[0.25em] text-foreground/45">
            <Link to="/" className="hover:text-primary">خانه</Link>
            <span className="mx-2">/</span>
            <Link to="/journal" className="hover:text-primary">مجله</Link>
          </nav>

          <p className="text-[10px] uppercase tracking-[0.4em] text-primary">{a.category} ـ {a.readingTime}</p>
          <h1 className="mt-5 text-balance text-3xl font-medium leading-tight md:text-5xl">{a.title}</h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/65">{a.excerpt}</p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-foreground/45">{a.date}</p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden bg-surface">
          <img src={a.img} alt={a.title} className="aspect-[16/9] w-full object-cover" />
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-6 text-base leading-loose text-foreground/75">
          <p>
            در دلِ یک ساعت مکانیکی، صدها قطعه‌ی ریز در توازنی شگرف می‌چرخند تا
            ثانیه‌ها را اندازه بگیرند. این مهندسیِ نامرئی، آن چیزی است که قلب
            ساعت‌سازی سوئیس را برای بیش از دو قرن، تپنده نگه داشته است.
          </p>
          <p>
            در «نوا» باور داریم انتخاب یک ساعت، انتخاب یک هم‌سفر است؛ کسی که در
            سکوت همراه شما می‌ماند، در لحظه‌های مهم زندگی‌تان حاضر است و رفته‌رفته
            بخشی از هویت شما می‌شود.
          </p>
          <h2 className="pt-4 text-xl font-medium text-foreground">یادداشت سردبیر</h2>
          <p>
            این شماره از مجله، فرصتی است برای آشنایی بیشتر با گرایش‌های امسال؛
            از بازگشت صفحه‌های کوچک‌تر و رنگ‌های زمینی تا توجه دوباره به مکانیسم‌های
            دستی. در صفحه‌های بعدی، خواندنی‌های بیشتری برایتان آماده کرده‌ایم.
          </p>
          <blockquote className="border-r-2 border-primary pr-6 text-foreground/80">
            «زمان، تنها چیزی است که نمی‌توان دوباره خرید؛ پس ارزشش را با چیزی شایسته نشان دهید.»
          </blockquote>
        </div>

        <div className="mx-auto mt-16 max-w-3xl border-t border-hairline pt-8">
          <Link to="/journal" className="text-xs uppercase tracking-[0.3em] text-primary hover:underline">
            ← بازگشت به مجله
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
