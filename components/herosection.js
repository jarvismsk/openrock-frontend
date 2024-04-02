import React from 'react';

const HeroSection = () => {
  return (
    <div className="py-10 md:py-3 md:px-7 pb-4 px-4 relative overflow-hidden md:mt-0 mt-[1rem] text-center">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-6xl leading-8 lg:text-7xl font-bold bg-gradient-text relative z-10 mb-4 md:mb-4  px-4 md:pl-0">
          <span className="bg-clip-text leading-8 text-transparent from-blue-500 to-purple-600">
          Opensource Realtime Datasets and Models - Your One-Stop Data and Models 
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
        Explore real-time opensource datasets, APIs, and LLm models in one place.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
