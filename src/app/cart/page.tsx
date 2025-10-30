import { GraffitiText } from "@/components/artistic/GraffitiText";
import { ShoppingCart } from "lucide-react";

export default function CartPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <GraffitiText
          variant="gold"
          className="text-5xl md:text-7xl mb-6"
        >
          YOUR CART
        </GraffitiText>

        <div className="mt-16 p-12 border-2 border-[var(--color-gold)]/30 rounded-lg">
          <ShoppingCart className="w-24 h-24 text-[var(--color-concrete)] mx-auto mb-6" />
          <p className="font-display text-2xl text-[var(--color-concrete)] italic">
            Your cart is empty
          </p>
          <p className="font-grotesk text-[var(--color-concrete)] mt-4">
            E-commerce functionality coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
