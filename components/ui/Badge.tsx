"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[var(--color-gold)] text-black",
        sticker: "border-2 border-[var(--color-neon-pink)] bg-[var(--color-neon-pink)] text-black font-marker rotate-[-2deg] shadow-md",
        celebrity: "border-2 border-[var(--color-gold)] bg-black text-[var(--color-gold)] font-street uppercase text-[10px] tracking-wider",
        neon: "border-[var(--color-electric-blue)] bg-transparent text-[var(--color-electric-blue)] neon-glow font-street uppercase",
        tag: "border-[var(--color-lime-green)] bg-[var(--color-lime-green)]/20 text-[var(--color-lime-green)] font-grotesk",
        outline: "border-[var(--color-concrete)] text-[var(--color-concrete)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
