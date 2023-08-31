import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import ModelDetail from '../../components/pages/ModelDetail';

const ModelDetailPage = () => {
  const router = useRouter();
  const { modelId } = router.query;

  return (
    <Layout>
      <div className="container mx-auto pt-20">
        <ModelDetail modelId={modelId} />
      </div>
    </Layout>
  );
};

export default ModelDetailPage;
