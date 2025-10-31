"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GraffitiText } from "@/components/artistic/GraffitiText";
import { GlassesCarousel } from "@/components/home/GlassesCarousel";
import { BRAND_INFO } from "@/lib/constants";

export const HeroCarousel: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Static Background */}
      <div className="absolute inset-0 h-full w-full">
        <div className="relative w-full h-full bg-black">
          {/* Glasses Carousel */}
          <div className="absolute inset-0 flex items-center justify-center">
            <GlassesCarousel />
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">

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

    </div>
  );
};
