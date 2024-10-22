import Navbar from "../../pages/Navbar";
import React from 'react';
import { motion } from 'framer-motion';
import { FaIndustry, FaSeedling, FaHospital, FaUniversity, FaWind, FaUtensils, FaPaintBrush, FaTshirt, FaHotel, FaShippingFast, FaMoneyCheckAlt, FaCode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// Define the business categories for the USA
const businessCategories = [
  { name: 'E-commerce', color: 'bg-red-500', route: '/Resource/ecommerce', icon: FaIndustry, description: 'Online retail and business-to-consumer services.' },
  { name: 'Agriculture', color: 'bg-orange-500', route: '/Resource/agriculture', icon: FaSeedling, description: 'Farming, organic produce, and agri-tech solutions.' },
  { name: 'Health & Wellness', color: 'bg-yellow-500', route: '/Resource/health', icon: FaHospital, description: 'Healthcare services, fitness, and wellness products.' },
  { name: 'Education & EdTech', color: 'bg-green-500', route: '/Resource/education', icon: FaUniversity, description: 'Online learning platforms, tutoring, and educational tools.' },
  { name: 'Renewable Energy', color: 'bg-blue-500', route: '/Resource/renewable-energy', icon: FaWind, description: 'Solar, wind, and alternative energy solutions.' },
  { name: 'Food & Beverage', color: 'bg-purple-500', route: '/Resource/food-beverage', icon: FaUtensils, description: 'Restaurants, catering, and food delivery services.' },
  { name: 'Handicrafts & Artisanal', color: 'bg-pink-500', route: '/Resource/handicrafts', icon: FaPaintBrush, description: 'Local crafts, handmade products, and artisanal goods.' },
  { name: 'Textiles & Apparel', color: 'bg-teal-500', route: '/Resource/textiles', icon: FaTshirt, description: 'Clothing, fashion brands, and textile manufacturing.' },
  { name: 'Tourism & Hospitality', color: 'bg-indigo-500', route: '/Resource/tourism', icon: FaHotel, description: 'Travel agencies, hotels, and tourism services.' },
  { name: 'Logistics & Supply Chain', color: 'bg-gray-500', route: '/Resource/logistics', icon: FaShippingFast, description: 'Transport, warehousing, and supply chain management.' },
  { name: 'FinTech', color: 'bg-lime-500', route: '/Resource/fintech', icon: FaMoneyCheckAlt, description: 'Financial technology, payment solutions, and banking services.' },
  { name: 'IT & Software Development', color: 'bg-cyan-500', route: '/Resource/it-software', icon: FaCode, description: 'Software development, IT services, and cybersecurity.' },
];

const BusinessTypeUSA = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-600 text-white p-8">
        <h1 className="text-7xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Explore Growing Business Opportunities in the USA
        </h1>
        <div className="mt-2 mb-10 text-center">
          <p className="text-3xl">Discover resources tailored to each business sector in the United States.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {businessCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className={`${category.color} rounded-lg p-6 cursor-pointer transform transition-all duration-300 hover:shadow-2xl`}
              whileHover={{ scale: 1.1 }}  // Enlarge the card when hovered
              whileTap={{ scale: 0.95 }}  // Shrink slightly when clicked
              onClick={() => navigate(category.route)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <category.icon className="text-6xl mb-4" /> {/* Business category icon */}
                <h2 className="text-2xl font-bold text-center">{category.name}</h2>
                <p className="mt-2 text-sm opacity-75 text-center">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl">Uncover the potential in each business category and start your journey to success in the USA.</p>
          <p className="text-sm mt-2 opacity-75">Each card leads to a wealth of resources and opportunities. Start exploring now.</p>
        </div>
      </div>
    </>
  );
};

export default BusinessTypeUSA;
