"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";
import { CELEBRITIES } from "@/lib/constants";

export const CelebrityTicker: React.FC = () => {
  // Double the array for seamless loop
  const tickerItems = [...CELEBRITIES, ...CELEBRITIES, ...CELEBRITIES];

  return (
    <div className="relative bg-[var(--color-neon-pink)] py-4 overflow-hidden border-y-4 border-[var(--color-gold)]">
      {/* Ticker Content */}
      <Link href="/celebrities" className="block">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {tickerItems.map((celebrity, index) => (
            <div
              key={`${celebrity.id}-${index}`}
              className="inline-flex items-center space-x-3 mx-6"
            >
              <Star className="w-5 h-5 text-black fill-current" />
              <span className="font-street text-black text-xl uppercase tracking-wider">
                AS SEEN ON: {celebrity.name}
              </span>
              <Star className="w-5 h-5 text-black fill-current" />
            </div>
          ))}
        </motion.div>
      </Link>

      {/* Spray Paint Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10%" cy="50%" r="3" fill="black" />
          <circle cx="30%" cy="60%" r="2" fill="black" />
          <circle cx="50%" cy="40%" r="2.5" fill="black" />
          <circle cx="70%" cy="55%" r="2" fill="black" />
          <circle cx="90%" cy="45%" r="3" fill="black" />
        </svg>
      </div>
    </div>
  );
};
