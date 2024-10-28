import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch, faBriefcase, faChartLine, faEnvelope,
  faCalendar, faClipboard, faHeadset, faCode, faCloud,
  faUsers, faFileInvoiceDollar, faCogs, faTasks,
  faComments, faShoppingCart, faLock, faBusinessTime,
  faIdCard, faSync
} from '@fortawesome/free-solid-svg-icons';

const products = [
  { name: 'CRM', icon: faUsers, color: 'bg-orange-500', path: '/Tools/CRM' },
  { name: 'HR Management', icon: faIdCard, color: 'bg-purple-600', path: '/Tools/LeaveMangement' },
  { name: 'Business Suite', icon: faBriefcase, color: 'bg-purple-500', path: 'Tools/' },
  { name: 'Analytics', icon: faChartLine, color: 'bg-blue-500', path: '/Tools' },
  { name: 'Mail Pro', icon: faEnvelope, color: 'bg-green-500', path: '/mail-pro' },
  { name: 'Calendar', icon: faCalendar, color: 'bg-yellow-500', path: '/calendar' },
  { name: 'Project Manager', icon: faClipboard, color: 'bg-red-500', path: '/project-manager' },
  { name: 'Support Desk', icon: faHeadset, color: 'bg-indigo-500', path: '/support-desk' },
  { name: 'Developer Tools', icon: faCode, color: 'bg-pink-500', path: '/developer-tools' },
  { name: 'Cloud Storage', icon: faCloud, color: 'bg-teal-500', path: '/cloud-storage' },
  { name: 'Finance', icon: faFileInvoiceDollar, color: 'bg-green-600', path: '/finance' },
  { name: 'Automation', icon: faSync, color: 'bg-blue-600', path: '/automation' },

  { name: 'E-commerce', icon: faShoppingCart, color: 'bg-yellow-600', path: '/ecommerce' },
  { name: 'Task Management', icon: faTasks, color: 'bg-red-600', path: '/task-management' },
  { name: 'Security', icon: faLock, color: 'bg-teal-600', path: '/security' },
  { name: 'Collaboration', icon: faComments, color: 'bg-indigo-600', path: '/collaboration' },
  { name: 'Time Tracking', icon: faBusinessTime, color: 'bg-pink-600', path: '/time-tracking' },
];

const Tools = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const navigate = useNavigate();

  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 text-white p-8">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
            Discover Our Universe of Products
          </h1>
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-3 text-gray-300" />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.name}
              className={`${product.color} rounded-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              whileHover={{ rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(product.path)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <FontAwesomeIcon icon={product.icon} className="text-6xl mb-4" />
                <h2 className="text-2xl font-bold text-center">{product.name}</h2>
                <p className="mt-2 text-sm opacity-75 text-center">Click to learn more</p>
              </div>
            </motion.div>
          ))}
        </div>

        <footer className="mt-16 text-center">
          <p className="text-xl">Empower your business with our suite of innovative solutions.</p>
          <p className="text-sm mt-2 opacity-75">Discover how our products can transform your workflow.</p>
        </footer>
      </div>
    </>
  );
};

export default Tools;
