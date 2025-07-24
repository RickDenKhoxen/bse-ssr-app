import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "FAQ - Boudoir Shoot Ellen | Frequently Asked Questions",
  description: "Find answers to frequently asked questions about boudoir photography sessions with Ellen. Learn about pricing, preparation, what to expect, and more.",
  keywords: "boudoir photography FAQ, photography questions, session preparation, pricing, what to expect, Ellen photographer",
  openGraph: {
    title: "FAQ - Boudoir Shoot Ellen",
    description: "Find answers to frequently asked questions about boudoir photography sessions with Ellen.",
    type: "website",
    locale: "en_US",
  },
};

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about your boudoir photography session with Ellen
            </p>
          </div>
          <FAQSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
