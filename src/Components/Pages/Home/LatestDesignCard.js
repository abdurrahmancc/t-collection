import React from "react";

const LatestDesignCard = ({ children }) => {
  return (
    <div class="card rounded-none z-10 first-letter: w-full bg-base-100 shadow-xl ">
      <figure class=" ">
        <img src={children} alt="Shoes" class="" />
      </figure>
    </div>
  );
};

export default LatestDesignCard;
