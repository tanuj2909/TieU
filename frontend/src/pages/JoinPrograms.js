import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlay, faDownload, faBook } from '@fortawesome/free-solid-svg-icons';

import back01 from '../assets/PROGRAM/1.png';
import back02 from '../assets/PROGRAM/2.png';
import back03 from '../assets/PROGRAM/3.png';
import back04 from '../assets/PROGRAM/4.png';
import back05 from '../assets/PROGRAM/5.png';
import back06 from '../assets/PROGRAM/6.png';
import back07 from '../assets/PROGRAM/7.png';
import back08 from '../assets/PROGRAM/8.png';
import back09 from '../assets/PROGRAM/9.png';

const categories = ['Video Lectures', 'Assignments', 'Case Studies'];

const courses = [
  {
    id: 1,
    title: 'Digital Marketing Fundamentals',
    description: 'Learn the basics of digital marketing and grow your online presence.',
    category: 'Video Lectures',
    image: back01, // Directly reference the imported image
    button: 'Start Learning',
    icon: faPlay,
    link: '/Course/DigitalMarketing'
  },
  {
    id: 2,
    title: 'E-commerce Website Development',
    description: 'Build your own e-commerce website from scratch with this step-by-step video course.',
    category: 'Video Lectures',
    image: back02, // Directly reference the imported image
    button: 'Start Learning',
    icon: faPlay,
    link: '/Course/EcommerceDevelopment'
  },
  {
    id: 3,
    title: 'SEO Basics for Beginners',
    description: 'Understand the fundamentals of SEO to enhance your website’s visibility.',
    category: 'Video Lectures',
    image: back05, // Directly reference the imported image
    button: 'Start Learning',
    icon: faPlay,
    link: '/Course/SEOBasics'
  },
  {
    id: 4,
    title: 'Financial Planning for Small Businesses',
    description: 'Create a solid financial plan for your small business with this comprehensive guide.',
    category: 'Assignments',
    image: back03, // Directly reference the imported image
    button: 'Download Assignment',
    icon: faDownload,
    link: '/Assignments/FinancialPlanning'
  },
  {
    id: 5,
    title: 'Marketing Strategy Assignment',
    description: 'Develop a marketing strategy with this comprehensive assignment.',
    category: 'Assignments',
    image: back06, // Directly reference the imported image
    button: 'Download Assignment',
    icon: faDownload,
    link: '/Assignments/MarketingStrategy'
  },
  {
    id: 6,
    title: 'Budget Planning Worksheet',
    description: 'A detailed worksheet to help you with budget planning.',
    category: 'Assignments',
    image: back07, // Directly reference the imported image
    button: 'Download Assignment',
    icon: faDownload,
    link: '/Assignments/BudgetPlanning'
  },
  {
    id: 7,
    title: 'Local Cafe Success Story',
    description: 'Discover how a small local cafe became a community favorite and expanded to multiple locations.',
    category: 'Case Studies',
    image: back04, // Directly reference the imported image
    button: 'Read More',
    icon: faBook,
    link: '/CaseStudy/LocalCafe'
  },
  {
    id: 8,
    title: 'Tech Startups in 2023',
    description: 'Analyzing the rise of tech startups and their impact on the economy.',
    category: 'Case Studies',
    image: back08, // Directly reference the imported image
    button: 'Read More',
    icon: faBook,
    link: '/CaseStudy/TechStartups'
  },
  {
    id: 9,
    title: 'Successful E-commerce Strategies',
    description: 'Explore successful e-commerce strategies through real-life examples.',
    category: 'Case Studies',
    image: back09, // Directly reference the imported image
    button: 'Read More',
    icon: faBook,
    link: '/CaseStudy/EcommerceStrategies'
  }
];

const JoinPrograms = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToCategory = (category) => {
    setActiveCategory(category);
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              onClick={() => scrollToCategory(category)}
              className={`px-4 py-2 rounded-full text-lg font-semibold transition-colors duration-300 ${activeCategory === category ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600 hover:bg-indigo-100'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {categories.map((category) => {
          const categoryCourses = filteredCourses.filter(course => course.category === category);
          return (
            <div key={category} id={category} className="mb-12">
              <h2 className="text-3xl font-bold text-indigo-800 mb-4">{category}</h2>
              {categoryCourses.length === 0 ? (
                <div className="text-center text-lg text-gray-600 mb-4">No courses found for this category.</div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {categoryCourses.map((course) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                    <div className="relative h-60"> {/* Set a fixed height for the image container */}
                   <img
                  src={course.image} // Directly reference the image
                          alt={course.title}
                        className="absolute h-full w-full object-contain top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" // Ensure full visibility with centered alignment
                       />
                        </div>

                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-indigo-800">{course.title}</h3>
                        <p className="text-gray-600 mb-4">{course.description}</p>
                        <div className="flex justify-between items-center">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${course.category === 'Video Lectures' ? 'bg-green-200 text-green-800' : course.category === 'Assignments' ? 'bg-yellow-200 text-yellow-800' : 'bg-blue-200 text-blue-800'}`}>
                            {course.category}
                          </span>
                          <button
                            onClick={() => navigate(course.link)}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300 flex items-center"
                          >
                            <FontAwesomeIcon icon={course.icon} className="mr-2" />
                            {course.button}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default JoinPrograms;
