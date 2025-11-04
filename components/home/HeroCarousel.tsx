"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GlassesCarousel } from "@/components/home/GlassesCarousel";

export const HeroCarousel: React.FC = () => {
  return (
    <div>
      {/* Unique Optique Section with Danny DeVito */}
      <div style={{ position: 'relative', marginBottom: '60px', minHeight: '60vh' }}>
        {/* Danny DeVito Background */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          opacity: '0.35',
          zIndex: '0',
          pointerEvents: 'none'
        }}>
          <Image
            src="/images/celebrities/DannyDevito.jpg"
            alt="Danny DeVito"
            fill
            style={{ objectFit: 'cover', filter: 'sepia(0.5) saturate(2) brightness(0.9) contrast(1.2)' }}
          />
        </div>

 

        {/* Unique Optique Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "90vh",
            position: "relative",
            zIndex: "5",
            paddingTop: "100px",
            paddingBottom: "80px",
          }}
        >
          <motion.h1
            style={{
              fontSize: 'clamp(4rem, 12vw, 8rem)',
              color: 'var(--color-gold)',
              fontFamily: 'Bebas Neue, sans-serif',
              fontWeight: '400',
              letterSpacing: '0.08em',
            }}
          >
            Unique Optique
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
            }}
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              color: 'var(--color-gold)',
              fontFamily: 'Bebas Neue, sans-serif',
              fontWeight: '400',
              letterSpacing: '0.15em',
              opacity: '0.9',
            }}
          >
            See full collection
          </motion.p>
        </motion.div>
      </div>

      {/* Latest Arrivals Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.3,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        style={{
          textAlign: 'center',
          marginTop: '0px',
          marginBottom: '40px',
        }}
      >
        <motion.h3
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: 'var(--color-gold)',
            fontFamily: 'Bebas Neue, sans-serif',
            fontWeight: '400',
            letterSpacing: '0.05em',
          }}
        >
          Latest Arrivals...
        </motion.h3>
      </motion.div>

      {/* Glasses Carousel */}
      <GlassesCarousel />

    </div>
  );
};
