import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { ContactInfo } from "@/components/ContactInfo";

export const metadata: Metadata = {
  title: "Contact - Boudoir Shoot Ellen | Book Your Session",
  description: "Contact Ellen to book your boudoir photography session. Get in touch to discuss your vision, ask questions, and schedule your empowering photo experience.",
  keywords: "contact Ellen photographer, book boudoir session, photography consultation, schedule appointment, boudoir photography booking",
  openGraph: {
    title: "Contact - Boudoir Shoot Ellen",
    description: "Contact Ellen to book your boudoir photography session and discuss your vision.",
    type: "website",
    locale: "en_US",
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Ellen
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to book your boudoir session? Get in touch to discuss your vision and schedule your empowering photo experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
