import React from 'react';
import Layout from '../../components/layout';
import DatasetsPage from '../../components/herobox/DatasetPage';
import Head from 'next/head';

const DataListPage = () => {
  return (
    <Layout>
 <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
 <Head>
        <title>OpenRock - Datasets</title>
          <meta name="description" content="Your website tagline or description" />
        </Head>
            <DatasetsPage />
    
          </div>
  
    </Layout>
  );
};

export default DataListPage;
