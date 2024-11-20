import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useSwiper } from "swiper/react";

const BannerNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className='flex justify-between w-full absolute px-[5%] 2xl:px-24 top-[80%] 2xl:top-[46%]'>
      <button
        className='size-10 md:size-[70px] rounded-full overflow-hidden relative bg-transparent border-2 border-white border-opacity-20 text-white flex items-center hover:text-white hover:border-PrimaryColor2-0 justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:left-[0] after:bg-PrimaryColor2-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100 hover:after:rotate-180'
        onClick={() => swiper.slideNext()}
      >
        <FaChevronLeft />
      </button>
      <button
        className='size-10 md:size-[70px] rounded-full overflow-hidden relative bg-transparent border-2 border-white border-opacity-20 text-white flex items-center hover:text-white hover:border-PrimaryColor2-0 justify-center transition-all duration-500 z-10 after:absolute after:top-[0] after:left-[0] after:bg-PrimaryColor2-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100 hover:after:rotate-180'
        onClick={() => swiper.slidePrev()}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default BannerNavigation;
