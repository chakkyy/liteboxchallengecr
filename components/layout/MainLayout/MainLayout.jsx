import { useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../Navbar/Navbar';

const MainLayout = ({ title, description, children }) => {
  const isServer = typeof window === 'undefined';
  const WOW = !isServer ? require('wow.js') : null;

  useEffect(() => {
    new WOW().init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  );
};

export default MainLayout;
