import { useEffect } from 'react';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import porfolioImg from '/images/port_1.png';
import porfolioImg2 from '/images/port_2.png';
import porfolioImg3 from '/images/port_3.png';
import porfolioImg4 from '/images/port_4.png';
import porfolioImg5 from '/images/port_5.png';
import porfolioImg6 from '/images/port_6.png';
import { HiArrowUpRight } from 'react-icons/hi2';
import './portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  useEffect(() => {
    const $grid = new Isotope('.portfolio-box', {
      masonry: {
        columnWidth: '.portfolio-sizer',
        gutter: '.gutter-sizer',
      },
      itemSelector: '.portfolio-item',
      percentPosition: true,
    });

    // Ensure all images are loaded before initializing Isotope
    imagesLoaded('.portfolio-box', () => {
      $grid.layout();
    });

    // Filter items on button click
    const filterButtons = document.querySelectorAll(
      '.filter-button-group button'
    );
    filterButtons.forEach((button) => {
      button.addEventListener('click', function () {
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');
        $grid.arrange({ filter: filterValue });
      });
    });

    // Animation effect for active background
    filter_animation();

    function filter_animation() {
      const activeBg = document.querySelector('.portfolio-active-bg');
      const activeElement = document.querySelector(
        '.filter-button-group .active'
      );
      updateActiveFilterBtn(activeBg, activeElement);

      filterButtons.forEach((button) => {
        button.addEventListener('click', function () {
          updateActiveFilterBtn(activeBg, this);
        });
      });
    }

    function updateActiveFilterBtn(activeBg, element) {
      if (!element) return;

      const leftOff = element.getBoundingClientRect().left;
      const width = element.offsetWidth;
      const menuLeft = document
        .querySelector('.filter-button-group')
        .getBoundingClientRect().left;

      activeBg.style.left = `${leftOff - menuLeft}px`;
      activeBg.style.width = `${width}px`;
    }

    // Clean up event listeners on component unmount
    return () => {
      filterButtons.forEach((button) => {
        button.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <>
      <div className='portfolio-filter text-center bg-white pt-[60px] pb-[30px] md:pt-20 md:pb-[60px] lg:pt-[100px] xl:pt-[120px] lg:pb-[60px] xl:pb-20'>
        <div className='text-center mb-9'>
          <h5 className='font-FiraSans font-medium text-PrimaryColor-0 flex items-center gap-2 justify-center'>
            LATEST WORKS
          </h5>
          <h1 className='font-FiraSans font-bold text-xl leading-7 sm:text-[36px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-3'>
            Visit the Real Results of
            <br />
            Latest Case Studies
          </h1>
        </div>
        <div className='Container'>
          <div
            className='button-group filter-button-group relative z-10 inline-block py-1 sm:py-[8px] rounded-full bg-BodyBg-0'
            data-aos='fade-up'
            data-aos-delay='500'
            data-aos-duration='1000'
          >
            <button
              data-filter='*'
              className='active px-[7px] sm:px-6 md:px-[32px] rounded-full relative z-10 font-FiraSans text-sm sm:text-base font-medium text-HeadingColor-0 bg-transparent capitalize'
            >
              All Items
            </button>
            <button
              data-filter='.technology'
              className=' px-[7px] sm:px-6 md:px-[32px] rounded-full relative z-10 font-FiraSans text-sm sm:text-base font-medium text-HeadingColor-0 bg-transparent capitalize'
            >
              Technology
            </button>
            <button
              data-filter='.business'
              className=' px-[7px] sm:px-6 md:px-[32px] rounded-full relative z-10 font-FiraSans text-sm sm:text-base font-medium text-HeadingColor-0 bg-transparent capitalize'
            >
              Business
            </button>
            <button
              data-filter='.design'
              className=' px-[7px] sm:px-6 md:px-[32px] rounded-full relative z-10 font-FiraSans text-sm sm:text-base font-medium text-HeadingColor-0 bg-transparent capitalize'
            >
              Design
            </button>
            <div className='portfolio-active-bg rounded-full top-0 left-0 bottom-0 right-0 absolute -z-10 bg-PrimaryColor-0 transition-all duration-500'></div>
          </div>
          <div
            className='portfolio-box text-center pt-10 md:pt-[50px]'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <div className='portfolio-sizer w-[98%] md:w-[45.5%]'></div>
            <div className='gutter-sizer w-[5.5%]'></div>
            <div className='portfolio-item technology business group bg-transparent mb-[4%] w-[98%] md:w-[45.5%] relative z-10 border-b-2 border-BodyBg-0 before:absolute before:right-0 before:-bottom-[2px] before:w-0 before:h-[2px] before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full'>
              <div className='rounded-md'>
                <img
                  src={porfolioImg}
                  draggable='false'
                />
              </div>
              <div className='text-left transition-all duration-500 pt-7 md:px-5 pb-6 relative z-10'>
                <h6 className='font-FiraSans text-PrimaryColor-0 font-medium pl-11 relative z-10 before:z-10 before:absolute before:top-1/2 before:left-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0 before:-translate-y-1/2'>
                  Development
                </h6>
                <div className='inline-block mt-2'>
                  <Link
                    to={'/portfolio_details'}
                    className='font-FiraSans text-2xl sm:text-3xl md:text-2xl lg:text-[34px] font-semibold text-HeadingColor-0'
                  >
                    Analysis of Security
                  </Link>
                </div>
                <Link
                  to={'/portfolio_details'}
                  className='absolute z-10 top-1/2 -translate-y-1/2 right-0'
                >
                  <button className='size-12 sm:size-[64px] md:size-12 lg:size-[64px] text-lg sm:text-[22px] md:text-lg lg:text-[22px] rounded-full bg-BodyBg-0 flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100'>
                    <HiArrowUpRight />
                  </button>
                </Link>
              </div>
            </div>
            <div className='portfolio-item design group bg-transparent mb-[4%] w-[98%] md:w-[45.5%] relative z-10 border-b-2 border-BodyBg-0 before:absolute before:right-0 before:-bottom-[2px] before:w-0 before:h-[2px] before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full'>
              <div className='rounded-md'>
                <img
                  src={porfolioImg2}
                  draggable='false'
                />
              </div>
              <div className='text-left transition-all duration-500 pt-7 md:px-5 pb-6 relative z-10'>
                <h6 className='font-FiraSans text-PrimaryColor-0 font-medium pl-11 relative z-10 before:z-10 before:absolute before:top-1/2 before:left-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0 before:-translate-y-1/2'>
                  Development
                </h6>
                <div className='inline-block mt-2'>
                  <Link
                    to={'/portfolio_details'}
                    className='font-FiraSans text-2xl sm:text-3xl md:text-2xl lg:text-[34px] font-semibold text-HeadingColor-0'
                  >
                    Analysis of Security
                  </Link>
                </div>
                <Link
                  to={'/portfolio_details'}
                  className='absolute z-10 top-1/2 -translate-y-1/2 right-0'
                >
                  <button className='size-12 sm:size-[64px] md:size-12 lg:size-[64px] text-lg sm:text-[22px] md:text-lg lg:text-[22px] rounded-full bg-BodyBg-0 flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100'>
                    <HiArrowUpRight size={'22'} />
                  </button>
                </Link>
              </div>
            </div>
            <div className='portfolio-item business group bg-transparent mb-[4%] w-[98%] md:w-[45.5%] relative z-10 border-b-2 border-BodyBg-0 before:absolute before:right-0 before:-bottom-[2px] before:w-0 before:h-[2px] before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full'>
              <div className='rounded-md'>
                <img
                  src={porfolioImg3}
                  draggable='false'
                />
              </div>
              <div className='text-left transition-all duration-500 pt-7 md:px-5 pb-6 relative z-10'>
                <h6 className='font-FiraSans text-PrimaryColor-0 font-medium pl-11 relative z-10 before:z-10 before:absolute before:top-1/2 before:left-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0 before:-translate-y-1/2'>
                  Development
                </h6>
                <div className='inline-block mt-2'>
                  <Link
                    to={'/portfolio_details'}
                    className='font-FiraSans text-2xl sm:text-3xl md:text-2xl lg:text-[34px] font-semibold text-HeadingColor-0'
                  >
                    Analysis of Security
                  </Link>
                </div>
                <Link
                  to={'/portfolio_details'}
                  className='absolute z-10 top-1/2 -translate-y-1/2 right-0'
                >
                  <button className='size-12 sm:size-[64px] md:size-12 lg:size-[64px] text-lg sm:text-[22px] md:text-lg lg:text-[22px] rounded-full bg-BodyBg-0 flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100'>
                    <HiArrowUpRight size={'22'} />
                  </button>
                </Link>
              </div>
            </div>
            <div className='portfolio-item technology group bg-transparent mb-[4%] w-[98%] md:w-[45.5%] relative z-10 border-b-2 border-BodyBg-0 before:absolute before:right-0 before:-bottom-[2px] before:w-0 before:h-[2px] before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full'>
              <div className='rounded-md'>
                <img
                  src={porfolioImg4}
                  draggable='false'
                />
              </div>
              <div className='text-left transition-all duration-500 pt-7 md:px-5 pb-6 relative z-10'>
                <h6 className='font-FiraSans text-PrimaryColor-0 font-medium pl-11 relative z-10 before:z-10 before:absolute before:top-1/2 before:left-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0 before:-translate-y-1/2'>
                  Development
                </h6>
                <div className='inline-block mt-2'>
                  <Link
                    to={'/portfolio_details'}
                    className='font-FiraSans text-2xl sm:text-3xl md:text-2xl lg:text-[34px] font-semibold text-HeadingColor-0'
                  >
                    Analysis of Security
                  </Link>
                </div>
                <Link
                  to={'/portfolio_details'}
                  className='absolute z-10 top-1/2 -translate-y-1/2 right-0'
                >
                  <button className='size-12 sm:size-[64px] md:size-12 lg:size-[64px] text-lg sm:text-[22px] md:text-lg lg:text-[22px] rounded-full bg-BodyBg-0 flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100'>
                    <HiArrowUpRight size={'22'} />
                  </button>
                </Link>
              </div>
            </div>
            <div className='portfolio-item design business group bg-transparent mb-[4%] w-[98%] md:w-[45.5%] relative z-10 border-b-2 border-BodyBg-0 before:absolute before:right-0 before:-bottom-[2px] before:w-0 before:h-[2px] before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full'>
              <div className='rounded-md'>
                <img
                  src={porfolioImg5}
                  draggable='false'
                />
              </div>
              <div className='text-left transition-all duration-500 pt-7 md:px-5 pb-6 relative z-10'>
                <h6 className='font-FiraSans text-PrimaryColor-0 font-medium pl-11 relative z-10 before:z-10 before:absolute before:top-1/2 before:left-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0 before:-translate-y-1/2'>
                  Development
                </h6>
                <div className='inline-block mt-2'>
                  <Link
                    to={'/portfolio_details'}
                    className='font-FiraSans text-2xl sm:text-3xl md:text-2xl lg:text-[34px] font-semibold text-HeadingColor-0'
                  >
                    Analysis of Security
                  </Link>
                </div>
                <Link
                  to={'/portfolio_details'}
                  className='absolute z-10 top-1/2 -translate-y-1/2 right-0'
                >
                  <button className='size-12 sm:size-[64px] md:size-12 lg:size-[64px] text-lg sm:text-[22px] md:text-lg lg:text-[22px] rounded-full bg-BodyBg-0 flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100'>
                    <HiArrowUpRight size={'22'} />
                  </button>
                </Link>
              </div>
            </div>
            <div className='portfolio-item technology design group bg-transparent mb-[4%] w-[98%] md:w-[45.5%] relative z-10 border-b-2 border-BodyBg-0 before:absolute before:right-0 before:-bottom-[2px] before:w-0 before:h-[2px] before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full'>
              <div className='rounded-md'>
                <img
                  src={porfolioImg6}
                  draggable='false'
                />
              </div>
              <div className='text-left transition-all duration-500 pt-7 md:px-5 pb-6 relative z-10'>
                <h6 className='font-FiraSans text-PrimaryColor-0 font-medium pl-11 relative z-10 before:z-10 before:absolute before:top-1/2 before:left-0 before:w-8 before:h-[2px] before:bg-PrimaryColor-0 before:-translate-y-1/2'>
                  Development
                </h6>
                <div className='inline-block mt-2'>
                  <Link
                    to={'/portfolio_details'}
                    className='font-FiraSans text-2xl sm:text-3xl md:text-2xl lg:text-[34px] font-semibold text-HeadingColor-0'
                  >
                    Analysis of Security
                  </Link>
                </div>
                <Link
                  to={'/portfolio_details'}
                  className='absolute z-10 top-1/2 -translate-y-1/2 right-0'
                >
                  <button className='size-12 sm:size-[64px] md:size-12 lg:size-[64px] text-lg sm:text-[22px] md:text-lg lg:text-[22px] rounded-full bg-BodyBg-0 flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-100'>
                    <HiArrowUpRight size={'22'} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
