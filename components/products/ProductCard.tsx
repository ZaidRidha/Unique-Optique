"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { Product } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { productCard } from "@/lib/animations";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={productCard}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={cn(styles.card, className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/collections/${product.id}`}>
        <div className={styles.imageContainer}>
          {/* Product Image */}
          <div className={styles.imageWrapper}>
            <Image
              key={isHovered ? "hover" : "default"}
              src={isHovered ? "/images/placeholders/GlassesPlaceHolder2.png" : "/images/placeholders/GlassesPlaceHolder.png"}
              alt={product.name}
              fill
              className={styles.image}
              priority={false}
              unoptimized
            />
          </div>

          {/* Celebrity Favorite Badge */}
          {product.celebrityFavorite && (
            <div className={styles.badge}>
              <Star className="w-3 h-3 fill-current" />
              <span>Celebrity Favorite</span>
            </div>
          )}

          {/* Quick Add Button */}
          <motion.div
            className={styles.quickAddWrapper}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0 }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.quickAddButton}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className={styles.productInfo}>
          {/* Designer */}
          <p className={styles.designer}>
            {product.designer}
          </p>

          {/* Product Name */}
          <h3 className={styles.productName}>
            {product.name}
          </h3>

          {/* Price */}
          <div className={styles.priceContainer}>
            <p className={styles.price}>
              {formatPrice(product.price)}
            </p>

            {product.celebrity && (
              <span className={styles.celebrityTag}>
                {product.celebrity}
              </span>
            )}
          </div>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className={styles.tagsContainer}>
              {product.tags.slice(0, 2).map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};
