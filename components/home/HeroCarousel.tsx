"use client";

import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Button } from "@/components/ui/Button";
import { GraffitiText } from "@/components/artistic/GraffitiText";
import { PaintDrip } from "@/components/artistic/PaintDrip";
import { BRAND_INFO } from "@/lib/constants";

import "swiper/css";
import "swiper/css/effect-fade";

export const HeroCarousel: React.FC = () => {
  const slides = [
    {
      title: "WHERE LEGENDS",
      subtitle: "SEE CLEARLY",
      cta: "Explore Collections",
      href: "/collections",
    },
    {
      title: "HIP-HOP MEETS",
      subtitle: "HIGH FASHION",
      cta: "Celebrity Gallery",
      href: "/celebrities",
    },
    {
      title: "NYC'S FINEST",
      subtitle: "OPTICAL BOUTIQUE",
      cta: "Visit Us",
      href: "/visit",
    },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Swiper */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="absolute inset-0 h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full bg-gradient-to-br from-black via-[var(--color-concrete)]/20 to-black">
              {/* Decorative Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-neon-pink)] rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-electric-blue)] rounded-full blur-3xl" />
              </div>

              {/* Celebrity Photo Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <span className="text-[var(--color-concrete)] font-display text-[20rem]">
                  👓
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <PaintDrip className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl" count={5} />

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <GraffitiText
            variant="gold"
            className="text-5xl md:text-7xl lg:text-8xl mb-4"
          >
            {BRAND_INFO.tagline}
          </GraffitiText>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display text-xl md:text-2xl text-[var(--color-offwhite)] mb-4 max-w-2xl italic"
        >
          Manhattan's Premier Celebrity Optical Boutique
        </motion.p>

        {/* Phone Number */}
        <motion.a
          href={`tel:${BRAND_INFO.phone}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-street text-[var(--color-electric-blue)] text-2xl md:text-3xl mb-12 neon-glow hover:text-[var(--color-gold)] transition-colors"
        >
          {BRAND_INFO.phone}
        </motion.a>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button variant="gold" size="xl" asChild>
            <a href="/collections">Explore Collections</a>
          </Button>
          <Button variant="spray" size="xl" asChild>
            <a href="/celebrities">Celebrity Gallery</a>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2, duration: 1 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="font-marker text-[var(--color-gold)] text-sm">
              Scroll to explore
            </span>
            <svg
              className="w-6 h-6 text-[var(--color-gold)]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Graffiti Accents */}
      <div className="absolute top-10 right-10 opacity-30 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="var(--color-neon-pink)"
            strokeWidth="3"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      <div className="absolute bottom-20 left-10 opacity-30 pointer-events-none rotate-12">
        <svg width="80" height="80" viewBox="0 0 100 100">
          <path
            d="M 20 50 L 50 20 L 80 50 L 50 80 Z"
            fill="none"
            stroke="var(--color-lime-green)"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  );
};
