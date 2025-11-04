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
        <div className="relative overflow-hidden rounded-xl bg-[var(--color-concrete)]/5 border-2 border-[var(--color-concrete)]/20 group-hover:border-[var(--color-gold)]/60 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[var(--color-gold)]/20">
          {/* Product Image */}
          <div className="aspect-square relative overflow-hidden">
            <Image
              src="/images/placeholders/GlassesPlaceHolder.png"
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
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
            className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0 }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] text-black font-grotesk font-bold text-sm md:text-base rounded-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-[var(--color-gold)]/50 transition-all duration-200 backdrop-blur-md"
            >
              <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
              <span>Quick Add</span>
            </motion.button>
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

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="relative">
              <p className="font-street text-[var(--color-gold)] text-xl md:text-2xl font-semibold">
                {formatPrice(product.price)}
              </p>
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
                className="px-3 py-1.5 text-xs font-grotesk text-[var(--color-concrete)]/80 bg-[var(--color-concrete)]/10 border border-[var(--color-concrete)]/20 rounded-full hover:border-[var(--color-gold)]/40 hover:text-[var(--color-gold)] transition-colors duration-200"
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
