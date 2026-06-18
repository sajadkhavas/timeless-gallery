import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { PRODUCTS, formatToman } from "@/lib/data";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "پرداخت — نوا" },
      { name: "description", content: "تکمیل سفارش با کمترین اصطکاک در گالری نوا." },
      { property: "og:url", content: "/checkout" },
    ],
    links: [{ rel: "canonical", href: "/checkout" }],
  }),
  component: CheckoutPage,
});

const STEPS = ["اطلاعات", "ارسال", "پرداخت"] as const;

function CheckoutPage() {
  const [step, setStep] = useState(0);
  const lines = [
    { p: PRODUCTS[0], qty: 1 },
    { p: PRODUCTS[1], qty: 1 },
  ];
  const sub = lines.reduce((s, l) => s + l.p.price * l.qty, 0);
  const shipping = 1_500_000;
  const total = sub + shipping;

  return (
    <PageShell>
      <PageHeader
        eyebrow="پرداخت"
        title="تکمیل سفارش"
        crumbs={[{ to: "/cart", label: "سبد خرید" }, { label: "پرداخت" }]}
      />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <ol className="mb-12 flex items-center justify-center gap-6 text-xs">
            {STEPS.map((s, i) => (
              <li key={s} className="flex items-center gap-3">
                <span
                  className={`grid size-7 place-items-center rounded-full border text-[11px] ${i <= step ? "border-primary text-primary" : "border-hairline text-foreground/45"}`}
                >
                  {(i + 1).toLocaleString("fa-IR")}
                </span>
                <span className={i <= step ? "text-foreground" : "text-foreground/45"}>{s}</span>
                {i < STEPS.length - 1 && <span className="h-px w-8 bg-hairline" />}
              </li>
            ))}
          </ol>

          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (step < STEPS.length - 1) setStep(step + 1);
                else alert("سفارش شما ثبت شد. تیم نوا با شما تماس خواهد گرفت.");
              }}
              className="hairline space-y-6 p-8"
            >
              {step === 0 && (
                <>
                  <h2 className="text-xl font-medium">اطلاعات تماس و آدرس</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="نام و نام خانوادگی" />
                    <Field label="شماره تماس" />
                    <Field label="کد ملی" />
                    <Field label="ایمیل" type="email" />
                    <Field label="استان" />
                    <Field label="شهر" />
                  </div>
                  <Field label="نشانی کامل" />
                  <Field label="کد پستی" />
                </>
              )}
              {step === 1 && (
                <>
                  <h2 className="text-xl font-medium">روش ارسال</h2>
                  <RadioBox
                    name="ship"
                    id="ship-1"
                    defaultChecked
                    title="ارسال اختصاصی بیمه‌شده ـ تهران (۲۴ ساعته)"
                    desc="با بسته‌بندی ایمن و بیمه‌ی کامل"
                  />
                  <RadioBox
                    name="ship"
                    id="ship-2"
                    title="پست پیشتاز ـ سایر شهرها (۲ تا ۵ روز کاری)"
                    desc="با امکان پیگیری مرسوله"
                  />
                  <RadioBox
                    name="ship"
                    id="ship-3"
                    title="تحویل حضوری در آتلیه‌ی فرشته"
                    desc="با رزرو زمان دلخواه شما"
                  />
                </>
              )}
              {step === 2 && (
                <>
                  <h2 className="text-xl font-medium">روش پرداخت</h2>
                  <RadioBox
                    name="pay"
                    id="pay-1"
                    defaultChecked
                    title="پرداخت آنلاین (درگاه امن)"
                    desc="درگاه‌های شاپرک / به‌پرداخت"
                  />
                  <RadioBox
                    name="pay"
                    id="pay-2"
                    title="کارت‌به‌کارت با تأیید"
                    desc="با تماس از سوی تیم نوا"
                  />
                  <RadioBox
                    name="pay"
                    id="pay-3"
                    title="پرداخت حضوری در آتلیه"
                    desc="با هماهنگی قبلی"
                  />
                </>
              )}

              <div className="flex items-center justify-between border-t border-hairline pt-6">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="text-xs text-foreground/55 hover:text-primary"
                  >
                    ← مرحله‌ی قبل
                  </button>
                ) : (
                  <span />
                )}
                <button className="bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                  {step < STEPS.length - 1 ? "ادامه" : "ثبت نهایی سفارش"}
                </button>
              </div>
            </form>

            <aside className="hairline self-start p-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-primary">خلاصه</p>
              <ul className="mt-5 divide-y divide-hairline">
                {lines.map((l) => (
                  <li key={l.p.slug} className="flex items-center gap-3 py-3">
                    <div className="size-14 shrink-0 overflow-hidden bg-surface">
                      <img src={l.p.img} alt={l.p.name} className="size-full object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm">{l.p.name}</p>
                      <p className="text-[11px] text-foreground/50">
                        ×{l.qty.toLocaleString("fa-IR")}
                      </p>
                    </div>
                    <p className="text-xs text-primary">{formatToman(l.p.price)}</p>
                  </li>
                ))}
              </ul>
              <dl className="mt-5 space-y-2 text-sm text-foreground/70">
                <Row k="کالاها" v={`${formatToman(sub)} ت`} />
                <Row k="ارسال" v={`${formatToman(shipping)} ت`} />
              </dl>
              <div className="mt-5 flex items-baseline justify-between border-t border-hairline pt-4">
                <span className="text-xs uppercase tracking-[0.25em] text-foreground/55">
                  مبلغ نهایی
                </span>
                <span className="text-xl font-medium text-primary">{formatToman(total)}</span>
              </div>
              <ul className="mt-6 space-y-2 text-[11px] text-foreground/55">
                <li>✓ ضمانت اصالت نوا</li>
                <li>✓ ارسال بیمه‌شده</li>
                <li>✓ بازگشت تا ۷ روز</li>
              </ul>
              <Link
                to="/cart"
                className="mt-6 block text-center text-[11px] text-foreground/45 hover:text-primary"
              >
                ← بازگشت به سبد
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-foreground/55">
        {label}
      </label>
      <input
        type={type}
        className="w-full border border-hairline bg-transparent p-3 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}

function RadioBox({
  name,
  id,
  title,
  desc,
  defaultChecked,
}: {
  name: string;
  id: string;
  title: string;
  desc: string;
  defaultChecked?: boolean;
}) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-start gap-4 border border-hairline p-4 transition-colors has-[:checked]:border-primary"
    >
      <input
        id={id}
        type="radio"
        name={name}
        defaultChecked={defaultChecked}
        className="mt-1.5 accent-primary"
      />
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="mt-1 text-xs text-foreground/55">{desc}</p>
      </div>
    </label>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between">
      <dt>{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
