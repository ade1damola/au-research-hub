import React from "react";

const teamMembers = [
  {
    id: 1,
    name: "Tunji Adejumo",
    role: "Architect and Professor",
    image: "images/image.png",
    socials: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Ray Pentecost III",
    role: "Professor of Architecture",
    image: "images/Pentecost 1.png",
    socials: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Cory Henry",
    role: "Designer and Founder",
    image: "images/image 33.png",
    socials: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Stephen Ajadi",
    role: "Architect and Economist",
    image: "images/image 23.png",
    socials: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 5,
    name: "Bayo Amole",
    role: "Architect and Retired Professor",
    image: "images/image 35.png",
    socials: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 6,
    name: "Nikolsos Tsinika",
    role: "Architect",
    image: "images/image 36.png",
    socials: {
      instagram: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block bg-white px-4 py-2 rounded-full text-sm txtBlue font-medium mb-4 border uppercase">
          The Team
        </div>
        <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
          Meet the Minds Behind the Hub
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
          Our team is composed of passionate faculty and researchers with decades of experience in architectural inquiry, design systems, sustainability, and spatial theory.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="text-center group hover:-translate-y-1 transition-transform"
          >
            <div className="mb-6 relative overflow-hidden rounded-2xl">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-gray-500 font-medium mb-4">{member.role}</p>
            <div className="flex justify-center space-x-3">
              {/* Instagram */}
              <a
                href={member.socials.instagram}
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <i className="fab fa-instagram text-gray-600"></i>
              </a>
              {/* Twitter */}
              <a
                href={member.socials.twitter}
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <i className="fab fa-twitter text-gray-600"></i>
              </a>
              {/* LinkedIn */}
              <a
                href={member.socials.linkedin}
                className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <i className="fab fa-linkedin-in text-gray-600"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
