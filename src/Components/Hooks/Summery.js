import React from "react";

const Summery = () => {
  return (
    <div className="mb-20 container mx-auto">
      <h1 className="text-4xl text-center font-bold">bussiness summery</h1>
      <div className="text-center mb-10">
        <progress className="progress h-1 bg-warning w-72">
          helloooooooooooooooooooooooooooooo
        </progress>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 justify-items-center text-center">
        <div class="card lg:max-w-lg px-16  bg-base-100 shadow-xl">
          <div class="card-body ">
            <h2 class="card-title mx-auto ">Card title!</h2>
            <p className="text-2xl font-bold">300+</p>
            <p>Happy Customers</p>
          </div>
        </div>
        <div class="card lg:max-w-lg px-20   bg-base-100 shadow-xl">
          <div class="card-body ">
            <h2 class="card-title mx-auto">Card title!</h2>
            <p className="text-2xl font-bold">300+</p>
            <p>Reviews</p>
          </div>
        </div>
        <div class="card lg:max-w-lg px-20  bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title  mx-auto">Card title!</h2>
            <p className="text-2xl font-bold">500+</p>
            <p>Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summery;
