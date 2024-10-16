/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import TestimonialCard from './TestimonialCard';
import border from '/images/hero_border.png';
import testiThumb from '/images/auothor.png';
import testiThumb2 from '/images/auothor2.png';
import testiQuote from '/images/quote.png';
import CountUp from 'react-countup';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import serviceShape2 from '/images/about_shape_3.png';
import serviceShape3 from '/images/service_shpe2.png';
import serviceShape4 from '/images/tir.png';

const testiData = [
  {
    id: 1,
    testiThumb: testiThumb,
    testiQuote: testiQuote,
    testiDesc: `“Conveniently transform architectures
									diness equity invested Appropriately
									proactives leadership skills without 
									applications Consultant”`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: 'Jhon D. Alexon',
    testiDesignation: 'Web Developer',
  },
  {
    id: 2,
    testiThumb: testiThumb2,
    testiQuote: testiQuote,
    testiDesc: `“Conveniently transform architectures
									diness equity invested Appropriately
									proactives leadership skills without 
									applications Consultant”`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: 'David Miller',
    testiDesignation: 'UI/UX Designer',
  },
  {
    id: 3,
    testiThumb: testiThumb,
    testiQuote: testiQuote,
    testiDesc: `“Conveniently transform architectures
									diness equity invested Appropriately
									proactives leadership skills without 
									applications Consultant”`,
    testiRatingIcon: <MdOutlineStarPurple500 />,
    testiName: 'Anjelina Watson',
    testiDesignation: 'Web Developer',
  },
];

const Testimonial = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1500,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + ' pagination-bullet"></span>';
    },
  };
  return (
    <section className='testimonial pt-28 pb-[220px] bg-[url(/images/testi_bg.png)] bg-no-repeat bg-cover bg-center relative z-10 overflow-hidden'>
      <div className='absolute -z-10 top-24 right-[35%] hidden 2xl:block animate-rotate'>
        <img
          src={serviceShape4}
          draggable='false'
        />
      </div>
      <div className='absolute -z-10 top-1/4 -left-40 hidden 2xl:block animate-rotate'>
        <img
          src={serviceShape3}
          draggable='false'
        />
      </div>
      <div className='absolute -z-10 right-10 bottom-10 hidden 2xl:block animate-rotate'>
        <img
          src={serviceShape3}
          draggable='false'
        />
      </div>
      <div className='Container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-5'>
            <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3'>
              Testimonial
            </h5>
            <h1 className='font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] relative pb-4'>
              Trusted By The Genius <br /> People With Consalt
              <img
                src={border}
                draggable='false'
                className='absolute bottom-0 left-0'
              />
            </h1>
            <p className='font-FiraSans text-lg text-TextColor2-0 pt-[30px] pb-6'>
              Media leadership skills before cross-media innovation{' '}
              <br className='hidden sm:block' /> develop standardized platforms
              without
            </p>
            <div className='flex items-center gap-[22px] border-y border-BorderColor-0 py-[26px] relative mr-10'>
              <CountUp
                start={-11}
                prefix='4.'
                end={98}
                suffix={''}
                className='font-FiraSans text-3xl leading-[22px] sm:text-[50px] sm:leading-[42px] xl:text-[56px] xl:leading-[44px] text-PrimaryColor-0 font-medium border-r border-BorderColor-0 pr-[22px]'
              />
              <div>
                <ul className='flex gap-[6px] items-center'>
                  <li className='text-[#ffb609] text-xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                  <li className='text-[#ffb609] text-xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                  <li className='text-[#ffb609] text-xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                  <li className='text-[#ffb609] text-xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                  <li className='text-[#ffb609] text-xl'>
                    <MdOutlineStarPurple500 />
                  </li>
                </ul>
                <p className='font-FiraSans text-lg text-TextColor2-0 pt-1'>
                  Avg. Clients Ratings
                </p>
              </div>
              <div className='absolute -z-10 top-11  right-6 hidden 2xl:block animate-dance3'>
                <img
                  src={serviceShape2}
                  draggable='false'
                />
              </div>
            </div>
            <h6 className='font-FiraSans text-TextColor2-0 flex items-center gap-2 pt-[18px]'>
              <span className='text-PrimaryColor-0'>
                <IoIosCheckmarkCircle size={'22'} />
              </span>
              100% Clients Satisfaction Gaurantee
            </h6>
          </div>
          <div className='col-span-7'>
            <Swiper
              {...settings}
              pagination={pagination}
              modules={[Pagination]}
            >
              <div>
                {testiData.map(
                  ({
                    id,
                    testiThumb,
                    testiQuote,
                    testiRatingIcon,
                    testiName,
                    testiDesignation,
                    testiDesc,
                  }) => {
                    return (
                      <SwiperSlide key={id}>
                        <div className='pb-[52px]'>
                          <TestimonialCard
                            testiThumb={testiThumb}
                            testiQuote={testiQuote}
                            testiRatingIcon={testiRatingIcon}
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
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
