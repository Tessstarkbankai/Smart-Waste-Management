'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold flex items-center">
                <span className="text-[#32C766]">Smart</span>
                <span className="ml-1">Waste</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-6">
                <Link href="#features" className="text-gray-600 hover:text-[#32C766] transition">
                  Features
                </Link>
                <Link href="#how-it-works" className="text-gray-600 hover:text-[#32C766] transition">
                  How It Works
                </Link>
                <Link href="#benefits" className="text-gray-600 hover:text-[#32C766] transition">
                  Benefits
                </Link>
                <Link href="#use-cases" className="text-gray-600 hover:text-[#32C766] transition">
                  Use Cases
                </Link>
                <Link href="#contact" className="text-gray-600 hover:text-[#32C766] transition">
                  Contact
                </Link>
                <Link href="/waste-analysis" className=" transition ease-in-out duration-300 hover:scale-105 hover:bg-white hover:cursor-pointer hover:ease-in-out hover:text-green-500 bg-[#32C766] text-white px-4 py-2 rounded hover:bg-opacity-90  font-medium">
                  Analyze Waste
                </Link>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                type="button" 
                className="text-gray-600 hover:text-[#32C766] focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="pt-2 pb-4 space-y-1">
                <Link 
                  href="#features" 
                  className="block px-3 py-2 text-gray-600 hover:text-[#32C766] hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  href="#how-it-works" 
                  className="block px-3 py-2 text-gray-600 hover:text-[#32C766] hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link 
                  href="#benefits" 
                  className="block px-3 py-2 text-gray-600 hover:text-[#32C766] hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Benefits
                </Link>
                <Link 
                  href="#use-cases" 
                  className="block px-3 py-2 text-gray-600 hover:text-[#32C766] hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Use Cases
                </Link>
                <Link 
                  href="#contact" 
                  className="block px-3 py-2 text-gray-600 hover:text-[#32C766] hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  href="#demo" 
                  className="block px-3 py-2 bg-[#32C766] text-white rounded-md mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Demo
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}