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

        {/* Taped On Glasses Image */}
        <motion.div
          initial={{ opacity: 0, rotate: 8, y: -50 }}
          animate={{ opacity: 1, rotate: 5, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            position: 'absolute',
            top: '15%',
            right: '8%',
            zIndex: '10',
            transform: 'rotate(5deg)',
          }}
        >
          {/* Tape effect on top */}
          <div
            style={{
              position: 'absolute',
              top: '-15px',
              left: '50%',
              transform: 'translateX(-50%) rotate(-2deg)',
              width: '120px',
              height: '30px',
              background: 'rgba(255, 255, 200, 0.4)',
              backdropFilter: 'blur(2px)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              zIndex: '1',
            }}
          />

          {/* Image frame */}
          <div
            style={{
              padding: '15px',
              background: 'white',
              boxShadow: `
                0 8px 30px rgba(0, 0, 0, 0.5),
                0 0 20px rgba(212, 175, 55, 0.4),
                inset 0 0 20px rgba(0, 0, 0, 0.1)
              `,
              border: '2px solid rgba(0, 0, 0, 0.1)',
            }}
          >
            <Image
              src="/images/placeholders/HeroGlasses1.jpg"
              alt="Featured Glasses"
              width={250}
              height={250}
              style={{
                display: 'block',
                objectFit: 'cover',
                filter: 'contrast(1.1) saturate(1.2)',
              }}
            />
            {/* Handwritten style text */}
            <div
              style={{
                marginTop: '8px',
                fontFamily: 'cursive',
                fontSize: '1rem',
                color: '#333',
                textAlign: 'center',
                fontStyle: 'italic',
              }}
            >
              NYC Exclusive ★
            </div>
          </div>
        </motion.div>

        {/* Taped On Glasses Image 2 */}
        <motion.div
          initial={{ opacity: 0, rotate: -8, y: -50 }}
          animate={{ opacity: 1, rotate: -5, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            position: 'absolute',
            top: '15%',
            left: '8%',
            zIndex: '10',
            transform: 'rotate(-5deg)',
          }}
        >
          {/* Tape effect on top */}
          <div
            style={{
              position: 'absolute',
              top: '-15px',
              left: '50%',
              transform: 'translateX(-50%) rotate(2deg)',
              width: '120px',
              height: '30px',
              background: 'rgba(255, 255, 200, 0.4)',
              backdropFilter: 'blur(2px)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              zIndex: '1',
            }}
          />

          {/* Image frame */}
          <div
            style={{
              padding: '15px',
              background: 'white',
              boxShadow: `
                0 8px 30px rgba(0, 0, 0, 0.5),
                0 0 20px rgba(212, 175, 55, 0.4),
                inset 0 0 20px rgba(0, 0, 0, 0.1)
              `,
              border: '2px solid rgba(0, 0, 0, 0.1)',
            }}
          >
            <Image
              src="/images/placeholders/HeroGlasses2.jpeg"
              alt="Featured Glasses"
              width={250}
              height={250}
              style={{
                display: 'block',
                objectFit: 'cover',
                filter: 'contrast(1.1) saturate(1.2)',
              }}
            />
            {/* Handwritten style text */}
            <div
              style={{
                marginTop: '8px',
                fontFamily: 'cursive',
                fontSize: '1rem',
                color: '#333',
                textAlign: 'center',
                fontStyle: 'italic',
              }}
            >
              versace, versace 🔥
            </div>
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
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              color: 'var(--color-gold)',
              fontFamily: 'Bebas Neue, sans-serif',
              fontWeight: '700',
              letterSpacing: '0.08em',
              textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
            }}
          >
            Unique Optique
          </motion.h1>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: "easeOut",
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                  color: 'var(--color-gold)',
                  fontFamily: 'Bebas Neue, sans-serif',
                  fontWeight: '400',
                  letterSpacing: '0.15em',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                  marginBottom: '15px',
                }}
              >
                MANHATTAN, NY · THE BEST FRAMES
              </p>
            </motion.div>

            <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(212, 175, 55, 0.8), 0 8px 30px rgba(0, 0, 0, 0.6)',
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
              fontWeight: '700',
              letterSpacing: '0.15em',
              padding: '16px 48px',
              borderRadius: '50px',
              border: '3px solid rgba(0, 0, 0, 0.6)',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
            }}
          >
            See Full Collection
          </motion.button>
          </div>
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
