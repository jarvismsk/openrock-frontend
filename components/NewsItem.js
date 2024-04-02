import React from 'react';

const NewsItem = ({ news }) => {
  return (
    <div className="border border-gray-200 rounded p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">{news.title}</h2>
      <p className="text-gray-700 mb-2">{news.description}</p>
      <span className="text-sm text-gray-500">{news.date}</span>
      <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 block mt-2">Read More</a>
    </div>
  );
};

export default NewsItem;
