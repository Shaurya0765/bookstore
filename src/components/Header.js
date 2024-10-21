import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      className="bg-emerald-600 text-white relative overflow-hidden"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
          <path d="M20 20h20v20H20zM40 40h20v20H40z" fill="#ffffff"/>
        </svg>
      </div>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <Link to="/" className="text-2xl font-bold font-serif">Bookstore</Link>
        <nav>
          <ul className="flex space-x-4">
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/" className="hover:underline">Home</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/books" className="hover:underline">Books</Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link to="/about" className="hover:underline">About</Link>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}