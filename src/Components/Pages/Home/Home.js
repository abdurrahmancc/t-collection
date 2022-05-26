import React from "react";
import ClientReviews from "../Dashboard/ClientReviews";
import Review from "../Dashboard/Review";
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
      <ClientReviews />
      <Newsletter />
    </div>
  );
};

export default Home;
