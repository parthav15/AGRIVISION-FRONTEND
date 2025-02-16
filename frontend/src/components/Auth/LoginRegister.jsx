import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import agricultureImage from '../../assets/agriculture-image.jpg';
import Navbar from '../HomePage/Navbar';
import Footer from '../HomePage/Footer';

const LoginRegister = () => {
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(() => {
    return localStorage.getItem("isRegister") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isRegister", isRegister);
  }, [isRegister]);

  const toggleForm = () => {
    setIsRegister((prev) => !prev);
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        {/* Left Side (Image Section) */}
        <motion.div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${agricultureImage})` }}
          initial={{ x: 0 }}
          animate={{ x: isRegister ? "-10%" : "0%" }}
          transition={{ duration: 0.5 }}
        />

        {/* Right Side (Form Section) */}
        <motion.div
          className="w-1/2 flex flex-col justify-center items-center bg-white p-8"
          initial={{ x: 0 }}
          animate={{ x: isRegister ? "10%" : "0%" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-green-700 mb-6">
            {isRegister ? 'Create an Account' : 'Login to Your Account'}
          </h2>

          <form className="w-full max-w-sm">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your password"
              />
            </div>

            {isRegister && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Confirm your password"
                />
              </div>
            )}

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => navigate('/')}
              >
                {isRegister ? 'Sign Up' : 'Login'}
              </button>
            </div>
          </form>

          <p className="mt-4 text-gray-600">
            {isRegister ? 'Already have an account?' : "Don't have an account?"}
            <button
              onClick={toggleForm}
              className="text-green-600 hover:text-green-800 font-bold ml-1"
            >
              {isRegister ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginRegister;

