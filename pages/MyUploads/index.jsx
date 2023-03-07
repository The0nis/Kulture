import React from "react";
import Page from "../../components/Page";
import GenreTab from "./GenreTab";
import UploadCard from "./UploadCard";

const index = () => {
  return (
    <Page>
      <section style={{ maxWidth: "528px", margin: "auto" }}>
        <GenreTab />
        <UploadCard />
      </section>
    </Page>
  );
};

export default index;
