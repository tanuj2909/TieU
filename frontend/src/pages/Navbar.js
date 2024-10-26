import React, { useState, useRef, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../App';
import { FiUser, FiChevronDown } from "react-icons/fi";
import { CiLogin, CiLogout, CiGrid31 } from "react-icons/ci";
import logo from '../assets/logo2.png'; 
import axios from 'axios';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Evaluate Yourself", href: "/EvaluateYourself" },
    { name: "Community", href: "/Community" },
    { name: "Mentors", href: "/Mentors" },
    { name: "Tools", href: "/Tools" },
    { name: "Join Program", href: "/JoinProgram" },
    { name: "Resource", href: "/Resource" },
  ];

  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try{  
      const response = await axios.post('http://localhost:8000/api/user/logout', {}, {
        withCredentials: true,
      });
      if(response.status === 200) {
        localStorage.removeItem('userState')
        setUser(null)
      }
    } catch(error) {
      console.log('LOGOUT_ERROR ' + error);
    }
    
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img src={logo} alt="BizElevate Logo" width={40} height={40} className="mr-2" />
              <span className="text-2xl font-bold">BizElevate</span>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:bg-purple-700 hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              >
                {item.name}
              </a>
            ))}
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button 
                  className="flex items-center text-white hover:bg-purple-700 hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out gap-x-1"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <FiUser className='w-[20px] h-[20px]'/>
                  {user.name}
                  <FiChevronDown className='w-[16px] h-[16px] ml-1' />
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</a>
                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-gray-100">Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <button className="flex items-center text-white hover:bg-purple-700 hover:bg-opacity-50 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out" onClick={() => navigate('/login')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Login
              </button>
            )}
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
            {user ? (
              <>
                <a
                  href="/dashboard"
                  className="flex items-center w-full text-left text-white hover:bg-purple-700 hover:bg-opacity-50 px-3 py-2 rounded-md text-base font-medium gap-x-1"
                  onClick={() => setIsOpen(false)}
                >
                  <CiGrid31 className='w-[22px] h-[22px]'/>
                  Dashboard
                </a>
                <button
                  className="flex items-center w-full text-left text-white hover:bg-purple-700 hover:bg-opacity-50 px-3 py-2 rounded-md text-base font-medium gap-x-1"
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                >
                  <CiLogout className='w-[22px] h-[22px]'/>
                  Logout
                </button>
              </>
            ) : (
              <button
                className="flex items-center gap-x-1 w-full text-left text-white hover:bg-purple-700 hover:bg-opacity-50 px-3 py-2 rounded-md text-base font-medium"
                onClick={() =>navigate('/login')}
              >
                <CiLogin className='w-[22px] h-[22px]'/>
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;