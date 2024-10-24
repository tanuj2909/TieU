import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from  '../pages/Navbar';
import Footer from '../pages/MainPage/Footer'
import { FaSearch, FaEnvelope, FaPhoneAlt, FaLinkedin, FaUserCheck, FaChartLine, FaPlug } from 'react-icons/fa';

const AIinboundExplore = () => {
  const [activeTab, setActiveTab] = useState('leadDiscovery');
  const [leadCriteria, setLeadCriteria] = useState('');
  const [messageTemplate, setMessageTemplate] = useState('');
  const [selectedChannel, setSelectedChannel] = useState('email');
  const [qualificationCriteria, setQualificationCriteria] = useState('');

  const tools = [
    { id: 'leadDiscovery', title: 'Precision-Driven Lead Discovery', icon: FaSearch },
    { id: 'engagement', title: 'Tailored Engagement at Scale', icon: FaEnvelope },
    { id: 'multiChannel', title: 'Seamless Multi-Channel Engagement', icon: FaPhoneAlt },
    { id: 'qualification', title: 'Instant Lead Qualification', icon: FaUserCheck },
    { id: 'analytics', title: 'Outreach Analytics', icon: FaChartLine },
    { id: 'crm', title: 'Seamless CRM Integration', icon: FaPlug },
  ];

  const renderToolContent = () => {
    switch (activeTab) {
      case 'leadDiscovery':
        return (
          <div className="space-y-4">
            <p className="text-lg">Find ideal leads based on specific criteria.</p>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter lead criteria (e.g., industry, company size, location)"
              value={leadCriteria}
              onChange={(e) => setLeadCriteria(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Discover Leads
            </button>
          </div>
        );
      case 'engagement':
        return (
          <div className="space-y-4">
            <p className="text-lg">Create personalized outreach messages at scale.</p>
            <textarea
              className="w-full p-2 border rounded"
              rows="4"
              placeholder="Enter message template with placeholders (e.g., {FirstName}, {CompanyName})"
              value={messageTemplate}
              onChange={(e) => setMessageTemplate(e.target.value)}
            ></textarea>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Generate Personalized Messages
            </button>
          </div>
        );
      case 'multiChannel':
        return (
          <div className="space-y-4">
            <p className="text-lg">Engage prospects across multiple channels.</p>
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 rounded ${selectedChannel === 'email' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedChannel('email')}
              >
                <FaEnvelope className="inline mr-2" /> Email
              </button>
              <button
                className={`px-4 py-2 rounded ${selectedChannel === 'phone' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedChannel('phone')}
              >
                <FaPhoneAlt className="inline mr-2" /> Phone
              </button>
              <button
                className={`px-4 py-2 rounded ${selectedChannel === 'linkedin' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedChannel('linkedin')}
              >
                <FaLinkedin className="inline mr-2" /> LinkedIn
              </button>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Start Multi-Channel Campaign
            </button>
          </div>
        );
      case 'qualification':
        return (
          <div className="space-y-4">
            <p className="text-lg">Instantly qualify leads based on set criteria.</p>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter qualification criteria"
              value={qualificationCriteria}
              onChange={(e) => setQualificationCriteria(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Qualify Leads
            </button>
          </div>
        );
      case 'analytics':
        return (
          <div className="space-y-4">
            <p className="text-lg">View and analyze your outreach performance.</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-lg">Email Open Rate</h3>
                <p className="text-2xl text-blue-500">45%</p>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-lg">Response Rate</h3>
                <p className="text-2xl text-blue-500">12%</p>
              </div>
              <div className="bg-gray-100 p-4 rounded">
                <h3 className="font-bold text-lg">Meetings Booked</h3>
                <p className="text-2xl text-blue-500">8</p>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Generate Detailed Report
            </button>
          </div>
        );
      case 'crm':
        return (
          <div className="space-y-4">
            <p className="text-lg">Integrate with your favorite CRM platform.</p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Connect Salesforce
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                Connect HubSpot
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors">
                Connect Pipedrive
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">ERICA - AI Outbound SDR</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-wrap justify-center space-x-4 mb-6">
          {tools.map((tool) => (
            <motion.button
              key={tool.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-2 px-4 py-2 rounded mb-2 ${
                activeTab === tool.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => setActiveTab(tool.id)}
            >
              <tool.icon />
              <span>{tool.title}</span>
            </motion.button>
          ))}
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          {renderToolContent()}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Workflow Overview</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded">
            <FaSearch className="text-blue-500" />
            <span>Discover Leads</span>
          </div>
          <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded">
            <FaEnvelope className="text-green-500" />
            <span>Personalize Outreach</span>
          </div>
          <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded">
            <FaPhoneAlt className="text-red-500" />
            <span>Multi-Channel Engagement</span>
          </div>
          <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded">
            <FaUserCheck className="text-purple-500" />
            <span>Qualify Leads</span>
          </div>
          <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded">
            <FaChartLine className="text-orange-500" />
            <span>Analyze Performance</span>
          </div>
          <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded">
            <FaPlug className="text-indigo-500" />
            <span>Sync with CRM</span>
          </div>
        </div>
      </div>
    </div>

<Footer />
    </>
  );
};

export default AIinboundExplore;