import Navbar from "../../pages/Navbar";
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaSeedling, FaHeartbeat, FaBook, FaSolarPanel, FaUtensils, FaPaintBrush, FaTshirt, FaPlane, FaTruck, FaMobileAlt, FaCode } from 'react-icons/fa';

// Define the business categories
const businessCategories = [
  { name: 'E-commerce', icon: FaShoppingCart, color: 'bg-red-500', route: '/Resource/EcommerceResourceIndia', description: 'Online retail platforms. Expand your reach with digital commerce.' },
  { name: 'Agriculture', icon: FaSeedling, color: 'bg-orange-500', route: '/Resource/agriculture', description: 'Farming and agritech. Revolutionize food production.' },
  { name: 'Health & Wellness', icon: FaHeartbeat, color: 'bg-yellow-500', route: '/Resource/health', description: 'Healthcare innovations. Promote well-being with modern solutions.' },
  { name: 'Education & EdTech', icon: FaBook, color: 'bg-green-500', route: '/Resource/education', description: 'Empowering education. Learn, grow, and teach with technology.' },
  { name: 'Renewable Energy', icon: FaSolarPanel, color: 'bg-blue-500', route: '/Resource/renewable-energy', description: 'Sustainable power sources. Invest in a greener future.' },
  { name: 'Food & Beverage', icon: FaUtensils, color: 'bg-purple-500', route: '/Resource/food-beverage', description: 'Culinary business. Create flavors that people love.' },
  { name: 'Handicrafts & Artisanal', icon: FaPaintBrush, color: 'bg-pink-500', route: '/Resource/handicrafts', description: 'Traditional arts. Blend creativity with commerce.' },
  { name: 'Textiles & Apparel', icon: FaTshirt, color: 'bg-teal-500', route: '/Resource/textiles', description: 'Fashion and fabrics. Build your brand in the textile industry.' },
  { name: 'Tourism & Hospitality', icon: FaPlane, color: 'bg-indigo-500', route: '/Resource/tourism', description: 'Travel and leisure. Explore opportunities in hospitality.' },
  { name: 'Logistics & Supply Chain', icon: FaTruck, color: 'bg-gray-500', route: '/Resource/logistics', description: 'Transport and delivery. Optimize the movement of goods.' },
  { name: 'FinTech', icon: FaMobileAlt, color: 'bg-lime-500', route: '/Resource/fintech', description: 'Financial technologies. Innovate the world of finance.' },
  { name: 'IT & Software Development', icon: FaCode, color: 'bg-cyan-500', route: '/Resource/it-software', description: 'Tech development. Build cutting-edge software solutions.' },
];

const BusinessTypeIndia = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-600 text-white p-8">
        <h1 className="text-7xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Explore Growing Business Opportunities
        </h1>
        <div className="mt-2 mb-10 text-center">
          <p className="text-3xl">Discover resources tailored to each business sector in India.</p>
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
                <category.icon className="text-6xl mb-4" /> {/* Icon corresponding to the business category */}
                <h2 className="text-2xl font-bold text-center">{category.name}</h2>
                <p className="mt-2 text-sm opacity-75 text-center">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl">Uncover the potential in each business category and start your journey to success.</p>
          <p className="text-sm mt-2 opacity-75">Each card leads to a wealth of resources and opportunities. Start exploring now.</p>
        </div>
      </div>
    </>
  );
};

export default BusinessTypeIndia;
