import { GraffitiText } from "@/components/artistic/GraffitiText";

export default function JournalPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <GraffitiText
          variant="electric-blue"
          className="text-5xl md:text-7xl mb-6"
        >
          JOURNAL
        </GraffitiText>
        <p className="font-display text-2xl text-[var(--color-concrete)] italic">
          Culture & style stories coming soon
        </p>
      </div>
    </div>
  );
}
