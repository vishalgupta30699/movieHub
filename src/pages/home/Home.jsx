import React from "react";
//Style
import "./home.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </>
  );
};

export default Home;
