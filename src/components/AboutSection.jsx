import React from "react";

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Text Section */}
      <div className="mb-12">
        <span className="inline-block border border-blue-500 text-blue-500 px-6 py-2 font-semibold rounded-full text-xs sm:text-sm uppercase tracking-wide">
          About The Hub
        </span>

        <p className="mt-4 text-2xl font-medium leading-relaxed text-justify py-4">
          AU Research Hub is a collaborative platform within the University of Lagos, dedicated to advancing architectural thought, design innovation, and scholarly discourse. Our aim is to connect researchers, academics, and institutions through impactful publications, symposia, and shared knowledge.
        </p>
      </div>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-center">
        <div className="rounded-2xl">
          <img
            src="images/image 24.png"
            alt="Team meeting"
            className="w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="rounded-2xl">
          <img
            src="images/image 26.png"
            alt="Architecture department building"
            className="w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="rounded-2xl">
          <img
            src="images/image 27.png"
            alt="Group of students/professionals"
            className="w-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
