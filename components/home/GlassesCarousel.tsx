"use client";

import React from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { PRODUCTS } from "@/lib/constants";

export const GlassesCarousel: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-black via-black to-black" style={{ display: 'flex', justifyContent: 'center', marginBottom: '75px' }}>
      <div className="w-full mx-auto" style={{ maxWidth: '1600px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '2rem', justifyItems: 'center' }}>
          {PRODUCTS.slice(0, 8).map((product) => (
            <div key={product.id} style={{ width: '100%', maxWidth: '350px' }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
