import React from "react";

const filterOptions = [
  {
    label: "Theme",
    placeholder: "Select theme",
    options: [
      "Architecture",
      "Urbanism",
      "Sustainability",
      "Technology",
      "Design",
    ],
  },
  {
    label: "Region",
    placeholder: "Select region",
    options: [
      "North America",
      "Europe",
      "Asia",
      "Africa",
      "South America",
      "Oceania",
    ],
  },
  {
    label: "Year",
    placeholder: "Select year",
    options: [
      "2024",
      "2023",
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
    ],
  },
];

const ProjectSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      {/* Section Header */}
      <div className="md:flex justify-between items-end mb-12 gap-4">
        <div className="lg:w-3/6">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
            Research Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">
            A curated archive of scholarly projects carried out by our academic
            community, reflecting the diversity, depth, and relevance of
            architectural research at AU.
          </p>
        </div>
      </div>

      {/* Filter Info + Dropdowns */}
      <div className="space-y-6 lg:space-y-0 lg:flex items-end justify-between mb-8 gap-8">
        <div className="lg:w-3/6 max-w-4xl">
          <p className="text-sm text-gray-600 leading-loose">
            Filter by year, theme, or region to discover design explorations,
            case studies, and theoretical frameworks addressing the built
            environment and its evolving challenges.
          </p>
        </div>

        <div className="w-full lg:w-auto">
          {/* Filter Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filterOptions.map((filter) => (
              <div key={filter.label} className="space-y-2">
                <label className="block text-sm font-medium text-gray-400 mb-2 ps-3">
                  {filter.label}
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-white border border-gray-200 rounded-full px-6 py-4 pr-12 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
                    defaultValue=""
                  >
                    <option value="">{filter.placeholder}</option>
                    {filter.options.map((option, index) => (
                      <option key={index} value={option.toLowerCase()}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <i className="fas fa-chevron-down text-gray-400 text-sm"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
