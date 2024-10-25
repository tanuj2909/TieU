import React from 'react';
import { FaHome, FaUserTie, FaAddressBook, FaBriefcase, FaHandshake, FaTasks, FaCalendarAlt, FaPhoneAlt, FaChartBar, FaChartLine, FaCogs, FaProjectDiagram, FaEllipsisH, FaPlus, FaSearch, FaBell, FaComments, FaCog, FaUserCircle } from 'react-icons/fa';

const CRMtool = () => {
    
  const navItems = [
    { icon: FaHome, label: 'Home' },
    { icon: FaUserTie, label: 'Leads' },
    { icon: FaAddressBook, label: 'Contacts' },
    { icon: FaBriefcase, label: 'Accounts' },
    { icon: FaHandshake, label: 'Deals' },
    { icon: FaTasks, label: 'Tasks' },
    { icon: FaCalendarAlt, label: 'Meetings' },
    { icon: FaPhoneAlt, label: 'Calls' },
    { icon: FaChartBar, label: 'Reports' },
    { icon: FaChartLine, label: 'Analytics' },
    { icon: FaCogs, label: 'Services' },
    { icon: FaProjectDiagram, label: 'Projects' },
  ];

  const metrics = [
    { label: 'My Open Deals', value: 5 },
    { label: 'My Untouched Deals', value: 2 },
    { label: 'My Calls Today', value: 3 },
    { label: 'My Leads', value: 10 },
  ];

  const tasks = [
    { subject: 'Follow up with client', dueDate: '26/10/2024', status: 'In Progress', priority: 'High', relatedTo: 'ABC Corp', contactName: 'John Doe' },
    { subject: 'Prepare proposal', dueDate: '27/10/2024', status: 'Not Started', priority: 'Medium', relatedTo: 'XYZ Inc', contactName: 'Jane Smith' },
    { subject: 'Schedule demo', dueDate: '28/10/2024', status: 'Not Started', priority: 'Low', relatedTo: '123 Ltd', contactName: 'Bob Johnson' },
  ];

  const meetings = [
    { title: 'Client Presentation', from: '26/10/2024 10:00 AM', to: '26/10/2024 11:00 AM', relatedTo: 'ABC Corp', contactName: 'John Doe' },
    { title: 'Team Sync', from: '26/10/2024 02:00 PM', to: '26/10/2024 03:00 PM', relatedTo: 'Internal', contactName: 'Team' },
    { title: 'Product Demo', from: '27/10/2024 11:00 AM', to: '27/10/2024 12:00 PM', relatedTo: 'XYZ Inc', contactName: 'Jane Smith' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-gray-800 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold">CRM</span>
            {navItems.map((item, index) => (
              <button key={index} className="flex items-center space-x-1 hover:text-blue-300">
                <item.icon />
                <span>{item.label}</span>
              </button>
            ))}
            <button><FaEllipsisH /></button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-2 py-1 rounded"><FaPlus /> Add</button>
            <button><FaSearch /></button>
            <button><FaBell /></button>
            <button><FaComments /></button>
            <button><FaCog /></button>
            <button><FaUserCircle /></button>
          </div>
        </div>
      </nav>

      <main className="p-6">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Welcome Aman Bani</h1>
            <select className="border p-2 rounded">
              <option>Aman Bani's Home</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2">{metric.label}</h2>
                <p className="text-3xl font-bold">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">My Open Tasks</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Subject</th>
                  <th className="text-left p-2">Due Date</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Priority</th>
                  <th className="text-left p-2">Related To</th>
                  <th className="text-left p-2">Contact Name</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{task.subject}</td>
                    <td className="p-2">{task.dueDate}</td>
                    <td className="p-2">{task.status}</td>
                    <td className="p-2">{task.priority}</td>
                    <td className="p-2">{task.relatedTo}</td>
                    <td className="p-2">{task.contactName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">My Meetings</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Title</th>
                  <th className="text-left p-2">From</th>
                  <th className="text-left p-2">To</th>
                  <th className="text-left p-2">Related To</th>
                  <th className="text-left p-2">Contact Name</th>
                </tr>
              </thead>
              <tbody>
                {meetings.map((meeting, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{meeting.title}</td>
                    <td className="p-2">{meeting.from}</td>
                    <td className="p-2">{meeting.to}</td>
                    <td className="p-2">{meeting.relatedTo}</td>
                    <td className="p-2">{meeting.contactName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CRMtool;