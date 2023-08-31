import React from 'react';
import Link from 'next/link';

const FeatureBox = () => {
  return (
    <Link href="/stocks">
      
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-violet-700 hover:bg-purple-800 hover:rounded-lg shadow-md p-6 rounded-lg mt-4">
            <span className="text-white">
              <i className="fas fa-database"></i>
            </span>
            <span className="ml-2 text-white hover:text-gray-200 font-medium">
              Stock Market Live Data (NSE)
            </span>
          </div>
        </div>

    </Link>
  );
};

export default FeatureBox;
