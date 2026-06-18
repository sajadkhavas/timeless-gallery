export type CollectionSlug = "classic" | "sport" | "heritage";

export type Product = {
  slug: string;
  name: string;
  brand: string;
  collection: CollectionSlug;
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

export type Collection = {
  slug: CollectionSlug;
  title: string;
  subtitle: string;
  desc: string;
  count: number;
  img: string;
  label: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  img: string;
};

export type Boutique = {
  city: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
};

export type Faq = {
  q: string;
  a: string;
};
