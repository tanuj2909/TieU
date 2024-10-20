import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch, faSun, faMoon, faFilter, faGlobe, faIndustry, 
  faUsers, faChartLine, faComments, faCalendarAlt, faNewspaper, 
  faHandshake, faLightbulb, faRocket
} from '@fortawesome/free-solid-svg-icons';

const industries = ['Technology', 'Healthcare', 'Retail', 'Finance', 'Non-profits', 'Small Businesses'];
const topics = ['Networking', 'Skill Development', 'Industry Trends', 'Entrepreneurship', 'Leadership', 'Innovation'];

const discussionThreads = [
  {
    id: 1,
    title: 'Adapting to Remote Work Culture',
    author: 'Sarah Chen',
    industry: 'Technology',
    topic: 'Leadership',
    replies: 23,
    lastActive: '2h ago',
  },
  {
    id: 2,
    title: 'Sustainable Practices in Retail',
    author: 'Alex Kim',
    industry: 'Retail',
    topic: 'Industry Trends',
    replies: 15,
    lastActive: '4h ago',
  },
  {
    id: 3,
    title: 'Fintech Innovations Reshaping Banking',
    author: 'Elena Vasquez',
    industry: 'Finance',
    topic: 'Innovation',
    replies: 31,
    lastActive: '1h ago',
  },
  {
    id: 4,
    title: 'Building a Strong Personal Brand',
    author: 'Jamal Thompson',
    industry: 'Small Businesses',
    topic: 'Entrepreneurship',
    replies: 42,
    lastActive: '30m ago',
  },
  {
    id: 5,
    title: 'AI in Healthcare: Opportunities and Challenges',
    author: 'Dr. Aisha Johnson',
    industry: 'Healthcare',
    topic: 'Industry Trends',
    replies: 28,
    lastActive: '3h ago',
  },
  {
    id: 6,
    title: 'Effective Fundraising Strategies for Non-profits',
    author: 'Carlos Rodriguez',
    industry: 'Non-profits',
    topic: 'Skill Development',
    replies: 19,
    lastActive: '5h ago',
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Tech Summit',
    date: '2023-11-15',
    industry: 'Technology',
  },
  {
    id: 2,
    title: 'Small Business Networking Mixer',
    date: '2023-10-28',
    industry: 'Small Businesses',
  },
  {
    id: 3,
    title: 'Healthcare Innovation Workshop',
    date: '2023-11-05',
    industry: 'Healthcare',
  },
];

const EnhancedBusinessCommunityHub = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    industry: '',
    topic: '',
  });
  const [filteredThreads, setFilteredThreads] = useState(discussionThreads);

  useEffect(() => {
    const filtered = discussionThreads.filter(thread => 
      (searchTerm === '' || thread.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filters.industry === '' || thread.industry === filters.industry) &&
      (filters.topic === '' || thread.topic === filters.topic)
    );
    setFilteredThreads(filtered);
  }, [searchTerm, filters]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gradient-to-br from-purple-100 to-indigo-200 text-gray-900'} transition-colors duration-300`}>
      <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Business Community Hub</h1>
          <button onClick={toggleDarkMode} className="p-2 rounded-full bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-300">
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </button>
        </div>
      </nav>

      <main className="container mx-auto p-4">
        <motion.section 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search discussions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 pl-10 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:outline-none dark:border-purple-600 dark:bg-gray-800 dark:focus:border-purple-400"
              />
              <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-3 text-purple-400" />
            </div>
            <div className="flex gap-2">
              <select
                value={filters.industry}
                onChange={(e) => setFilters({...filters, industry: e.target.value})}
                className="p-2 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:outline-none dark:border-purple-600 dark:bg-gray-800 dark:focus:border-purple-400"
              >
                <option value="">All Industries</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              <select
                value={filters.topic}
                onChange={(e) => setFilters({...filters, topic: e.target.value})}
                className="p-2 rounded-full border-2 border-purple-300 focus:border-purple-500 focus:outline-none dark:border-purple-600 dark:bg-gray-800 dark:focus:border-purple-400"
              >
                <option value="">All Topics</option>
                {topics.map(topic => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>
          </div>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-purple-800 dark:text-purple-300">Discussion Threads</h2>
            <AnimatePresence>
              {filteredThreads.map(thread => (
                <motion.div
                  key={thread.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-4 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="p-6 border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">{thread.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Posted by {thread.author}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-semibold">
                        {thread.industry}
                      </span>
                      <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-semibold">
                        {thread.topic}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                      <span>{thread.replies} replies</span>
                      <span>Last active {thread.lastActive}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredThreads.length === 0 && (
              <p className="text-center text-gray-500 dark:text-gray-400 mt-8">No discussions found matching your criteria. Try adjusting your filters.</p>
            )}
          </section>

          <aside className="lg:col-span-1">
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">Upcoming Events</h2>
              <ul className="space-y-4">
                {upcomingEvents.map(event => (
                  <li key={event.id} className="flex items-center">
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-purple-500 mr-3" />
                    <div>
                      <h3 className="font-semibold text-purple-600 dark:text-purple-300">{event.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{event.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">Community Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <FontAwesomeIcon icon={faUsers} className="text-3xl text-purple-500 mb-2" />
                  <p className="font-semibold text-purple-700 dark:text-purple-300">5,000+</p>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Members</p>
                </div>
                <div className="text-center p-4 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                  <FontAwesomeIcon icon={faComments} className="text-3xl text-indigo-500 mb-2" />
                  <p className="font-semibold text-indigo-700 dark:text-indigo-300">10,000+</p>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">Discussions</p>
                </div>
                <div className="text-center p-4 bg-pink-100 dark:bg-pink-900 rounded-lg">
                  <FontAwesomeIcon icon={faIndustry} className="text-3xl text-pink-500 mb-2" />
                  <p className="font-semibold text-pink-700 dark:text-pink-300">{industries.length}</p>
                  <p className="text-sm text-pink-600 dark:text-pink-400">Industries</p>
                </div>
                <div className="text-center p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <FontAwesomeIcon icon={faHandshake} className="text-3xl text-blue-500 mb-2" />
                  <p className="font-semibold text-blue-700 dark:text-blue-300">500+</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Partnerships</p>
                </div>
              </div>
            </section>
          </aside>
        </div>

        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-purple-800 dark:text-purple-300">Why Join Our Community?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-400 to-indigo-500 p-6 rounded-lg shadow-lg text-white">
              <FontAwesomeIcon icon={faLightbulb} className="text-4xl text-yellow-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Knowledge Sharing</h3>
              <p>Access insights and expertise from diverse industry professionals.</p>
            </div>
            <div className="bg-gradient-to-br from-pink-400 to-red-500 p-6 rounded-lg shadow-lg text-white">
              <FontAwesomeIcon icon={faHandshake} className="text-4xl text-blue-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Networking Opportunities</h3>
              <p>Connect with like-minded individuals and potential collaborators.</p>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-blue-500 p-6 rounded-lg shadow-lg text-white">
              <FontAwesomeIcon icon={faRocket} className="text-4xl text-purple-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Career Growth</h3>
              <p>Accelerate your professional development through community resources.</p>
            </div>
          </div>
        </motion.section>
      </main>

      <footer  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Business Community Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedBusinessCommunityHub;