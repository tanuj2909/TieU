import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../pages/Navbar';
import Footer from '../pages/MainPage/Footer'
import { FaEnvelope, FaLinkedin, FaChartBar, FaCog, FaSearch, FaUserCheck, FaRobot, FaEdit, FaPhoneAlt, FaDatabase, FaChartLine, FaPlug } from 'react-icons/fa';

const AIOutboundExplore = () => {
  const [activeTab, setActiveTab] = useState('personalization');
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [selectedVariable, setSelectedVariable] = useState('');
  const [selectedIceBreaker, setSelectedIceBreaker] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [leadCriteria, setLeadCriteria] = useState('');
  const [engagementChannel, setEngagementChannel] = useState('email');
  const [qualificationScore, setQualificationScore] = useState(50);

  const tabs = [
    { id: 'personalization', title: 'AI-Crafted Personalization', icon: FaRobot },
    { id: 'templates', title: 'Template-Based Customization', icon: FaCog },
    { id: 'diy', title: 'Tailored DIY Messaging', icon: FaEdit },
  ];

  const features = [
    { id: 'leadDiscovery', title: 'Precision-Driven Lead Discovery', icon: FaSearch },
    { id: 'engagement', title: 'Tailored Engagement at Scale', icon: FaEnvelope },
    { id: 'multiChannel', title: 'Seamless Multi-Channel Engagement', icon: FaPhoneAlt },
    { id: 'qualification', title: 'Instant Lead Qualification', icon: FaUserCheck },
    { id: 'analytics', title: 'Outreach Analytics', icon: FaChartLine },
    { id: 'crm', title: 'Seamless CRM Integration', icon: FaPlug },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personalization':
        return (
          <div className="space-y-4">
            <p className="text-lg">Jeeva crafts unique messages for each lead, boosting engagement.</p>
            <div className="flex space-x-4">
              <input
                type="text"
                className="flex-grow p-2 border rounded"
                placeholder="Enter lead's name or company"
              />
              <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                Generate AI Message
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <h4 className="font-bold mb-2">AI Suggestions:</h4>
              <ul className="list-disc list-inside">
                <li>Mention recent company news</li>
                <li>Highlight industry-specific pain points</li>
                <li>Suggest a personalized solution</li>
              </ul>
            </div>
          </div>
        );
      case 'templates':
        return (
          <div className="space-y-4">
            <p className="text-lg">Jeeva creates templates that adjust details for each lead, saving time.</p>
            <select 
              className="w-full p-2 border rounded" 
              value={selectedTemplate} 
              onChange={(e) => setSelectedTemplate(e.target.value)}
            >
              <option value="">Select a template</option>
              <option value="template1">Cold Outreach</option>
              <option value="template2">Follow-up</option>
              <option value="template3">Meeting Request</option>
            </select>
            {selectedTemplate && (
              <div className="bg-gray-100 p-4 rounded">
                <h4 className="font-bold mb-2">Template Preview:</h4>
                <p>Hello {'{FirstName}'},</p>
                <p>I noticed that {'{CompanyName}'} has been making waves in the {'{Industry}'} sector...</p>
                <p>Would you be interested in learning how we've helped similar companies increase their ROI by {'{Percentage}'}?</p>
              </div>
            )}
          </div>
        );
      case 'diy':
        return (
          <div className="space-y-4">
            <p className="text-lg">Write your own messages, paste them in, and add personalized placeholders.</p>
            <textarea 
              className="w-full p-2 border rounded" 
              rows="6" 
              placeholder="Enter your custom message here"
            ></textarea>
            <div className="flex space-x-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Insert Placeholder
              </button>
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                Save as Template
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
        <div className="flex space-x-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center space-x-2 px-4 py-2 rounded transition-colors ${
                activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon />
              <span>{tab.title}</span>
            </button>
          ))}
        </div>
        {renderTabContent()}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Email Composer</h2>
        <div className="space-y-4">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Subject"
            value={emailSubject}
            onChange={(e) => setEmailSubject(e.target.value)}
          />
          <div className="flex space-x-4">
            <select 
              className="p-2 border rounded" 
              value={selectedVariable} 
              onChange={(e) => setSelectedVariable(e.target.value)}
            >
              <option value="">Variables</option>
              <option value="firstName">First Name</option>
              <option value="company">Company</option>
              <option value="industry">Industry</option>
            </select>
            <select 
              className="p-2 border rounded" 
              value={selectedIceBreaker} 
              onChange={(e) => setSelectedIceBreaker(e.target.value)}
            >
              <option value="">Ice Breakers</option>
              <option value="weather">Weather</option>
              <option value="news">Recent News</option>
              <option value="sports">Sports</option>
            </select>
          </div>
          <textarea
            className="w-full p-2 border rounded"
            rows="6"
            placeholder="Email body"
            value={emailBody}
            onChange={(e) => setEmailBody(e.target.value)}
          ></textarea>
          <div className="flex justify-end space-x-2">
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">
              Save Draft
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Workflow</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded">
            <FaEnvelope className="text-blue-500" />
            <span>Send Email</span>
            <input type="text" className="flex-grow p-1 border rounded" placeholder="Recipient" />
          </div>
          <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded">
            <FaCog className="text-gray-500" />
            <span>Wait</span>
            <input type="number" className="w-16 p-1 border rounded" defaultValue="2" />
            <span>days</span>
          </div>
          <div className="flex items-center space-x-4 bg-gray-100 p-2 rounded">
            <FaLinkedin className="text-blue-700" />
            <span>LinkedIn Connection</span>
            <input type="text" className="flex-grow p-1 border rounded" placeholder="LinkedIn URL" />
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
            Add Step
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <feature.icon className="text-3xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            {feature.id === 'leadDiscovery' && (
              <div className="space-y-2">
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter lead criteria"
                  value={leadCriteria}
                  onChange={(e) => setLeadCriteria(e.target.value)}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full">
                  Discover Leads
                </button>
              </div>
            )}
            {feature.id === 'engagement' && (
              <div className="space-y-2">
                <select
                  className="w-full p-2 border rounded"
                  value={engagementChannel}
                  onChange={(e) => setEngagementChannel(e.target.value)}
                >
                  <option value="email">Email</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="phone">Phone</option>
                </select>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full">
                  Start Engagement
                </button>
              </div>
            )}
            {feature.id === 'qualification' && (
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={qualificationScore}
                  onChange={(e) => setQualificationScore(e.target.value)}
                  className="w-full"
                />
                <div className="text-center">Score: {qualificationScore}</div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full">
                  Qualify Lead
                </button>
              </div>
            )}
            {(feature.id === 'multiChannel' || feature.id === 'analytics' || feature.id === 'crm') && (
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full mt-2">
                Configure
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>


        <Footer />
    </>
  );
};

export default AIOutboundExplore;