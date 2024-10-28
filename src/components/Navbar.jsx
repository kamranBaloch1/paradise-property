'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars, FaChevronDown } from 'react-icons/fa';
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isGovernmentOpen, setGovernmentOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCloseDropdown = () => {
    setGovernmentOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-yellow-700 w-full z-[1000] relative">
      <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center relative">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center md:px-7">
            <Image 
              src={logo}
              alt="Gwadar Paradise Property Logo"
              width={80} // Adjust width for smaller screens
              height={80} 
              className="object-contain"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-white hover:text-yellow-300 font-semibold transition duration-300">
            Home
          </Link>
          <div className="relative">
            <button
              className="text-white hover:text-yellow-300 font-semibold focus:outline-none flex items-center transition duration-300"
              onClick={() => setGovernmentOpen(!isGovernmentOpen)}
            >
              Government Projects <FaChevronDown className="ml-2" />
            </button>
            {isGovernmentOpen && (
              <div className="absolute left-0 mt-3 w-60 bg-white rounded-md shadow-lg z-50">
                <Link href="/schemes/sangar-housing-scheme" onClick={handleCloseDropdown} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-200">
                  Sangar Housing Scheme
                </Link>
                <Link href="/schemes/new-town-housing-scheme" onClick={handleCloseDropdown} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-200">
                  New Town Housing Scheme
                </Link>
                <Link href="/schemes/maanbar-housing-scheme" onClick={handleCloseDropdown} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-200">
                  Maanbar Housing Scheme
                </Link>
                <Link href="/schemes/gieda-housing-scheme" onClick={handleCloseDropdown} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-200">
                  Gwadar Industrial Estate GIEDA
                </Link>
                <Link href="/schemes/bec-housing-scheme" onClick={handleCloseDropdown} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-200">
                  Baluchistan Employees
                </Link>
              </div>
            )}
          </div>

          <Link href="/properties-list" className="text-white hover:text-yellow-300 font-semibold transition duration-300">
            Property List
          </Link>
          <Link href="/about-us" className="text-white hover:text-yellow-300 font-semibold transition duration-300">
            About
          </Link>
          <Link href="/contact-us" className="text-white hover:text-yellow-300 font-semibold transition duration-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
        <FaBars className="text-white cursor-pointer text-3xl sm:text-4xl" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} />

        </div>
      </div>

      {/* Mobile Menu */}
      
{isMobileMenuOpen && (
  <div className="md:hidden bg-white shadow-lg rounded-lg fixed top-16 left-0 right-0 z-[1000] p-6 space-y-6">
    <Link href="/" className="block text-gray-800 hover:text-blue-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>
      Home
    </Link>
    <div>
      <button
        className="block w-full text-left text-gray-800 hover:text-blue-600 font-semibold focus:outline-none flex items-center justify-between"
        onClick={() => setGovernmentOpen(!isGovernmentOpen)}
      >
        Government Projects <FaChevronDown className={`ml-2 transform ${isGovernmentOpen ? 'rotate-180' : ''}`} />
      </button>
      {isGovernmentOpen && (
        <div className="mt-2 space-y-2 pl-4">
          <Link href="/schemes/sangar-housing-scheme" className="block text-gray-800 hover:text-blue-600 transition duration-200">
            Sangar Housing Scheme
          </Link>
          <Link href="/schemes/new-town-housing-scheme" className="block text-gray-800 hover:text-blue-600 transition duration-200">
            New Town Housing Scheme
          </Link>
          <Link href="/schemes/maanbar-housing-scheme" className="block text-gray-800 hover:text-blue-600 transition duration-200">
            Maanbar Housing Scheme
          </Link>
          <Link href="/schemes/gieda-housing-scheme" className="block text-gray-800 hover:text-blue-600 transition duration-200">
            Gwadar Industrial Estate GIEDA
          </Link>
          <Link href="/schemes/bec-housing-scheme" className="block text-gray-800 hover:text-blue-600 transition duration-200">
            Baluchistan Employees
          </Link>
        </div>
      )}
    </div>

    <Link href="/properties-list" className="block text-gray-800 hover:text-blue-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>
      Property List
    </Link>
    <Link href="/about-us" className="block text-gray-800 hover:text-blue-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>
      About
    </Link>
    <Link href="/contact-us" className="block text-gray-800 hover:text-blue-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>
      Contact
    </Link>
  </div>
)}

    </nav>
  );
};

export default Navbar;
