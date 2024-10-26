import React, { useState } from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRocket, faBullhorn, faChartLine, faCogs, faCubes } from '@fortawesome/free-solid-svg-icons';

// IMPORTING IMAGES
import back01 from '../assets/Mentors/Ycombinator.jpeg';
import back02 from '../assets/Mentors/Neil.jpeg';
import back03 from '../assets/Mentors/Ramith.jpeg';
import back04 from '../assets/Mentors/Maria.jpeg';
import back05 from '../assets/Mentors/Tim.jpeg';
import back06 from '../assets/Mentors/Pat.jpeg';
import back07 from '../assets/Mentors/Ann.jpeg';
import back08 from '../assets/Mentors/Dave.jpeg';
import back09 from '../assets/Mentors/Simen.jpeg';
import back10 from '../assets/Mentors/Ryan.jpeg';
import back11 from '../assets/Mentors/Noah.jpg';
import back12 from '../assets/Mentors/Mel.jpeg';

const categories = [
  { name: 'Startups', icon: faRocket },
  { name: 'Marketing', icon: faBullhorn },
  { name: 'Finance', icon: faChartLine },
  { name: 'Operations', icon: faCogs },
  { name: 'Product Development', icon: faCubes },
];

const mentors = [
  { id: 1, name: 'Dave Ramsey', title: 'Financial Advisor', bio: 'Mentors on personal finance, debt reduction, and financial stability through educational programs.', category: 'Finance', image: back08 },
  { id: 2, name: 'Neil Patel', title: 'Digital Marketing Expert', bio: 'Offers marketing resources and strategies to help companies increase online traffic and growth.', category: 'Marketing', image: back02 },
  { id: 3, name: 'Ramit Sethi', title: 'Personal Finance Advisor', bio: 'Provides financial advice and mentorship on investing, budgeting, and wealth-building.', category: 'Finance', image: back03 },
  { id: 4, name: 'Marie Forleo', title: 'Business Coach', bio: 'Mentors entrepreneurs to build meaningful careers and successful businesses.', category: 'Operations', image: back04 },
  { id: 5, name: 'Tim Ferriss', title: 'Author & Entrepreneur', bio: 'Offers productivity and lifestyle design mentorship to optimize business and personal growth.', category: 'Product Development', image: back05 },
  { id: 6, name: 'Pat Flynn', title: 'Online Business Mentor', bio: 'Provides mentorship on building passive income and online business strategies.', category: 'Startups', image: back06 },
  { id: 7, name: 'Ann Handley', title: 'Content Marketing Expert', bio: 'Specializes in content marketing strategy and provides mentorship to enhance brand storytelling.', category: 'Marketing', image: back07 },
  { id: 8, name: 'Y Combinator', title: 'Startup Accelerator', bio: 'Guiding early-stage startups with funding and mentorship through a structured program.', category: 'Startups', image: back01 },
  { id: 9, name: 'Simon Sinek', title: 'Leadership Coach', bio: 'Provides guidance on leadership, team building, and inspiring others to achieve success.', category: 'Operations', image: back09 },
  { id: 10, name: 'Ryan Holiday', title: 'Author & Entrepreneur', bio: 'Mentors individuals on product strategy, philosophy in business, and resilience.', category: 'Product Development', image: back10 },
  { id: 11, name: 'Noah Kagan', title: 'Startup Advisor', bio: 'Mentors on building startups with a focus on actionable growth tactics and entrepreneurial mindset.', category: 'Startups', image: back11 },
  { id: 12, name: 'Mel Robbins', title: 'Motivational Speaker & Author', bio: 'Provides mentorship on personal development and mindset coaching to boost productivity.', category: 'Operations', image: back12 },
];

const Mentors = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMentors = mentors.filter(
    (mentor) =>
      (activeCategory === 'All' || mentor.category === activeCategory) &&
      (mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.bio.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8 font-sans">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Find Your Expert Mentor
        </motion.h1>

        <div className="max-w-4xl mx-auto mb-8 relative">
          <input
            type="text"
            placeholder="Search mentors by name or expertise..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-gray-400 focus:outline-none focus:border-blue-500 pl-10 pr-4 text-lg"
          />
          <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-gray-500 text-xl" />
        </div>

        <div className="flex justify-center space-x-4 mb-8 overflow-x-auto pb-4">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${
              activeCategory === 'All'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${
                activeCategory === category.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'
              }`}
            >
              <FontAwesomeIcon icon={category.icon} className="mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMentors.map((mentor) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
   <div className="relative h-64 overflow-hidden rounded-t-lg flex items-center justify-center bg-gray-100">
  <img
    src={mentor.image}
    alt={mentor.name}
    className="w-3/4 h-3/4 object-contain"
  />
</div>

              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{mentor.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{mentor.title}</p>
                <p className="text-gray-700 mb-4">{mentor.bio}</p>
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    {mentor.category}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                    Get Advice
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mentors;
