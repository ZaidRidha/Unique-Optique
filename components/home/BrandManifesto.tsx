"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HandwrittenNote } from "@/components/artistic/HandwrittenNote";
import { fadeInUp } from "@/lib/animations";
import Image from "next/image";

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
    <section className="relative py-32 overflow-hidden w-full flex flex-col items-center" style={{ marginTop: '100px' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--color-concrete)]/5 to-black" />

      <div className="w-full max-w-6xl px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-5xl md:text-7xl text-[var(--color-gold)] mb-4 tracking-wider">
            OUR LOCATIONS
          </h2>
          <p className="font-display text-xl md:text-2xl text-[var(--color-offwhite)] italic">
            Three iconic cities. One legendary vision.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative w-full max-w-4xl mx-auto mb-12">
          <div className="relative aspect-[16/10] rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={locations[currentIndex].image}
                  alt={locations[currentIndex].city}
                  fill
                  className="object-cover"
                  style={{ filter: 'brightness(0.8) contrast(1.1)' }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Location info */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="font-display text-4xl md:text-6xl text-[var(--color-gold)] mb-2 tracking-wide">
                      {locations[currentIndex].city}
                    </h3>
                    <p className="font-display text-lg md:text-xl text-[var(--color-offwhite)] mb-2">
                      {locations[currentIndex].country}
                    </p>
                    <p className="font-grotesk text-base md:text-lg text-[var(--color-concrete)] italic">
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
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border-2 border-[var(--color-gold)] flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-black transition-all group z-10"
            aria-label="Previous location"
          >
            <svg className="w-6 h-6 text-[var(--color-gold)] group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border-2 border-[var(--color-gold)] flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-black transition-all group z-10"
            aria-label="Next location"
          >
            <svg className="w-6 h-6 text-[var(--color-gold)] group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mt-6">
            {locations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-[var(--color-gold)] w-8'
                    : 'bg-[var(--color-concrete)]/30 hover:bg-[var(--color-concrete)]/50'
                }`}
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
          className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12"
        >
          <HandwrittenNote author="The unique optique Team">
            We don't just sell glasses. We craft legendary vision. 🔥
          </HandwrittenNote>
        </motion.div>
      </div>
    </section>
  );
};
