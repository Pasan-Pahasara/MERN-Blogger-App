import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import Hero from "./container/Hero/Hero";
import Articles from "../../components/Articles/Articles";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
    </MainLayout>
  );
};

export default Home;
