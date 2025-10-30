import { GraffitiText } from "@/components/artistic/GraffitiText";
import { Button } from "@/components/ui/Button";
import { BRAND_INFO } from "@/lib/constants";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function VisitPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <GraffitiText
            variant="electric-blue"
            className="text-5xl md:text-7xl mb-6"
          >
            VISIT US
          </GraffitiText>
          <p className="font-display text-2xl text-[var(--color-concrete)] italic">
            Experience luxury eyewear in the heart of Manhattan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="p-8 border-2 border-[var(--color-gold)]/30 rounded-lg">
              <h3 className="font-street text-[var(--color-gold)] text-2xl uppercase mb-6">
                Contact Info
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[var(--color-gold)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-grotesk text-[var(--color-offwhite)] text-lg mb-2">
                      {BRAND_INFO.address}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(
                          BRAND_INFO.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-[var(--color-gold)] flex-shrink-0" />
                  <a
                    href={`tel:${BRAND_INFO.phone}`}
                    className="font-street text-[var(--color-neon-pink)] text-xl hover:text-[var(--color-gold)] transition-colors"
                  >
                    {BRAND_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-[var(--color-gold)] flex-shrink-0" />
                  <a
                    href={`mailto:${BRAND_INFO.email}`}
                    className="font-grotesk text-[var(--color-offwhite)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Store Hours */}
            <div className="p-8 border-2 border-[var(--color-neon-pink)]/30 rounded-lg">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-[var(--color-neon-pink)]" />
                <h3 className="font-street text-[var(--color-neon-pink)] text-2xl uppercase">
                  Store Hours
                </h3>
              </div>

              <div className="space-y-3 font-grotesk text-[var(--color-concrete)]">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-[var(--color-offwhite)]">
                    {BRAND_INFO.hours.weekday}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-[var(--color-offwhite)]">
                    {BRAND_INFO.hours.saturday}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-[var(--color-offwhite)]">
                    {BRAND_INFO.hours.sunday}
                  </span>
                </div>
              </div>
            </div>

            {/* Book Appointment */}
            <div className="p-8 bg-gradient-to-r from-[var(--color-gold)]/10 to-transparent rounded-lg">
              <h3 className="font-display text-2xl text-[var(--color-gold)] mb-4 italic">
                Book a Private Fitting
              </h3>
              <p className="font-grotesk text-[var(--color-concrete)] mb-6">
                Get personalized attention from our expert opticians. Book your
                exclusive appointment today.
              </p>
              <Button variant="gold" size="lg" asChild>
                <a href={`tel:${BRAND_INFO.phone}`}>Call to Book</a>
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-[600px] bg-[var(--color-concrete)]/10 rounded-lg border-2 border-[var(--color-gold)]/30 flex items-center justify-center relative overflow-hidden">
            <div className="text-center z-10">
              <MapPin className="w-16 h-16 text-[var(--color-gold)] mx-auto mb-4" />
              <p className="font-street text-[var(--color-gold)] text-2xl uppercase">
                3268 Broadway
              </p>
              <p className="font-grotesk text-[var(--color-concrete)] mt-2">
                Manhattan, New York
              </p>
            </div>

            {/* Decorative grid */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%">
                <defs>
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
