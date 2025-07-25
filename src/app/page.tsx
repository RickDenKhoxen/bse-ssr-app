import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Boudoir Shoot Ellen - Professional Boudoir Photography",
  description: "Professional boudoir photography services by Ellen. Elegant, intimate, and empowering photography sessions in a comfortable and private setting.",
  keywords: "boudoir photography, professional photographer, intimate photography, portrait photography, Ellen photographer, elegant photography, home page",
  openGraph: {
    title: "Boudoir Shoot Ellen - Professional Boudoir Photography",
    description: "Professional boudoir photography services by Ellen. Elegant, intimate, and empowering photography sessions.",
    type: "website",
    locale: "en_US",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
