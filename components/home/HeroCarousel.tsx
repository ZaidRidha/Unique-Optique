"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassesCarousel } from "@/components/home/GlassesCarousel";

export const HeroCarousel: React.FC = () => {
  return (
    <div>
      {/* Content */}

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        style={{
          textAlign: "center",
          marginTop: "125px",
          marginBottom: "75px",
        }}
      >
        <motion.h2
          animate={{
            textShadow: [
              "0 0 30px rgba(212, 175, 55, 0.6), 0 0 60px rgba(212, 175, 55, 0.3)",
              "0 0 50px rgba(212, 175, 55, 0.9), 0 0 80px rgba(212, 175, 55, 0.5)",
              "0 0 30px rgba(212, 175, 55, 0.6), 0 0 60px rgba(212, 175, 55, 0.3)",
            ],
          }}
          transition={{
            textShadow: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            color: 'var(--color-gold)',
            filter: 'brightness(1.1)',
            fontFamily: 'Bebas Neue, sans-serif',
            fontWeight: '400',
            letterSpacing: '0.05em',
          }}
        >
          Unique Optique
        </motion.h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.3,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        style={{
          maxWidth: '1300px',
          margin: '0 auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          marginBottom: '30px',
        }}
      >
        <motion.h3
          animate={{
            textShadow: [
              "0 0 25px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.2)",
              "0 0 40px rgba(212, 175, 55, 0.8), 0 0 60px rgba(212, 175, 55, 0.4)",
              "0 0 25px rgba(212, 175, 55, 0.5), 0 0 40px rgba(212, 175, 55, 0.2)",
            ],
          }}
          transition={{
            textShadow: {
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          style={{
            textAlign: "left",
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: 'var(--color-gold)',
            filter: 'brightness(1.1)',
            fontFamily: 'Bebas Neue, sans-serif',
            fontWeight: '400',
            letterSpacing: '0.05em',
          }}
        >
          Latest Arrivals...
        </motion.h3>
      </motion.div>
      <GlassesCarousel />
      <GlassesCarousel />
    </div>
  );
};
