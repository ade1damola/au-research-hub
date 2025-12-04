import React from "react";
import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "Grand Vista",
    image: "/images/Grand Vista.png",
    category: "Sustainable",
    year: "2021–23",
    location: "Tokyo",
  },
  {
    id: 2,
    title: "Elegant Retreat",
    image: "/images/Elegant Retreat.png",
    category: "Interior",
    year: "2022",
    location: "San Francisco",
  },
  {
    id: 3,
    title: "Modern Marvel",
    image: "/images/Modern Marvel.png",
    category: "Residential",
    year: "2021",
    location: "London, UK",
  },
];

const FeaturedProjects = () => {
  return (
    <div className="bg-gray-100">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Header */}
        <div className="md:flex justify-between items-end mb-12">
          <div className="md:w-3/6">
            <div className="inline-block px-4 py-2 rounded-full text-sm text-gray-700 font-medium mb-4 border border-black uppercase">
              Featured Projects
            </div>
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
              Design Chronicles —
              <br />
              Our Latest Masterpieces
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
              Explore a selection of our latest projects, each a testament to
              our commitment to innovation, creativity, and excellence in
              design.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8 md:mt-0">
            <a
              href="https://tally.so/r/mBVWK1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bgBlue text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-500 flex items-center space-x-2">
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
                    style={{ fill: "white" }}
                    d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"
                  />
                </svg>
              </button>
            </a>

            <Link to="/project" className="inline-flex items-center justify-center border border-blue-500 text-blue-500 px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors">Our Projects</Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="flex max-sm:flex-col gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="flex-1 transition-all duration-300 ease-in-out hover:flex-3 rounded-2xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-96 object-cover`}
                />
              </div>
              <div className="py-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {project.title}
                </h3>

                <div className="grid grid-cols-3 gap-y-3 text-sm">
                  <div>
                    <span className="text-gray-500 block text-xs">Category</span>
                    <span className="text-gray-500">{project.category}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-xs">Year</span>
                    <span className="text-gray-500">{project.year}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-xs">Location</span>
                    <span className="text-gray-500">{project.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedProjects;
