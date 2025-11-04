"use client";

import React from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { PRODUCTS } from "@/lib/constants";

export const GlassesCarousel: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-black to-[var(--color-concrete)]/10 flex justify-center" style={{ marginTop: '120px' }}>
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
