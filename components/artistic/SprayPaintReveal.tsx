"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { sprayPaintReveal as sprayAnimation } from "@/lib/animations";

interface SprayPaintRevealProps {
  text: string;
  className?: string;
  color?: string;
}

export const SprayPaintReveal: React.FC<SprayPaintRevealProps> = ({
  text,
  className,
  color = "var(--color-neon-pink)",
}) => {
  return (
    <div className={cn("relative inline-block", className)}>
      <svg
        viewBox="0 0 500 100"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background spray texture */}
        <g opacity="0.3">
          <circle cx="50" cy="50" r="2" fill={color} />
          <circle cx="80" cy="45" r="1.5" fill={color} />
          <circle cx="120" cy="55" r="1.8" fill={color} />
          <circle cx="160" cy="48" r="1.2" fill={color} />
          <circle cx="200" cy="52" r="2" fill={color} />
        </g>

        {/* Main text path */}
        <motion.path
          d="M 50 50 Q 100 45, 150 50 T 250 50 T 350 50 T 450 50"
          stroke={color}
          strokeWidth="25"
          fill="none"
          strokeLinecap="round"
          variants={sprayAnimation}
          initial="initial"
          animate="animate"
        />

        {/* Text */}
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          className="font-street text-4xl fill-current uppercase"
          style={{ fill: color }}
        >
          {text}
        </text>
      </svg>
    </div>
  );
};
