import { Link } from 'react-router-dom';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import bannerThumb from '/images/hero_thumb3.png';
import border from '/images/hero_border.png';
import box from '/images/box.png';
import thumbDot from '/images/hero3_dot_shape.png';
import { LuPlaySquare } from 'react-icons/lu';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegCircleCheck } from 'react-icons/fa6';

const Banner = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="bg-[url('/images/hero_3_bg.jpg')] bg-cover bg-center bg-no-repeat h-[850px] sm:h-[1000px] md:h-[1180px] lg:h-[660px] xl:h-[750px] flex items-center relative z-10 overflow-hidden">
      <div className='Container'>
        <div className='grid lg:grid-cols-2 items-center gap-16 lg:gap-0 mt-[72px]'>
          <div className='relative'>
            <img
              src={box}
              draggable='false'
              className='absolute -top-20 right-14 animate-rotational'
            />
            <h6 className='font-FiraSans font-medium text-PrimaryColor-0 mb-3'>
              BEST IT SOLUTION AGENCY
            </h6>
            <h1 className='font-FiraSans font-semibold text-HeadingColor-0 text-[26px] leading-[32px] sm:text-[46px] sm:leading-[52px] md:text-[68x] lg:text-[46px] xl:text-[54px] xl:leading-[68px] 2xl:text-[56px] 2xl:leading-[70px] relative z-10 pb-4'>
              Masterminds to Your
              <br />
              Positive Goals{' '}
              <img
                src={border}
                draggable='false'
                className='absolute bottom-0 left-0'
              />
            </h1>
            <p className='font-FiraSans text-TextColor2-0 mb-[38px] mt-6'>
              Continually plagiarize virtual web services with resource{' '}
              <br className='hidden xl:block 2xl:hidden' />
              maximizing <br className='hidden md:block lg:hidden 2xl:block' />{' '}
              action items. Globally build Buseness
            </p>
            <div className='flex flex-col sm:flex-row sm:items-center gap-8'>
              <Link to={'/contact'}>
                <button className='primary-btn3'>
                  <FaRegThumbsUp />
                  {`Get Started now`}
                </button>
              </Link>
              <div className='relative z-50'>
                <button
                  className='flex items-center gap-3 text-HeadingColor-0 font-FiraSans font-medium'
                  onClick={() => setToggler(!toggler)}
                >
                  <LuPlaySquare
                    size={'24'}
                    className='text-HeadingColor-0'
                  />
                  How It Works
                </button>
                <FsLightbox
                  toggler={toggler}
                  sources={['https://youtu.be/NKJ-6zCSk2E?si=VRPrxnY6DI0NY9II']}
                />
              </div>
            </div>
          </div>
          <div className='flex justify-center lg:justify-end relative'>
            <img
              src={bannerThumb}
              draggable='false'
              className='2xl:max-w-[inherit] -mb-12 sm:-mt-8 2xl:-mt-16'
            />
            <img
              src={thumbDot}
              draggable='false'
              className='absolute left-1/2 -translate-x-1/2 top-24 -z-10'
            />
            <div className='absolute top-1/2 -translate-y-1/2 right-0 bg-white pl-5 pr-[50px] py-5 rounded-md hidden sm:flex items-center gap-5 shadow-lg'>
              <div className='size-[56px] rounded-full bg-[#ff9307] flex items-center justify-center text-2xl text-white'>
                <FaRegCircleCheck />
              </div>
              <div>
                <h5 className='font-FiraSans font-medium text-lg text-HeadingColor-0'>
                  Powerful Team
                </h5>
                <p className='font-FiraSans text-TextColor2-0'>36+ Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
