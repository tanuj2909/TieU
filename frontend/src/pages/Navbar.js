import React, { useState } from 'react';
import logo from '../assets/logo2.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Evaluate Yourself", href: "/EvaluateYourself" },
    { name: "Community", href: "/Community" },
    { name: "Mentors", href: "/Mentors" },
    { name: "Join Program", href: "/JoinProgram" },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              {/* Adding the logo image */}
              <img src={logo} alt="BizElevate Logo" className="h-10 w-10 mr-2" />
              <span className="text-2xl font-bold">BizElevate</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:bg-purple-700 hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-purple-700 hover:bg-opacity-50 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:bg-purple-700 hover:bg-opacity-50 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
