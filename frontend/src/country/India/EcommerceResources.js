import Navbar from "../../pages/Navbar";
import React from 'react';
import { motion } from 'framer-motion';

// Define the challenges and resources for small-scale business owners
const challengesAndResources = [
  {
    title: 'Market Competition',
    challenge: 'Intense competition from larger e-commerce platforms and other small businesses.',
    resource: 'Digital marketing tools can help you stand out and attract customers effectively.',
    color: 'bg-red-500',
  },
  {
    title: 'Digital Marketing',
    challenge: 'Lack of expertise in digital marketing strategies.',
    resource: 'Online courses and tutorials can enhance your marketing skills.',
    color: 'bg-orange-500',
  },
  {
    title: 'Logistics and Supply Chain Management',
    challenge: 'Managing inventory, shipping, and returns efficiently.',
    resource: 'Logistics solutions offer streamlined shipping and tracking.',
    color: 'bg-yellow-500',
  },
  {
    title: 'Customer Trust and Brand Building',
    challenge: 'Building brand trust in a crowded marketplace.',
    resource: 'Engaging with customers on social media helps build your brand reputation.',
    color: 'bg-green-500',
  },
  {
    title: 'Payment Solutions',
    challenge: 'Ensuring secure and convenient payment options.',
    resource: 'Integrating trusted payment gateways provides safe transactions.',
    color: 'bg-blue-500',
  },
  {
    title: 'Technology Adoption',
    challenge: 'Keeping up with technology and platform updates.',
    resource: 'Utilizing modern e-commerce platforms simplifies operations.',
    color: 'bg-purple-500',
  },
  {
    title: 'Customer Support',
    challenge: 'Providing timely and effective customer support.',
    resource: 'Using CRM tools can enhance your customer service capabilities.',
    color: 'bg-pink-500',
  },
  {
    title: 'Regulatory Compliance',
    challenge: 'Navigating complex regulations related to online selling.',
    resource: 'Consulting legal resources ensures you stay compliant.',
    color: 'bg-teal-500',
  },
];

const BusinessChallengesPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-600 text-white p-8">
        <h1 className="text-7xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Challenges Faced by Small-Scale Business Owners
        </h1>
        <div className="mt-2 mb-10 text-center">
          <p className="text-3xl">Explore the common challenges and available resources for online selling.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {challengesAndResources.map((item, index) => (
            <motion.div
              key={item.title}
              className={`${item.color} rounded-lg p-6 cursor-pointer transform transition-all duration-300 hover:shadow-2xl`}
              whileHover={{ scale: 1.1 }}  // Enlarge the card when hovered
              whileTap={{ scale: 0.95 }}  // Shrink slightly when clicked
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl font-bold text-center">{item.title}</h2>
                <p className="mt-2 text-lg opacity-75 text-center">{item.challenge}</p>
                <p className="mt-2 text-sm opacity-75 text-center">{item.resource}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl">Empower your business by addressing these challenges with the right resources.</p>
          <p className="text-sm mt-2 opacity-75">Explore opportunities and enhance your success in the online marketplace.</p>
        </div>
      </div>
    </>
  );
};

export default BusinessChallengesPage;
