import { GoArrowUpRight, GoArrowUpLeft } from "react-icons/go";
import { useSwiper } from "swiper/react";

const ServiceNavigation = () => {
  const swiper = useSwiper();

  return (
    <div className="flex justify-end gap-[18px] w-full absolute right-0 top-0">
      <button
        className="size-[60px] rounded-full overflow-hidden relative bg-white border border-BorderColor-0 text-PrimaryColor2-0 flex items-center hover:text-white hover:border-PrimaryColor2-0 justify-center transition-all duration-500 z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-PrimaryColor2-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
        onClick={() => swiper.slidePrev()}
      >
        <GoArrowUpLeft size={"28"} />
      </button>
      <button
        className="size-[60px] rounded-full overflow-hidden relative border border-PrimaryColor2-0 text-white bg-PrimaryColor2-0 flex items-center hover:text-PrimaryColor2-0 hover:border-BorderColor-0 justify-center transition-all duration-500 z-10 after:absolute after:rounded-full after:top-0 after:left-0 after:bg-BodyBg4-0 after:w-full after:h-full after:scale-0 after:-z-10 after:transition-all after:duration-500 hover:after:scale-100"
        onClick={() => swiper.slideNext()}
      >
        <GoArrowUpRight size={"28"} />
      </button>
    </div>
  );
};

export default ServiceNavigation;
