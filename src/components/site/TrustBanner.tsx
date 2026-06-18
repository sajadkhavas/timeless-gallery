import { TRUST_ITEMS } from "@/lib/data";

export function TrustBanner() {
  return (
    <section className="border-y border-hairline bg-[oklch(0.18_0.003_60)] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {TRUST_ITEMS.map((item) => (
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
            <div>
              <h3 className="text-sm font-medium">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-foreground/55">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
