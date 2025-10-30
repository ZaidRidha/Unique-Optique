"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn, seededRandom } from "@/lib/utils";

interface HandwrittenNoteProps {
  children: React.ReactNode;
  className?: string;
  author?: string;
  color?: string;
  arrow?: boolean;
}

export const HandwrittenNote: React.FC<HandwrittenNoteProps> = ({
  children,
  className,
  author,
  color = "var(--color-gold)",
  arrow = false,
}) => {
  // Generate stable random rotation using seeded random to avoid hydration mismatches
  const rotation = useMemo(() => (seededRandom(`note-${author}-${String(children)}`) * 4) - 2, [author, children]);

  return (
    <motion.div
      className={cn("relative inline-block", className)}
      initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative bg-[var(--color-offwhite)] p-6 shadow-lg">
        {/* Handwritten text */}
        <div className="font-marker text-black" style={{ color: "black" }}>
          {children}
        </div>

        {/* Author signature */}
        {author && (
          <div
            className="mt-3 text-right font-marker text-sm opacity-70"
            style={{ color: "black" }}
          >
            - {author}
          </div>
        )}

        {/* Arrow pointing to note */}
        {arrow && (
          <svg
            className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-16 h-12"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M 50 10 Q 45 30, 48 50 T 52 70 L 50 85"
              stroke={color}
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.path
              d="M 35 70 L 50 85 L 65 70"
              stroke={color}
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            />
          </svg>
        )}
      </div>
    </motion.div>
  );
};
