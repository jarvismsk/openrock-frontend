import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './../components/layout';

const App = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get('https://whispering-sea-12903-b8b25cbb3f13.herokuapp.com/api/news');
        setNewsData(response.data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching news data:', error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchNewsData();
    const intervalId = setInterval(fetchNewsData, 40000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold mb-10 mt-0 text-center mx-3 text-purple-700">News from All Sources by OpenRock</h1>
        {loading ? ( // Display loading indicator if loading is true
          <div className="text-center">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((newsItem, index) => (
              <a key={index} href={newsItem.link} target="_blank" rel="noopener noreferrer" className="block bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-blue-600 mb-4">{newsItem.title}</h2>
                  {newsItem.description && <p className="text-gray-700 mb-4">{newsItem.description}</p>}
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{newsItem.date}</span>
                    <span className="text-blue-500 hover:underline">Read More</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default App;
