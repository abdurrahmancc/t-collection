import React from "react";

const Newsletter = () => {
  return (
    <div
      style={{ backgroundImage: "url(https://htmldemo.net/lukas/lukas/assets/img/bg/deal-bg.jpg)" }}
      className="bg-cover bg-no-repeat py-20 "
    >
      <div className="text-center">
        <h4 className="text-5xl text-black">Join Our Newsletter</h4>
        <p className="text-black my-10">
          Subscribe our newsletter and all latest news of our <br /> latest product, promotion and
          offers
        </p>
        <div className="flex justify-center">
          <div class="form-control ">
            <label class="input-group">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                class="input input-bordered lg:w-[542px] md:w-[400px]"
              />
              <button className="btn btn-primary">SUBSCRIBER</button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
