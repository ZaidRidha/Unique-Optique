import { HeroCarousel } from "@/components/home/HeroCarousel";
import { CelebrityTicker } from "@/components/home/CelebrityTicker";
import { BrandManifesto } from "@/components/home/BrandManifesto";
import { ProductCard } from "@/components/products/ProductCard";
import { CelebrityPolaroid } from "@/components/celebrities/CelebrityPolaroid";
import { GraffitiText } from "@/components/artistic/GraffitiText";
import { Button } from "@/components/ui/Button";
import { PRODUCTS, CELEBRITIES, COLLECTIONS } from "@/lib/constants";
import Link from "next/link";

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
      <section className="py-32 px-4 bg-gradient-to-b from-black to-[var(--color-concrete)]/10 flex justify-center" style={{ marginTop: '120px' }}>
        <div className="w-full max-w-7xl">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="gold" size="lg" asChild>
              <Link href="/collections">View All Collections</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Celebrity Wall Preview */}
      <section className="py-32 px-4 relative overflow-hidden flex justify-center" style={{ marginTop: '120px' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-concrete)]/10 to-black" />

        <div className="w-full max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <GraffitiText
              variant="neon-pink"
              className="text-4xl md:text-6xl mb-4"
            >
              WALL OF FAME
            </GraffitiText>
            <p className="font-marker text-[var(--color-gold)] text-2xl rotate-[-1deg]">
              Spotted at unique optique ✨
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {CELEBRITIES.map((celebrity, index) => (
              <CelebrityPolaroid
                key={celebrity.id}
                celebrity={celebrity}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="spray" size="lg" asChild>
              <Link href="/celebrities">See All Celebrities</Link>
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-10 pointer-events-none">
          <svg width="150" height="150" viewBox="0 0 100 100">
            <path
              d="M 50 10 L 55 35 L 80 35 L 60 50 L 67.5 75 L 50 60 L 32.5 75 L 40 50 L 20 35 L 45 35 Z"
              fill="var(--color-gold)"
            />
          </svg>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-32 px-4 bg-gradient-to-r from-black via-[var(--color-gold)]/10 to-black border-y-2 border-[var(--color-gold)] flex justify-center" style={{ marginTop: '120px' }}>
        <div className="w-full max-w-4xl text-center">
          <GraffitiText
            variant="gold"
            className="text-4xl md:text-6xl mb-8"
          >
            EXPERIENCE THE LEGEND
          </GraffitiText>

          <p className="font-display text-2xl text-[var(--color-offwhite)] mb-4 italic">
            Visit our Manhattan boutique
          </p>

          <p className="font-grotesk text-xl text-[var(--color-concrete)] mb-8">
            3268 Broadway, Manhattan, NY
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
