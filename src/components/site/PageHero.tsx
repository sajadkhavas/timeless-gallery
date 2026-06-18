import { Breadcrumb } from "./Breadcrumb";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  crumbs?: Array<{ to?: string; label: string }>;
}) {
  return (
    <header className="border-b border-hairline px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl reveal">
        {crumbs && <Breadcrumb items={crumbs} />}
        <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-primary">{eyebrow}</p>
        <h1 className="text-balance text-3xl font-medium leading-tight md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-foreground/60 md:text-base">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
