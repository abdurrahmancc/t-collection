import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className="z-0 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-screen object-scale-top "
            src="http://magento2.magentech.com/themes/sm_autostore/pub/media/wysiwyg/slideshow/home-1/item-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-screen object-scale-top"
            src="https://www.maxxis.com/se/wp-content/uploads/sites/6/2021/04/MLC-PCR-GROUP-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-screen object-scale-top"
            src="https://htmldemo.net/lukas/lukas/assets/img/slider/slider-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-screen object-scale-top"
            src="http://magento2.magentech.com/themes/sm_autostore/pub/media/wysiwyg/slideshow/home-1/item-3.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
