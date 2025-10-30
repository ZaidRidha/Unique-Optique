import { CelebrityPolaroid } from "@/components/celebrities/CelebrityPolaroid";
import { GraffitiText } from "@/components/artistic/GraffitiText";
import { CELEBRITIES } from "@/lib/constants";

export default function CelebritiesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4 relative overflow-hidden">
      {/* Brick wall texture background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-concrete)]/5 via-black to-black" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <GraffitiText
            variant="neon-pink"
            className="text-5xl md:text-7xl mb-6"
          >
            CELEBRITY WALL
          </GraffitiText>
          <p className="font-marker text-[var(--color-gold)] text-3xl rotate-[-2deg]">
            Where Legends See Clearly ✨
          </p>
          <p className="font-grotesk text-[var(--color-concrete)] mt-4 text-lg">
            From Hollywood stars to hip-hop icons - they all trust unique optique
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
      </div>

      {/* Decorative graffiti elements */}
      <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="var(--color-electric-blue)" />
          <circle cx="30" cy="30" r="20" fill="var(--color-neon-pink)" />
        </svg>
      </div>
    </div>
  );
}
