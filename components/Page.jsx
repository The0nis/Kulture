/* eslint-disable node/no-missing-import */
import Head from "next/head";
import { useState } from "react";
import Footer from "./Footer/Index";
import SignupModal from "./Signin/Index";
import Navbar from "./Navbar/Index";
import style from "./Page.module.css";

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
      <main className={style.pageContent}>{children}</main>
      <Footer type={type} />
    </>
  );
}

export default Page;
