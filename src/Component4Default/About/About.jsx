import aboutThumb from "/images/about8_thumb.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { BsCheckLg } from "react-icons/bs";

const About = () => {
  return (
    <section className='mx-2 xl:mx-5 relative z-10 rounded-lg bg-BodyBg-0 overflow-hidden'>
      <div className='bg-Secondarycolor2-0 pt-20 md:pt-28 pb-20 md:pb-[120px] rounded-b-2xl sm:rounded-b-3xl md:rounded-b-[40px] 2xl:rounded-b-[140px]'>
        <div className='Container'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px]'>
            <div className='relative'>
              <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor2-0 uppercase mb-3'>
                ABOUT CONTACT
              </h5>
              <h1 className='font-FiraSans font-semibold text-white inline-block text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] relative pb-4'>
                Perform Market Research to <br />
                Gain Insights into Trends
              </h1>
              <p className='font-FiraSans text-TextColor-0 pb-6 max-w-[516px] w-full'>
                Completely mesh leveraged total main for resource maximizing
                applies applications. Credibly implement
              </p>
              <div className='grid gap-3 sm:gap-0 sm:grid-cols-2 sm:items-center mb-11'>
                <ul className='space-y-3'>
                  <li className='font-FiraSans text-base sm:text-lg w-full text-white font-medium flex items-center gap-2'>
                    <BsCheckLg
                      size={'26'}
                      className='text-PrimaryColor2-0'
                    />
                    35+ Professional Team Members
                  </li>
                  <li className='font-FiraSans text-base sm:text-lg w-full text-white font-medium flex items-center gap-2'>
                    <BsCheckLg
                      size={'26'}
                      className='text-PrimaryColor2-0'
                    />
                    Any Business Problem Solving
                  </li>
                  <li className='font-FiraSans text-base sm:text-lg w-full text-white font-medium flex items-center gap-2'>
                    <BsCheckLg
                      size={'26'}
                      className='text-PrimaryColor2-0'
                    />
                    Implement Business Pro
                  </li>
                </ul>
              </div>
              <div>
                <Link to={'/about'}>
                  <button className='primary-btn4 !bg-transparent !border-white hover:!border-PrimaryColor2-0 before:!bg-PrimaryColor2-0 !py-[15px] after:bg-opacity-50 after:!top-9'>{`More About Us`}</button>
                </Link>
              </div>
            </div>
            <div className='relative z-10 hidden md:block'>
              <img
                src={aboutThumb}
                draggable='false'
                className='-mb-[104px] lg:-mb-[250px] ml-20 relative top-4'
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='Container'>
          <div className='flex flex-wrap items-center gap-7 2xl:gap-[120px] py-[46px]'>
            <div className='flex items-center gap-10 sm:gap-8 md:gap-10'>
              <CountUp
                start={-15}
                end={5}
                suffix='k+'
                className='text-3xl sm:text-4xl md:text-[56px] font-FiraSans font-bold text-HeadingColor2-0'
              />
              <div className='relative z-10 before:absolute before:-left-5 sm:before:-left-0 md:before:-left-5 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-[30px] before:bg-Secondarycolor2-0 before:bg-opacity-40'>
                <h6 className='font-FiraSans text-left text-sm leading-4 sm:text-xl sm:leading-6 font-semibold text-HeadingColor2-0'>
                  Completed Work
                </h6>
                <p className='font-FiraSans text-[15px] text-TextColor2-0 pt-2'>
                  With Client Satisfaction
                </p>
              </div>
            </div>
            <div className='flex items-center gap-10 sm:gap-8 md:gap-10'>
              <CountUp
                start={-15}
                end={3}
                suffix='k+'
                className='text-3xl sm:text-4xl md:text-[56px] font-FiraSans font-bold text-HeadingColor2-0'
              />
              <div className='relative z-10 before:absolute before:-left-5 sm:before:-left-0 md:before:-left-5 before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-[30px] before:bg-Secondarycolor2-0 before:bg-opacity-40'>
                <h6 className='font-FiraSans text-left text-sm leading-4 sm:text-xl sm:leading-6 font-semibold text-HeadingColor2-0'>
                  Our Customer
                </h6>
                <p className='font-FiraSans text-[15px] text-TextColor2-0 pt-2'>
                  With Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
