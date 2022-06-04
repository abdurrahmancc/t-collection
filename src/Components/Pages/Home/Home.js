import React, { useState } from "react";
import Summery from "../../Hooks/Summery";
import ScrollBtn from "../../Shared/ScrollBtn";
import ClientReviews from "../Dashboard/ClientReviews";
import Banner from "./Banner";
import BestProduct from "./BestProduct";
import Brand from "./Brand";
import LatestDesign from "./LatestDesign";
import Newsletter from "./Newsletter";
import Shop from "./Shop";

const Home = () => {
  return (
    <div className="bg-neutral">
      <Banner></Banner>
      <LatestDesign />
      <Brand />
      <BestProduct />
      <Shop />
      <Summery />
      <ClientReviews />
      <Newsletter />
      <ScrollBtn />
    </div>
  );
};

export default Home;
