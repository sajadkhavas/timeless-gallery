import { IMG } from "./assets";
import type { Collection } from "./types";

export const COLLECTIONS: Collection[] = [
  {
    slug: "classic",
    title: "میراث کلاسیک",
    subtitle: "طراحی مینیمال، دقت ابدی",
    desc: "ساعت‌هایی با خطوط ناب و رنگ‌های زمینی؛ برای کسانی که سادگی را به‌مثابه‌ی فاخرترین تجمل می‌شناسند.",
    count: 18,
    img: IMG.classic,
    label: "Classique",
  },
  {
    slug: "sport",
    title: "اسپرت لوکس",
    subtitle: "برای ماجراجویی‌های بی‌انتها",
    desc: "مقاوم، دقیق و سبک؛ ساخته‌شده برای کسانی که زمان را در حرکت می‌سنجند.",
    count: 12,
    img: IMG.sport,
    label: "Sport Luxe",
  },
  {
    slug: "heritage",
    title: "نسخه‌ی میراثی",
    subtitle: "ساعت‌هایی با روحِ زمان",
    desc: "قطعاتی محدود و کلکسیونی؛ هر کدام داستانی از سنّتِ زنده‌ی ساعت‌سازی سوئیس.",
    count: 8,
    img: IMG.heritage,
    label: "Heritage",
  },
];
