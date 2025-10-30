import { ProductCard } from "@/components/products/ProductCard";
import { GraffitiText } from "@/components/artistic/GraffitiText";
import { PRODUCTS } from "@/lib/constants";

export default function CollectionsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <GraffitiText
            variant="gold"
            className="text-5xl md:text-7xl mb-6"
          >
            COLLECTIONS
          </GraffitiText>
          <p className="font-display text-2xl text-[var(--color-concrete)] italic">
            Curated luxury eyewear for legends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
