import { JOURNEY_STEPS } from "@/lib/data";

export function JourneyTimeline() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-[10px] uppercase tracking-[0.45em] text-primary">User journey</p>
          <h2 className="text-balance text-3xl font-medium leading-tight md:text-5xl">
            سفر کاربر، مثل حرکت عقربه‌ها دقیق است.
          </h2>
          <p className="mt-5 text-sm leading-loose text-foreground/58">
            هر صفحه یک وظیفه دارد: الهام، اعتماد، کشف، انتخاب یا نزدیک‌کردن خرید.
          </p>
        </div>
        <ol className="grid gap-px bg-hairline md:grid-cols-5">
          {JOURNEY_STEPS.map((step, index) => (
            <li
              key={step.label}
              className="min-h-64 bg-background p-6 transition-colors hover:bg-[oklch(0.18_0.003_60)]"
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary">
                  {step.label}
                </span>
                <span className="text-xs text-foreground/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-medium">{step.title}</h3>
              <p className="mt-3 text-xs leading-loose text-foreground/55">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
