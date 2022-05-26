import React from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Review = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://templatekit.jegtheme.com/automobi/wp-content/uploads/sites/271/2022/04/speed-auto-9PLF3B.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://templatekit.jegtheme.com/automobi/wp-content/uploads/sites/271/2022/04/electrica-MW2WXM.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://templatekit.jegtheme.com/automobi/wp-content/uploads/sites/271/2022/04/sport-car-X9SFES.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://templatekit.jegtheme.com/automobi/wp-content/uploads/sites/271/2022/04/auto-club-2-AXZB7M.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://templatekit.jegtheme.com/automobi/wp-content/uploads/sites/271/2022/04/electrica-MW2WXM.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://templatekit.jegtheme.com/automobi/wp-content/uploads/sites/271/2022/04/speed-auto-9PLF3B.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://templatekit.jegtheme.com/automobi/wp-content/uploads/sites/271/2022/04/car-shop-V49ANM.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://templatekit.jegtheme.com/automobi/wp-content/uploads/sites/271/2022/04/sport-car-X9SFES.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://templatekit.jegtheme.com/automobi/wp-content/uploads/sites/271/2022/04/auto-club-2-AXZB7M.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://templatekit.jegtheme.com/automobi/wp-content/uploads/sites/271/2022/04/speed-auto-9PLF3B.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Review;
