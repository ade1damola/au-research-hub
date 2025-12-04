import React from "react";

const GallerySection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left column */}
        <div className="flex flex-row sm:flex-col items-center justify-center gap-4">
          <img
            src="/images/image 30.png"
            alt="Room sample 1"
            className="w-2/4 sm:w-1/3 md:w-1/2 rounded-2xl object-cover"
          />
          <img
            src="/images/Green Interior.png"
            alt="Room sample 2"
            className="w-2/4 sm:w-2/3 md:w-full rounded-2xl object-cover"
          />
        </div>

        {/* Right column */}
        <div className="h-64 sm:h-80 md:h-full">
          <img
            src="/images/Green Interior 2.png"
            alt="Room sample 3"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
