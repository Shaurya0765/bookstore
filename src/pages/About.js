import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pgo8cmVjdCB3aWR0aD0iNDIuNDIiIGhlaWdodD0iNDIuNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLDMwKSByb3RhdGUoNDUpIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iIzAwMDAwMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-5 z-0"></div>
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 font-serif text-emerald-800">About Us</h1>
        <motion.p 
          className="text-lg mb-4 text-emerald-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to our bookstore! We're passionate about bringing the best books to our readers.
        </motion.p>
        <motion.p 
          className="text-lg mb-4 text-emerald-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Our mission is to inspire, educate, and entertain through the power of literature. We carefully curate our selection to ensure there's something for everyone, from classic novels to contemporary bestsellers.
        </motion.p>
        <motion.p 
          className="text-lg text-emerald-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Thank you for choosing us as your literary companion. Happy reading!
        </motion.p>
      </div>
    </motion.div>
  );
}