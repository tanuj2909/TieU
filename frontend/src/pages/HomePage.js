import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const handleMouseMove = (e) => {
    
    };

   
    
  }, []);

  const handleMouseEnter = (text) => {
    
  };

  const handleMouseLeave = () => {
   
  };

  return (
    <div className="relative h-screen bg-gradient-to-br from-indigo-600 to-purple-700 overflow-hidden">
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="rgba(255,255,255,0.1)" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-white relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empower Your Business
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-center max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform your small business with expert digital mentorship. Navigate the digital landscape with confidence.
        </motion.p>
        
        <div className="flex space-x-6">
          <motion.button
            className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => handleMouseEnter('Start Now')}
            onMouseLeave={handleMouseLeave}
          >
            Get Started
          </motion.button>
          
          <motion.button
            className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-indigo-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => handleMouseEnter('Learn More')}
            onMouseLeave={handleMouseLeave}
          >
            Learn More
          </motion.button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-12 pb-12">
        {['Strategy', 'Technology', 'Growth'].map((item, index) => (
          <motion.div
            key={item}
            className="text-white text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            <div className="w-16 h-16 mx-auto mb-2 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-2xl">{['🚀', '💻', '📈'][index]}</span>
            </div>
            <p className="font-semibold">{item}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="hidden md:block fixed w-8 h-8 rounded-full bg-white pointer-events-none z-50"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          mixBlendMode: 'difference'
        }}
        animate={{
          scale: cursorText ? 2.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {cursorText && (
          <div className="w-full h-full flex items-center justify-center text-black text-xs font-bold">
            {cursorText}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default HomePage;