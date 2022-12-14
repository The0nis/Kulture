/* eslint-disable node/no-missing-import */
import Head from 'next/head';
import Footer from './Footer/Index';
import Navbar from './Navbar/Index';

function Page({ title, description, children, type }) {
  // const editTitle = title?includes(undefined) ? 'loading...' : title;

  return (
    <>
      <Head>
        {/* <title>{editTitle ? `${editTitle}` : 'Kulture'}</title> */}
        <title>Kulture</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Navbar type={type} />
      {children}
      <Footer type={type} />
    </>
  );
}

export default Page;
