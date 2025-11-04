"use client";

import React from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { PRODUCTS } from "@/lib/constants";

export const GlassesCarousel: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-black via-black to-black">
      <div className="w-full max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {PRODUCTS.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
