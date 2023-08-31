import React from 'react';
import Layout from '../../components/layout';
import DatasetList from '../../components/pages/DatasetList';
import ComingList from '../../components/pages/coming';

function DatasetsPage() {
  return (
    <Layout>
      <div className='pt-10' >
        <DatasetList />
      </div>
      <ComingList/>
    </Layout>
  );
}

export default DatasetsPage;
