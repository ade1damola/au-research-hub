import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="w-16 py-6">
                  <img src="images/AUlogo.png" alt="AU Logo" />
                </div>
                <span className="text-xl font-medium">X</span>
                <div className="w-14 h-14">
                  <img src="images/UNILAG.png" alt="UNILAG logo" />
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/project" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</Link>
            <Link to="/resource" className="text-gray-700 hover:text-blue-600 transition-colors">Resources</Link>
          </nav>

          {/* Desktop CTA and Search */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <a href="https://tally.so/r/mBVWK1" target='_blank' rel='noopener noreferrer'>
              <button className="bgBlue text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center">
                Submit a Paper
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                  />
                </svg>
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg z-50 md:hidden">
          <div className="p-6">
            <div className="flex justify-end mb-8">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <nav className="space-y-6">
                <Link to="/" className="block text-gray-700 hover:text-blue-600 text-lg">Home</Link>
                <Link to="/project" className="block text-gray-700 hover:text-blue-600 text-lg">Projects</Link>
                <Link to="/resource" className="block text-gray-700 hover:text-blue-600 text-lg">Resources</Link>
              <div className="pt-6 border-t border-gray-200">
                <a href="https://tally.so/r/mBVWK1">
                  <button className="w-full bgBlue hover:bg-blue-500 text-white px-4 py-3 rounded-full text-sm font-medium transition-colors flex items-center justify-center">
                    Submit a Paper
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
