import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import {
  FaArrowRightLong,
  FaCheck,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import boxImage from '/images/port_img1.png';
import boxImage2 from '/images/port_img2.png';
import { LuCalendarCheck } from 'react-icons/lu';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import { BsUiChecksGrid } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import Icon from '/images/pagination_icon1.png';
import Icon2 from '/images/pagination_icon2.png';

const PortfolioDetails = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Business Implements'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        breadCrumbLink={'Portfolio'}
        breadCrumbLink2={'Portfolio Details'}
      />
      <section className='pb-[120px]'>
        <div className='Container'>
          <div className='pt-6 md:pt-[66px] px-4 md:px-[52px] relative z-10 sm:-mt-[60px] bg-white rounded-3xl md:mx-10 lg:mx-0 xl:mx-14 2xl:mx-0'>
            <div className='lg:mr-7 2xl:mr-[84px]'>
              <h2 className='font-FiraSans font-semibold text-2xl sm:text-[42px] text-HeadingColor-0'>
                Introduce the Projects
              </h2>
              <p className='font-FiraSans text-TextColor2-0 mt-[26px]'>
                Globally engage cross-media leadership skills before cross-media
                innovation forward morph flexible whereas process-centric models
                predominates Efficiently transform customer directed alignments
                for front-end meta Dramatically harness cross-platform best
                practices whereas centric data without business services.
                Conveniently formula standards in innovation with wireless
                vertical intellectual capital before global architectures
                technically sound engage based results with visionary models.
                Dramatically harness-platform best practices whereas business
                services. Conveniently experiences. formula standards in
                innovation with wireless
              </p>
              <div className='max-w-[860px] mt-7 mb-9'>
                <h4 className='font-FiraSans text-xl text-HeadingColor-0 font-medium sm:pl-20 relative z-10 before:absolute before:left-0 before:top-3 sm:before:w-[70px] before:h-[2px] before:bg-HeadingColor-0'>
                  “Globally engage cross-media leadership skills before
                  cross-media great oppotunities whereas process-centric models
                  efficiently ”
                </h4>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-7 lg:gap-0 border-t border-BorderColor-0 pt-10'>
              <div className='col-span-3 lg:col-span-2 lg:mr-7 2xl:mr-[90px]'>
                <h2 className='font-FiraSans font-semibold text-2xl sm:text-[36px] text-HeadingColor-0'>
                  Consalt Values
                </h2>
                <p className='font-FiraSans text-TextColor2-0 mt-[26px]'>
                  Dramatically harness cross-platform best practices whereas
                  business services. Conveniently standards in innovation with
                  wireless Globally engage cross-media leadership best breed to
                  rather than bricks-and-clicks infomediaries monotonectally
                  standards in innovation within wireless vertical intellectual
                  capital before global architectures engage based results main
                  visionary models digitalizations completed
                </p>
                <div className='grid gap-y-4 sm:grid-cols-2 mt-8 mb-9'>
                  <div>
                    <ul className='space-y-[18px]'>
                      <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'>
                        <span className='text-PrimaryColor-0'>
                          <FaCheck size={'18'} />
                        </span>{' '}
                        Professional Team Member
                      </li>
                      <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'>
                        <span className='text-PrimaryColor-0'>
                          <FaCheck size={'18'} />
                        </span>{' '}
                        Solutions the Clients Problems
                      </li>
                      <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'>
                        <span className='text-PrimaryColor-0'>
                          <FaCheck size={'18'} />
                        </span>{' '}
                        Extra Facilities Sales Increase
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className='space-y-[18px]'>
                      <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'>
                        <span className='text-PrimaryColor-0'>
                          <FaCheck size={'18'} />
                        </span>{' '}
                        Any Problem Solving
                      </li>
                      <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'>
                        <span className='text-PrimaryColor-0'>
                          <FaCheck size={'18'} />
                        </span>{' '}
                        24/7 Supports Available
                      </li>
                      <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'>
                        <span className='text-PrimaryColor-0'>
                          <FaCheck size={'18'} />
                        </span>{' '}
                        Free Tools Provides for Clients
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='grid sm:grid-cols-2 gap-8 mb-12'>
                  <div>
                    <img
                      src={boxImage}
                      alt='Image'
                      draggable='false'
                      className='w-full'
                    />
                  </div>{' '}
                  <div>
                    <img
                      src={boxImage2}
                      alt='Image'
                      draggable='false'
                      className='w-full'
                    />
                  </div>
                </div>
                <h2 className='font-FiraSans font-semibold text-2xl sm:text-[36px] text-HeadingColor-0 pt-1'>
                  Benifits of Seles
                </h2>
                <p className='font-FiraSans text-TextColor2-0 mt-[22px]'>
                  Dramatically harness cross-platform best practices whereas
                  business services. Conveniently standards in innovation with
                  wireless Globally engage cross-media leadership best breed to
                  rather than bricks-and-clicks infomediaries monotonectally
                  standards
                </p>
              </div>
              <div className='col-span-3 lg:col-span-1'>
                <div className='bg-BodyBg4-0 rounded-2xl px-4 md:px-10 lg:px-7 xl:px-10 pt-5 pb-6 md:pt-[46px] md:pb-10'>
                  <h4 className='font-FiraSans font-medium text-[22px] sm:text-[26px] lg:text-[22px] 2xl:text-[26px] text-HeadingColor-0 pb-7'>
                    Project’s Information
                  </h4>
                  <div className='flex gap-5 border-t border-dashed border-TextColor-0 border-opacity-70 pt-4 pb-4'>
                    <div className='text-PrimaryColor-0'>
                      <LuCalendarCheck size={'28'} />
                    </div>
                    <div className='flex-1 -mt-1'>
                      <p className='font-FiraSans text-TextColor2-0'>
                        Created By :
                      </p>
                      <h5 className='font-FiraSans text-HeadingColor-0 font-medium mt-1'>
                        DreamIT Solution
                      </h5>
                    </div>
                  </div>
                  <div className='flex gap-5 border-y border-dashed border-TextColor-0 border-opacity-70 pt-4 pb-4'>
                    <div className='text-PrimaryColor-0'>
                      <MdOutlineCalendarMonth size={'30'} />
                    </div>
                    <div className='flex-1 -mt-1'>
                      <p className='font-FiraSans text-TextColor2-0'>
                        Created Date :
                      </p>
                      <h5 className='font-FiraSans text-HeadingColor-0 font-medium mt-1'>
                        16 August, 2024
                      </h5>
                    </div>
                  </div>
                  <div className='flex gap-5 pt-4 pb-4'>
                    <div className='text-PrimaryColor-0'>
                      <BsUiChecksGrid size={'28'} />
                    </div>
                    <div className='flex-1 -mt-1'>
                      <p className='font-FiraSans text-TextColor2-0'>
                        Category :
                      </p>
                      <h5 className='font-FiraSans text-HeadingColor-0 font-medium mt-1'>
                        Business Consultant
                      </h5>
                    </div>
                  </div>
                  <div className='flex gap-5 border-y border-dashed border-TextColor-0 border-opacity-70 pt-4 pb-4 mb-7'>
                    <div className='text-PrimaryColor-0'>
                      <IoLocationOutline size={'28'} />
                    </div>
                    <div className='flex-1 -mt-1'>
                      <p className='font-FiraSans text-TextColor2-0'>
                        Locations :
                      </p>
                      <h5 className='font-FiraSans text-HeadingColor-0 font-medium mt-1'>
                        102/B, JR Road California, USA
                      </h5>
                    </div>
                  </div>
                  <Link to={'/contact'}>
                    <button className='primary-btn'>{`Contact With Us`}</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-7 justify-between flex-wrap border-y border-BorderColor-0 py-7 mt-14'>
              <div>
                <Link to={'#'}>
                  <button className='flex items-center gap-2 font-FiraSans font-medium text-lg text-HeadingColor-0'>
                    <img
                      src={Icon}
                      alt='Icon'
                      draggable='false'
                    />{' '}
                    Previous Projects
                  </button>
                </Link>
              </div>
              <div>
                <ul className='flex items-center gap-4'>
                  <li>
                    <Link
                      to={'/'}
                      className='text-sm size-10 bg-BodyBg4-0 rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:scale-0 before:transition-all before:rounded-full before:-z-10 before:duration-500 hover:before:scale-100'
                    >
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/'}
                      className='text-sm size-10 bg-BodyBg4-0 rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:scale-0 before:transition-all before:rounded-full before:-z-10 before:duration-500 hover:before:scale-100'
                    >
                      <FaXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/'}
                      className='text-sm size-10 bg-BodyBg4-0 rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:scale-0 before:transition-all before:rounded-full before:-z-10 before:duration-500 hover:before:scale-100'
                    >
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/'}
                      className='text-sm size-10 bg-BodyBg4-0 rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:scale-0 before:transition-all before:rounded-full before:-z-10 before:duration-500 hover:before:scale-100'
                    >
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Link to={'#'}>
                  <button className='flex items-center gap-2 font-FiraSans font-medium text-lg text-HeadingColor-0'>
                    Next Projects{' '}
                    <img
                      src={Icon2}
                      alt='Icon'
                      draggable='false'
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetails;
