"use client";

import React from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { GraffitiText } from "@/components/artistic/GraffitiText";
import { PRODUCTS } from "@/lib/constants";

export const GlassesCarousel: React.FC = () => {
  return (
    <section className="px-6 md:px-8 bg-gradient-to-b from-black via-black to-black flex justify-center">
      <div className="w-full max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {PRODUCTS.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
