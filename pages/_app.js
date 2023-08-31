// pages/_app.js
import '../styles/globals.css'; // Import your global Tailwind CSS file
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
