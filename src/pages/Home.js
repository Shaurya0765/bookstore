import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      {/* Add favicon */}
      <Helmet>
      <link rel="icon" href="/3532091.png" type="image/x-icon" />
        <title>Bookstore | Home</title>
      </Helmet>

      {/* Navbar */}
      <motion.nav
        className="bg-emerald-800 text-white py-4 px-8 fixed w-full top-0 z-50"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="flex justify-between items-center">
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/" className="text-lg font-semibold">Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/about" className="text-lg font-semibold">About</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/books" className="text-lg font-semibold">Books</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/contact" className="text-lg font-semibold">Contact</Link>
          </motion.li>
        </ul>
      </motion.nav>

      <motion.div 
        className="text-center relative pt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {/* Blob animations */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Main Heading */}
        <motion.h1 
          className="text-5xl font-extrabold mb-6 font-serif text-emerald-800 relative z-10"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          style={{ fontFamily: `'Playfair Display', serif` }}
        >
          Welcome to Our Bookstore
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          className="text-2xl mb-8 text-emerald-700 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: `'Roboto', sans-serif` }}
        >
          Discover your next favorite book with us!
        </motion.p>

        {/* Call to Action Button */}
        <motion.div
          className="relative z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/books" className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-700 transition-colors shadow-lg">
            Browse Books
          </Link>
        </motion.div>
      </motion.div>

      {/* Smooth scrolling */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link to="#about" className="text-emerald-600 font-semibold text-lg">
          Scroll Down
        </Link>
      </motion.div>
      
      {/* Extra section to enable scrolling */}
      <section id="about" className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4 text-emerald-800" style={{ fontFamily: `'Playfair Display', serif` }}>
          About Us
        </h2>
        <p className="text-lg text-emerald-600 max-w-2xl mx-auto" style={{ fontFamily: `'Roboto', sans-serif` }}>
          We are passionate about connecting readers with books they'll love. Whether you're into thrillers, romance, science fiction, or non-fiction, we have something for everyone.
        </p>
        <Link to="/about" className="mt-6 bg-emerald-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors">
          Learn More About Us
        </Link>
      </section>
    </>
  );
}
