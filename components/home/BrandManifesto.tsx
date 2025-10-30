"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraffitiText } from "@/components/artistic/GraffitiText";
import { HandwrittenNote } from "@/components/artistic/HandwrittenNote";
import { BrushStroke } from "@/components/artistic/BrushStroke";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export const BrandManifesto: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden w-full flex justify-center" style={{ marginTop: '100px' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[var(--color-concrete)]/5 to-black" />

      <BrushStroke
        className="absolute top-1/4 left-0 w-96 opacity-20"
        color="var(--color-electric-blue)"
      />

      <div className="w-full max-w-6xl px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Main Statement */}
          <motion.div variants={staggerItem} className="text-center">
            <GraffitiText
              variant="neon-pink"
              className="text-4xl md:text-6xl lg:text-7xl mb-8"
            >
              WHERE HIP-HOP MEETS HIGH FASHION
            </GraffitiText>

            <p className="font-display text-2xl md:text-3xl text-[var(--color-offwhite)] max-w-4xl mx-auto italic leading-relaxed">
              For over 30 years, we've been the go-to optical destination for
              NYC's elite, celebrities, and visionaries.
            </p>
          </motion.div>

          {/* Three Pillars */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            <Pillar
              number="01"
              title="Celebrity Approved"
              description="From Danny DeVito to Jim Jones, legends trust us with their vision."
              color="gold"
            />
            <Pillar
              number="02"
              title="Expert Fitting"
              description="30+ years of optical precision meets personalized style consultation."
              color="neon-pink"
            />
            <Pillar
              number="03"
              title="Exclusive Selection"
              description="Curated luxury eyewear from Cartier, DITA, Oliver Peoples & more."
              color="electric-blue"
            />
          </motion.div>

          {/* Quote Section */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mt-20"
          >
            <HandwrittenNote author="The unique optique Team">
              We don't just sell glasses. We craft legendary vision. 🔥
            </HandwrittenNote>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            <Stat number="30+" label="Years in Business" />
            <Stat number="1000+" label="Celebrity Clients" />
            <Stat number="50+" label="Luxury Brands" />
            <Stat number="★ 5.0" label="Google Rating" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Spray Paint Splatter */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="var(--color-lime-green)" />
          <circle cx="140" cy="120" r="40" fill="var(--color-neon-pink)" />
        </svg>
      </div>
    </section>
  );
};

const Pillar: React.FC<{
  number: string;
  title: string;
  description: string;
  color: "gold" | "neon-pink" | "electric-blue";
}> = ({ number, title, description, color }) => {
  const colors = {
    gold: "var(--color-gold)",
    "neon-pink": "var(--color-neon-pink)",
    "electric-blue": "var(--color-electric-blue)",
  };

  return (
    <motion.div
      variants={staggerItem}
      className="relative p-8 border-2 border-[var(--color-concrete)]/20 rounded-lg hover:border-[var(--color-gold)] transition-all group"
      whileHover={{ y: -10 }}
    >
      <div
        className="font-street text-6xl opacity-20 mb-4"
        style={{ color: colors[color] }}
      >
        {number}
      </div>

      <h3
        className="font-street text-2xl uppercase mb-3 tracking-wide"
        style={{ color: colors[color] }}
      >
        {title}
      </h3>

      <p className="font-grotesk text-[var(--color-concrete)] leading-relaxed">
        {description}
      </p>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 border-2 opacity-0 group-hover:opacity-100 pointer-events-none rounded-lg"
        style={{ borderColor: colors[color], filter: "blur(4px)" }}
      />
    </motion.div>
  );
};

const Stat: React.FC<{ number: string; label: string }> = ({ number, label }) => {
  return (
    <motion.div
      variants={staggerItem}
      className="text-center p-6 border border-[var(--color-gold)]/30 rounded-lg"
      whileHover={{ scale: 1.05 }}
    >
      <div className="font-display text-4xl md:text-5xl text-[var(--color-gold)] mb-2">
        {number}
      </div>
      <div className="font-grotesk text-sm text-[var(--color-concrete)] uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
};
