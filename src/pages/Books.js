import React from 'react';
import { motion } from 'framer-motion';
import BookCard from '../components/BookCard';

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", imageUrl: "/placeholder.svg?height=200&width=150" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", imageUrl: "/placeholder.svg?height=200&width=150" },
  { id: 3, title: "1984", author: "George Orwell", imageUrl: "/placeholder.svg?height=200&width=150" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", imageUrl: "/placeholder.svg?height=200&width=150" },
];

export default function Books() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-amber-50 opacity-50 z-0"></div>
      <div className="relative z-10">
        <h1 className="text-3xl font-bold mb-6 font-serif text-emerald-800">Our Books</h1>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {books.map((book) => (
            <motion.div
              key={book.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <BookCard title={book.title} author={book.author} imageUrl={book.imageUrl} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}