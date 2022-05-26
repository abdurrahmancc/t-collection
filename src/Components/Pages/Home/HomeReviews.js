import React from "react";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useQuery } from "react-query";
import axiosPrivet from "../../Api/axiosPrivet";
import Loading from "../../Loading/Loading";

const HomeReviews = () => {
  const { data, isLoading } = useQuery("review", () => axiosPrivet.get("/reviews"));
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="">
      <Swiper
        slidesPerView={3}
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
        {data &&
          data?.data?.map((review) => (
            <SwiperSlide>
              <div className=" py-10">
                <div class="card lg:max-w-lg  mt-5 max-h-[300px]  shadow-xl mx-auto">
                  <figure class="px-10 mx-auto max-w-[150px] pt-5">
                    <img className=" rounded-full" src={review?.userPhoto} alt="Shoes" />
                  </figure>
                  <div class="card-body items-center text-center">
                    <h2 class="card-title">{review.name}</h2>
                    <div className="flex justify-between">
                      <p>profession: {review?.profession}</p>
                      <p>profession: {review?.rating}</p>
                    </div>
                    <p>{review?.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        {/*        <SwiperSlide>
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
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default HomeReviews;
