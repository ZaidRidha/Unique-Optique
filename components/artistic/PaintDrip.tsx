"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { paintDrip } from "@/lib/animations";

interface PaintDripProps {
  className?: string;
  color?: string;
  count?: number;
}

export const PaintDrip: React.FC<PaintDripProps> = ({
  className,
  color = "var(--color-gold)",
  count = 3,
}) => {
  // Generate stable random heights using useMemo to avoid hydration mismatches
  const heights = useMemo(
    () => Array.from({ length: count }, () => 30 + Math.random() * 40),
    [count]
  );

  return (
    <div className={cn("absolute top-0 left-0 w-full pointer-events-none", className)}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: count }).map((_, index) => {
          const x = (index + 1) * (100 / (count + 1));
          const height = heights[index];

          return (
            <motion.g key={index}>
              {/* Drip line */}
              <motion.path
                d={`M ${x} 0 C ${x} 0, ${x - 2} ${height * 0.3}, ${x - 1} ${height * 0.6} C ${x} ${height * 0.8}, ${x + 1} ${height * 0.9}, ${x} ${height}`}
                stroke={color}
                strokeWidth="3"
                fill="none"
                variants={paintDrip}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.2 }}
              />

              {/* Drip drops */}
              <motion.circle
                cx={x}
                cy={height}
                r="2"
                fill={color}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.8 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.3 }}
              />
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
};
