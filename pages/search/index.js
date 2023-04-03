import React from "react";
import BeatCard from "../../components/BeatCard/BeatCard";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/ui/Card";

const index = () => {
  return (
    <Layout>
      <Card>
        <SearchBar /> 
        <BeatCard />
      </Card>
    </Layout>
  );
};

export default index;
