import React from 'react';
import Head from 'next/head'; // Import Head from next/head
import Layout from '../components/layout';
import HeroSection from '../components/herosection';
import ModelsPage from '../components/herobox/ModelsPage';
import DatasetsPage from '../components/herobox/DatasetPage';
import DatasetsAndMLSection from '../components/dmsection';
import ComingList from '../components/pages/coming';
import { Analytics } from '@vercel/analytics/react';

const HomePage = () => {
  return (
    <Layout>
      <div>
        {/* Use Head component to set the title and meta tag */}
        <Head>
        <title>OpenRock - Your Source for Open-Source Datasets and Models</title>
          <meta name="description" content="Your website tagline or description" />
        </Head>
        
        <HeroSection />
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
   
    
          <div>
            <ComingList />
            <Analytics />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
