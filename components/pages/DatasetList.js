import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'; // Import the fetch function

function DatasetList() {
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    async function fetchDatasets() {
      try {
        const response = await fetch('http://localhost:3000/datasets', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setDatasets(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchDatasets();
  }, []);

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-semibold mb-4">Available Datasets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {datasets.map((dataset) => (
          <Link
            className="block p-4 border rounded-md hover:bg-gray-100 transition duration-300"
            href={`/datasets/${dataset.id}`}
            key={dataset.id}
          >
            <h3 className="text-lg font-semibold mb-2">{dataset.name}</h3>
            <p className="text-gray-600">{dataset.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DatasetList;
