// components/pages/DatasetDetail.js
import React, { useEffect, useState } from 'react';

function DatasetDetail({ datasetId }) {
  const [dataset, setDataset] = useState({});

  useEffect(() => {
    async function fetchDataset() {
      if (datasetId) {
        const response = await fetch(`http://localhost:3000/datasets/${datasetId}`);
        const data = await response.json();
        setDataset(data);
      }
    }

    fetchDataset();
  }, [datasetId]);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{dataset.name}</h3>
      <p className="text-gray-600">{dataset.description}</p>
    </div>
  );
}

export default DatasetDetail;
