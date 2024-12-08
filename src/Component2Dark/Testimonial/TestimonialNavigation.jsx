import { GoArrowUpRight, GoArrowUpLeft } from "react-icons/go";
import { useSwiper } from "swiper/react";

const TestimonialNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className='flex flex-col-reverse items-end justify-end gap-4 absolute z-10 right-0 top-1/2 -translate-y-1/2'>
      <button
        className='size-[46px] -rotate-45 rounded-full overflow-hidden relative bg-[#0b4b4b] border border-PrimaryColor-0 text-white flex items-center hover:text-white hover:border-BodyBg2-0 justify-center transition-all duration-500 z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-PrimaryColor-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100'
        onClick={() => swiper.slidePrev()}
      >
        <GoArrowUpLeft size={'20'} />
      </button>
      <button
        className='size-[46px] rotate-45 rounded-full overflow-hidden relative bg-PrimaryColor-0 border border-BodyBg2-0 text-white flex items-center hover:text-white hover:border-PrimaryColor-0 justify-center transition-all duration-500 z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-[#0b4b4b] after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100'
        onClick={() => swiper.slideNext()}
      >
        <GoArrowUpRight size={'20'} />
      </button>
    </div>
  );
};

export default TestimonialNavigation;
