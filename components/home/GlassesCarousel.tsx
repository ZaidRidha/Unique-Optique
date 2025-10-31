"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { PRODUCTS, Product } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export const GlassesCarousel: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Swiper
        modules={[Autoplay, EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1.5,
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active-custom",
        }}
        loop={true}
        className="glasses-carousel"
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id} className="!w-[400px]">
            <GlassCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .glasses-carousel {
          padding: 50px 20px 70px;
        }

        .glasses-carousel .swiper-slide {
          transition: all 0.3s ease;
        }

        .glasses-carousel .swiper-slide-active {
          z-index: 10;
        }

        .glasses-carousel .swiper-pagination {
          bottom: 0;
        }

        .glasses-carousel .swiper-pagination-bullet {
          background: var(--color-concrete);
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }

        .swiper-pagination-bullet-active-custom {
          background: var(--color-gold) !important;
          opacity: 1 !important;
          box-shadow: 0 0 10px var(--color-gold);
        }
      `}</style>
    </div>
  );
};

interface GlassCardProps {
  product: Product;
}

const GlassCard: React.FC<GlassCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative bg-black rounded-2xl overflow-hidden border-2 border-[var(--color-gold)]/50 shadow-2xl group"
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-neon-pink)] via-[var(--color-gold)] to-[var(--color-electric-blue)] opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl" />

      <div className="relative p-8 space-y-5">
        {/* Celebrity Favorite Badge */}
        {product.celebrityFavorite && (
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center gap-1 bg-[var(--color-gold)] text-black px-3 py-1 rounded-full text-xs font-street shadow-lg">
              <Star className="w-3 h-3 fill-current" />
              Celebrity
            </div>
          </div>
        )}

        {/* Glasses Image */}
        <div className="relative h-48 flex items-center justify-center mb-6 bg-[var(--color-concrete)]/5 rounded-lg">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/images/placeholders/GlassesPlaceHolder.png"
              alt={product.name}
              width={280}
              height={140}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Designer */}
        <div className="text-center mb-2">
          <p className="font-display text-[var(--color-gold)] text-base uppercase tracking-wider">
            {product.designer}
          </p>
        </div>

        {/* Product Name */}
        <h3 className="font-grotesk text-[var(--color-offwhite)] text-xl font-semibold text-center leading-tight mb-4">
          {product.name}
        </h3>

        {/* Divider */}
        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-neon-pink)] to-transparent mx-auto mb-4" />

        {/* Specifications */}
        <div className="space-y-3 text-center">
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-[var(--color-concrete)]/10 rounded-lg p-3 border border-[var(--color-gold)]/20">
              <p className="text-[var(--color-gold)] font-marker uppercase text-xs mb-1">
                Material
              </p>
              <p className="text-[var(--color-offwhite)] font-grotesk text-xs truncate">
                {product.material}
              </p>
            </div>
            <div className="bg-[var(--color-concrete)]/10 rounded-lg p-3 border border-[var(--color-gold)]/20">
              <p className="text-[var(--color-gold)] font-marker uppercase text-xs mb-1">
                Size
              </p>
              <p className="text-[var(--color-offwhite)] font-grotesk text-xs">
                {product.size}
              </p>
            </div>
          </div>

          {/* Colors */}
          <div className="bg-[var(--color-concrete)]/10 rounded-lg p-3 border border-[var(--color-gold)]/20">
            <p className="text-[var(--color-gold)] font-marker uppercase text-xs mb-2">
              Available Colors
            </p>
            <div className="flex justify-center gap-2">
              {product.colors.slice(0, 3).map((color) => (
                <div
                  key={color}
                  className="px-2 py-1 bg-[var(--color-concrete)]/20 rounded text-[var(--color-offwhite)] text-xs font-grotesk border border-[var(--color-concrete)]/30"
                >
                  {color}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="relative pt-4 pb-3">
          <div className="text-center">
            <p className="font-street text-4xl text-[var(--color-gold)] neon-glow">
              {formatPrice(product.price)}
            </p>
          </div>

          {/* Underline Effect */}
          <svg
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-32 h-2"
            viewBox="0 0 100 5"
          >
            <path
              d="M 0 2.5 Q 25 1, 50 2.5 T 100 2.5"
              stroke="var(--color-gold)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Celebrity Tag */}
        {product.celebrity && (
          <div className="text-center mb-3">
            <span className="inline-block px-4 py-1.5 text-sm font-marker text-[var(--color-electric-blue)] border border-[var(--color-electric-blue)]/30 rounded-full bg-[var(--color-electric-blue)]/5">
              Worn by {product.celebrity}
            </span>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center pt-3">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-grotesk text-[var(--color-concrete)] border border-[var(--color-concrete)]/20 rounded uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover Effect - View Details */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-4">
          <div className="w-full py-3 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] text-black text-center font-street text-base rounded-lg cursor-pointer hover:shadow-lg hover:shadow-[var(--color-gold)]/50 transition-all">
            View Details
          </div>
        </div>
      </div>
    </motion.div>
  );
};
