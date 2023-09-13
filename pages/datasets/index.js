import React from 'react';
import Layout from '../../components/layout';
import DatasetsPage from '../../components/herobox/DatasetPage';

const DataListPage = () => {
  return (
    <Layout>
 <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <DatasetsPage />
    
          </div>
  
    </Layout>
  );
};

export default DataListPage;
