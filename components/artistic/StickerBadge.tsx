"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StickerBadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "star" | "circle" | "badge" | "rect";
  rotate?: number;
}

export const StickerBadge: React.FC<StickerBadgeProps> = ({
  children,
  className,
  variant = "circle",
  rotate = Math.random() * 6 - 3,
}) => {
  const shapes = {
    star: (
      <path
        d="M 50 10 L 55 35 L 80 35 L 60 50 L 67.5 75 L 50 60 L 32.5 75 L 40 50 L 20 35 L 45 35 Z"
        fill="currentColor"
      />
    ),
    circle: <circle cx="50" cy="50" r="40" fill="currentColor" />,
    badge: (
      <>
        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="3" fill="none" />
        <circle cx="50" cy="50" r="30" fill="currentColor" />
      </>
    ),
    rect: <rect x="10" y="20" width="80" height="60" rx="5" ry="5" fill="currentColor" />,
  };

  return (
    <motion.div
      className={cn("relative inline-block", className)}
      style={{ rotate }}
      whileHover={{ scale: 1.05, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full absolute inset-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          {shapes[variant]}
          {/* Peel effect */}
          <path
            d="M 75 25 Q 80 25, 83 30 L 85 40 Q 80 35, 75 35 Z"
            fill="rgba(255,255,255,0.3)"
          />
        </svg>

        <div className="relative z-10 p-4 flex items-center justify-center h-full">
          <div className="text-center font-marker text-sm">{children}</div>
        </div>
      </div>
    </motion.div>
  );
};
