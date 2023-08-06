import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Navlink from "../Navlink";

export default function Recommended() {
   return (
      <>
         <Swiper
            spaceBetween={30}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
         >
            <SwiperSlide>
               <Navlink to="/" className="rounded-xl object-cover w-full h-full group-hover:scale-105 transition-all duration-400 ease-out"></Navlink>
            </SwiperSlide>
         </Swiper>
      </>
   );
}
