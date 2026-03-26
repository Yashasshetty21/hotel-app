'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Booking() {
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
            Reserve Your Stay
          </motion.h1>
          <p className="text-xl text-gray-300">Find the perfect room for your needs</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <form className="bg-white rounded-2xl shadow-2xl p-10 md:p-14">
            <h2 className="text-4xl font-bold text-slate-900 mb-10 text-center">Book Your Luxury Experience</h2>

            {/* Dates Row */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <label className="block text-gray-700 font-bold mb-3 text-lg">Check-in Date</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-500 focus:outline-none transition text-lg" 
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <label className="block text-gray-700 font-bold mb-3 text-lg">Check-out Date</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-500 focus:outline-none transition text-lg" 
                />
              </motion.div>
            </div>

            {/* Guests Row */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <label className="block text-gray-700 font-bold mb-3 text-lg">Adults</label>
                <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-500 focus:outline-none transition text-lg">
                  {[1,2,3,4,5].map(n => <option key={n}>{n}</option>)}
                </select>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <label className="block text-gray-700 font-bold mb-3 text-lg">Children</label>
                <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-500 focus:outline-none transition text-lg">
                  {[0,1,2,3,4].map(n => <option key={n}>{n}</option>)}
                </select>
              </motion.div>
            </div>

            {/* Room Type */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mb-8"
            >
              <label className="block text-gray-700 font-bold mb-3 text-lg">Room Type</label>
              <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-500 focus:outline-none transition text-lg">
                <option>Standard Room - $149/night</option>
                <option>Executive Room - $249/night</option>
                <option>Deluxe Suite - $399/night</option>
              </select>
            </motion.div>

            {/* Special Requests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mb-10"
            >
              <label className="block text-gray-700 font-bold mb-3 text-lg">Special Requests</label>
              <textarea 
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-500 focus:outline-none transition" 
                rows={4}
                placeholder="Let us know if you have any special requests or dietary requirements..."
              ></textarea>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="mb-10 bg-gold-50 border-l-4 border-gold-500 p-6 rounded"
            >
              <h3 className="font-bold text-slate-900 mb-3">✨ Your Stay Includes:</h3>
              <ul className="text-gray-700 space-y-2 grid md:grid-cols-2">
                <li>✓ Complimentary WiFi</li>
                <li>✓ Daily Room Service</li>
                <li>✓ Fitness Center Access</li>
                <li>✓ Concierge 24/7</li>
              </ul>
            </motion.div>

            {/* Action Buttons */}
            <div className="grid md:grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black px-8 py-4 rounded-lg font-bold text-lg transition duration-300 shadow-lg"
              >
                Check Availability
              </motion.button>
              <Link href="/contact" className="w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg text-center transition duration-300 shadow-lg">
                Questions? Contact Us
              </Link>
            </div>
          </form>

          {/* Trust Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 mb-6">⭐⭐⭐⭐⭐ Rated 4.9/5 by 8,000+ guests</p>
            <p className="text-gray-700">🛡️ Secure booking • 💳 Secure payment • 🔄 Easy modifications</p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}