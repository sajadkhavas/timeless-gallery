import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        {eyebrow && (
          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-primary">{eyebrow}</p>
        )}
        <h2 className="text-balance text-2xl font-medium leading-tight md:text-4xl">{title}</h2>
        {description && (
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/60">{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
