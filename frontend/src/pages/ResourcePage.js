import Navbar from "./Navbar";
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Flag from 'react-world-flags';

// Define the countries with their respective ISO country codes
const countries = [
  { name: 'USA', code: 'US', color: 'bg-red-500', route: '/Resource/usa' },
  { name: 'India', code: 'IN', color: 'bg-orange-500', route: '/Resource/india' },
  { name: 'Spain', code: 'ES', color: 'bg-yellow-500', route: '/Resource/spain' },
  { name: 'Germany', code: 'DE', color: 'bg-green-500', route: '/Resource/germany' },
  { name: 'France', code: 'FR', color: 'bg-blue-500', route: '/Resource/france' },
  { name: 'Italy', code: 'IT', color: 'bg-purple-500', route: '/Resource/italy' },
];

const ResourcePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-600 text-white p-8">
        <h1 className="text-7xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Choose Your Adventure
        </h1>
        <div className="mt-2  mb-10 text-center">
        <p className="text-3xl">We have Personalised Resource for each of your country.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              className={`${country.color} rounded-lg p-6 cursor-pointer transform transition-all duration-300 hover:shadow-2xl`}
              whileHover={{ scale: 1.1 }}  // Enlarge the card when hovered
              whileTap={{ scale: 0.95 }}  // Shrink slightly when clicked
              onClick={() => navigate(country.route)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                {/* Display country flag */}
                <Flag code={country.code} className="h-24 w-24 mb-4" alt={country.name} />
                <h2 className="text-2xl font-bold text-center">{country.name}</h2>
                <p className="mt-2 text-sm opacity-75 text-center">Click to explore</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl">Embark on a journey through diverse cultures and experiences.</p>
          <p className="text-sm mt-2 opacity-75">Each card leads to a unique adventure. Where will you go?</p>
        </div>
      </div>
    </>
  );
};

export default ResourcePage;
