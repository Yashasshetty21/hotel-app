'use client';

import { motion } from 'framer-motion';
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

export default function Amenities() {
  const amenities = [
    { name: "🧖 Spa & Wellness", description: "Full-service spa with massage, facials, and wellness treatments", features: "Open 9 AM - 9 PM" },
    { name: "💪 Fitness Center", description: "State-of-the-art equipment and personal training available", features: "24/7 Access" },
    { name: "🏊 Swimming Pool", description: "Olympic-size indoor and tropical outdoor pools", features: "Open 7 AM - 11 PM" },
    { name: "🎧 Concierge Service", description: "24/7 personalized assistance for your needs", features: "Always Available" },
    { name: "💼 Business Center", description: "Fully equipped meeting rooms and office facilities", features: "Open 24/7" },
    { name: "🚗 Valet Parking", description: "Secure underground parking with valet service", features: "24/7 Service" },
    { name: "🎵 Entertainment", description: "Live music, events, and cultural performances", features: "Various Times" },
    { name: "📚 Library Lounge", description: "Quiet retreat with curated book collection", features: "Open Daily" }
  ];

  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            World-Class Amenities
          </motion.h1>
          <p className="text-xl text-gray-300">Everything you need for the ultimate luxury experience</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-white shadow-lg transform transition duration-300 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-3">{amenity.name}</h2>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{amenity.description}</p>
              <p className="text-gold-500 font-semibold text-sm">{amenity.features}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Experience Our Facilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Luxurious Spa", src: "https://images.pexels.com/photos/3757946/pexels-photo-3757946.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
              { title: "Modern Fitness", src: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
              { title: "Olympic Pool", src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
              { title: "Relaxation Area", src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-80 rounded-xl overflow-hidden shadow-lg group"
              >
                <ImageWithFallback
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-6">
                  <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}