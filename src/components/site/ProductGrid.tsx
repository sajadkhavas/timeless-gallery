import { ProductCard } from "./ProductCard";
import { EmptyState } from "./EmptyState";
import type { Product } from "@/lib/data";

export function ProductGrid({
  products,
  emptyTitle = "محصولی یافت نشد",
  emptyDescription = "فیلترها را تغییر دهید یا دوباره جست‌وجو کنید.",
}: {
  products: Product[];
  emptyTitle?: string;
  emptyDescription?: string;
}) {
  if (products.length === 0)
    return <EmptyState title={emptyTitle} description={emptyDescription} />;
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} p={product} />
      ))}
    </div>
  );
}
