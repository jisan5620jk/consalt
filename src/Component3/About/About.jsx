import aboutThumb from '/images/about_thumb2.png';
import aboutShape from '/images/about_shape_3.png';
import aboutShape2 from '/images/about_shape4.png';
import aboutShape3 from '/images/about_shape5.png';
import aboutIcon from '/images/about3_icon1.png';
import aboutIcon2 from '/images/about3_icon2.png';
import border from '/images/hero_border.png';
import thumb from '/images/like.png';
import { Link } from 'react-router-dom';
import { FaRegThumbsUp } from 'react-icons/fa';

const About = () => {
  return (
    <section className='pb-[120px] pt-[170px] relative z-10'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 lg:gap-10 2xl:gap-16 items-center'>
          <div className='relative z-10'>
            <span className='absolute right-40 top-0 -z-10 h-96 w-52 blur-[150px] bg-PrimaryColor-0 bg-opacity-70 rounded-full'></span>
            <img
              src={aboutThumb}
              draggable='false'
              className='w-full 2xl:w-[inherit] -ml-12'
            />
            <div className='absolute mr-12 -top-4 sm:-top-16 right-9 md:-top-8 sm:right-12 md:right-24 2xl:-top-[70px] 2xl:right-[56px] size-[74px] sm:size-[142px] lg:size-[120px] xl:size-[180px] bg-BodyBg-0 rounded-full flex items-center justify-center border-[5px] border-white'>
              <div className='size-14 sm:size-24 lg:size-28 xl:size-[120px] animate-rotational'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 250.5 250.5'
                  className='overflow-visible'
                >
                  <path
                    d='M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125'
                    id='e-path-35ee1b2'
                    className='fill-transparent'
                  ></path>
                  <text className='font-FiraSans text-[32px] uppercase'>
                    <textPath
                      id='e-text-path-35ee1b2'
                      href='#e-path-35ee1b2'
                      startOffset='0%'
                      className='fill-HeadingColor-0'
                    >
                      * Business Const. * Agency 2024 * Finance Consult
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <img
                  src={thumb}
                  draggable='false'
                />
              </div>
            </div>
          </div>
          <div className='relative z-10'>
            <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3'>
              About Consalt
            </h5>
            <h1 className='font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] relative pb-4'>
              We Helps Grow the Creative <br /> IT Industry Since 2007
              <img
                src={border}
                draggable='false'
                className='absolute bottom-0 left-0'
              />
            </h1>
            <p className='font-FiraSans text-TextColor2-0 pt-6'>
              Globally engage cross-media leadership skills before cross-media
              innovation develop standardized platforms without robust
              applications. Conveniently go forward collaboration and
              idea-sharing
            </p>
            <div className='grid items-center grid-cols-1 gap-7 sm:grid-cols-2 border-b border-BorderColor-0 mt-9 pb-7 mb-9'>
              <div className='flex items-center gap-5'>
                <div className='relative z-10 pl-4'>
                  <img
                    src={aboutIcon}
                    draggable='false'
                  />
                </div>
                <div className='flex-1'>
                  <h5 className='font-FiraSans font-medium text-HeadingColor-0 text-lg md:text-xl lg:text-sm xl:text-lg 2xl:text-xl'>
                    Business Planning & Technologist
                  </h5>
                </div>
              </div>
              <div className='flex items-center gap-5'>
                <div className='relative z-10 pl-4'>
                  <img
                    src={aboutIcon2}
                    draggable='false'
                  />
                </div>
                <div className='flex-1'>
                  <h5 className='font-FiraSans font-medium text-HeadingColor-0 text-lg md:text-xl lg:text-sm xl:text-lg 2xl:text-xl'>
                    Human Services and Consulting
                  </h5>
                </div>
              </div>
            </div>
            <div className='inline-block'>
              <Link to={'/contact'}>
                <button className='primary-btn3'>
                  <FaRegThumbsUp />
                  {`Get Started now`}
                </button>
              </Link>
            </div>
            <img
              src={aboutShape}
              draggable='false'
              className='absolute -z-10 bottom-5 left-72 animate-dance3'
            />
          </div>
        </div>
      </div>
      <img
        src={aboutShape2}
        draggable='false'
        className='absolute -z-10 bottom-14 right-5 animate-wiggle hidden 2xl:block'
      />
      <img
        src={aboutShape3}
        draggable='false'
        className='absolute -z-10 top-36 right-52 animate-dance2 hidden 2xl:block'
      />
    </section>
  );
};

export default About;
