import heroWatch from "@/assets/hero-watch.jpg";
import collectionClassic from "@/assets/collection-classic.jpg";
import collectionSport from "@/assets/collection-sport.jpg";
import collectionHeritage from "@/assets/collection-heritage.jpg";

export const IMG = {
  hero: heroWatch,
  classic: collectionClassic,
  sport: collectionSport,
  heritage: collectionHeritage,
};

export type Product = {
  slug: string;
  name: string;
  brand: string;
  collection: "classic" | "sport" | "heritage";
  collectionLabel: string;
  price: number;
  oldPrice?: number;
  badge?: "جدید" | "پرفروش" | "نسخه‌ی محدود" | "تخفیف";
  diameter: string;
  movement: string;
  caseMaterial: string;
  waterResistance: string;
  strap: string;
  gender: "مردانه" | "زنانه" | "یونیسکس";
  inStock: boolean;
  story: string;
  img: string;
  rating: number;
  reviews: number;
};

export const PRODUCTS: Product[] = [
  {
    slug: "atrium-tourbillon",
    name: "آتریوم توربیون",
    brand: "نوا اِدیشن",
    collection: "heritage",
    collectionLabel: "نسخه‌ی میراثی",
    price: 620_000_000,
    oldPrice: 680_000_000,
    badge: "نسخه‌ی محدود",
    diameter: "۴۱ میلی‌متر",
    movement: "مکانیکی اتومات ـ توربیون",
    caseMaterial: "فولاد ضدزنگ ۹۰۴L",
    waterResistance: "۵۰ متر",
    strap: "چرم تمساح دست‌دوز",
    gender: "مردانه",
    inStock: true,
    story:
      "آتریوم نمادِ بلوغ ساعت‌سازی معاصر است؛ توربیونی که در سکوت می‌چرخد و نور را در صفحه‌ی صدفی خود می‌شکند.",
    img: heroWatch,
    rating: 4.9,
    reviews: 23,
  },
  {
    slug: "classique-noir",
    name: "کلاسیک نوآر",
    brand: "میراث ژنو",
    collection: "classic",
    collectionLabel: "میراث کلاسیک",
    price: 480_000_000,
    diameter: "۳۹ میلی‌متر",
    movement: "مکانیکی اتومات",
    caseMaterial: "طلای رزگلد ۱۸ عیار",
    waterResistance: "۳۰ متر",
    strap: "چرم گاو ایتالیا",
    gender: "یونیسکس",
    inStock: true,
    story:
      "ظرافتی که هرگز کهنه نمی‌شود؛ کلاسیک نوآر ادای دینی است به سنت ساعت‌سازی سوئیس.",
    img: collectionClassic,
    rating: 4.8,
    reviews: 47,
    badge: "پرفروش",
  },
  {
    slug: "sport-luxe-titan",
    name: "اسپرت لوکس تیتان",
    brand: "آرکتیک",
    collection: "sport",
    collectionLabel: "اسپرت لوکس",
    price: 320_000_000,
    diameter: "۴۲ میلی‌متر",
    movement: "مکانیکی اتومات",
    caseMaterial: "تیتانیوم درجه‌ی ۵",
    waterResistance: "۳۰۰ متر",
    strap: "بند تیتانیومی",
    gender: "مردانه",
    inStock: true,
    story:
      "برای کسانی که زمان را در حرکت می‌سنجند؛ سبک، مقاوم و آماده برای هر افق.",
    img: collectionSport,
    rating: 4.7,
    reviews: 88,
    badge: "جدید",
  },
  {
    slug: "heritage-ivory",
    name: "هریتیج آیووری",
    brand: "نوا اِدیشن",
    collection: "heritage",
    collectionLabel: "نسخه‌ی میراثی",
    price: 540_000_000,
    diameter: "۴۰ میلی‌متر",
    movement: "مکانیکی اتومات",
    caseMaterial: "فولاد پولیش‌خورده",
    waterResistance: "۵۰ متر",
    strap: "چرم سوئدی",
    gender: "مردانه",
    inStock: true,
    story: "صفحه‌ی استخوانی با عقربه‌های آبی حرارتی؛ روایتی آرام از زمان.",
    img: collectionHeritage,
    rating: 4.9,
    reviews: 31,
  },
  {
    slug: "classique-silver",
    name: "کلاسیک سیلور",
    brand: "میراث ژنو",
    collection: "classic",
    collectionLabel: "میراث کلاسیک",
    price: 290_000_000,
    oldPrice: 340_000_000,
    badge: "تخفیف",
    diameter: "۳۸ میلی‌متر",
    movement: "کوارتز سوئیسی",
    caseMaterial: "فولاد ضدزنگ",
    waterResistance: "۵۰ متر",
    strap: "بند فلزی میلانزی",
    gender: "زنانه",
    inStock: true,
    story: "نقره‌ای ظریف برای روزهای رسمی و شب‌های ماندگار.",
    img: collectionClassic,
    rating: 4.6,
    reviews: 19,
  },
  {
    slug: "sport-chrono-night",
    name: "اسپرت کرونو نایت",
    brand: "آرکتیک",
    collection: "sport",
    collectionLabel: "اسپرت لوکس",
    price: 410_000_000,
    diameter: "۴۳ میلی‌متر",
    movement: "کرونوگراف اتومات",
    caseMaterial: "سرامیک مشکی",
    waterResistance: "۲۰۰ متر",
    strap: "بند لاستیکی",
    gender: "مردانه",
    inStock: false,
    story: "سرامیک مات، صفحه‌ی شب‌رنگ و دقت کرونوگراف برای لحظه‌های قهرمانی.",
    img: collectionSport,
    rating: 4.8,
    reviews: 56,
  },
] as const;

