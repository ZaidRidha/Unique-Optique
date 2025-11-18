"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import styles from "./Button.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "neon" | "spray" | "outline" | "ghost" | "minimal";
  size?: "sm" | "default" | "lg" | "xl" | "icon";
  asChild?: boolean;
  animate?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = "gold",
    size = "default",
    asChild = false,
    animate = true,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";

    const buttonClasses = [
      styles.button,
      styles[variant],
      styles[size],
      className
    ].filter(Boolean).join(' ');

    if (animate) {
      return (
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Comp
            className={buttonClasses}
            ref={ref}
            {...props}
          />
        </motion.div>
      );
    }

    return (
      <Comp
        className={buttonClasses}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
