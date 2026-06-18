import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "خانه" },
  { to: "/collections", label: "کالکشن‌ها" },
  { to: "/shop", label: "فروشگاه" },
  { to: "/journal", label: "مجله" },
  { to: "/about", label: "درباره" },
  { to: "/services", label: "خدمات" },
  { to: "/boutiques", label: "بوتیک‌ها" },
  { to: "/wishlist", label: "علاقه‌مندی‌ها" },
  { to: "/contact", label: "تماس" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              aria-label="باز کردن فهرست"
              onClick={() => setOpen(true)}
              className="-mr-1 p-1 text-foreground/80 hover:text-primary"
            >
              <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.25em] text-foreground/60 sm:inline">
              فهرست
            </span>
          </div>

          <Link to="/" className="text-lg font-semibold tracking-tight text-primary">
            «نوا»
          </Link>

          <div className="flex items-center gap-4 text-foreground/80">
            <Link
              to="/search"
              aria-label="جستجو"
              className="rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M21 21l-5.2-5.2M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                />
              </svg>
            </Link>
            <Link
              to="/account"
              aria-label="حساب کاربری"
              className="rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0v.75H4.5v-.75z"
                />
              </svg>
            </Link>
            <Link to="/cart" aria-label="سبد خرید" className="relative hover:text-primary">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"
                />
              </svg>
              <span className="absolute -bottom-1 -left-2 grid size-4 place-items-center rounded-full bg-primary text-[9px] font-semibold text-primary-foreground">
                ۲
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-[60] flex" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <aside className="relative ml-auto flex h-full w-full max-w-sm flex-col border-l border-hairline bg-[oklch(0.18_0.003_60)] p-8">
            <div className="mb-12 flex items-center justify-between">
              <span className="text-lg font-semibold text-primary">«نوا»</span>
              <button
                aria-label="بستن"
                onClick={() => setOpen(false)}
                className="text-foreground/70 hover:text-primary"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeWidth="1.5" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <ul className="space-y-5">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block text-2xl font-medium text-foreground/85 transition-colors hover:text-primary"
                    activeProps={{ className: "block text-2xl font-medium text-primary" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto space-y-2 border-t border-hairline pt-6 text-[11px] uppercase tracking-[0.25em] text-foreground/45">
              <p>تهران ـ فرشته</p>
              <p>۰۲۱-۲۲۰۰۰۰۰۰</p>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
