/* eslint-disable no-unused-vars */
import brandThumb from "/images/brand_1.png";
import brandThumb2 from "/images/brand_2.png";
import brandThumb3 from "/images/brand_3.png";
import brandThumb4 from "/images/brand_4.png";
import brandThumb5 from "/images/brand_5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Brand = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 500,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  };
  return (
    <div className='mx-2 lg:mx-5 bg-[#0b204a] py-14'>
      <div className='Container'>
        <Swiper {...settings}>
          <SwiperSlide>
            <div className='flex justify-center'>
              <img src={brandThumb} alt="Brand Logo" draggable="false" className="transition-all duration-300 hover:brightness-0 hover:invert-[1]" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex justify-center'>
              <img src={brandThumb2} alt="Brand Logo" draggable="false" className="transition-all duration-300 hover:brightness-0 hover:invert-[1]" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex justify-center'>
              <img src={brandThumb3} alt="Brand Logo" draggable="false" className="transition-all duration-300 hover:brightness-0 hover:invert-[1]" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex justify-center'>
              <img src={brandThumb4} alt="Brand Logo" draggable="false" className="transition-all duration-300 hover:brightness-0 hover:invert-[1]" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex justify-center'>
              <img src={brandThumb5} alt="Brand Logo" draggable="false" className="transition-all duration-300 hover:brightness-0 hover:invert-[1]" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex justify-center'>
              <img src={brandThumb3} alt="Brand Logo" draggable="false" className="transition-all duration-300 hover:brightness-0 hover:invert-[1]" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Brand;
