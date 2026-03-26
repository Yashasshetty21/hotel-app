'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const ImageWithFallback = ({ src, alt, className, ...props }: { src: string; alt: string; className?: string; [key: string]: any }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      // Fallback to a placeholder
      setImgSrc(`https://via.placeholder.com/600x400/6366f1/ffffff?text=${encodeURIComponent(alt)}`);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default function Dining() {
  const restaurants = [
    { 
      name: "The Gourmet", 
      cuisine: "French Fine Dining",
      rating: "⭐⭐⭐⭐⭐ Michelin 2-Star",
      description: "Exquisite French cuisine prepared by our world-renowned executive chef",
      image: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      hours: "5:00 PM - 11:00 PM"
    },
    { 
      name: "Café Lounge", 
      cuisine: "International Contemporary",
      rating: "⭐⭐⭐⭐ Fine Casual",
      description: "Modern international cuisine with live entertainment and sophisticated ambiance",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      hours: "6:00 AM - 11:00 PM"
    },
    { 
      name: "Poolside Bar", 
      cuisine: "Cocktails & Appetizers",
      rating: "⭐⭐⭐⭐ Tropical Paradise",
      description: "Craft cocktails and light bites with panoramic views of the infinity pool",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      hours: "2:00 PM - Midnight"
    }
  ];

  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            🍽️ Culinary Excellence
          </motion.h1>
          <p className="text-xl text-gray-300">Discover world-class dining experiences</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -15 }}
              className="rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 bg-white">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">{restaurant.name}</h2>
                <p className="text-gold-500 font-semibold mb-2">{restaurant.cuisine}</p>
                <p className="text-sm text-gray-600 mb-4">{restaurant.rating}</p>
                <p className="text-gray-700 mb-4">{restaurant.description}</p>
                <p className="text-sm text-gray-500 mb-6">⏰ {restaurant.hours}</p>
                <Link href="/booking" className="block bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black px-4 py-3 rounded-lg font-bold text-center transition duration-300 transform hover:scale-105">
                  Make Reservation
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Exceptional Culinary Journey</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">From casual dining to fine cuisine, our restaurants offer unforgettable gastronomic experiences</p>
          <Link href="/contact" className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold transition duration-300">
            Contact for Special Events
          </Link>
        </div>
      </section>
    </main>
  );
}