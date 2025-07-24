"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export function Gallery() {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGalleryImages = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const placeholderImages = [
        "/api/placeholder/400/600?text=Portfolio+1",
        "/api/placeholder/400/600?text=Portfolio+2", 
        "/api/placeholder/400/600?text=Portfolio+3",
        "/api/placeholder/400/600?text=Portfolio+4",
        "/api/placeholder/400/600?text=Portfolio+5",
        "/api/placeholder/400/600?text=Portfolio+6",
      ];
      
      setImages(placeholderImages);
      setLoading(false);
    };

    loadGalleryImages();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Gallery</h2>
            <p className="text-xl text-gray-600">Loading beautiful moments...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="aspect-[3/4] bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Portfolio Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into the beautiful and empowering moments captured during our boudoir sessions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <Image
                src={src}
                alt={`Boudoir photography sample ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to create your own beautiful memories?
          </p>
          <a
            href="/contact"
            className="bg-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors"
          >
            Book Your Session
          </a>
        </div>
      </div>
    </section>
  );
}
