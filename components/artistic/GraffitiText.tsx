"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GraffitiTextProps {
  children: string;
  className?: string;
  variant?: "gold" | "neon-pink" | "electric-blue" | "lime-green";
  animate?: boolean;
}

export const GraffitiText: React.FC<GraffitiTextProps> = ({
  children,
  className,
  variant = "gold",
  animate = true,
}) => {
  const colors = {
    gold: "text-[var(--color-gold)]",
    "neon-pink": "text-[var(--color-neon-pink)]",
    "electric-blue": "text-[var(--color-electric-blue)]",
    "lime-green": "text-[var(--color-lime-green)]",
  };

  const shadowColors = {
    gold: "[text-shadow:_3px_3px_0_var(--color-gold-dark),_6px_6px_0_rgba(0,0,0,0.3)]",
    "neon-pink": "[text-shadow:_3px_3px_0_#FF1493,_6px_6px_0_rgba(0,0,0,0.3)]",
    "electric-blue": "[text-shadow:_3px_3px_0_#00D9FF,_6px_6px_0_rgba(0,0,0,0.3)]",
    "lime-green": "[text-shadow:_3px_3px_0_#39FF14,_6px_6px_0_rgba(0,0,0,0.3)]",
  };

  const letters = children.split("");

  if (animate) {
    return (
      <div className={cn("font-street uppercase tracking-[0.1em]", className)}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 50, rotate: Math.random() * 20 - 10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.03,
              ease: [0.6, 0.05, 0.01, 0.9],
            }}
            className={cn(
              "inline-block",
              colors[variant],
              shadowColors[variant]
            )}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "font-street uppercase tracking-[0.1em]",
        colors[variant],
        shadowColors[variant],
        className
      )}
    >
      {children}
    </div>
  );
};
