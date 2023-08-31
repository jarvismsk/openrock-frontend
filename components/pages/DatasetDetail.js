import React from 'react';
import { useRouter } from 'next/router';

function DatasetDetail() {
  const router = useRouter();
  const { datasetId } = router.query;

  // You can fetch dataset details using datasetId

  return (
    <div >
      <h2 className="text-2xl font-semibold my-8">Dataset Details</h2>
      {/* Display dataset details */}
      <div >
        {/* Display dataset details */}
        <h3 >Dataset Name</h3>
        <p >Dataset Description</p>

      </div>
    </div>
  );
}

export default DatasetDetail;
