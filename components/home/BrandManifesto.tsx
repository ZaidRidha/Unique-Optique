"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HandwrittenNote } from "@/components/artistic/HandwrittenNote";
import { fadeInUp } from "@/lib/animations";
import Image from "next/image";
import styles from "./BrandManifesto.module.css";

const locations = [
  {
    city: "Manhattan",
    country: "New York, USA",
    image: "/images/celebrities/BloodyOsiris.jpg",
    description: "The heart of luxury eyewear for over 30 years",
  },
  {
    city: "London",
    country: "United Kingdom",
    image: "/images/celebrities/KingCombs.jpg",
    description: "British elegance meets contemporary design",
  },
  {
    city: "Paris",
    country: "France",
    image: "/images/celebrities/DannyDevito.jpg",
    description: "The fashion capital's premier optical boutique",
  },
];

export const BrandManifesto: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % locations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + locations.length) % locations.length);
  };

  return (
    <section className={styles.section}>
      {/* Background */}
      <div className={styles.background} />

      <div className={styles.container}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.titleContainer}
        >
          <h2 className={styles.title}>
            OUR LOCATIONS
          </h2>
          <p className={styles.subtitle}>
            Three iconic cities. One legendary vision.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className={styles.carouselWrapper}>
          <div className={styles.carouselContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={styles.slideContainer}
              >
                <Image
                  src={locations[currentIndex].image}
                  alt={locations[currentIndex].city}
                  fill
                  className={styles.image}
                  style={{ filter: 'brightness(0.8) contrast(1.1)' }}
                />

                {/* Overlay gradient */}
                <div className={styles.overlayGradient} />

                {/* Location info */}
                <div className={styles.locationInfo}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className={styles.locationCity}>
                      {locations[currentIndex].city}
                    </h3>
                    <p className={styles.locationCountry}>
                      {locations[currentIndex].country}
                    </p>
                    <p className={styles.locationDescription}>
                      {locations[currentIndex].description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className={`${styles.navButton} ${styles.navButtonPrev}`}
            aria-label="Previous location"
          >
            <svg className={styles.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className={`${styles.navButton} ${styles.navButtonNext}`}
            aria-label="Next location"
          >
            <svg className={styles.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className={styles.dotsContainer}>
            {locations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                aria-label={`Go to location ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.quoteSection}
        >
          <HandwrittenNote author="The unique optique Team" className={styles.handwrittenNote}>
            We don't just sell glasses. We craft legendary vision. SHITTIN ME 🔥
          </HandwrittenNote>
        </motion.div>
      </div>
    </section>
  );
};
