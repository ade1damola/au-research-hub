import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-black bg-red min-h-screen pt-16 pb-16 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Footer Content */}
      <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 leading-tight">
          Stay in the know with our<br />weekly newsletter
        </h2>
        
        <p className="text-gray-300 text-lg mb-12 max-w-lg mx-auto">
          Regular updates ensure that readers have access to fresh perspectives, 
          making Poster a must-read.
        </p>

        {/* Email Signup Form */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:bg-white rounded-full">
          <input 
            type="email" 
            placeholder="Email address" 
            className="w-full sm:w-80 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-blue-500 transition-all"
          />
          <a href="#">
            <button className="bgBlue text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-500 flex items-center space-x-2">
              <span>Subscribe</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" style={{ fill: 'white' }} d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
              </svg>
            </button>
          </a>
        </div>

        {/* Footer Navigation */}
        <div className="border-t border-gray-700 pt-12">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="flex flex-wrap justify-center gap-6 text-gray-300 md:ml12">
              <Link to="/project" className="hover:text-white transition-colors">Projects</Link>
              <Link to="/resource" className="hover:text-white transition-colors">Resources</Link>
              <a href="#" className="hover:text-white transition-colors">News & Events</a>
              <a href="https://tally.so/r/mBVWK1" className="hover:text-white transition-colors">Submit a Paper</a>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            ©A+UR HUB. All rights reserved.
          </p>
        </div>
      </div>

      {/* Large A+UR HUB Text */}
      <div className="max-sm:text-6xl sm:text-7xl lg:text-9xl text-white text-justify items-center pt-8 tracking-wider">
        <h1>A+UR HUB</h1>
      </div>
    </div>
  );
};

export default Footer;
