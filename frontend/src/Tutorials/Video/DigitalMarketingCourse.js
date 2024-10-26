import React, { useState } from 'react';
import Navbar from '../../pages/Navbar';

const courseData = [
  {
    title: "Introduction to Digital Marketing",
    subChapters: ["What is Digital Marketing?", "The Digital Marketing Landscape", "Key Concepts and Terminology"]
  },
  {
    title: "Content Marketing",
    subChapters: ["Content Strategy", "Creating Engaging Content", "Content Distribution", "Measuring Content Performance"]
  },
  {
    title: "Search Engine Optimization (SEO)",
    subChapters: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Local SEO"]
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    subChapters: ["Google Ads", "Bing Ads", "Display Advertising", "Retargeting"]
  },
  {
    title: "Social Media Marketing",
    subChapters: ["Facebook Marketing", "Instagram Marketing", "Twitter Marketing", "LinkedIn Marketing"]
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    subChapters: ["Introduction to PPC and Google Ads", "Campaign Structure and Targeting", "Measuring PPC Success"]
  },
  {
    title: "Email Marketing",
    subChapters: ["Building an Email List", "Email Campaigns and Automation", "Creating Effective Email Content","Email Analytics and Metrics"]
  },

];

function DigitalMarketingCourse() {
  const [openChapter, setOpenChapter] = useState(null);

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">
            Digital Marketing Mastery
          </h1>
          <p className="text-xl text-gray-600">Elevate your marketing skills with our comprehensive course</p>
        </header>

        <main className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-blue-500">Course Content</h2>
            {courseData.map((chapter, index) => (
              <div key={index} className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
                <button 
                  onClick={() => setOpenChapter(openChapter === index ? null : index)}
                  className="w-full text-left p-4 focus:outline-none transition-all duration-300 hover:bg-gray-50"
                >
                  <h3 className="text-lg font-medium flex items-center text-blue-700">
                    <span className="mr-3 bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    {chapter.title}
                  </h3>
                </button>
                {openChapter === index && (
                  <ul className="px-4 pb-4 space-y-2">
                    {chapter.subChapters.map((subChapter, subIndex) => (
                      <li key={subIndex} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M9 5l7 7-7 7"></path>
                        </svg>
                        {subChapter}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Course Overview</h3>
              <div className="space-y-3 mb-6">
                <p className="flex justify-between text-lg">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-semibold">$99.99</span>
                </p>
                <p className="flex justify-between text-lg">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">10 hours</span>
                </p>
                <p className="flex justify-between text-lg">
                  <span className="text-gray-600">Chapters:</span>
                  <span className="font-semibold">5</span>
                </p>
              </div>
              <button 
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Enroll Now
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold mb-4 text-blue-800">What You'll Learn</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                  Master digital marketing strategies
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                  Create compelling content
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                  Optimize for search engines
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                  Run effective ad campaigns
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>

    </>
  );
}

export default DigitalMarketingCourse;