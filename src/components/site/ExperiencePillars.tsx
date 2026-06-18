import { EXPERIENCE_PILLARS } from "@/lib/data";

export function ExperiencePillars() {
  return (
    <section className="border-y border-hairline bg-[oklch(0.18_0.003_60)] px-6 py-16">
      <div className="mx-auto grid max-w-7xl gap-px bg-hairline md:grid-cols-3">
        {EXPERIENCE_PILLARS.map((pillar) => (
          <article
            key={pillar.title}
            className="group bg-background p-8 transition-colors hover:bg-[oklch(0.2_0.004_60)]"
          >
            <div className="mb-10 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.35em] text-primary">
                اصل تجربه
              </span>
              <span className="text-3xl font-light text-foreground/18 transition-colors group-hover:text-primary/60">
                {pillar.metric}
              </span>
            </div>
            <h2 className="text-xl font-medium">{pillar.title}</h2>
            <p className="mt-4 text-sm leading-loose text-foreground/58">{pillar.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
