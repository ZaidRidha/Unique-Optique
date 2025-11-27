import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: "unique optique | Manhattan's Premier Luxury Eyewear Destination",
  description: "Where legends see clearly. Celebrity-favorite optical boutique in Manhattan featuring exclusive designer eyewear from Cartier, DITA, Oliver Peoples & more.",
  keywords: ["luxury eyewear", "designer sunglasses", "Manhattan optician", "celebrity eyewear", "Cartier glasses", "DITA sunglasses"],
  authors: [{ name: "unique optique" }],
  openGraph: {
    title: "unique optique | Where Legends See Clearly",
    description: "Manhattan's premier luxury eyewear destination",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <SmoothScroll>
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
