import React from "react";
import Hero from "../../components/Hero/Hero";
import RecentPosts from "../../components/RecentPosts/RecentPosts";
import Featured from "../../components/Featured/Featured";

const Home = () => {
  return (
    <>
      <Hero />
      <RecentPosts />
      <Featured />
    </>
  );
};

export default Home;
