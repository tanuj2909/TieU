import React, { useState, useEffect } from 'react'
import { FiUser, FiMenu, FiBell, FiChevronRight, FiDollarSign, FiUsers, FiTrendingUp } from 'react-icons/fi'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useRecoilValue } from 'recoil'
import { userState } from '../App'
import { useNavigate } from 'react-router'

import Navbar from './Navbar'

export default function Dashboard() {
  const user = useRecoilValue(userState);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null; 
  }
  

  const userProfile = {
    name: user.name,
    email: user.email,
    country: "United States",
    team: "Alpha Team"
  }

  const coursesEnrolled = [
    { name: "Business Strategy 101", assessment: 85, book: "Strategic Management by Thompson and Strickland" },
    { name: "Financial Management", assessment: 92, book: "Corporate Finance by Brealey, Myers, and Allen" },
    { name: "Digital Marketing", assessment: 78, book: "Digital Marketing: Strategy, Implementation and Practice by Chaffey and Ellis-Chadwick" }
  ]

  const businessStats = [
    {
      metric: "Revenue",
      icon: <FiDollarSign className="w-8 h-8 text-blue-600" />,
      value: "$500,000",
      change: "+25%",
      data: [
        { month: 'Jan', value: 400000 },
        { month: 'Feb', value: 430000 },
        { month: 'Mar', value: 448000 },
        { month: 'Apr', value: 470000 },
        { month: 'May', value: 500000 },
      ]
    },
    {
      metric: "Customers",
      icon: <FiUsers className="w-8 h-8 text-green-600" />,
      value: "1,500",
      change: "+15%",
      data: [
        { month: 'Jan', value: 1200 },
        { month: 'Feb', value: 1300 },
        { month: 'Mar', value: 1350 },
        { month: 'Apr', value: 1450 },
        { month: 'May', value: 1500 },
      ]
    },
    {
      metric: "Profit Margin",
      icon: <FiTrendingUp className="w-8 h-8 text-purple-600" />,
      value: "40%",
      change: "+5%",
      data: [
        { month: 'Jan', value: 20 },
        { month: 'Feb', value: 26 },
        { month: 'Mar', value: 31 },
        { month: 'Apr', value: 35 },
        { month: 'May', value: 40 },
      ]
    },
  ]
  return (
    <>
      <Navbar />
   
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out z-20`}>
        <nav>
          {['Dashboard', 'Analytics', 'Reports', 'Settings'].map((item, index) => (
            <a key={index} href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800 hover:text-white flex items-center">
              {item}
              <FiChevronRight className="ml-auto" />
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 focus:outline-none focus:text-gray-700 md:hidden">
              <FiMenu className="h-6 w-6" />
            </button>
            <div className="flex justify-center items-center ">
    <h1 className="text-5xl font-bold text-gray-800 font-serif items-center ">Business Admin Dashboard</h1>
</div>


            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <FiBell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <FiUser className="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {/* User Profile Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">User Profile</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-sm font-medium text-gray-500">Name</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{userProfile.name}</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{userProfile.email}</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-sm font-medium text-gray-500">Country</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{userProfile.country}</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-sm font-medium text-gray-500">Team</p>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{userProfile.team}</p>
                </div>
              </div>
            </div>

            {/* Business Statistics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {businessStats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">{stat.metric}</p>
                      <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
                    </div>
                    {stat.icon}
                  </div>
                  <div className="flex items-center">
                    <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.change}
                    </span>
                    <span className="text-sm font-medium text-gray-500 ml-2">from last month</span>
                  </div>
                  <div className="mt-4 h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={stat.data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis dataKey="month" stroke="#6B7280" />
                        <YAxis stroke="#6B7280" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#ffffff', borderColor: '#E5E7EB' }}
                          itemStyle={{ color: '#111827' }}
                        />
                        <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              ))}
            </div>

            {/* Courses and Assessments Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Courses and Assessments</h2>
              <div className="space-y-6">
                {coursesEnrolled.map((course, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4 last:border-b-0">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-800">{course.name}</h3>
                      <p className="text-sm text-gray-600">{course.book}</p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                        <span className="text-xl font-bold text-blue-600">{course.assessment}%</span>
                      </div>
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 rounded-full h-2" 
                          style={{ width: `${course.assessment}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>

    </>
  )
}