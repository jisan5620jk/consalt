import testiImg from '/images/testi_img.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TestimonialCard from './TestimonialCard';
import { IoStar } from 'react-icons/io5';
import { RiDoubleQuotesR } from 'react-icons/ri';
import ServiceNavigation from './ServiceNavigation';
import testiShape from '/images/testi_shape.png';
import Blog from '../Blog/Blog';

const testiData = [
  {
    id: 1,
    testiImg: testiImg,
    testiRatingIcon: <IoStar />,
    testiQuate: <RiDoubleQuotesR />,
    testiName: 'Jhon D. Alexon',
    testiDesignation: 'Web Developer',
    testiDesc: `“Conveniently transform error-free architectures whereas transform the
									maximizing collaboration and idea-sharing. Intrinsicly an maintaince
									team driven web-readiness vis-a-vis equity invested the moderns
									Appropriately underwhelm”`,
  },
  {
    id: 2,
    testiImg: testiImg,
    testiRatingIcon: <IoStar />,
    testiQuate: <RiDoubleQuotesR />,
    testiName: 'David Miller',
    testiDesignation: 'UI/UX Designer',
    testiDesc: `“Conveniently transform error-free architectures whereas transform the
									maximizing collaboration and idea-sharing. Intrinsicly an maintaince
									team driven web-readiness vis-a-vis equity invested the moderns
									Appropriately underwhelm”`,
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1400: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <section className='pt-20 md:pt-28 bg-gradient-to-b from-BodyBg-0 to-transparent relative z-10'>
      <img
        src={testiShape}
        alt='Shape'
        className='absolute top-28 right-1/3 invert-[1] opacity-50 size-[148px] animate-rotate hidden xl:block'
      />
      <div className='Container pb-14 md:pb-20 lg::pb-[120px]'>
        <div className='flex justify-between flex-wrap items-center mb-4 md:-mb-[100px] lg:-mb-[130px]'>
          <div>
            <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor2-0 uppercase mb-3'>
              TESTIMONIALS
            </h5>
            <h1 className='font-FiraSans font-semibold text-HeadingColor2-0 inline-block text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] relative pb-4'>
              What Says our Satisfied Clients <br />
              About Consultant Service
            </h1>
          </div>
          <div></div>
        </div>
        <div className='mt-[30px]'>
          <Swiper {...settings}>
            <div>
              {testiData.map(
                ({
                  id,
                  testiImg,
                  testiRatingIcon,
                  testiQuate,
                  testiName,
                  testiDesignation,
                  testiDesc,
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className='pt-24 md:pt-[120px] lg:pt-[132px]'>
                        <TestimonialCard
                          testiImg={testiImg}
                          testiRatingIcon={testiRatingIcon}
                          testiQuate={testiQuate}
                          testiName={testiName}
                          testiDesignation={testiDesignation}
                          testiDesc={testiDesc}
                        />
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </div>
            <ServiceNavigation />
          </Swiper>
        </div>
      </div>
      <Blog />
    </section>
  );
};

export default Testimonial;
