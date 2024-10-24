import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, faGavel, faCoins, faGlobe, faBullhorn, faHeadset,
  faChevronUp, faCheck, faInfoCircle, faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, faTwitter, faLinkedinIn, faInstagram 
} from '@fortawesome/free-brands-svg-icons';
// Import FontAwesome icons at the top of your file
import { faEnvelope, faPhone, faTruck, faCommentDots } from '@fortawesome/free-solid-svg-icons';


const sections = [
  { id: 'government', title: 'Government Support', icon: faHome },
  { id: 'legal', title: 'Legal Info', icon: faGavel },
  { id: 'funding', title: 'Funding', icon: faCoins },
  { id: 'online', title: 'Business Online', icon: faGlobe },
  { id: 'marketing', title: 'Marketing', icon: faBullhorn },
  { id: 'support', title: 'Customer Support & Logistics', icon: faHeadset },
];

const EcommerceResources = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setShowScrollTop(scrollPosition > windowHeight / 2);

      sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= windowHeight / 2 && bottom >= windowHeight / 2) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800">
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/placeholder.svg?height=50&width=50" alt="Logo" className="h-12 w-12 mr-4" />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Your E-commerce Business Roadmap
            </h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center px-3 py-2 rounded-full transition-colors duration-300 ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-blue-100'
                }`}
              >
                <FontAwesomeIcon icon={section.icon} className="mr-2" />
                <span>{section.title}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <section id="government" className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8">Government Support & Schemes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['MSME Support', 'Digital India', 'Startup India'].map((scheme) => (
                <motion.div
                  key={scheme}
                  className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="text-xl font-semibold mb-4">{scheme}</h3>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300">
                    Explore Scheme
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="legal" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Legal Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['MSME Registration', 'GST Registration', 'Shop License'].map((requirement) => (
                <motion.div
                  key={requirement}
                  className="bg-white rounded-lg p-6 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="text-xl font-semibold mb-4">{requirement}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2 form-checkbox h-5 w-5 text-blue-600" />
                      <span>Step 1: Lorem ipsum dolor sit amet</span>
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2 form-checkbox h-5 w-5 text-blue-600" />
                      <span>Step 2: Consectetur adipiscing elit</span>
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" className="mr-2 form-checkbox h-5 w-5 text-blue-600" />
                      <span>Step 3: Sed do eiusmod tempor incididunt</span>
                    </li>
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="funding" className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Funding Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Mudra Loans', 'Crowdfunding', 'Angel Investors', 'Venture Capital'].map((option) => (
                <motion.div
                  key={option}
                  className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="text-xl font-semibold mb-4">{option}</h3>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button className="bg-white text-orange-500 px-4 py-2 rounded-full font-semibold hover:bg-orange-100 transition-colors duration-300">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="online" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Taking Your Business Online</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">E-commerce Platforms</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                    <span>Shopify: Easy to use, great for beginners</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                    <span>WooCommerce: Flexible, good for WordPress users</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                    <span>Magento: Powerful, suitable for large businesses</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Marketplaces</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                    <span>Amazon: Large customer base, fulfillment services</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                    <span>Flipkart: Popular in India, good for local reach</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-2" />
                    <span>Etsy: Great for handmade and unique products</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="marketing" className="py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Marketing Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-4">Social Media Marketing</h3>
                <ul className="space-y-2">
                  <li>Facebook Ads</li>
                  <li>Instagram Influencer Partnerships</li>
                  <li>Twitter Engagement Campaigns</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-4">Search Engine Optimization (SEO)</h3>
                <ul className="space-y-2">
                  <li>Keyword Research</li>
                  <li>On-Page Optimization</li>
                  <li>Link Building</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg p-6 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-4">Pay-Per-Click (PPC) Advertising</h3>
                <ul className="space-y-2">
                  <li>Google Ads</li>
                  <li>Bing Ads</li>
                  <li>Retargeting Campaigns</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="support" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Customer Support & Logistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Customer Support Channels</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faHeadset} className="text-blue-500 mr-2" />
                    <span>Live Chat Support</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-2" />
                    <span>Email Support</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-2" />
                    <span>Phone Support</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Logistics Partners</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faTruck} className="text-blue-500 mr-2" />
                    
                    <span>Shiprocket: Integrated shipping solutions</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faTruck} className="text-blue-500 mr-2" />
                    <span>Delhivery: Nationwide logistics network</span>
                  </li>
                  <li className="flex items-center">
                    <FontAwesomeIcon icon={faTruck} className="text-blue-500 mr-2" />
                    <span>Blue Dart: Express delivery services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="hover:text-blue-400 transition-colors duration-300"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">FAQs</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-300">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 Your E-commerce Business Roadmap. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="fixed bottom-8 left-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg"
        >
          <FontAwesomeIcon icon={faCommentDots} />
        </motion.button>
      </div>
    </div>
  );
};

export default EcommerceResources;