import React, { useState } from 'react';
import { FaHome, FaUserPlus, FaCalendarAlt, FaCog, FaChartBar, FaEllipsisH, FaQuestionCircle, FaBell, FaUser } from 'react-icons/fa';

const LeaveDashboard = () => {
  const [activeTab, setActiveTab] = useState('Leave Summary');
  const [activeSidebarItem, setActiveSidebarItem] = useState('Leave Tracker');
  const [dateRange, setDateRange] = useState('01-Jan-2024 - 31-Dec-2024');

  const sidebarItems = [
    { icon: FaHome, label: 'Home' },
    { icon: FaUserPlus, label: 'Onboarding' },
    { icon: FaCalendarAlt, label: 'Leave Tracker' },
    { icon: FaCog, label: 'Operations' },
    { icon: FaChartBar, label: 'Reports' },
    { icon: FaEllipsisH, label: 'More' },
  ];

  const leaveTypes = [
    { type: 'Casual Leave', available: 12, booked: 0, icon: '☀️', color: 'bg-blue-100' },
    { type: 'Earned Leave', available: 12, booked: 0, icon: '🎯', color: 'bg-green-100' },
    { type: 'Leave Without Pay', available: 0, booked: 0, icon: '🌥️', color: 'bg-red-100' },
    { type: 'Paternity Leave', available: 0, booked: 0, icon: '👶', color: 'bg-pink-100' },
    { type: 'Sabbatical Leave', available: 0, booked: 0, icon: '🕰️', color: 'bg-yellow-100' },
  ];

  const renderContent = () => {
    switch (activeSidebarItem) {
      case 'Home':
        return <h2 className="text-xl font-bold">Welcome to your HR Dashboard</h2>;
      case 'Onboarding':
        return <h2 className="text-xl font-bold">Onboarding Process</h2>;
      case 'Leave Tracker':
        return (
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-4">
                {['Leave Summary', 'Leave Balance', 'Leave Requests', 'Shift'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-4 py-2 font-semibold ${activeTab === tab ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-600'}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 bg-gray-200 rounded-full">
                  <FaChartBar />
                </button>
                <button className="p-2 bg-gray-200 rounded-full">
                  <FaCalendarAlt />
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  Apply Leave
                </button>
                <button className="p-2">
                  <FaEllipsisH />
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-2 mb-4">
              <button className="p-2">{'<'}</button>
              <div className="px-4 py-2 bg-white rounded-md">{dateRange}</div>
              <button className="p-2">{'>'}</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
              {leaveTypes.map((leave) => (
                <div key={leave.type} className={`p-4 rounded-lg ${leave.color}`}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{leave.type}</h3>
                    <span className="text-2xl">{leave.icon}</span>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-sm">Available</p>
                      <p className="font-bold text-green-600">{leave.available}</p>
                    </div>
                    <div>
                      <p className="text-sm">Booked</p>
                      <p className="font-bold">{leave.booked}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Upcoming Leave & Holidays</h3>
              <p className="text-gray-600">No upcoming leaves or holidays</p>
            </div>
          </div>
        );
      case 'Operations':
        return <h2 className="text-xl font-bold">Operations Dashboard</h2>;
      case 'Reports':
        return <h2 className="text-xl font-bold">Reports and Analytics</h2>;
      case 'More':
        return <h2 className="text-xl font-bold">Additional Options</h2>;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-16 md:w-64 bg-gray-900 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold hidden md:block">HR System</h1>
        </div>
        <nav>
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              className={`flex items-center w-full p-4 hover:bg-gray-800 ${
                activeSidebarItem === item.label ? 'bg-gray-800' : ''
              }`}
              onClick={() => setActiveSidebarItem(item.label)}
            >
              <item.icon className="w-6 h-6" />
              <span className="ml-4 hidden md:inline">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">{activeSidebarItem}</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2">
              <FaQuestionCircle />
            </button>
            <button className="p-2">
              <FaBell />
            </button>
            <button className="p-2">
              <FaUser />
            </button>
          </div>
        </header>
        {renderContent()}
      </main>
    </div>
  );
};

export default LeaveDashboard;