import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';

const HeroSection = () => {
  return (
    <section className='font-inter max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:space-x-16 mb-12'>
        {/* Text Content */}
        <div className='flex-1 text-left'>
          <h1 className='text-4xl sm:text-5xl lg:text-5xl font-light text-gray-900 leading-snug mb-6'>
            Shaping the future of architecture through research
          </h1>
        </div>

        {/* Description + Buttons */}
        <div className='flex-1 text-left'>
          <p className='text-gray-400 text-base sm:text-lg leading-relaxed mb-8'>
            At AU Research Hub, we empower architectural innovation by curating,
            supporting, and publishing groundbreaking academic work from leading
            researchers around the world.
          </p>

          <div className='flex flex-row sm:flex-row justify-center lg:justify-start gap-4 mt-10'>
            {/* Submit a Paper */}
            <a
              href='https://tally.so/r/mBVWK1'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center justify-center bgBlue text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-500 transition-colors'
            >
              <span>Submit a Paper</span>
              <svg
                className='w-4 h-4 ml-2'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z'
                  style={{ fill: 'white' }}
                />
              </svg>
            </a>

            {/* Our Projects */}
            <Link
              to='/project'
              className='inline-flex items-center justify-center border border-blue-500 text-blue-500 px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors'
            >
              Our Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
