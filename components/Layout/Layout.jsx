import React from "react";
import Footer from "../../components/Footer/Index";
import Navbar from "../../components/Navbar/Index";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
