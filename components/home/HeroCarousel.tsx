"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassesCarousel } from "@/components/home/GlassesCarousel";

export const HeroCarousel: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Content */}
      <div className="h-full flex flex-col items-center justify-center text-center gap-20 ">
        <div className="text-center">
          <h2 className="font-display text-4xl md:text-5xl text-[var(--color-gold)] italic">
            Unique Optique
          </h2>

        </div>

        <h3 className="font-marker text-2xl md:text-3xl text-[var(--color-gold)]">
          New Arrivals
        </h3>

        <GlassesCarousel />

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
