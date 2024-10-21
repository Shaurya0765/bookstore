import React from 'react';
import { motion } from 'framer-motion';

export default function BookCard({ title, author, imageUrl }) {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 font-serif">{title}</h3>
        <p className="text-gray-600">by {author}</p>
      </div>
    </motion.div>
  );
}