import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "CEO, TechStart",
    image: "person.png",
    text: "This platform has revolutionized our workflow. The AI assistant is like having a genius on our team 24/7!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, GreenEco",
    image: "person.png",
    text: "I'm amazed at how intuitive and powerful this tool is. It's helped us scale our operations effortlessly.",
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "CMO, FashionForward",
    image: "person.png",
    text: "The personalized insights have been game-changing for our marketing strategies. Highly recommended!",
  },
  {
    id: 4,
    name: "Alex Thompson",
    role: "CTO, DataDrive",
    image: "person.png",
    text: "As a tech enthusiast, I'm impressed by the advanced capabilities. It's truly cutting-edge stuff!",
  },
];

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timeoutRef = useRef(null);

  const nextReview = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(nextReview, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,  // Use smaller values for simpler movement
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,  // Use smaller values for simpler movement
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          What Our Clients Say
        </motion.h2>

        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "linear" }}  // Simple linear transition
              className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 relative">
                <img
                  src={reviews[currentIndex].image}
                  alt={reviews[currentIndex].name}
                  className="w-full h-full object-cover rounded-full "
                />
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-white text-2xl" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">{reviews[currentIndex].name}</h3>
                <p className="text-purple-300 mb-4">{reviews[currentIndex].role}</p>
                <p className="text-lg italic">{reviews[currentIndex].text}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex justify-between px-4">
            <button
              onClick={prevReview}
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              aria-label="Previous review"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
            </button>
            <button
              onClick={nextReview}
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              aria-label="Next review"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${
                index === currentIndex ? 'bg-purple-500' : 'bg-purple-300'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
