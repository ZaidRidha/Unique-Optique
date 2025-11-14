"use client";

import React, { useState, useEffect } from "react";
import { Celebrity } from "@/lib/constants";
import { CelebrityPolaroid } from "./CelebrityPolaroid";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-[var(--color-gold)] hover:bg-[var(--color-gold)]/80 text-black p-3 rounded-full shadow-lg transition-all"
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-[var(--color-gold)] hover:bg-[var(--color-gold)]/80 text-black p-3 rounded-full shadow-lg transition-all"
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>

      {/* Carousel Content */}
      <div className="overflow-hidden px-12">
        <div
          className={`flex gap-8 ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{
            transform: `translateX(calc(-${(currentIndex + 3) * (100 / 3)}% - ${(currentIndex + 3) * 2}rem))`,
          }}
        >
          {extendedCelebrities.map((celebrity, index) => (
            <div key={`${celebrity.id}-${index}`} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
              <CelebrityPolaroid
                celebrity={celebrity}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {celebrities.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex % celebrities.length
                ? "bg-[var(--color-gold)] w-8"
                : "bg-[var(--color-concrete)]/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
