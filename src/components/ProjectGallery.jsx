import React from "react";

const projects = [
  {
    paper_id: 1,
    title: "Grand Vista",
    image: "/images/Grand Vista.png",
    category: "Sustainable",
    year: "2021-23",
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

const ProjectGallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 lg:pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-64 sm:h-80 lg:h-96 object-cover`}
              />
            </div>

            {/* Text */}
            <div className="py-6 px-4 sm:px-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                {project.title}
              </h3>

              <div className="grid grid-cols-3 gap-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-gray-500 block text-[10px] uppercase">
                    Category
                  </span>
                  <span className="text-gray-600">{project.category}</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px] uppercase">
                    Year
                  </span>
                  <span className="text-gray-600">2020</span>
                </div>
                <div>
                  <span className="text-gray-500 block text-[10px] uppercase">
                    Location
                  </span>
                  <span className="text-gray-600">{project.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGallery;
