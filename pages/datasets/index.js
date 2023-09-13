import Link from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../../components/layout';


function DatasetList({ datasets }) {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Available Datasets</h1>
        <div className="mb-2">
 
        <Link className="text-blue-500 hover:underline" href='/stocks'>Stock Markat</Link>
        
        </div>
        <ul>
        
          {datasets.map((dataset) => (
            <li key={dataset.id} className="mb-2">
              
              <Link href={`/datasets/${dataset.id}`} className="text-blue-500 hover:underline">
                {dataset.name}
                
              </Link>
              
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Fetch the list of available datasets from your API endpoint
  const response = await fetch('http://localhost:3000/datasets');
  const datasets = await response.json();

  return {
    props: {
      datasets,
    },
  };
}

export default DatasetList;
