import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/layout';

function DatasetDetail() {
  const router = useRouter();
  const { datasetId } = router.query;

  const [dataset, setDataset] = useState(null);

  useEffect(() => {
    // Fetch dataset details based on the datasetId
    fetch(`http://localhost:3000/datasets/${datasetId}`)
      .then((response) => response.json())
      .then((data) => setDataset(data))
      .catch((error) => console.error('Error fetching dataset:', error));
  }, [datasetId]);

  if (!dataset) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Dataset Details</h1>
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <Layout>
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Dataset Details</h1>
      <h2 className="text-xl font-semibold mb-2">{dataset.name}</h2>
      <p className="text-gray-600">{dataset.description}</p>
    </div>
    </Layout>
  );
}


export default DatasetDetail;
