import React, { useState } from 'react';
import Navbar from '../../pages/Navbar';

const assignmentData = [
  {
    title: "Financial Planning for Small Businesses",
    subChapters: [
      "Overview of Financial Planning",
      "Importance of Financial Planning for Small Businesses",
      "Components of a Financial Plan"
    ]
  },
  {
    title: "Research and Analysis",
    subChapters: [
      "Research Current Trends in Financial Planning",
      "Summarize Findings in a Report"
    ]
  },
  {
    title: "Budgeting Exercise",
    subChapters: [
      "Create a Sample Budget for a Hypothetical Business",
      "Include Revenue, Fixed and Variable Expenses"
    ]
  },
  {
    title: "Cash Flow Forecast",
    subChapters: [
      "Develop a Cash Flow Forecast for 12 Months",
      "Consider Seasonal Fluctuations"
    ]
  },
  {
    title: "Financial Goals Setting",
    subChapters: [
      "Outline Short-term and Long-term Financial Goals",
      "Use SMART Criteria"
    ]
  },
  {
    title: "Case Study Analysis",
    subChapters: [
      "Select a Small Business for Analysis",
      "Discuss Successful Financial Strategies"
    ]
  }
];

function FinancialPlanning() {
  const [openChapter, setOpenChapter] = useState(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 font-sans text-gray-800 p-8">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-800">
              Financial Planning for Small Businesses
            </h1>
            <p className="text-xl text-gray-600">Enhance your business acumen with our comprehensive assignment</p>
          </header>

          <main className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-semibold mb-6 pb-2 border-b-2 border-blue-500">Assignment Content</h2>
              {assignmentData.map((chapter, index) => (
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
                <h3 className="text-2xl font-bold mb-4 text-blue-800">Assignment Overview</h3>
                <div className="space-y-3 mb-6">
                  <p className="flex justify-between text-lg">
                    <span className="text-gray-600">Due Date:</span>
                    <span className="font-semibold">[Insert due date here]</span>
                  </p>
                  <p className="flex justify-between text-lg">
                    <span className="text-gray-600">Total Points:</span>
                    <span className="font-semibold">100</span>
                  </p>
                  <p className="flex justify-between text-lg">
                    <span className="text-gray-600">Submission Format:</span>
                    <span className="font-semibold">PDF/Word Document</span>
                  </p>
                </div>
                <button 
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Submit Assignment
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-4 text-blue-800">Learning Outcomes</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    Understand key financial concepts
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    Create effective budgets and forecasts
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    Set financial goals using SMART criteria
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7"></path></svg>
                    Analyze real-world case studies
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

export default FinancialPlanning;
