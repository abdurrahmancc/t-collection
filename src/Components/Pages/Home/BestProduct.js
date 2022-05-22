import React, { useState } from "react";
import { useQuery } from "react-query";
import Fetcher from "../../Api/Fetcher";
import Loading from "../../Loading/Loading";
import ServicesCard from "./ServicesCard";

const BestProduct = () => {
  const { data: services, isLoading } = useQuery("homeServices", () => Fetcher.get("/services"));
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto mt-24">
      <div className="mb-10">
        <h1 className="text-center text-4xl font-bold">BEST SELLER</h1>
        <p className="text-center">
          All best seller product are now available for you and your can buy <br /> this product
          from here any time any where so sop now
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5">
        <ServicesCard></ServicesCard>
        <ServicesCard></ServicesCard>
        <ServicesCard></ServicesCard>
        <ServicesCard></ServicesCard>
      </div>
    </div>
  );
};

export default BestProduct;