export function findProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const COLLECTIONS = [
  {
    slug: "classic",
    title: "میراث کلاسیک",
    subtitle: "طراحی مینیمال، دقت ابدی",
    desc: "ساعت‌هایی با خطوط ناب و رنگ‌های زمینی؛ برای کسانی که سادگی را به‌مثابه‌ی فاخرترین تجمل می‌شناسند.",
    count: 18,
    img: collectionClassic,
    label: "Classique",
  },
  {
    slug: "sport",
    title: "اسپرت لوکس",
    subtitle: "برای ماجراجویی‌های بی‌انتها",
    desc: "مقاوم، دقیق و سبک؛ ساخته‌شده برای کسانی که زمان را در حرکت می‌سنجند.",
    count: 12,
    img: collectionSport,
    label: "Sport Luxe",
  },
  {
    slug: "heritage",
    title: "نسخه‌ی میراثی",
    subtitle: "ساعت‌هایی با روحِ زمان",
    desc: "قطعاتی محدود و کلکسیونی؛ هر کدام داستانی از سنّتِ زنده‌ی ساعت‌سازی سوئیس.",
    count: 8,
    img: collectionHeritage,
    label: "Heritage",
  },
] as const;

export const ARTICLES = [
  {
    slug: "geneva-2024",
    title: "کالیبر ۲۴ ـ نگاهی به نمایشگاهِ ژنو",
    excerpt: "بررسی تخصصی مکانیسم‌های تازه و گرایش‌های طراحی در مهم‌ترین رویداد ساعت‌سازی امسال.",
    date: "۱۲ اردیبهشت ۱۴۰۳",
    readingTime: "۷ دقیقه",
    category: "رویداد",
    img: heroWatch,
  },
  {
    slug: "buying-guide-mechanical",
    title: "راهنمای خرید نخستین ساعت مکانیکی",
    excerpt: "از انتخاب موتور تا متریال بدنه؛ آنچه پیش از خرید باید بدانید.",
    date: "۲۸ فروردین ۱۴۰۳",
    readingTime: "۹ دقیقه",
    category: "راهنمای خرید",
    img: collectionClassic,
  },
  {
    slug: "care-and-service",
    title: "نگهداری از ساعتِ لوکس؛ آیینِ پنج‌ساله",
    excerpt: "چرا سرویس دوره‌ای، سرمایه‌گذاری بر عمر ساعت شماست.",
    date: "۱۰ فروردین ۱۴۰۳",
    readingTime: "۵ دقیقه",
    category: "نگهداری",
    img: collectionHeritage,
  },
  {
    slug: "sport-vs-dress",
    title: "اسپرت یا رسمی؟ هنرِ انتخاب در هر موقعیت",
    excerpt: "راهنمای ست‌کردن ساعت با استایل روزمره و رسمی.",
    date: "۲۲ اسفند ۱۴۰۲",
    readingTime: "۶ دقیقه",
    category: "استایل",
    img: collectionSport,
  },
] as const;

