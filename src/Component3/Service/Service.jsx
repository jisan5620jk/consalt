import serviceThumb from "/images/service_1.png";
import serviceThumb2 from "/images/service_2.png";
import serviceThumb3 from "/images/service_5.png";
import thumbIcon from '/images/service_icon.png';
import serviceThumbShape from '/images/service_shpe.png';
import serviceShape from '/images/boxs.png';
import serviceShape2 from '/images/service_shape.png';
import serviceShape3 from '/images/service_shpe2.png';
import contentShape from '/images/service_dot2.png';
import serviceShape4 from '/images/tir.png';
import border from '/images/hero_border.png';
import ServiceCard from "./ServiceCard";
import { GoArrowUpRight } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";

const ServiceData = [
  {
    id: 1,
    serviceSubTitle: 'Finance',
    serviceTitle: 'Investment Idea',
    serviceDesc:
      'Seamlessly expedite extensible the business methodologies benchmark done',
    serviceUrl: '/service_details',
    btnContent: 'View Details',
    btnIcon: <GoArrowUpRight />,
    serviceThumb: serviceThumb,
    serviceThumbShape: serviceThumbShape,
    thumbIcon: thumbIcon,
    contentShape: contentShape,
  },
  {
    id: 2,
    serviceSubTitle: 'Offer',
    serviceTitle: 'Investment Strategies',
    serviceDesc:
      'Seamlessly expedite extensible the business methodologies benchmark done',
    serviceUrl: '/service_details',
    btnContent: 'View Details',
    btnIcon: <GoArrowUpRight />,
    serviceThumb: serviceThumb2,
    serviceThumbShape: serviceThumbShape,
    thumbIcon: thumbIcon,
    contentShape: contentShape,
  },
  {
    id: 3,
    serviceSubTitle: 'Services',
    serviceTitle: 'Expert Investment',
    serviceDesc:
      'Seamlessly expedite extensible the business methodologies benchmark done',
    serviceUrl: '/service_details',
    btnContent: 'View Details',
    btnIcon: <GoArrowUpRight />,
    serviceThumb: serviceThumb3,
    serviceThumbShape: serviceThumbShape,
    thumbIcon: thumbIcon,
    contentShape: contentShape,
  },
  {
    id: 4,
    serviceSubTitle: 'Financial',
    serviceTitle: 'Smart Investment',
    serviceDesc:
      'Seamlessly expedite extensible the business methodologies benchmark done',
    serviceUrl: '/service_details',
    btnContent: 'View Details',
    btnIcon: <GoArrowUpRight />,
    serviceThumb: serviceThumb2,
    serviceThumbShape: serviceThumbShape,
    thumbIcon: thumbIcon,
    contentShape: contentShape,
  },
];

const Service = () => {
  const settings = {
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    initialSlide: 1,
    centeredSlides: true,
    autoplay: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
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
    <section className='Service relative z-10 pt-28 pb-[120px] bg-gradient-to-t to-BodyBg-0 from-transparent'>
      <div className='absolute -z-10 top-28 left-[22%] hidden 2xl:block animate-rotate'>
        <img
          src={serviceShape}
          draggable='false'
        />
      </div>
      <div className='absolute -z-10 top-40 right-[11rem] hidden 2xl:block animate-rotate'>
        <img
          src={serviceShape3}
          draggable='false'
        />
      </div>
      <div className='absolute -z-10 bottom-52 left-32 hidden 2xl:block animate-wiggle'>
        <img
          src={serviceShape2}
          draggable='false'
        />
      </div>
      <div className='absolute -z-10 top-36 right-[22%] hidden 2xl:block animate-rotate'>
        <img
          src={serviceShape4}
          draggable='false'
        />
      </div>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3'>
            Services We Provide
          </h5>
          <h1 className='font-FiraSans font-semibold text-HeadingColor-0 inline-block text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] relative pb-4'>
            Individuals Professional Offer
            <img
              src={border}
              draggable='false'
              className='absolute bottom-0 left-1/2 -translate-x-1/2'
            />
          </h1>
        </div>
        <div className='mt-[66px]'>
          <Swiper
            {...settings}
            pagination={pagination}
            modules={[Pagination]}
          >
            {ServiceData.map(
              ({
                id,
                serviceIcon,
                serviceSubTitle,
                serviceTitle,
                serviceDesc,
                btnContent,
                contentShape,
                serviceUrl,
                btnIcon,
                serviceThumbShape,
                serviceThumb,
                thumbIcon,
              }) => {
                return (
                  <>
                    <SwiperSlide
                      key={id}
                      className='pb-[70px]'
                    >
                      <ServiceCard
                        serviceIcon={serviceIcon}
                        serviceSubTilte={serviceSubTitle}
                        serviceTitle={serviceTitle}
                        serviceDesc={serviceDesc}
                        btnContent={btnContent}
                        serviceUrl={serviceUrl}
                        btnIcon={btnIcon}
                        contentShape={contentShape}
                        serviceThumbShape={serviceThumbShape}
                        serviceThumb={serviceThumb}
                        thumbIcon={thumbIcon}
                      />
                    </SwiperSlide>
                  </>
                );
              }
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Service;
