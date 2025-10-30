"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND_INFO, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GraffitiText } from "@/components/artistic/GraffitiText";
import { BrushStroke } from "@/components/artistic/BrushStroke";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t-2 border-[var(--color-gold)] mt-24 overflow-hidden">
      {/* Decorative Brush Stroke */}
      <BrushStroke
        className="absolute top-0 left-1/4 w-64 opacity-20"
        color="var(--color-neon-pink)"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <GraffitiText variant="gold" className="text-2xl">
              UNIQUE OPTIQUE
            </GraffitiText>
            <p className="text-[var(--color-concrete)] font-grotesk text-sm leading-relaxed">
              Manhattan's premier luxury eyewear destination. Where legends come to see clearly.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href={SOCIAL_LINKS.instagram} icon={Instagram} />
              <SocialIcon href={SOCIAL_LINKS.facebook} icon={Facebook} />
              <SocialIcon href={SOCIAL_LINKS.twitter} icon={Twitter} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-street text-[var(--color-gold)] uppercase text-sm mb-4">
              Navigate
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-concrete)] hover:text-[var(--color-gold)] transition-colors font-grotesk text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-street text-[var(--color-gold)] uppercase text-sm mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center space-x-2 text-[var(--color-concrete)] hover:text-[var(--color-gold)] transition-colors font-grotesk text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>{BRAND_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center space-x-2 text-[var(--color-concrete)] hover:text-[var(--color-gold)] transition-colors font-grotesk text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>{BRAND_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BRAND_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 text-[var(--color-concrete)] hover:text-[var(--color-gold)] transition-colors font-grotesk text-sm"
                >
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>{BRAND_INFO.address}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-street text-[var(--color-gold)] uppercase text-sm mb-4">
              VIP List
            </h3>
            <p className="text-[var(--color-concrete)] font-grotesk text-sm mb-4">
              Join for exclusive drops and celebrity sightings
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-[var(--color-concrete)]/10 border border-[var(--color-gold)]/30 rounded text-foreground placeholder:text-[var(--color-concrete)] focus:outline-none focus:border-[var(--color-gold)] transition-colors"
              />
              <Button variant="spray" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Store Hours */}
        <div className="border-t border-[var(--color-gold)]/20 pt-8 mb-8">
          <div className="text-center md:text-left">
            <h4 className="font-street text-[var(--color-electric-blue)] uppercase text-sm mb-3">
              Store Hours
            </h4>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 text-sm font-grotesk text-[var(--color-concrete)]">
              <p>Mon-Fri: {BRAND_INFO.hours.weekday}</p>
              <p>Saturday: {BRAND_INFO.hours.saturday}</p>
              <p>Sunday: {BRAND_INFO.hours.sunday}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-gold)]/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[var(--color-concrete)] font-grotesk text-sm">
            © {currentYear} {BRAND_INFO.name}. All rights reserved.
          </p>
          <p className="font-marker text-[var(--color-gold)] text-sm rotate-[-1deg]">
            Where Legends See Clearly ✨
          </p>
        </div>
      </div>

      {/* Decorative spray paint splatter */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" fill="var(--color-neon-pink)" />
          <circle cx="140" cy="120" r="40" fill="var(--color-electric-blue)" />
          <circle cx="80" cy="130" r="30" fill="var(--color-lime-green)" />
        </svg>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{
  href: string;
  icon: React.ElementType;
}> = ({ href, icon: Icon }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center border-2 border-[var(--color-gold)]/30 rounded-full text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black transition-all"
      whileHover={{ scale: 1.1, rotate: 360 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
};
