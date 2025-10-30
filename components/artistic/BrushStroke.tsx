"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BrushStrokeProps {
  className?: string;
  color?: string;
  variant?: "horizontal" | "vertical" | "diagonal";
}

export const BrushStroke: React.FC<BrushStrokeProps> = ({
  className,
  color = "var(--color-gold)",
  variant = "horizontal",
}) => {
  const paths = {
    horizontal: "M 10 50 Q 30 45, 60 48 T 120 52 T 180 48 T 240 50 T 290 52",
    vertical: "M 50 10 Q 45 30, 48 60 T 52 120 T 48 180 T 50 240 T 52 290",
    diagonal: "M 10 10 Q 30 25, 50 40 T 90 70 T 130 100 T 170 130",
  };

  return (
    <div className={cn("absolute pointer-events-none", className)}>
      <svg
        viewBox="0 0 300 100"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={paths[variant]}
          stroke={color}
          strokeWidth="25"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Rough edges for texture */}
        <motion.path
          d={variant === "horizontal" ? "M 15 40 Q 35 38, 65 42" : "M 40 15 Q 38 35, 42 65"}
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};
