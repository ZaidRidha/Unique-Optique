"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Celebrity } from "@/lib/constants";
import { polaroidShuffle } from "@/lib/animations";
import { cn, seededRandom } from "@/lib/utils";

interface CelebrityPolaroidProps {
  celebrity: Celebrity;
  index?: number;
  className?: string;
}

export const CelebrityPolaroid: React.FC<CelebrityPolaroidProps> = ({
  celebrity,
  index = 0,
  className,
}) => {
  // Generate stable random values using seeded random to avoid hydration mismatches
  const rotation = useMemo(() => (seededRandom(celebrity.id) * 6) - 3, [celebrity.id]);
  const showStar = useMemo(() => seededRandom(`${celebrity.id}-star`) > 0.5, [celebrity.id]);

  return (
    <motion.div
      custom={index}
      variants={polaroidShuffle}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      className={cn("group cursor-pointer", className)}
      style={{ rotate: rotation }}
    >
      <div className="relative bg-[var(--color-offwhite)] p-4 pb-16 shadow-2xl">
        {/* Photo */}
        <div className="aspect-square bg-gradient-to-br from-[var(--color-concrete)]/20 to-[var(--color-concrete)]/5 relative overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-[var(--color-concrete)]/40 font-display text-8xl">📸</span>
          </div>

          {/* Graffiti Tag Overlay */}
          <div className="absolute top-2 right-2 bg-[var(--color-neon-pink)] px-3 py-1 rotate-[-5deg] shadow-lg">
            <span className="font-marker text-black text-sm uppercase">
              {celebrity.category}
            </span>
          </div>
        </div>

        {/* Handwritten Caption */}
        <div className="mt-3 space-y-1">
          <p className="font-marker text-black text-lg">
            {celebrity.name}
          </p>
          <p className="font-grotesk text-[var(--color-concrete)] text-xs">
            {celebrity.date}
          </p>

          {celebrity.quote && (
            <p className="font-marker text-[var(--color-concrete)] text-sm italic mt-2">
              "{celebrity.quote}"
            </p>
          )}
        </div>

        {/* Tape Effect */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-[var(--color-concrete)]/30 rotate-[-2deg] opacity-70" />
        <div className="absolute -top-2 left-1/4 w-12 h-6 bg-[var(--color-concrete)]/30 rotate-[3deg] opacity-70" />

        {/* Spray Paint Border on Hover */}
        <motion.div
          className="absolute inset-0 border-4 border-[var(--color-gold)] opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{ filter: "blur(1px)" }}
        />

        {/* Gold Star Sticker (sometimes) */}
        {showStar && (
          <div className="absolute bottom-2 right-2 w-8 h-8 bg-[var(--color-gold)] rounded-full flex items-center justify-center rotate-12 shadow-lg">
            <span className="text-black text-xl">★</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};