export const FAQS = [
  {
    q: "آیا تمام ساعت‌ها اصل هستند؟",
    a: "بله. تمامی قطعات با شناسنامه‌ی بین‌المللی برند و کارت اصالت نوا عرضه می‌شوند و قابل استعلام در آتلیه‌ی ما هستند.",
  },
  {
    q: "گارانتی محصولات چگونه است؟",
    a: "تمام ساعت‌ها شامل دو سال گارانتی بین‌المللی برند و گارانتی مادام‌العمر اصالت نوا هستند.",
  },
  {
    q: "ارسال چقدر طول می‌کشد؟",
    a: "در تهران بین ۲ تا ۲۴ ساعت و در سایر شهرهای ایران بین ۲ تا ۵ روز کاری به‌صورت بیمه‌شده ارسال می‌شود.",
  },
  {
    q: "آیا امکان مرجوعی وجود دارد؟",
    a: "بله، تا ۷ روز پس از دریافت، در صورت سالم بودن بسته‌بندی و قطعه، امکان بازگشت وجه فراهم است.",
  },
  {
    q: "روش‌های پرداخت کدام‌اند؟",
    a: "پرداخت آنلاین درگاه‌های معتبر، کارت‌به‌کارت با تأیید، و پرداخت حضوری در آتلیه‌ی نوا.",
  },
  {
    q: "آیا خدمات تعمیر و سرویس ارائه می‌دهید؟",
    a: "آتلیه‌ی نوا با ساعت‌سازان متخصص، خدمات سرویس دوره‌ای، تعمیر موتور و تعویض بند را برای تمام برندها انجام می‌دهد.",
  },
  {
    q: "تعویض بند چگونه انجام می‌شود؟",
    a: "در آتلیه به‌صورت رایگان برای مشتریان نوا انجام می‌شود؛ مجموعه‌ای از بندهای چرم، فلز و لاستیک نیز در دسترس است.",
  },
  {
    q: "آیا امکان رزرو حضوری وجود دارد؟",
    a: "بله. از طریق صفحه‌ی تماس می‌توانید زمان ملاقات اختصاصی در آتلیه‌ی فرشته را رزرو کنید.",
  },
];

export const BOUTIQUES = [
  {
    city: "تهران",
    name: "آتلیه‌ی نوا ـ فرشته",
    address: "خیابان فرشته، ساختمان آریا، طبقه‌ی اول",
    phone: "۰۲۱-۲۲۰۰۰۰۰۰",
    hours: "شنبه تا چهارشنبه ۱۰ تا ۲۰",
  },
  {
    city: "اصفهان",
    name: "بوتیک نوا ـ چهارباغ",
    address: "خیابان چهارباغ بالا، مجتمع پارک، طبقه‌ی همکف",
    phone: "۰۳۱-۳۶۰۰۰۰۰۰",
    hours: "شنبه تا پنج‌شنبه ۱۱ تا ۲۱",
  },
  {
    city: "مشهد",
    name: "بوتیک نوا ـ احمدآباد",
    address: "بلوار احمدآباد، ساختمان زمرد، طبقه‌ی دوم",
    phone: "۰۵۱-۳۸۰۰۰۰۰۰",
    hours: "شنبه تا چهارشنبه ۱۰ تا ۲۰",
  },
];

export function formatToman(n: number) {
  return n.toLocaleString("fa-IR");
}
