import React from 'react';

const HeroSection = () => {
  return (
    <div className="py-10 md:py-10 pb-4 px-4 relative overflow-hidden md:mt-0 mt-[1rem] text-center">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-6xl lg:text-8xl font-bold bg-gradient-text relative z-10 mb-4 md:mb-4 px-4 md:pl-0">
          <span className="bg-clip-text text-transparent from-blue-500 to-purple-600">
            Discover the Power of Data and Models
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Where insights drive innovation and possibilities know no bounds.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
