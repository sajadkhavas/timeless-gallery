import { Link } from "@tanstack/react-router";
import { BRAND } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-hairline px-6 pb-12 pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <div className="text-2xl font-semibold text-primary">«نوا»</div>
            <p className="max-w-sm text-xs leading-loose text-foreground/55">
              {BRAND.address}
              <br />
              تلفن: {BRAND.phone} — واتساپ: {BRAND.whatsapp}
            </p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
              ساعات کاری ـ {BRAND.hours}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary">خدمات</p>
            <ul className="space-y-3 text-xs text-foreground/70">
              <li>
                <Link to="/services" className="hover:text-primary">
                  نگهداری و سرویس
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary">
                  تأیید اصالت
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary">
                  سفارش اختصاصی
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary">
                  تعویض بند
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary">راهنمایی</p>
            <ul className="space-y-3 text-xs text-foreground/70">
              <li>
                <Link to="/faq" className="hover:text-primary">
                  سؤالات متداول
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary">
                  ارسال و بازگشت
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary">
                  گارانتی و اصالت
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-8 md:flex-row">
          <p className="text-[10px] tracking-[0.2em] text-foreground/40">
            © ۱۴۰۳ ـ تمامی حقوق برای گالریِ نوا محفوظ است.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-[0.3em] text-foreground/40">
            <a
              href={BRAND.socials.instagram}
              className="hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href={BRAND.socials.telegram}
              className="hover:text-primary"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
            <Link to="/journal" className="hover:text-primary">
              Journal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
