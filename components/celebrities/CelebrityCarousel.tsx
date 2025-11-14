"use client";

import React, { useState } from "react";
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % celebrities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + celebrities.length) % celebrities.length);
  };

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
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {celebrities.map((celebrity, index) => (
            <div key={celebrity.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
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
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
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
