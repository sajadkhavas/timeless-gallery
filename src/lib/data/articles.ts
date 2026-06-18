import { IMG } from "./assets";
import type { Article } from "./types";

export const ARTICLES: Article[] = [
  {
    slug: "geneva-2024",
    title: "کالیبر ۲۴ ـ نگاهی به نمایشگاهِ ژنو",
    excerpt: "بررسی تخصصی مکانیسم‌های تازه و گرایش‌های طراحی در مهم‌ترین رویداد ساعت‌سازی امسال.",
    date: "۱۲ اردیبهشت ۱۴۰۳",
    readingTime: "۷ دقیقه",
    category: "رویداد",
    img: IMG.hero,
  },
  {
    slug: "buying-guide-mechanical",
    title: "راهنمای خرید نخستین ساعت مکانیکی",
    excerpt: "از انتخاب موتور تا متریال بدنه؛ آنچه پیش از خرید باید بدانید.",
    date: "۲۸ فروردین ۱۴۰۳",
    readingTime: "۹ دقیقه",
    category: "راهنمای خرید",
    img: IMG.classic,
  },
  {
    slug: "care-and-service",
    title: "نگهداری از ساعتِ لوکس؛ آیینِ پنج‌ساله",
    excerpt: "چرا سرویس دوره‌ای، سرمایه‌گذاری بر عمر ساعت شماست.",
    date: "۱۰ فروردین ۱۴۰۳",
    readingTime: "۵ دقیقه",
    category: "نگهداری",
    img: IMG.heritage,
  },
  {
    slug: "sport-vs-dress",
    title: "اسپرت یا رسمی؟ هنرِ انتخاب در هر موقعیت",
    excerpt: "راهنمای ست‌کردن ساعت با استایل روزمره و رسمی.",
    date: "۲۲ اسفند ۱۴۰۲",
    readingTime: "۶ دقیقه",
    category: "استایل",
    img: IMG.sport,
  },
];

export function findArticle(slug: string) {
  return ARTICLES.find((article) => article.slug === slug);
}
