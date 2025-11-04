"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { Product } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { productCard } from "@/lib/animations";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  return (
    <motion.div
      variants={productCard}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      className={cn("group relative", className)}
    >
      <Link href={`/collections/${product.id}`}>
        <div className="relative overflow-hidden rounded-lg bg-[var(--color-concrete)]/5 border-2 border-transparent group-hover:border-[var(--color-neon-pink)] transition-all duration-300">
          {/* Product Image */}
          <div className="aspect-square relative overflow-hidden">
            <Image
              src="/images/placeholders/GlassesPlaceHolder.png"
              alt={product.name}
              fill
              className="object-cover"
            />

            {/* Spray Paint Border Effect on Hover */}
            <motion.div
              className="absolute inset-0 border-4 border-[var(--color-neon-pink)] opacity-0 group-hover:opacity-100 pointer-events-none"
              style={{ filter: "blur(2px)" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.6 }}
            />
          </div>

          {/* Celebrity Favorite Badge */}
          {product.celebrityFavorite && (
            <div className="absolute top-3 right-3">
              <Badge variant="sticker" className="shadow-lg">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Celebrity Fave
              </Badge>
            </div>
          )}

          {/* Quick Add Button */}
          <motion.div
            className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button className="w-12 h-12 bg-[var(--color-gold)] text-black rounded-full flex items-center justify-center hover:bg-[var(--color-gold-light)] transition-colors shadow-lg">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="mt-4 space-y-2">
          {/* Designer */}
          <p className="font-display text-[var(--color-gold)] text-sm">
            {product.designer}
          </p>

          {/* Product Name */}
          <h3 className="font-grotesk text-foreground text-lg font-medium group-hover:text-[var(--color-gold)] transition-colors">
            {product.name}
          </h3>

          {/* Price with Graffiti Style */}
          <div className="flex items-center justify-between">
            <div className="relative">
              <p className="font-street text-[var(--color-neon-pink)] text-xl">
                {formatPrice(product.price)}
              </p>
              <svg
                className="absolute -bottom-1 left-0 w-full h-1 opacity-60"
                viewBox="0 0 100 5"
              >
                <path
                  d="M 0 2.5 Q 25 1, 50 2.5 T 100 2.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-[var(--color-neon-pink)]"
                />
              </svg>
            </div>

            {product.celebrity && (
              <Badge variant="celebrity" className="text-xs">
                {product.celebrity}
              </Badge>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {product.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-grotesk text-[var(--color-concrete)] border border-[var(--color-concrete)]/30 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
