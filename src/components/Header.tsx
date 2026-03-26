'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Rooms', href: '/rooms' },
    { label: 'Dining', href: '/dining' },
    { label: 'Amenities', href: '/amenities' },
    { label: 'Contact', href: '/contact' },
    { label: 'Book', href: '/booking' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 to-slate-800 shadow-2xl backdrop-blur-sm bg-opacity-95"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-3xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent group-hover:from-gold-500 group-hover:to-gold-700 transition duration-300">✨</span>
          <span className="text-2xl font-bold text-white group-hover:text-gold-400 transition duration-300">Luxe</span>
        </Link>

        <ul className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <motion.li
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className="relative text-gray-300 hover:text-gold-400 px-4 py-2 font-medium transition duration-300 text-sm tracking-wide group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/booking"
            className="hidden md:block bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black px-6 py-2 rounded-lg font-bold text-sm transition duration-300 shadow-lg"
          >
            Reserve
          </Link>
        </motion.div>

        <div className="md:hidden">
          <Link href="/booking" className="bg-gold-500 hover:bg-gold-600 text-black px-4 py-2 rounded-lg font-bold text-sm transition duration-300">
            Book
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;