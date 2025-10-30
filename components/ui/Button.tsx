"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        gold: "bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-black font-semibold hover:shadow-lg hover:shadow-[var(--color-gold)]/50 border-2 border-[var(--color-gold-light)]",
        spray: "relative bg-black text-[var(--color-neon-pink)] font-street border-3 border-[var(--color-neon-pink)] hover:bg-[var(--color-neon-pink)] hover:text-black spray-border uppercase tracking-wider",
        neon: "bg-black text-[var(--color-electric-blue)] font-street border-2 border-[var(--color-electric-blue)] hover:shadow-lg hover:shadow-[var(--color-electric-blue)]/50 neon-glow uppercase",
        outline: "border-2 border-[var(--color-concrete)] text-foreground hover:bg-[var(--color-concrete)]/20",
        ghost: "text-foreground hover:bg-[var(--color-concrete)]/10",
        minimal: "bg-offwhite text-black hover:bg-[var(--color-concrete)] transition-colors",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        default: "h-11 px-6 py-2",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  animate?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, animate = true, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    if (animate) {
      return (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
          />
        </motion.div>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
