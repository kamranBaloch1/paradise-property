import React from 'react';
import { FaSearch } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="relative flex items-center justify-center h-screen text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-700 z-0"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6">
        {/* Brand and Logo Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-yellow-300 flex items-center justify-center shadow-md">
              <span className="text-2xl sm:text-3xl font-bold text-black">P</span> 
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
              Gwadar Paradise Property
            </h1>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-lg text-white">
            Discover the best properties in Gwadar. Your paradise is just a click away!
          </p>
        </div>

        {/* Responsive Search Bar */}
        <div className="w-full max-w-md sm:max-w-xl">
          <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden transition duration-300 ease-in-out focus-within:ring-4 focus-within:ring-yellow-400">
            <input
              disabled
              type="text"
              placeholder="Search for properties, locations, and more..."
              className="w-full px-4 py-3 sm:px-6 sm:py-4 text-gray-800 rounded-l-full focus:outline-none text-sm sm:text-base"
            />
            <button className="bg-yellow-600 hover:bg-yellow-700 px-4 py-3 sm:px-6 sm:py-4 rounded-r-full transition duration-300 ease-in-out">
              <FaSearch className="text-white text-lg sm:text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
