import { GraffitiText } from "@/components/artistic/GraffitiText";
import { BrushStroke } from "@/components/artistic/BrushStroke";
import { HandwrittenNote } from "@/components/artistic/HandwrittenNote";
import { BRAND_INFO } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <GraffitiText
            variant="gold"
            className="text-5xl md:text-7xl mb-6"
          >
            OUR STORY
          </GraffitiText>
          <p className="font-display text-2xl text-[var(--color-offwhite)] italic">
            Where hip-hop meets high fashion
          </p>
        </div>

        <BrushStroke
          className="absolute top-1/4 right-0 w-96 opacity-20"
          color="var(--color-neon-pink)"
        />

        <div className="space-y-12 relative z-10">
          <section className="prose prose-invert max-w-none">
            <p className="font-grotesk text-xl text-[var(--color-concrete)] leading-relaxed">
              For over <span className="text-[var(--color-gold)] font-bold">30 years</span>,
              unique optique has been Manhattan's premier destination for luxury eyewear.
              Located in the heart of Broadway, we've built our reputation on serving
              celebrities, artists, and visionaries who demand the best.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="p-8 border-2 border-[var(--color-gold)]/30 rounded-lg">
              <h3 className="font-street text-[var(--color-gold)] text-2xl uppercase mb-4">
                Our Mission
              </h3>
              <p className="font-grotesk text-[var(--color-concrete)] leading-relaxed">
                To provide exceptional eyewear and personalized service that matches
                the vision and style of our discerning clientele. We're not just selling
                glasses - we're crafting legendary looks.
              </p>
            </div>

            <div className="p-8 border-2 border-[var(--color-neon-pink)]/30 rounded-lg">
              <h3 className="font-street text-[var(--color-neon-pink)] text-2xl uppercase mb-4">
                Our Values
              </h3>
              <p className="font-grotesk text-[var(--color-concrete)] leading-relaxed">
                Excellence, authenticity, and cultural connection. We celebrate the
                intersection of luxury and urban culture, bringing together the finest
                optical craftsmanship with street art energy.
              </p>
            </div>
          </section>

          <section className="mt-16 text-center">
            <HandwrittenNote author="The unique optique Team">
              From Danny DeVito to Jim Jones, King Combs to the next legend -
              we're honored to be part of your story. 🔥
            </HandwrittenNote>
          </section>

          <section className="mt-16 text-center">
            <h3 className="font-display text-3xl text-[var(--color-gold)] mb-6 italic">
              Visit Us Today
            </h3>
            <p className="font-grotesk text-xl text-[var(--color-concrete)] mb-2">
              {BRAND_INFO.address}
            </p>
            <p className="font-street text-2xl text-[var(--color-neon-pink)]">
              {BRAND_INFO.phone}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
