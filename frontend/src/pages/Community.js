import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
// Mock data (in a real app, this would come from an API)
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

const Community = () => {
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

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-800">Business Community Hub</h1>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-8">
        <section className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search discussions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={filters.industry}
                onChange={(e) => setFilters({...filters, industry: e.target.value})}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Industries</option>
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              <select
                value={filters.topic}
                onChange={(e) => setFilters({...filters, topic: e.target.value})}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Topics</option>
                {topics.map(topic => (
                  <option key={topic} value={topic}>{topic}</option>
                ))}
              </select>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Discussion Threads</h2>
            {filteredThreads.map(thread => (
              <div key={thread.id} className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{thread.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">Posted by {thread.author}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {thread.industry}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {thread.topic}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{thread.replies} replies</span>
                    <span>Last active {thread.lastActive}</span>
                  </div>
                </div>
              </div>
            ))}
            {filteredThreads.length === 0 && (
              <p className="text-center text-gray-500 mt-8">No discussions found matching your criteria. Try adjusting your filters.</p>
            )}
          </section>

          <aside className="lg:col-span-1">
            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Upcoming Events</h2>
              <ul className="space-y-4">
                {upcomingEvents.map(event => (
                  <li key={event.id}>
                    <h3 className="font-semibold text-gray-800">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.date}</p>
                    <p className="text-sm text-blue-600">{event.industry}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Community Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-100 rounded-lg">
                  <p className="font-semibold text-gray-800">5,000+</p>
                  <p className="text-sm text-gray-600">Members</p>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-lg">
                  <p className="font-semibold text-gray-800">10,000+</p>
                  <p className="text-sm text-gray-600">Discussions</p>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-lg">
                  <p className="font-semibold text-gray-800">{industries.length}</p>
                  <p className="text-sm text-gray-600">Industries</p>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-lg">
                  <p className="font-semibold text-gray-800">500+</p>
                  <p className="text-sm text-gray-600">Partnerships</p>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Business Community Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>

    </>
  );
};

export default Community;