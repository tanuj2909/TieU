import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRocket, faBalanceScale, faPiggyBank, faServer, faCloud, faBullhorn, faShieldAlt,
  faChevronUp, faCheck, faArrowRight, faCommentDots
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, faTwitter, faLinkedinIn, faGithub 
} from '@fortawesome/free-brands-svg-icons';

const sections = [
  { id: 'government', title: 'Government Support', icon: faRocket, color: 'from-blue-400 to-indigo-600' },
  { id: 'legal', title: 'Legal Info', icon: faBalanceScale, color: 'from-green-400 to-emerald-600' },
  { id: 'funding', title: 'Funding', icon: faPiggyBank, color: 'from-yellow-400 to-amber-600' },
  { id: 'infrastructure', title: 'IT Infrastructure', icon: faServer, color: 'from-purple-400 to-violet-600' },
  { id: 'saas', title: 'SaaS & Online Presence', icon: faCloud, color: 'from-pink-400 to-rose-600' },
  { id: 'marketing', title: 'Marketing', icon: faBullhorn, color: 'from-red-400 to-orange-600' },
  { id: 'security', title: 'Cybersecurity', icon: faShieldAlt, color: 'from-gray-600 to-gray-800' },
];

const ITandSoftwareIndustry = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

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
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4"
              >
                <FontAwesomeIcon icon={faRocket} className="text-white text-xl" />
              </motion.div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                IT & Software Startup Roadmap
              </h1>
            </div>
            <nav className="hidden md:flex space-x-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center px-3 py-2 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? `bg-gradient-to-r ${section.color} text-white`
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <FontAwesomeIcon icon={section.icon} className="mr-2" />
                  <span>{section.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Launch Your Tech Startup
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl mb-8"
              >
                Your comprehensive guide to building a successful IT & Software business in India
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                onClick={() => scrollToSection('government')}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Start Your Journey
              </motion.button>
            </div>
          </div>
        </section>

        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-center mb-8"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white bg-gradient-to-r ${section.color}`}>
                    <FontAwesomeIcon icon={section.icon} className="text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold ml-4">{section.title}</h2>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Key Points</h3>
                    <ul className="space-y-2">
                      {[1, 2, 3].map((item) => (
                        <li key={item} className="flex items-start">
                          <FontAwesomeIcon icon={faCheck} className={`text-gradient-to-r ${section.color} mt-1 mr-2`} />
                          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
                    <p className="mb-4">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${section.color} text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300`}
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-6"
              >
                Ready to Launch Your Tech Startup?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl mb-8"
              >
                Join the thriving community of successful IT entrepreneurs in India
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started Now
              </motion.button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
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
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 IT & Software Startup Roadmap. All rights reserved.</p>
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

export default ITandSoftwareIndustry;