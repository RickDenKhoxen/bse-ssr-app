"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What should I expect during my boudoir session?",
      answer: "Your session will be a comfortable, empowering experience in a private studio setting. We'll start with a consultation to discuss your vision, followed by hair and makeup (if selected), and then the photography session itself. I'll guide you through poses and help you feel confident throughout the entire process."
    },
    {
      question: "What should I bring to my session?",
      answer: "Bring a variety of outfits that make you feel confident - lingerie, robes, oversized sweaters, or anything that represents your personal style. I'll provide a detailed preparation guide with specific recommendations based on your chosen session type."
    },
    {
      question: "How long does a typical session last?",
      answer: "Most sessions last between 2-3 hours, including time for outfit changes and different setups. This allows us to create a variety of looks and ensures you feel relaxed and comfortable throughout the experience."
    },
    {
      question: "When will I receive my photos?",
      answer: "You'll receive a preview gallery within 48 hours of your session, and your complete edited gallery will be ready within 2-3 weeks. Rush delivery options are available if needed."
    },
    {
      question: "Are my photos private and secure?",
      answer: "Absolutely. Your privacy is my top priority. All photos are stored securely, and I never share images without your explicit written consent. You have complete control over how your images are used."
    },
    {
      question: "Do you offer hair and makeup services?",
      answer: "Yes! I work with talented hair and makeup artists who specialize in boudoir photography. This service can be added to any session package and is highly recommended for the best results."
    },
    {
      question: "What if I'm nervous or uncomfortable?",
      answer: "It's completely normal to feel nervous - most clients do! I specialize in creating a comfortable, supportive environment. We'll take breaks as needed, and I'll guide you through everything step by step. Many clients tell me they felt much more confident by the end of their session."
    },
    {
      question: "What are your pricing packages?",
      answer: "I offer several packages to fit different needs and budgets, starting at $500. Each package includes the photography session, professional editing, and a digital gallery. Additional services like hair/makeup, prints, and albums are available. Contact me for detailed pricing information."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg">
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-semibold text-gray-900">{faq.question}</span>
            <svg
              className={`w-5 h-5 text-gray-500 transform transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
