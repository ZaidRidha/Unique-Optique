import { Variants } from "framer-motion";

// Page Transitions
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

// Fade In Variants
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
  },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
  },
};

// Scale Variants
export const scaleIn: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const scaleOnHover: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Slide Variants
export const slideInLeft: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const slideInRight: Variants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Stagger Children
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Chaotic Entrance (for high-energy sections)
export const chaoticEntrance: Variants = {
  initial: {
    opacity: 0,
    rotate: Math.random() * 20 - 10,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
  },
  animate: {
    opacity: 1,
    rotate: 0,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

// Polaroid Shuffle (for celebrity wall)
export const polaroidShuffle: Variants = {
  initial: {
    opacity: 0,
    rotate: Math.random() * 15 - 7.5,
    scale: 0.8,
  },
  animate: (index: number) => ({
    opacity: 1,
    rotate: Math.random() * 6 - 3,
    scale: 1,
    transition: {
      delay: index * 0.05,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  hover: {
    scale: 1.05,
    rotate: 0,
    zIndex: 10,
    transition: { duration: 0.2 },
  },
};

// Spray Paint Reveal
export const sprayPaintReveal: Variants = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" },
      opacity: { duration: 0.3 },
    },
  },
};

// Navigation Menu
export const menuOverlay: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const menuContainer: Variants = {
  initial: { x: "100%" },
  animate: {
    x: 0,
    transition: { duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export const menuItem: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + index * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
  exit: { opacity: 0, x: 50 },
};

// Product Card
export const productCard: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    y: -10,
    transition: { duration: 0.3 },
  },
};

// Glitch Effect
export const glitchEffect: Variants = {
  initial: { x: 0 },
  hover: {
    x: [0, -2, 2, -2, 2, 0],
    transition: {
      duration: 0.3,
      times: [0, 0.2, 0.4, 0.6, 0.8, 1],
    },
  },
};

// Gold Shimmer Button
export const goldShimmer: Variants = {
  initial: { backgroundPosition: "0% 50%" },
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Ticker Animation
export const ticker: Variants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

// Paint Drip
export const paintDrip: Variants = {
  initial: { scaleY: 0, transformOrigin: "top" },
  animate: {
    scaleY: 1,
    transition: {
      duration: 1.5,
      ease: "easeIn",
    },
  },
};

// Parallax
export const parallaxSlow: Variants = {
  initial: { y: 0 },
  animate: { y: -50 },
};

export const parallaxFast: Variants = {
  initial: { y: 0 },
  animate: { y: -100 },
};

// Modal
export const modalOverlay: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const modalContent: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", damping: 25, stiffness: 300 },
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};
