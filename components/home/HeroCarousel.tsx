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
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut"
          }}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: '0',
            pointerEvents: 'none'
          }}
        >
          <Image
            src="/images/celebrities/DannyDevito.jpg"
            alt="Danny DeVito"
            fill
            style={{ objectFit: 'cover', filter: 'sepia(0.5) saturate(2) brightness(0.9) contrast(1.2)' }}
          />
        </motion.div>

        {/* Graffiti Motto */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '20px',
            zIndex: '10',
            transform: 'rotate(-3deg)',
          }}
        >
          <div
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
              fontWeight: 'bold',
              color: 'var(--color-gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              textShadow: '3px 3px 0px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.6), 0 0 40px rgba(212, 175, 55, 0.4)',
              padding: '10px 20px',
              background: 'rgba(0, 0, 0, 0.3)',
              borderLeft: '6px solid var(--color-gold)',
              backdropFilter: 'blur(5px)',
            }}
          >
            THE BEST FRAMES
            <br />
            IN MANHATTAN
          </div>
        </motion.div>

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

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
            }}
            onClick={() => window.location.href = '/collections'}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              color: 'black',
              background: 'linear-gradient(135deg, var(--color-gold), #DAA520)',
              fontFamily: 'Bebas Neue, sans-serif',
              fontWeight: '400',
              letterSpacing: '0.15em',
              padding: '16px 48px',
              borderRadius: '50px',
              border: '2px solid var(--color-gold)',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
            }}
          >
            See Full Collection
          </motion.button>
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
