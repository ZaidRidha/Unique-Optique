"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND_INFO, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { GraffitiText } from "@/components/artistic/GraffitiText";
import { BrushStroke } from "@/components/artistic/BrushStroke";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Decorative Brush Stroke */}
      <BrushStroke
        className={styles.decorativeBrush}
        color="var(--color-neon-pink)"
      />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <GraffitiText variant="gold" className={styles.brandTitle}>
              UNIQUE OPTIQUE
            </GraffitiText>
            <p className={styles.brandText}>
              Manhattan's premier luxury eyewear destination. Where legends come to see clearly.
            </p>
            <div className={styles.socialIcons}>
              <SocialIcon href={SOCIAL_LINKS.instagram} icon={Instagram} />
              <SocialIcon href={SOCIAL_LINKS.facebook} icon={Facebook} />
              <SocialIcon href={SOCIAL_LINKS.twitter} icon={Twitter} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.sectionTitle}>
              Navigate
            </h3>
            <ul className={styles.linksList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={styles.footerLink}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={styles.sectionTitle}>
              Contact
            </h3>
            <ul className={styles.linksList}>
              <li>
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className={styles.contactItem}
                >
                  <Phone className={styles.contactIcon} />
                  <span>{BRAND_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className={styles.contactItem}
                >
                  <Mail className={styles.contactIcon} />
                  <span>{BRAND_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BRAND_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItemStart}
                >
                  <MapPin className={styles.contactIconMargin} />
                  <span>{BRAND_INFO.address}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={styles.sectionTitle}>
              VIP List
            </h3>
            <p className={styles.newsletterText}>
              Join for exclusive drops and celebrity sightings
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Your email"
                className={styles.emailInput}
              />
              <Button variant="spray" size="sm" className={styles.fullWidth}>
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Store Hours */}
        <div className={styles.storeHours}>
          <div className={styles.storeHoursContent}>
            <h4 className={styles.storeHoursTitle}>
              Store Hours
            </h4>
            <div className={styles.hoursGrid}>
              <p>Mon-Fri: {BRAND_INFO.hours.weekday}</p>
              <p>Saturday: {BRAND_INFO.hours.saturday}</p>
              <p>Sunday: {BRAND_INFO.hours.sunday}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyrightText}>
            © {currentYear} {BRAND_INFO.name}. All rights reserved.
          </p>
          <p className={styles.tagline}>
            Where Legends See Clearly ✨
          </p>
        </div>
      </div>

      {/* Decorative spray paint splatter */}
      <div className={styles.decorativeSplatter}>
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
      className={styles.socialIcon}
      whileHover={{ scale: 1.1, rotate: 360 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Icon style={{ width: '1.25rem', height: '1.25rem' }} />
    </motion.a>
  );
};
