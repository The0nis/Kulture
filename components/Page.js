import Head from 'next/head';
import React from 'react';
import Navbar from './Navbar/Index';

const Page = ({ title, description, children }) => {
  const editTitle = title?.includes(undefined) ? 'loading...' : title;
  return (
    <>
      <Head>
        <title>{editTitle ? `${editTitle}` : 'Kulture'}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Page;
