import { PRODUCT_ASSURANCE } from "@/lib/data";

export function AssurancePanel({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "grid gap-3" : "grid gap-3 sm:grid-cols-2"}>
      {PRODUCT_ASSURANCE.map((item) => (
        <div
          key={item}
          className="border border-hairline bg-background/45 p-4 text-xs leading-relaxed text-foreground/65"
        >
          <span className="ml-2 text-primary" aria-hidden>
            ✦
          </span>
          {item}
        </div>
      ))}
    </div>
  );
}
