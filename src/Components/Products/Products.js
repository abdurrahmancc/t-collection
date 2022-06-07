import React from "react";
import { useQuery } from "react-query";
import Fetcher from "../Api/Fetcher";
import Loading from "../Loading/Loading";
import ServicesCard from "../Pages/Home/ServicesCard";
import ScrollBtn from "../Shared/ScrollBtn";

const Products = () => {
  const { data: services, isLoading } = useQuery("homeServices", () => Fetcher.get("/services"));
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section>
        <div className="container mx-auto my-24">
          <div className="mb-10 ">
            <h1 className="text-center  text-4xl font-bold uppercase">All Products</h1>
            <div className="text-center">
              <progress className="progress h-1 bg-warning w-56">hellooooooooooooooo</progress>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 justify-items-center">
              {services?.data.map((service) => (
                <ServicesCard service={service} key={service._id}></ServicesCard>
              ))}
            </div>
          </div>
        </div>
        <ScrollBtn />
      </section>
    </>
  );
};

export default Products;
