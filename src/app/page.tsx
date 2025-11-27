"use client";

import { HeroCarousel } from "@/components/home/HeroCarousel";
import { CelebrityTicker } from "@/components/home/CelebrityTicker";
import { BrandManifesto } from "@/components/home/BrandManifesto";
import { ProductCard } from "@/components/products/ProductCard";
import { CelebrityCarousel } from "@/components/celebrities/CelebrityCarousel";
import { GraffitiText } from "@/components/artistic/GraffitiText";
import { Button } from "@/components/ui/Button";
import { PRODUCTS, CELEBRITIES, COLLECTIONS } from "@/lib/constants";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./home.module.css";
import wallOfFameStyles from "./WallOfFame.module.css";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroCarousel />

      {/* Celebrity Ticker */}
      <CelebrityTicker />

      {/* Brand Manifesto */}
      <BrandManifesto />

      {/* Featured Collections */}
      <section className="pt-32 pb-48 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-black to-[var(--color-concrete)]/10 flex justify-center overflow-visible" style={{ marginTop: '120px' }}>
        <div className="w-full mx-auto" style={{ maxWidth: '1600px' }}>
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <GraffitiText
              variant="electric-blue"
              className="text-4xl md:text-6xl mb-4"
            >
              FEATURED COLLECTIONS
            </GraffitiText>
            <p className="font-display text-xl text-[var(--color-concrete)] italic">
              Curated selections for discerning tastes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '2rem', justifyItems: 'center', marginBottom: '60px' }}>
            {PRODUCTS.slice(0, 4).map((product) => (
              <div key={product.id} style={{ width: '100%', maxWidth: '350px' }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center pb-24 relative z-10">
            <Button variant="gold" size="xl" asChild>
              <Link href="/collections">View All Collections</Link>
            </Button>
          </div>

          <div style={{ height: '100px' }}></div>
        </div>
      </section>

      {/* Celebrity Wall Preview */}
      <section className={wallOfFameStyles.wallOfFameSection}>
        <div className={wallOfFameStyles.backgroundOverlay} />

        <div className={wallOfFameStyles.container}>
          <div className={wallOfFameStyles.header}>
            <GraffitiText
              variant="neon-pink"
              className={wallOfFameStyles.title}
            >
              WALL OF FAME
            </GraffitiText>
            <p className={wallOfFameStyles.subtitle}>
              Spotted at unique optique ✨
            </p>
          </div>

          <CelebrityCarousel celebrities={CELEBRITIES} />

          <div className={wallOfFameStyles.buttonContainer}>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.8), 0 8px 30px rgba(0, 0, 0, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              onClick={() => window.location.href = '/celebrities'}
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
              See All Celebrities
            </motion.button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className={wallOfFameStyles.decorativeElement}>
          <svg width="150" height="150" viewBox="0 0 100 100">
            <path
              d="M 50 10 L 55 35 L 80 35 L 60 50 L 67.5 75 L 50 60 L 32.5 75 L 40 50 L 20 35 L 45 35 Z"
              fill="var(--color-gold)"
            />
          </svg>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className={styles.visitCta}>
        <div className={styles.visitCtaContainer}>
          <GraffitiText
            variant="gold"
            className={`text-4xl md:text-6xl ${styles.visitCtaTitle}`}
          >
            EXPERIENCE THE LEGEND
          </GraffitiText>

          <p className={styles.visitCtaSubtitle}>
            Visit our Manhattan boutique
          </p>

          <p className={styles.visitCtaAddress}>
            3268 Broadway, Manhattan, NY
          </p>

          <div className={styles.visitCtaButtons}>
            <Button variant="gold" size="xl" asChild>
              <Link href="/visit">Get Directions</Link>
            </Button>
            <Button variant="neon" size="xl" asChild>
              <a href="tel:212-581-2020">Call: 212-581-2020</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
