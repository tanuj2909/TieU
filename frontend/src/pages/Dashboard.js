import React from 'react'
import { FiUser, FiBook, FiBarChart2 } from 'react-icons/fi'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useRecoilValue } from 'recoil'
import { userState } from '../App'
import { redirect } from 'react-router'

export default function Dashboard() {
  const user = useRecoilValue(userState);
  if(!user) redirect("/login")
  const userProfile = {
    name: user.name,
    email: user.email,
    country: "United States",
    team: "Alpha Team"
  }

  const coursesEnrolled = [
    { name: "Business Strategy 101", assessment: "85%", book: "Strategic Management by Thompson and Strickland" },
    { name: "Financial Management", assessment: "92%", book: "Corporate Finance by Brealey, Myers, and Allen" },
    { name: "Digital Marketing", assessment: "78%", book: "Digital Marketing: Strategy, Implementation and Practice by Chaffey and Ellis-Chadwick" }
  ]

  const businessStats = [
    {
      metric: "Revenue",
      data: [
        { month: 'Jan', value: 400000 },
        { month: 'Feb', value: 430000 },
        { month: 'Mar', value: 448000 },
        { month: 'Apr', value: 470000 },
        { month: 'May', value: 500000 },
      ]
    },
    {
      metric: "Expenses",
      data: [
        { month: 'Jan', value: 320000 },
        { month: 'Feb', value: 318000 },
        { month: 'Mar', value: 310000 },
        { month: 'Apr', value: 305000 },
        { month: 'May', value: 300000 },
      ]
    },
    {
      metric: "Profit Margin",
      data: [
        { month: 'Jan', value: 20 },
        { month: 'Feb', value: 26 },
        { month: 'Mar', value: 31 },
        { month: 'Apr', value: 35 },
        { month: 'May', value: 40 },
      ]
    },
    {
      metric: "Customer Acquisition Cost",
      data: [
        { month: 'Jan', value: 62 },
        { month: 'Feb', value: 58 },
        { month: 'Mar', value: 55 },
        { month: 'Apr', value: 52 },
        { month: 'May', value: 50 },
      ]
    },
    {
      metric: "Customer Lifetime Value",
      data: [
        { month: 'Jan', value: 800 },
        { month: 'Feb', value: 850 },
        { month: 'Mar', value: 900 },
        { month: 'Apr', value: 950 },
        { month: 'May', value: 1000 },
      ]
    },
    {
      metric: "Employee Satisfaction",
      data: [
        { month: 'Jan', value: 4.2 },
        { month: 'Feb', value: 4.3 },
        { month: 'Mar', value: 4.4 },
        { month: 'Apr', value: 4.4 },
        { month: 'May', value: 4.5 },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Portfolio Window */}
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Portfolio</h2>
          
          {/* User Profile Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <FiUser className="mr-2" /> User Profile
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <p><strong>Name:</strong> {userProfile.name}</p>
              <p><strong>Email:</strong> {userProfile.email}</p>
              <p><strong>Country:</strong> {userProfile.country}</p>
              <p><strong>Team:</strong> {userProfile.team}</p>
            </div>
          </div>
          
          {/* Courses and Assessments Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <FiBook className="mr-2" /> Courses and Assessments
            </h3>
            {coursesEnrolled.map((course, index) => (
              <div key={index} className="mb-4 p-4 bg-white bg-opacity-20 rounded-lg">
                <h4 className="font-semibold">{course.name}</h4>
                <p><strong>Assessment:</strong> {course.assessment}</p>
                <p><strong>Relevant Book:</strong> {course.book}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Statistics Window */}
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 flex items-center">
            <FiBarChart2 className="mr-2" /> Business Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {businessStats.map((stat, index) => (
              <div key={index} className="p-4 bg-white bg-opacity-20 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{stat.metric}</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={stat.data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff40" />
                    <XAxis dataKey="month" stroke="#ffffff" />
                    <YAxis stroke="#ffffff" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#ffffff', color: '#000000' }}
                      itemStyle={{ color: '#000000' }}
                    />
                    <Line type="monotone" dataKey="value" stroke="#ffffff" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
                <p className="mt-2 text-center">
                  Current: {stat.data[stat.data.length - 1].value}
                  <span className={`ml-2 ${stat.data[stat.data.length - 1].value > stat.data[0].value ? 'text-green-300' : 'text-red-300'}`}>
                    ({((stat.data[stat.data.length - 1].value - stat.data[0].value) / stat.data[0].value * 100).toFixed(2)}%)
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}