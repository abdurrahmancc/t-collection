import React from "react";

const Summery = () => {
  return (
    <div>
      <h1>bussiness summery</h1>
      <div className="grid lg:grid-cols-3 ">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p className="text-2xl font-bold">300+</p>
            <p>Happy Customers</p>
            <p>Annual Revenue</p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p className="text-2xl font-bold">300+</p>
            <p>Reviews</p>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <p className="text-2xl font-bold">500+</p>
            <p>Tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summery;
