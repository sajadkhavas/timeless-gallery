import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { ProductGrid } from "@/components/site/ProductGrid";
import { Newsletter } from "@/components/site/Newsletter";
import { WISHLIST_PRODUCTS } from "@/lib/data";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "علاقه‌مندی‌ها — نوا" },
      { name: "description", content: "فهرست ساعت‌های منتخب و ذخیره‌شده‌ی شما در گالری نوا." },
      { property: "og:title", content: "علاقه‌مندی‌های نوا" },
      { property: "og:description", content: "ساعت‌های لوکس محبوب خود را در نوا مرور کنید." },
      { property: "og:url", content: "/wishlist" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/wishlist" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "علاقه‌مندی‌های نوا",
        }),
      },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="علاقه‌مندی‌ها"
        title="قطعاتی که برای بازگشت انتخاب کرده‌اید."
        description="این صفحه نمونه‌ای از لیست علاقه‌مندی‌های شماست؛ برای تصمیم‌گیری آرام‌تر و مقایسه‌ی دقیق‌تر."
        crumbs={[{ label: "علاقه‌مندی‌ها" }]}
      />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <ProductGrid products={WISHLIST_PRODUCTS} />
        </div>
      </section>
      <Newsletter />
    </PageShell>
  );
}
