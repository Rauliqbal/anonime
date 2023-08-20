import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Navlink from "../Navlink";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SeasonNow() {
   const [sliders, setSliders] = useState([]);

   useEffect(() => {
      async function getSliders() {
         try {
            const response = await axios.get("https://api.jikan.moe/v4/seasons/now");

            setSliders(response.data.data);
         } catch (error) {
            console.log(error);
         }
      }
      getSliders();
   }, []);

   return (
      <section>
         <h2 className="text-2xl font-semibold tracking-wide mb-6 text-white">Season Now</h2>
         <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
               768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
            }}
            pagination={{
               clickable: true,
            }}
            autoplay={{
               delay: 3000,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
         >
            {Array.from(sliders)
               .slice(0, 8)
               .map((slider, index) => (
                  <SwiperSlide className="h-44 sm:h-72 md:h-96 lg:h-[30rem] rounded-2xl overflow-hidden group" key={index}>
                     <Navlink to={`/detail/${slider.mal_id}`} className=" relative rounded-xl object-cover w-full group-hover:scale-105 transition-all duration-400 ease-out">
                        <img className="absolute w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out" src={slider.trailer.images.maximum_image_url} alt="" />
                        <div className="flex flex-col justify-end gap-4 absolute w-full h-full bg-gradient-to-t from-black to to-transparent p-2 md:p-7">
                           <h2 className="text-white font-semibold text-sm md:text-2xl">{slider.title}</h2>
                        </div>
                     </Navlink>
                  </SwiperSlide>
               ))}
         </Swiper>
      </section>
   );
}
