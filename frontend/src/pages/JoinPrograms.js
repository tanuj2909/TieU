import React, { useState } from 'react';
import Navbar from './Navbar';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlay, faDownload, faBook } from '@fortawesome/free-solid-svg-icons';

const categories = ['All', 'Video Lectures', 'Assignments', 'Case Studies'];

const courses = [
  {
    id: 1,
    title: 'Digital Marketing Fundamentals',
    description: 'Learn the basics of digital marketing and grow your online presence.',
    category: 'Video Lectures',
    image: 'https://images.public.blob.vercel-storage.com/digital-marketing-YDQR1/digital-marketing-2YDQR1YDQR1.jpg',
    button: 'Start Learning',
    icon: faPlay
  },
  {
    id: 2,
    title: 'Financial Planning for Small Businesses',
    description: 'Create a solid financial plan for your small business with this comprehensive guide.',
    category: 'Assignments',
    image: 'https://images.public.blob.vercel-storage.com/financial-planning-YDQR1/financial-planning-2YDQR1YDQR1.jpg',
    button: 'Download Assignment',
    icon: faDownload
  },
  {
    id: 3,
    title: 'Local Cafe Success Story',
    description: 'Discover how a small local cafe became a community favorite and expanded to multiple locations.',
    category: 'Case Studies',
    image: 'https://images.public.blob.vercel-storage.com/cafe-success-YDQR1/cafe-success-2YDQR1YDQR1.jpg',
    button: 'Read More',
    icon: faBook
  },
  {
    id: 4,
    title: 'E-commerce Website Development',
    description: 'Build your own e-commerce website from scratch with this step-by-step video course.',
    category: 'Video Lectures',
    image: 'https://images.public.blob.vercel-storage.com/ecommerce-development-YDQR1/ecommerce-development-2YDQR1YDQR1.jpg',
    button: 'Start Learning',
    icon: faPlay
  },
  {
    id: 5,
    title: 'Creating a Winning Business Plan',
    description: 'Learn how to craft a compelling business plan that will attract investors and guide your success.',
    category: 'Assignments',
    image: 'https://images.public.blob.vercel-storage.com/business-plan-YDQR1/business-plan-2YDQR1YDQR1.jpg',
    button: 'Download Assignment',
    icon: faDownload
  },
  {
    id: 6,
    title: 'Tech Startups Journey to Success',
    description: 'Follow the inspiring story of a tech startup that overcame challenges to become an industry leader.',
    category: 'Case Studies',
    image: 'https://images.public.blob.vercel-storage.com/tech-startup-YDQR1/tech-startup-2YDQR1YDQR1.jpg',
    button: 'Read More',
    icon: faBook
  }, {
    id: 7,
    title: 'Digital Marketing Fundamentals',
    description: 'Learn the basics of digital marketing and grow your online presence.',
    category: 'Video Lectures',
    image: 'https://images.public.blob.vercel-storage.com/digital-marketing-YDQR1/digital-marketing-2YDQR1YDQR1.jpg',
    button: 'Start Learning',
    icon: faPlay
  },
  {
    id: 8,
    title: 'Financial Planning for Small Businesses',
    description: 'Create a solid financial plan for your small business with this comprehensive guide.',
    category: 'Assignments',
    image: 'https://images.public.blob.vercel-storage.com/financial-planning-YDQR1/financial-planning-2YDQR1YDQR1.jpg',
    button: 'Download Assignment',
    icon: faDownload
  },
  {
    id: 3,
    title: 'Local Cafe Success Story',
    description: 'Discover how a small local cafe became a community favorite and expanded to multiple locations.',
    category: 'Case Studies',
    image: 'https://images.public.blob.vercel-storage.com/cafe-success-YDQR1/cafe-success-2YDQR1YDQR1.jpg',
    button: 'Read More',
    icon: faBook
  }
];

const JoinPrograms = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Group courses by category
  const groupedCourses = courses.reduce((acc, course) => {
    if (!acc[course.category]) {
      acc[course.category] = [];
    }
    acc[course.category].push(course);
    return acc;
  }, {});

  const filteredCourses = courses.filter(course =>
    (activeCategory === 'All' || course.category === activeCategory) &&
    (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>

    <Navbar />

    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-12 text-indigo-800"
      >
        Skill Learning Platform
      </motion.h1>

      <div className="max-w-4xl mx-auto mb-8 relative">
        <input
          type="text"
          placeholder="Search courses, assignments, case studies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-full border-2 border-indigo-300 focus:outline-none focus:border-indigo-500 pl-10 pr-4 text-lg"
        />
        <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-indigo-400 text-xl" />
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${
              activeCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-indigo-600 hover:bg-indigo-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Render courses row-wise based on categories */}
      {Object.keys(groupedCourses).map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-indigo-700">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groupedCourses[category].map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative pb-2/3 h-48">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="absolute h-full w-full object-cover transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-indigo-800">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        course.category === 'Video Lectures' ? 'bg-green-200 text-green-800' :
                        course.category === 'Assignments' ? 'bg-yellow-200 text-yellow-800' :
                        'bg-blue-200 text-blue-800'
                      }`}
                    >
                      {course.category}
                    </span>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300 flex items-center">
                      <FontAwesomeIcon icon={course.icon} className="mr-2" />
                      {course.button}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>

    </>
  );
};

export default JoinPrograms;
