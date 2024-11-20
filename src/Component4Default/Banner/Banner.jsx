import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./banner.css";
import "swiper/css/pagination";
import BannerNavigation from "./BannerNavigation";
import { HiOutlineArrowRight } from "react-icons/hi";
import { LuArrowDown } from "react-icons/lu";

const Banner = () => {
  const settings = {
    loop: true,
    speed: 2000,
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    duration: 3000,
  };
  return (
    <div className='relative px-2 xl:px-5'>
      <div className='absolute z-50 left-1/2 -translate-x-1/2 bottom-[50px]'>
        <a href={'#feature'}>
          <button className='w-[30px] h-[60px] rounded-full border border-TextColor-0 flex items-end justify-center text-TextColor-0 text-[26px]'>
            <span className='animate-wiggle -mb-[18px]'>
              <LuArrowDown />
            </span>
          </button>
        </a>
      </div>
      <Swiper {...settings}>
        <SwiperSlide>
          <section className="bg-[url('/images/slider_bg.jpg')] bg-cover bg-center bg-no-repeat h-[600px] sm:h-[700px] md:h-[600px] lg:h-[660px] xl:h-[800px] flex items-center rounded-b-2xl sm:rounded-b-3xl md:rounded-b-[40px] 2xl:rounded-b-[140px]">
            <div className='Container'>
              <div className='relative banner-content'>
                <h1 className='font-FiraSans font-semibold text-white text-[26px] leading-[36px] sm:text-[46px] sm:leading-[52px] md:text-[68x] lg:text-[50px] xl:text-[54px] xl:leading-[68px] 2xl:text-[56px] 2xl:leading-[70px]'>
                  Crafting the Digital
                  <br />
                  Solutions for Business
                </h1>
                <p className='font-FiraSans text-TextColor-0 mb-[38px] mt-[16px]'>
                  Continually plagiarize virtual web services with resource{' '}
                  <br className='hidden xl:block 2xl:hidden' />
                  maximizing{' '}
                  <br className='hidden md:block xl:hidden 2xl:block' /> action
                  items. Globally build front-end
                </p>
                <div className='flex flex-col sm:flex-row sm:items-center gap-8'>
                  <Link to={'/contact'}>
                    <button className='primary-btn4'>{`Get Started now`}</button>
                  </Link>
                  <Link to={'/about'}>
                    <button className='flex items-center gap-2 text-white font-FiraSans font-medium group'>
                      Learn More{' '}
                      <span className='-rotate-45 transition-all duration-500 group-hover:rotate-0'>
                        <HiOutlineArrowRight />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-[url('/images/banner2.png')] bg-cover bg-center bg-no-repeat h-[600px] sm:h-[700px] md:h-[600px] lg:h-[660px] xl:h-[800px] flex items-center rounded-b-2xl sm:rounded-b-3xl md:rounded-b-[40px] 2xl:rounded-b-[140px]">
            <div className='Container'>
              <div className='relative banner-content'>
                <h1 className='font-FiraSans font-semibold text-white text-[26px] leading-[36px] sm:text-[46px] sm:leading-[52px] md:text-[68x] lg:text-[50px] xl:text-[54px] xl:leading-[68px] 2xl:text-[56px] 2xl:leading-[70px]'>
                  Crafting the Digital
                  <br />
                  Solutions for Business
                </h1>
                <p className='font-FiraSans text-TextColor-0 mb-[38px] mt-[16px]'>
                  Continually plagiarize virtual web services with resource{' '}
                  <br className='hidden xl:block 2xl:hidden' />
                  maximizing{' '}
                  <br className='hidden md:block xl:hidden 2xl:block' /> action
                  items. Globally build front-end
                </p>
                <div className='flex flex-col sm:flex-row sm:items-center gap-8'>
                  <Link to={'/contact'}>
                    <button className='primary-btn4'>{`Get Started now`}</button>
                  </Link>
                  <Link to={'/about'}>
                    <button className='flex items-center gap-2 text-white font-FiraSans font-medium group'>
                      Learn More{' '}
                      <span className='-rotate-45 transition-all duration-500 group-hover:rotate-0'>
                        <HiOutlineArrowRight />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <BannerNavigation />
      </Swiper>
    </div>
  );
};

export default Banner;
