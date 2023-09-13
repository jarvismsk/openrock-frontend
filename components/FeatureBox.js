import React from 'react';
import Link from 'next/link';

const FeatureBox = ({ title, description, items }) => {
  return (
    <div className="w-full md:w-1/2 p-4">
      <div className="bg-violet-800 shadow-md p-6 rounded-lg">
        <h3 className="text-xl font-semibold mt-4 text-white">{title}</h3>
        <p className="mt-2 text-white">{description}</p>
        <div className="mt-4">
          {items && items.length > 0 ? (
            <ul className="list-inside text-gray-400 space-y-2">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="bg-purple-900 rounded-lg hover:text-white hover:bg-purple-700 hover:rounded-lg transition duration-300 ease-in-out"
                  style={{ padding: '9px', cursor: 'pointer' }}
                >
                  <Link className="text-white block" href={item.link}>
            {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400">Coming Soon...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
