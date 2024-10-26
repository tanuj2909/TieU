import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { RocketLaunchIcon, ChatBubbleLeftRightIcon, PhoneIcon, CurrencyDollarIcon, UserGroupIcon, InboxIcon } from '@heroicons/react/24/outline';

import Erica from '../../assets/erica02.png';

const services = [
  { name: 'AI Outbound SDR', description: 'Automates outbound sales outreach to engage prospects efficiently.', icon: InboxIcon, route: '/EricaAITools/AIOutboundSDR' },
  { name: 'AI Inbound SDR', description: 'Handles incoming sales leads with fast, intelligent responses.', icon: ChatBubbleLeftRightIcon, route: '/EricaAITools/AIInboundSDR' },
  { name: 'AI Chat SDR', description: 'Manages real-time customer interactions on chat platforms with automated replies.', icon: ChatBubbleLeftRightIcon, route: '/EricaAITools/AIChatSDR' },
  { name: 'LinkedIn SDR', description: 'Automates LinkedIn outreach to grow professional connections.', icon: UserGroupIcon, route: '/EricaAITools/AILinkedInSDR' },
  { name: 'AI Phone Assistant', description: 'Answers and manages phone communications on behalf of the user.', icon: PhoneIcon, route: '/EricaAITools/AIPhoneAssistant' },
  { name: 'AI Revenue Operations', description: 'Optimizes revenue tracking, analysis, and reporting processes.', icon: CurrencyDollarIcon, route: '/EricaAITools/AIRevenueOperations' },
];

const AIsection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4"
            >
              Erica
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl text-gray-600 mb-6"
            >
              Your AI-Powered Personal Assistant
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-600"
            >
              Automate Your Tasks with Speed, Precision, and Efficiency
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={Erica}
              alt="AI Assistant Illustration"
              className="w-40 h-100 rounded-lg "
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <service.icon className="h-8 w-8 text-blue-500 mr-3" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300" onClick={() => navigate(service.route)}>
                Explore {service.name} →
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-xl text-gray-600 mb-6"
          >
            Ready to revolutionize your business operations?
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            <RocketLaunchIcon className="h-5 w-5 mr-2" />
            Get Started with Automation
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AIsection;
