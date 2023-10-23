import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

import "./slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import img1 from "../images/IMG_0400.png";
import img2 from "../images/IMG_0395.png";
import img3 from "../images/IMG_0390.png";
import img4 from "../images/IMG_0393.png";
import img6 from "../images/IMG_0395.png";
import img7 from "../images/IMG_0383.png";
import img8 from "../images/IMG_20231020_172156.png";

export default function Slider() {
  return (
    <div className="slider" id="results">
      <h1 className="sliderh1" data-aos="zoom-in-up">
        Bizning o'quv markazimiz
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
