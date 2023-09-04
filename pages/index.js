import React from 'react';
import Layout from '../components/layout';
import HeroSection from '../components/herosection';
import ModelsPage from '../components/herobox/ModelsPage';
import DatasetsPage from '../components/herobox/DatasetPage';
import DatasetsAndMLSection from '../components/dmsection';
import ComingList from '../components/pages/coming'

const HomePage = () => {
  return (
    <Layout>
      <div
        className="overflow-auto"
        style={{
          backgroundImage: "url('https://scale.com/_next/image?url=%2Fstatic%2Fimages%2Fpages%2Fhomepage%2Fbg.png&w=992&q=100')",
          backgroundSize: "100% auto",  // Adjust the background size here
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <HeroSection />
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8 text-left md:text-left md:pl-4 text-gray-200">
            Explore Projects and Tools:
          </h2>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <DatasetsPage />
          </div>
          <div>
          <ComingList/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
