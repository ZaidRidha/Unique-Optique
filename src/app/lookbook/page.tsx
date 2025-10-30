import { GraffitiText } from "@/components/artistic/GraffitiText";

export default function LookbookPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <GraffitiText
          variant="lime-green"
          className="text-5xl md:text-7xl mb-6"
        >
          LOOKBOOK
        </GraffitiText>
        <p className="font-display text-2xl text-[var(--color-concrete)] italic">
          Visual storytelling coming soon
        </p>
      </div>
    </div>
  );
}
