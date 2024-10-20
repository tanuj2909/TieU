import React, { useState } from 'react';
import Navbar from './Navbar';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRocket, faBullhorn, faChartLine, faCogs, faCubes } from '@fortawesome/free-solid-svg-icons';

const categories = [
  { name: 'Startups', icon: faRocket },
  { name: 'Marketing', icon: faBullhorn },
  { name: 'Finance', icon: faChartLine },
  { name: 'Operations', icon: faCogs },
  { name: 'Product Development', icon: faCubes },
];

const mentors = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Startup Strategist',
    bio: 'Helping startups scale from idea to IPO with over 15 years of experience.',
    category: 'Startups',
    image: 'https://images.public.blob.vercel-storage.com/mentor-sarah-YDQR1/mentor-sarah-2YDQR1YDQR1.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Digital Marketing Guru',
    bio: 'Specializing in growth hacking and customer acquisition for B2B SaaS companies.',
    category: 'Marketing',
    image: 'https://images.public.blob.vercel-storage.com/mentor-michael-YDQR1/mentor-michael-2YDQR1YDQR1.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'Financial Advisor',
    bio: 'Expert in financial modeling and fundraising strategies for early-stage startups.',
    category: 'Finance',
    image: 'https://images.public.blob.vercel-storage.com/mentor-emily-YDQR1/mentor-emily-2YDQR1YDQR1.jpg',
  },
  {
    id: 4,
    name: 'David Kim',
    title: 'Operations Specialist',
    bio: 'Streamlining business processes and optimizing team performance for rapid growth.',
    category: 'Operations',
    image: 'https://images.public.blob.vercel-storage.com/mentor-david-YDQR1/mentor-david-2YDQR1YDQR1.jpg',
  },
  {
    id: 5,
    name: 'Lisa Patel',
    title: 'Product Development Lead',
    bio: 'Turning innovative ideas into successful products with user-centric design approaches.',
    category: 'Product Development',
    image: 'https://images.public.blob.vercel-storage.com/mentor-lisa-YDQR1/mentor-lisa-2YDQR1YDQR1.jpg',
  },
  {
    id: 6,
    name: 'Alex Thompson',
    title: 'Growth Hacker',
    bio: 'Leveraging data-driven strategies to accelerate startup growth and user acquisition.',
    category: 'Startups',
    image: 'https://images.public.blob.vercel-storage.com/mentor-alex-YDQR1/mentor-alex-2YDQR1YDQR1.jpg',
  },
];

const Mentors = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMentors = mentors.filter(mentor => 
    (activeCategory === 'All' || mentor.category === activeCategory) &&
    (mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     mentor.bio.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
    <Navbar />

    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-8 font-sans">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-12 text-white"
      >
        Expert Business Mentors
      </motion.h1>

      <div className="max-w-4xl mx-auto mb-8 relative">
        <input
          type="text"
          placeholder="Search mentors by name or expertise..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-full border-2 border-white focus:outline-none focus:border-yellow-300 pl-10 pr-4 text-lg bg-white bg-opacity-20 text-white placeholder-white"
        />
        <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-white text-xl" />
      </div>

      <div className="flex justify-center space-x-4 mb-8 overflow-x-auto pb-4">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-4 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${
            activeCategory === 'All'
              ? 'bg-white text-purple-600'
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`px-4 py-2 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center ${
              activeCategory === category.name
                ? 'bg-white text-purple-600'
                : 'bg-purple-600 text-white hover:bg-purple-700'
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
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative pb-2/3 h-64">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="absolute h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold">{mentor.name}</h3>
                <p className="text-sm">{mentor.title}</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-4">{mentor.bio}</p>
              <div className="flex justify-between items-center">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                  {mentor.category}
                </span>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors duration-300">
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