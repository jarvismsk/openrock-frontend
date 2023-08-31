import React from 'react';
import FeatureBox from '../FeatureBox';

const DatasetsPage = () => {
  return (
    <FeatureBox
      icon={<i className="fas fa-code"></i>}
      title="Live Datasets:"
      items={[
        { text: 'Stock Market Live Data (NSE)', link: '/stocks' },
      ]}
    />
  );
};

export default DatasetsPage;
