import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faLinkedinIn, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faArrowUp 
} from '@fortawesome/free-solid-svg-icons';

const CreativeFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            InnoTech Solutions
          </h3>
          <p className="mb-4">Empowering businesses with cutting-edge AI solutions and personalized assistance.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-purple-400 transition-colors duration-300">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors duration-300">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors duration-300">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#" className="text-white hover:text-purple-400 transition-colors duration-300">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Home</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">About Us</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Services</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Products</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a href="mailto:info@innotech.com" className="hover:text-purple-400 transition-colors duration-300">info@innotech.com</a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <a href="tel:+1234567890" className="hover:text-purple-400 transition-colors duration-300">+1 (234) 567-890</a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              <span>123 Innovation St, Tech City, TC 12345</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
          <p className="mb-4">Stay updated with our latest news and offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 bg-purple-800 text-white placeholder-purple-300"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-r-md transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      <div className="mt-12 pt-8 border-t border-purple-800 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2023 InnoTech Solutions. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-4">
          <a href="#" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</a>
          <a href="#" className="hover:text-purple-400 transition-colors duration-300">Cookie Policy</a>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </motion.button>
    </footer>
  );
};

export default CreativeFooter;