import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Boudoir Shoot
          <span className="block text-pink-600">Ellen</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Elegant, intimate, and empowering photography sessions that celebrate your unique beauty and confidence
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors"
          >
            Book Your Session
          </Link>
          <Link
            href="/faq"
            className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-600 hover:text-white transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
