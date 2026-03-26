'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Rooms() {
  const rooms = [
    { 
      name: "Standard Room", 
      price: "$149",
      night: "/night",
      features: ["Comfortable double bed", "Modern ensuite bathroom", "High-speed WiFi", "Flat-screen TV", "Mini fridge & coffee maker"],
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&h=500&fit=crop",
      rating: "⭐⭐⭐⭐"
    },
    { 
      name: "Executive Room", 
      price: "$249",
      night: "/night",
      features: ["Premium queen bed", "Work desk & ergonomic chair", "Marble bathroom", "Bathrobe & slippers", "Premium toiletries"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&h=500&fit=crop",
      rating: "⭐⭐⭐⭐⭐",
      featured: false
    },
    { 
      name: "Deluxe Suite", 
      price: "$399",
      night: "/night",
      features: ["King bed & living area", "Panoramic city views", "Luxury spa bath", "Personal concierge", "Premium minibar & more"],
      image: "https://images.unsplash.com/photo-1578751518677-feadb594f300?w=700&h=500&fit=crop",
      rating: "⭐⭐⭐⭐⭐",
      featured: true
    }
  ];

  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Our Rooms
          </motion.h1>
          <p className="text-xl text-gray-300">Discover luxury accommodations for every need</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`rounded-2xl overflow-hidden shadow-xl transition duration-300 group ${
                room.featured ? 'md:col-span-1 md:row-span-2 md:scale-105 md:shadow-2xl' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                {room.featured && (
                  <div className="absolute top-4 right-4 bg-gold-500 text-black px-4 py-2 rounded-full font-bold">Most Popular</div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 bg-white flex flex-col h-full">
                <div className="mb-4">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">{room.name}</h2>
                  <div className="text-lg text-gold-500 mb-3">{room.rating}</div>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">{room.price}</span>
                  <span className="text-gray-600">{room.night}</span>
                </div>

                <ul className="mb-8 flex-grow space-y-3">
                  {room.features.map((feature, i) => (
                    <li key={i} className="text-gray-700 flex items-start">
                      <span className="text-gold-500 mr-3 text-lg">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/booking" className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black px-6 py-3 rounded-lg font-bold transition duration-300 text-center transform hover:scale-105">
                  Reserve Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}