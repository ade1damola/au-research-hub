import axios from "axios";
import React, { useEffect } from "react";

// JSON data for articles
const articles = [
  {
    paper_id: 1,
    image: "images/image 3.png",
    category: "Work Life",
    title: "Design Essence: Geographic Perspective",
    firstname: "Tunji",
    lastname: "Adejumo",
    date: "November 10, 2024",
    link: "#",
  },
  {
    id: 2,
    image: "images/image 3.png",
    category: "Design",
    title: "Reimagining Urban Living Spaces",
    author: "Dr. Amina Bello",
    firstname: "Amina",
    lastname: "Bello",
    date: "October 3, 2024",
    link: "#",
  },
  {
    id: 3,
    image: "images/image 3.png",
    category: "Sustainability",
    title: "Green Architecture: Building for Tomorrow",
    firstname: "Wale",
    lastname: "Adigun",
    author: "Prof. Wale Adigun",
    date: "September 21, 2024",
    link: "#",
  },
];

const ResourceGallery = () => {

  const handleResourceData = async() => {
  // Function to handle resource data if needed
  const response = await axios.get("https://auresearch-backend.onrender.com/papers/")
  console.log(response);
}
  useEffect(() => {handleResourceData()}, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 lg:pb-16">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            {/* Image Section */}
            <div className="relative bg-gray-200 h-48 flex items-center justify-center">
              <img
                src={article.image}
                alt={article.title}
                className="max-h-full pt-6 object-contain"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="py-5 px-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                {article.title}
              </h3>

              <div className="text-sm mb-4 text-gray-600 font-medium space-y-2">
                <div>
                  <span>By {article.firstname} {article.lastname}</span>
                </div>
                <div className="flex items-center space-x-1">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <span>November, 10 2025</span>
                </div>
              </div>

              {/* Button */}
              <a
                href={article.link}
                className="inline-flex items-center space-x-2 bg-white px-5 py-2 rounded-full text-sm text-gray-700 font-semibold border border-gray-200 hover:bg-gray-50 transition"
              >
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
                  ></path>
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ResourceGallery;
