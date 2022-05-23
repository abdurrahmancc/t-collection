import React from "react";

const Shop = () => {
  return (
    <div className=" container mx-auto mt-28">
      <div className="text-center">
        <h1 className="text-4xl text-black font-bold">
          ALL KINDS OF PARTS THAT YOU <br /> NEED CAN FIND HERE
        </h1>
        <button className="btn  btn-warning my-10 text-base-100 rounded-full hover:bg-base-300 hover:border-0 hover:text-neutral">
          shop now
        </button>
        <div className="">
          <figure>
            <img
              className="w-full"
              src={"https://htmldemo.net/lukas/lukas/assets/img/bg/bg-car.png"}
              alt=""
            />
          </figure>
        </div>
      </div>
      <div className="my-14 bg-white">
        <div className="grid lg:grid-cols-2  grid-cols-1 gap-5">
          <figure>
            <img
              className="h-72 w-full"
              src="https://htmldemo.net/lukas/lukas/assets/img/banner/banner-5.jpg"
              alt=""
            />
          </figure>
          <figure>
            <img
              className="h-72 w-full"
              src="https://htmldemo.net/lukas/lukas/assets/img/banner/banner-6.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Shop;
