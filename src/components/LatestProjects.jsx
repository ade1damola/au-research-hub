import React from "react";

import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "Design Essence: Geographic Perspective",
    author: "Tunji Adejumo",
    category: "Work Life",
    date: "November 10, 2024",
    image: "images/image 3.png",
  },
  {
    id: 2,
    title: "Innovating Urban Spaces for the Future",
    author: "Aisha Bello",
    category: "Urban Design",
    date: "December 1, 2024",
    image: "images/image 3.png",
  },
  {
    id: 3,
    title: "Cultural Identity in Modern Architecture",
    author: "David Ojo",
    category: "Architecture",
    date: "October 15, 2024",
    image: "images/image 3.png",
  },
];

const LatestProjects = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      {/* Header Section */}
      <div className="md:flex justify-between items-end mb-12 gap-10">
        <div className="md:w-3/6">
          <div className="inline-block px-4 py-2 rounded-full text-sm text-blue-500 font-medium mb-4 border uppercase border-blue-500">
            Latest Projects
          </div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
            Featured Work from Our Community
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
            Access the latest peer-reviewed papers, theses, and design research
            pushing the boundaries of the built environment.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-6 mt-10 md:mt-0">
          <img
            src="images/image 32.png"
            alt="Latest projects"
            className="hidden sm:block w-52 object-contain"
          />
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            <a href="https://tally.so/r/mBVWK1" target="_blank" rel="noopener noreferrer">
              <button className="bgBlue text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-500 flex items-center space-x-2 transition">
                <span>Submit a Paper</span>
                <svg
                  className="w-4 h-4"
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

            <Link to="/resource" className="inline-flex items-center justify-center border border-blue-500 text-blue-500 px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors">Our Publications</Link>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative bg-gray-200 h-48 flex justify-center items-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain h-full w-auto pt-6"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="py-5 px-4">
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {project.title}
                </h3>
                <div className="text-sm mb-4 text-gray-600 font-medium">
                  <div className="mb-2">
                    <span>By {project.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{project.date}</span>
                  </div>
                </div>

                <button className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full text-sm text-gray-700 font-bold border border-gray-200 hover:bg-gray-50 transition">
                  <span>Read More</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
