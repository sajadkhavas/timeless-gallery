import { LuxuryLink } from "./LuxuryButton";

export function EmptyState({
  title,
  description,
  actionTo = "/shop",
  actionLabel = "بازگشت به فروشگاه",
}: {
  title: string;
  description?: string;
  actionTo?: string;
  actionLabel?: string;
}) {
  return (
    <div className="hairline grid place-items-center px-6 py-16 text-center">
      <div className="max-w-md">
        <p className="text-2xl font-medium">{title}</p>
        {description && (
          <p className="mt-3 text-sm leading-relaxed text-foreground/55">{description}</p>
        )}
        <LuxuryLink to={actionTo} className="mt-6">
          {actionLabel}
        </LuxuryLink>
      </div>
    </div>
  );
}
