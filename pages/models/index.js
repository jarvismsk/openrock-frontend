import React from 'react';
import Layout from '../../components/layout';
import ModelList from '../../components/pages/ModelList';

const ModelsListPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold my-8 flex justify-center"></h2>
        <ModelList />
      </div>
    </Layout>
  );
};

export default ModelsListPage;
