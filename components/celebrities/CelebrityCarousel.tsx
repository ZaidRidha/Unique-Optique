"use client";

import React, { useState, useEffect } from "react";
import { Celebrity } from "@/lib/constants";
import { CelebrityPolaroid } from "./CelebrityPolaroid";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./CelebrityCarousel.module.css";

interface CelebrityCarouselProps {
  celebrities: Celebrity[];
}

export const CelebrityCarousel: React.FC<CelebrityCarouselProps> = ({
  celebrities,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Create an extended array with duplicates for infinite loop effect
  const extendedCelebrities = [
    ...celebrities.slice(-3), // Last 3 at the start
    ...celebrities,
    ...celebrities.slice(0, 3), // First 3 at the end
  ];

  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Handle infinite loop by resetting position when reaching clones
  useEffect(() => {
    if (currentIndex === celebrities.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);
    } else if (currentIndex === -1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(celebrities.length - 1);
      }, 500);
    }
  }, [currentIndex, celebrities.length]);

  return (
    <div className={styles.carouselWrapper}>
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className={`${styles.navButton} ${styles.navButtonPrev}`}
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className={`${styles.navButton} ${styles.navButtonNext}`}
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Content */}
      <div className={styles.carouselContent}>
        <div
          className={`${styles.carouselTrack} ${isTransitioning ? styles.carouselTrackTransition : ''}`}
          style={{
            transform: `translateX(calc(-${(currentIndex + 3) * (100 / 3)}% - ${(currentIndex + 3) * 2}rem))`,
          }}
        >
          {extendedCelebrities.map((celebrity, index) => (
            <div key={`${celebrity.id}-${index}`} className={styles.carouselSlide}>
              <CelebrityPolaroid
                celebrity={celebrity}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className={styles.dotsContainer}>
        {celebrities.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setCurrentIndex(index);
            }}
            className={`${styles.dot} ${
              index === currentIndex % celebrities.length ? styles.dotActive : ''
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
