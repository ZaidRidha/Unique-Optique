"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Phone, MapPin } from "lucide-react";
import { menuOverlay, menuContainer, menuItem } from "@/lib/animations";
import { NAV_LINKS, BRAND_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { GraffitiText } from "@/components/artistic/GraffitiText";

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100]"
            variants={menuOverlay}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={onClose}
          />

          {/* Menu Content */}
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-full lg:w-1/2 bg-black border-l-2 border-[var(--color-gold)] z-[101] overflow-y-auto"
            variants={menuContainer}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <div className="p-12 lg:p-16">
              {/* Brand Name with Graffiti Style */}
              <motion.div
                className="mb-12"
                custom={0}
                variants={menuItem}
                initial="initial"
                animate="animate"
              >
                <GraffitiText variant="gold" className="text-4xl lg:text-5xl">
                  UNIQUE OPTIQUE
                </GraffitiText>
              </motion.div>

              {/* Navigation Links */}
              <nav className="space-y-6 mb-12">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    custom={index + 1}
                    variants={menuItem}
                    initial="initial"
                    animate="animate"
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group block"
                    >
                      <motion.div
                        className="flex items-center space-x-4"
                        whileHover={{ x: 20 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-[var(--color-neon-pink)] font-street text-2xl lg:text-3xl uppercase group-hover:text-[var(--color-gold)] transition-colors">
                          {link.name}
                        </span>
                        <motion.div
                          className="w-0 h-0.5 bg-[var(--color-gold)] group-hover:w-12 transition-all duration-300"
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Divider */}
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mb-12"
                custom={NAV_LINKS.length + 1}
                variants={menuItem}
                initial="initial"
                animate="animate"
              />

              {/* Contact Information */}
              <motion.div
                className="space-y-6"
                custom={NAV_LINKS.length + 2}
                variants={menuItem}
                initial="initial"
                animate="animate"
              >
                <h3 className="font-display text-xl text-[var(--color-gold)] mb-4">
                  Visit Us
                </h3>

                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center space-x-3 text-foreground hover:text-[var(--color-gold)] transition-colors group"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-grotesk">{BRAND_INFO.phone}</span>
                </a>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BRAND_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-foreground hover:text-[var(--color-gold)] transition-colors group"
                >
                  <MapPin className="w-5 h-5 mt-1" />
                  <span className="font-grotesk">{BRAND_INFO.address}</span>
                </a>

                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-foreground hover:text-[var(--color-neon-pink)] transition-colors group"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="font-grotesk">{BRAND_INFO.instagram}</span>
                </a>
              </motion.div>

              {/* Hours */}
              <motion.div
                className="mt-8 p-6 border-2 border-[var(--color-gold)]/20 rounded-lg"
                custom={NAV_LINKS.length + 3}
                variants={menuItem}
                initial="initial"
                animate="animate"
              >
                <h4 className="font-street text-[var(--color-electric-blue)] uppercase text-sm mb-3">
                  Store Hours
                </h4>
                <div className="space-y-2 text-sm font-grotesk text-[var(--color-concrete)]">
                  <p>Mon-Fri: {BRAND_INFO.hours.weekday}</p>
                  <p>Saturday: {BRAND_INFO.hours.saturday}</p>
                  <p>Sunday: {BRAND_INFO.hours.sunday}</p>
                </div>
              </motion.div>

              {/* Tagline */}
              <motion.div
                className="mt-12 text-center"
                custom={NAV_LINKS.length + 4}
                variants={menuItem}
                initial="initial"
                animate="animate"
              >
                <p className="font-marker text-[var(--color-gold)] text-lg rotate-[-2deg]">
                  {BRAND_INFO.tagline}
                </p>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="var(--color-neon-pink)" />
                <circle cx="30" cy="30" r="20" fill="var(--color-electric-blue)" />
              </svg>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
