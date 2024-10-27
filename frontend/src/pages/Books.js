import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import Navbar from './Navbar';

const books = [
  {
    id: 1,
    title: "The Lean Startup",
    author: "Eric Ries",
    description: "A groundbreaking approach to new business development, emphasizing rapid experimentation and customer insight.",
    image: "https://images.public.blob.vercel-storage.com/lean-startup-YDQR1/lean-startup-2YDQR1YDQR1.jpg",
    downloadLink: "#"
  },
  {
    id: 2,
    title: "Good to Great",
    author: "Jim Collins",
    description: "Exploring the factors that enable good companies to become truly great ones over an extended period.",
    image: "https://images.public.blob.vercel-storage.com/good-to-great-YDQR1/good-to-great-2YDQR1YDQR1.jpg",
    downloadLink: "#"
  },
  {
    id: 3,
    title: "Zero to One",
    author: "Peter Thiel",
    description: "Notes on startups, or how to build the future, from legendary entrepreneur and investor Peter Thiel.",
    image: "https://images.public.blob.vercel-storage.com/zero-to-one-YDQR1/zero-to-one-2YDQR1YDQR1.jpg",
    downloadLink: "#"
  },
  {
    id: 4,
    title: "The E-Myth Revisited",
    author: "Michael E. Gerber",
    description: "Why most small businesses don't work and what to do about it - a guide to successful entrepreneurship.",
    image: "https://images.public.blob.vercel-storage.com/e-myth-revisited-YDQR1/e-myth-revisited-2YDQR1YDQR1.jpg",
    downloadLink: "#"
  },
  {
    id: 5,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description: "A deep dive into the two systems that drive the way we think and make choices in business and personal life.",
    image: "https://images.public.blob.vercel-storage.com/thinking-fast-and-slow-YDQR1/thinking-fast-and-slow-2YDQR1YDQR1.jpg",
    downloadLink: "#"
  },
  {
    id: 6,
    title: "Start with Why",
    author: "Simon Sinek",
    description: "How great leaders inspire everyone to take action by starting with the 'why' behind their organization.",
    image: "https://images.public.blob.vercel-storage.com/start-with-why-YDQR1/start-with-why-2YDQR1YDQR1.jpg",
    downloadLink: "#"
  }
];

const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    const results = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(results);
  }, [searchTerm]);

  return (
    <>

    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-12 text-indigo-800"
      >
        Business Book Library
      </motion.h1>

      <div className="max-w-md mx-auto mb-8 relative">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-full border-2 border-indigo-300 focus:outline-none focus:border-indigo-500 pl-10 pr-10"
        />
        <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-indigo-400" />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-3 text-indigo-400 hover:text-indigo-600"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBooks.map((book, index) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <div className="relative pb-2/3 h-64">
              <img
                src={book.image}
                alt={book.title}
                className="absolute h-full w-full object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-2 text-indigo-800">{book.title}</h2>
              <p className="text-indigo-600 mb-4">{book.author}</p>
              <p className="text-gray-600 mb-4 flex-grow">{book.description}</p>
              <a
                href={book.downloadLink}
                className="bg-indigo-600 text-white py-2 px-4 rounded-full inline-flex items-center justify-center hover:bg-indigo-700 transition-colors duration-300"
              >
                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                Download
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    </>
  );
};

export default Books;