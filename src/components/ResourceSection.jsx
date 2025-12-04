import React from "react";

// Dropdown configuration JSON
const filters = [
  {
    id: 1,
    label: "Theme",
    placeholder: "Select theme",
    options: ["Architecture", "Urbanism", "Sustainability", "Technology", "Design"],
  },
  {
    id: 2,
    label: "Date",
    placeholder: "Select date",
    options: [
      "2025",
      "2024",
      "2023",
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
    ],
  },
  {
    id: 3,
    label: "Lead Researcher",
    placeholder: "Select Lead Researc",
    options: [
      "Dr. A. Johnson",
      "Prof. B. Adeyemi",
      "Dr. T. Chen",
      "Engr. R. Bello",
      "Dr. F. Okafor",
    ],
  },
];

const ResourceSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      {/* Header */}
      <div className="md:flex justify-between items-end mb-10 gap-6">
        <div className="lg:w-3/6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
            Academic Resources
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-4xl">
            Explore a growing repository of journal articles, theses, case
            studies, and research papers contributed by academics and
            practitioners across the field of architecture.
          </p>
        </div>
      </div>

      {/* Description + Filters */}
      <div className="space-y-6 mb-8 lg:flex items-end justify-between">
        <div className="lg:w-3/6 max-w-4xl">
          <p className="text-sm text-gray-600 leading-loose">
            All resources are free to access and downloadable in PDF or DOCX
            format.
          </p>
        </div>

        {/* Filter Dropdowns */}
        <div className="w-full lg:w-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filters.map((filter) => (
              <div key={filter.id} className="space-y-2">
                <label className="block text-sm font-medium text-gray-400 mb-1 ps-3">
                  {filter.label}
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none bg-white border border-gray-200 rounded-full px-6 py-4 pr-12 text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
                    defaultValue=""
                  >
                    <option value="">{filter.placeholder}</option>
                    {filter.options.map((option, idx) => (
                      <option key={idx} value={option.toLowerCase()}>
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

export default ResourceSection;
