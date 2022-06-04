import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollBtn = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      console.log(scrolled);
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = (e) => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <button
        className=" cursor-pointer fixed bottom-96 right-10 text-[2rem]"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <FaArrowCircleUp className="text-green-500 " />
      </button>
    </>
  );
};

export default ScrollBtn;
