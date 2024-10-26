import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import back02 from '../assets/back02.jpg'

import scooter from '../assets/scooter.png'
import truck from '../assets/truck.png'

const BusinessHomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState('');
  const scooterControls = useAnimation();
  const truckControls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateVehicles = async () => {
      await Promise.all([
        scooterControls.start({ x: ['-100%', '100%'], transition: { duration: 5, ease: 'linear', repeat: Infinity } }),
        truckControls.start({ x: ['100%', '-100%'], transition: { duration: 10, ease: 'linear', repeat: Infinity } })
      ]);
    };

    animateVehicles();
  }, [scooterControls, truckControls]);

  const handleMouseEnter = (text) => {
    setCursorText(text);
  };

  const handleMouseLeave = () => {
    setCursorText('');
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0  ">
        <img 
          src={back02} 
          alt="Business Street" 
          className="w-full h-full object-cover "
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <motion.div 
          className="absolute bottom-4 left-0"
          animate={scooterControls}
        >
          <img src={scooter} alt="Scooter" className="h-16 w-auto" />
        </motion.div>
        <motion.div 
          className="absolute bottom-2 right-0"
          animate={truckControls}
        >
          <img src={truck} alt="Delivery truck" className="h-24 w-auto" />
        </motion.div>
      </div>
      
       <div className="container mx-auto px-4 h-full flex flex-col  items-center text-black relative z-10 mt-0 ">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold  text-center mt-0 "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empower Your Local Business
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl  text-center max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform your small business with our digital solutions. Navigate the modern marketplace with confidence.
        </motion.p>
        
        <div className="flex space-x-6">
          <motion.button
            className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => handleMouseEnter('Start Now')}
            onMouseLeave={handleMouseLeave}
          >
            Get Started
          </motion.button>
          
          <motion.button
            className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => handleMouseEnter('Learn More')}
            onMouseLeave={handleMouseLeave}
          >
            Explore Services
          </motion.button>
        </div>
      </div> 
       
      {/* <div className="absolute bottom-40 left-0 right-0 flex justify-center space-x-12 pb-12">
        {['Retail', 'Services', 'Local Delivery'].map((item, index) => (
          <motion.div
            key={item}
            className="text-white text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            <div className="w-16 h-16 mx-auto mb-2 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-2xl">{['🛍️', '💼', '🚚'][index]}</span>
            </div>
            <p className="font-semibold">{item}</p>
          </motion.div>
        ))}
      </div> */}
      
      {/* <motion.div
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
      </motion.div> */}
    </div>
  );
};

export default BusinessHomePage;