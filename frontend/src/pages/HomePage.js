import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import back01 from '../assets/back03.png';
import amazonlogo from '../assets/amazon.png';
import wallmartlogo from '../assets/wallmart.png';
import ebaylogo from '../assets/ebay.png';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Empowering Businesses With Personalized Expert AI Consulting.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            At BizElevate, we specialize in providing comprehensive business consulting services to help organizations thrive in today's competitive landscape backed by AI.
          </p>
          <div className="flex space-x-4">
            <button
              className="bg-gray-800 text-white px-6 py-3 rounded flex items-center hover:bg-gray-700 transition duration-300"
              onClick={() => navigate('/Resource')}
            >
              Get Started
              <FiArrowRight className="ml-2" />
            </button>
            <button
              className="border border-gray-300 text-gray-800 px-6 py-3 rounded flex items-center hover:bg-gray-100 transition duration-300"
              onClick={() => navigate('/JoinProgram')}
            >
              Watch Demo
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="mt-12">
            <p className="text-sm text-gray-500 mb-4">Trusted By 500+ Companies</p>
            <div className="flex space-x-6">
              <img src={amazonlogo} alt="Company 1" className="h-12 w-12" />
              <img src={wallmartlogo} alt="Company 2" className="h-12 w-12" />
              <img src={ebaylogo} alt="Company 3" className="h-12 w-12" />
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src={back01} 
            alt="Business Consultant" 
            className="w-43 h-43" 
          />
        </div>
      </main>
    </div>
  );
}
