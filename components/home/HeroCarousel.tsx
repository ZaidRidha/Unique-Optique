"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassesCarousel } from "@/components/home/GlassesCarousel";

export const HeroCarousel: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Content */}
      <div className="h-full flex flex-col items-center justify-center px-4 text-center gap-12 pt-40">

        {/* Glasses Carousel */}
        <div className="w-full flex-1 flex items-center justify-center">
          <GlassesCarousel />
        </div>

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
