import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSetRecoilState } from 'recoil';
import { userState } from '../App';
import z from 'zod';
import axios from 'axios';

const registerSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required"
  }),
  email: z.string().email({
    message: "Enter a valid email"
  }),
  password: z.string().min(6, {
    message: "Password must contain atleast 8 characters"
  }).max(14, {
    message: "Password can not exceed 14 characters"
  }),
});

const loginSchema = z.object({
  email: z.string().email( {
    message: "Enter a valid email"
  }),
  password: z.string().min(1, {
    message: "Password is a required field"
  }),
});


export default function Auth() {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);

  // for login
  const [loginFormData, setLoginFormData] = useState({
    password: '',
    email: '',
  });
  const [loginErrors, setLoginErrors] = useState([]);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const res = loginSchema.safeParse(loginFormData);
    if (res.success) {
      try {
        const response = await axios.post('https://tieu.onrender.com/api/user/login', res.data, {
          withCredentials: true,
        });

        if(response.status === 200){
          setUser(response.data.data.user);
          localStorage.setItem('userState', JSON.stringify(response.data.data.user));
        }
        navigate('/');
      } catch (error) {
        setRegisterErrors(['An unexpected error occurred.']);
      }
    } else {
      setLoginErrors(res.error.errors.map((err) => err.message));
    }
  };

  // for register
  const [registerFormData, setRegisterFormData] = useState({
    password: '',
    email: '',
    name: ''
  });
  const [registerErrors, setRegisterErrors] = useState([]);

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onRegister = async (e) => {
    e.preventDefault();
    const res = registerSchema.safeParse(registerFormData);
    if (res.success) {
      try {
        const response = await axios.post('https://tieu.onrender.com/api/user/register', res.data, {
          withCredentials: true,
        });
        
        if(response.status === 200){
          setUser(response.data.data.user);
          localStorage.setItem('userState', JSON.stringify(response.data.data.user));
        }
        
        navigate('/');
      } catch (error) {
        setRegisterErrors(['An unexpected error occurred.']);
      }
    } else {
      setRegisterErrors(res.error.errors.map((err) => err.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Welcome</h2>
          <p className="text-center text-gray-600 mb-6">Login or create a new account</p>
          
          <div className="flex mb-6">
            <button
              className={`flex-1 py-2 text-sm font-medium text-center ${
                activeTab === "login"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 text-sm font-medium text-center ${
                activeTab === "register"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("register")}
            >
              Register
            </button>
          </div>

          {activeTab === "login" ? (
            <form className="space-y-4" onSubmit={onLogin}>
              {loginErrors.length > 0 && (
                <div className="mb-4">
                  {loginErrors.map((error, index) => (
                    <p key={index} className="text-red-500 text-sm">{error}</p>
                  ))}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  value={loginFormData.email}
                  onChange={handleLoginChange}
                  required
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="m@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  name="password"
                  type="password"
                  value={loginFormData.password}
                  onChange={handleLoginChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Login
              </button>
            </form>
          ) : (
            <form className="space-y-4" onSubmit={onRegister}>
              {registerErrors.length > 0 && (
                <div className="mb-4">
                  {registerErrors.map((error, index) => (
                    <p key={index} className="text-red-500 text-sm">{error}</p>
                  ))}
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  name="name"
                  value={registerFormData.name}
                  onChange={handleRegisterChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={registerFormData.email}
                  onChange={handleRegisterChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="m@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  name="password"
                  type="password"
                  value={registerFormData.password}
                  onChange={handleRegisterChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register
              </button>
            </form>
          )}
        </div>
        <div className="px-6 py-4 bg-gray-50">
          <p className="text-xs text-center text-gray-500">
            By continuing, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
