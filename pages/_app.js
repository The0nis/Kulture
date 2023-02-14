import Page from "../components/Page";
import "../styles/globals.css";
import "@fontsource/open-sans";
//import { ApiProvider } from "@reduxjs/toolkit/query/react";
//import { KultureApi } from "./features/apiSlice";

function MyApp({ Component, pageProps }) {
  return (
    //<ApiProvider api={KultureApi}>
      <Component {...pageProps} />;
   // </ApiProvider>
  );
}

export default MyApp;
