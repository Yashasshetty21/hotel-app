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

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl px-4"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-6xl md:text-8xl font-light mb-4 text-gold-500"
            >
              ✨
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">Luxe Hotel</h1>
            <p className="text-xl md:text-2xl mb-2 text-gray-300">Experience Unparalleled Luxury</p>
            <p className="text-lg md:text-xl mb-8 text-gray-400">World-Class Amenities & Five-Star Service</p>
            <Link href="/booking" className="inline-block bg-gold-500 hover:bg-gold-600 text-black px-8 py-4 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 shadow-lg">
              Reserve Your Stay
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section with Images */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-6 text-slate-900"
          >
            Why Choose Luxe
          </motion.h2>
          <p className="text-center text-gray-600 text-xl max-w-2xl mx-auto mb-16">Discover the difference that five-star service and luxury accommodations can make</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Luxury Rooms", 
                desc: "Spacious suites with panoramic views",
                icon: "🏨",
                color: "from-blue-500 to-blue-600"
              },
              { 
                title: "Fine Dining", 
                desc: "Michelin-starred restaurants on site",
                icon: "🍽️",
                color: "from-gold-500 to-yellow-500"
              },
              { 
                title: "World-Class Amenities", 
                desc: "Spa, pool, and fitness facilities",
                icon: "🏊",
                color: "from-teal-500 to-cyan-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${feature.color} rounded-xl p-8 text-white shadow-xl transform transition duration-300 group-hover:shadow-2xl h-full`}>
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-100 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-16 text-slate-900"
          >
            Gallery
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Luxury Suite", src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
              { title: "Restaurant", src: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
              { title: "Spa Relaxation", src: "https://images.pexels.com/photos/3757946/pexels-photo-3757946.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
              { title: "Pool Area", src: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
              { title: "Lobby", src: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
              { title: "Conference Room", src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              >
                <ImageWithFallback
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-4">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Experience Luxury?
          </motion.h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Book your unforgettable stay with us today and discover world-class hospitality</p>
          <Link href="/booking" className="inline-block bg-gold-500 hover:bg-gold-600 text-black px-10 py-4 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 shadow-lg">
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}
