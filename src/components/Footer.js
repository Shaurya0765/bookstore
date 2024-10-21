import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      className="bg-emerald-600 text-white text-center py-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
          <path d="M0 20h20v20H0zM20 40h20v20H20zM40 60h20v20H40zM60 0h20v20H60z" fill="#ffffff"/>
        </svg>
      </div>
      <p className="relative z-10">&copy; 2023 Bookstore. All rights reserved.</p>
    </motion.footer>
  );
}