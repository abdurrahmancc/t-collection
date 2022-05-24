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

  if (services?.data) {
    services.data.length = 4;
  }

  return (
    <div className="container mx-auto mt-24">
      <div className="mb-10">
        <h1 className="text-center  text-4xl font-bold ">BEST SELLER</h1>
        <div className="text-center">
          <progress className="progress h-1 bg-warning w-56">hellooooooooooooooo</progress>
        </div>
        <p className="text-center mt-3">
          All best seller product are now available for you and your can buy <br /> this product
          from here any time any where so sop now
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-5 justify-items-center">
        {services?.data.map((service) => (
          <ServicesCard service={service} key={service._id}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default BestProduct;
