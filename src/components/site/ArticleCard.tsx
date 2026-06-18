import { Link } from "@tanstack/react-router";
import type { Article } from "@/lib/data";

export function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <Link
      to="/journal/$slug"
      params={{ slug: article.slug }}
      className={
        featured
          ? "group grid items-center gap-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:grid-cols-2"
          : "group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      }
    >
      <div className="overflow-hidden bg-surface">
        <img
          src={article.img}
          alt={article.title}
          loading="lazy"
          className={
            (featured ? "aspect-[4/3]" : "aspect-[4/3]") +
            " w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
          }
        />
      </div>
      <div className={featured ? "mt-0" : "mt-5"}>
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary">
          {article.category} ـ {article.readingTime}
        </p>
        <h3
          className={
            (featured ? "mt-4 text-3xl md:text-5xl" : "mt-3 text-lg") +
            " font-medium leading-snug group-hover:text-primary"
          }
        >
          {article.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-foreground/55">{article.excerpt}</p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-foreground/40">
          {article.date}
        </p>
      </div>
    </Link>
  );
}
