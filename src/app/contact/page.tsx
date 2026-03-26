'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Get in Touch
          </motion.h1>
          <p className="text-xl text-gray-300">We'd love to hear from you</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gold-500 to-yellow-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">📍 Address</h3>
                <p>123 Luxury Avenue</p>
                <p>Downtown District</p>
                <p>City, State 12345</p>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">📞 Phone</h3>
                <p className="text-lg font-semibold">+1 (800) LUXE-STAY</p>
                <p className="text-sm mv-2">24/7 Reservations</p>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">✉️ Email</h3>
                <p>info@luxehotel.com</p>
                <p className="text-sm mt-2">Event inquiries</p>
                <p>events@luxehotel.com</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <form className="bg-white rounded-2xl shadow-xl p-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-500 focus:outline-none transition" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-500 focus:outline-none transition" placeholder="your@email.com" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-500 focus:outline-none transition" placeholder="How can we help?" />
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gold-500 focus:outline-none transition" rows={6} placeholder="Tell us more about your inquiry..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black px-8 py-4 rounded-lg font-bold text-lg transition duration-300 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}