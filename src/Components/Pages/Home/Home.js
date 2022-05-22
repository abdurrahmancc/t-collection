import React from "react";
import Banner from "./Banner";
import BestProduct from "./BestProduct";
import LatestDesign from "./LatestDesign";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestDesign />
      <BestProduct />
    </div>
  );
};

export default Home;
