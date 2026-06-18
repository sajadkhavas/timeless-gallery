import { MATERIAL_HIGHLIGHTS } from "@/lib/data";

export function MaterialStory() {
  return (
    <div className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
      {MATERIAL_HIGHLIGHTS.map((item) => (
        <article
          key={item.title}
          className="bg-background p-5 transition-colors hover:bg-[oklch(0.18_0.003_60)]"
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-primary">{item.title}</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground/62">{item.desc}</p>
        </article>
      ))}
    </div>
  );
}
