import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 py-2 px-4 md:py-4 ${
        scrolling
          ? 'bg-glass backdrop-blur-md bg-opacity-50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto p-4 md:px-6 flex justify-between items-center">
        <div className="text-2xl md:text-3xl font-semibold">
          <a href="/" className="text-black">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Open
            </span> Rock
          </a>
        </div>
        <div className="hidden md:flex space-x-6">
        <a href="/news" className="text-black hover:underline">
            News
          </a>
     
          <a href="/models" className="text-black hover:underline">
            Models
          </a>
          
        </div>
        <div className="md:hidden">
          {/* Mobile breadcrumb navigation */}

          <a href="/news" className="text-black hover:underline">
            News
          </a>
          <span className="text-black mx-2">/</span>

       

         

          <a href="/models" className="text-black hover:underline">
          Models
          </a>
          

         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
