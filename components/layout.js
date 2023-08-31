import React from 'react';
import Navbar from './Navbar';
import HeroSection from './herosection';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mt-16 md:mt-40"> {/* Adjust the top margin here */}
        <div className="container mx-auto px-4 md:px-8"> {/* Adjust the horizontal padding here */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
