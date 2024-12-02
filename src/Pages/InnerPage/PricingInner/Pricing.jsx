import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useEffect } from 'react';
import pricingIcon from '/images/price_icon_01.png';
import pricingIcon2 from '/images/price_icon_02.png';
import pricingIcon3 from '/images/pricing_icon3.png';
import pricingShape from '/images/pricing_shape1.png';
import icon from '/images/icon.png';

const Pricing = () => {
  useEffect(() => {
    const handleMouseEnter = (event) => {
      event.target.classList.add('active');

      // Remove 'active' class from siblings
      const parent = event.target.parentElement;
      if (parent) {
        const siblings = parent.querySelectorAll('.pricing-box2');
        siblings.forEach((sibling) => {
          if (sibling !== event.target) {
            sibling.classList.remove('active');
          }
        });
      }
    };

    const elements = document.querySelectorAll('.pricing-box2');
    elements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
    });

    // Clean up event listeners when component unmounts
    return () => {
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
      });
    };
  }, []);

  return (
    <section className='relative z-10 overflow-hidden pt-28 lg:pt-[160px] pb-[120px] bg-white'>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase flex items-center justify-center gap-2 mb-3'>
            PRICING PLANS
          </h5>
          <h1 className='font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]'>
            Choose the Comfotable Pricing Plans
            <br />
            for your Consultant Service
          </h1>
        </div>
        <div className='grid gap-[30px] md:grid-cols-2 grid-cols-1 lg:grid-cols-3 mt-[54px]'>
          <div className='pricing-box2 group shadow-shades text-center bg-white rounded-2xl overflow-hidden px-8 lg:px-4 xl:px-8 pt-9 pb-10 relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-full before:h-0 before:bg-PrimaryColor-0 before:rounded-2xl before:transition-all before:duration-500 hover:before:h-full'>
            <div className='flex items-center gap-4'>
              <div className='pricing-icon size-[76px] bg-BodyBg-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#119695] before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100 rounded-full flex justify-center items-center'>
                <img
                  src={pricingIcon}
                  draggable='false'
                  className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                />
              </div>
              <div className='text-left'>
                <h6 className='pricing-title text-xl sm:text-2xl lg:text-xl xl:text-[22px] rounded font-FiraSans text-HeadingColor-0 font-semibold transition-all duration-500 group-hover:text-white mt-4 mb-1'>
                  Starter Plan
                </h6>
                <p className='pricing-desc font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-TextColor-0 mb-4'>
                  Indivisual
                </p>
              </div>
            </div>
            <ul className='flex flex-col gap-3 mt-6 mb-9'>
              <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-TextColor-0 border-b border-dashed border-[#1717173d] group-hover:border-BorderColor2-0 pb-3'>
                <img
                  src={icon}
                  draggable='false'
                  className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                />
                Unlimited Websites
              </li>
              <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-TextColor-0 border-b border-dashed border-[#1717173d] group-hover:border-BorderColor2-0 pb-3'>
                <img
                  src={icon}
                  draggable='false'
                  className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                />
                10+ Paid Plugin
              </li>
              <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-TextColor-0 border-b border-dashed border-[#1717173d] group-hover:border-BorderColor2-0 pb-3'>
                <img
                  src={icon}
                  draggable='false'
                  className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                />
                Woocommerce Support
              </li>
              <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-TextColor-0 border-b border-dashed border-[#1717173d] group-hover:border-BorderColor2-0 pb-3'>
                <img
                  src={icon}
                  draggable='false'
                  className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                />
                50+ WP theme
              </li>
            </ul>
            <div className='flex items-end gap-1 pb-5'>
              <div className='flex gap-1'>
                <h6 className='pricing-price transition-all duration-500 group-hover:text-white font-FiraSans font-semibold text-2xl text-PrimaryColor-0'>
                  $
                </h6>
                <CountUp
                  start={-9}
                  end={49}
                  prefix=''
                  suffix=''
                  className='pricing-price text-[46px] leading-[45px] font-FiraSans font-semibold text-PrimaryColor-0 transition-all duration-500 group-hover:text-white'
                />
              </div>
              <h6 className='pricing-price-date font-FiraSans text-TextColor2-0 text-lg transition-all duration-500 group-hover:text-TextColor-0'>
                / Month
              </h6>
            </div>
            <Link
              to={'/'}
              className='flex justify-start'
            >
              <button className='pricing-btn text-left font-FiraSans border rounded-full text-PrimaryColor-0 px-8 py-[10px] transition-all duration-500 group-hover:border-[#119695] group-hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#119695] before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100'>
                Purchaces Now
              </button>
            </Link>
          </div>
          <div className='pricing-box2 active group shadow-shades text-center bg-white rounded-2xl overflow-hidden px-8 lg:px-4 xl:px-8 pt-9 pb-10 relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-full before:h-0 before:bg-PrimaryColor-0 before:rounded-2xl before:transition-all before:duration-500 hover:before:h-full'>
            <div className='flex items-center gap-4'>
              <div className='pricing-icon size-[76px] bg-BodyBg-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#119695] before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100 rounded-full flex justify-center items-center'>
                <img
                  src={pricingIcon2}
                  draggable='false'
                  className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                />
              </div>
              <div className='text-left'>
                <h6 className='pricing-title text-xl sm:text-2xl lg:text-xl xl:text-[22px] rounded font-FiraSans text-HeadingColor-0 font-semibold transition-all duration-500 group-hover:text-white mt-4 mb-1'>
                  Business Plan
                </h6>
                <p className='pricing-desc font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-TextColor-0 mb-4'>
                  Recommended
                </p>
              </div>
            </div>
            <ul className='flex flex-col gap-3 mt-6 mb-9'>
              <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-TextColor-0 border-b border-dashed border-[#1717173d] group-hover:border-BorderColor2-0 pb-3'>
                <img
                  src={icon}
                  draggable='false'
                  className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                />
                Unlimited Websites
              </li>
              <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-TextColor-0 border-b border-dashed border-[#1717173d] group-hover:border-BorderColor2-0 pb-3'>
                <img
                  src={icon}
                  draggable='false'
                  className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                />
                10+ Paid Plugin
              </li>
              <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-TextColor-0 border-b border-dashed border-[#1717173d] group-hover:border-BorderColor2-0 pb-3'>
                <img
                  src={icon}
                  draggable='false'
                  className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                />
                Woocommerce Support
              </li>
              <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-TextColor-0 border-b border-dashed border-[#1717173d] group-hover:border-BorderColor2-0 pb-3'>
                <img
                  src={icon}
                  draggable='false'
                  className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                />
                50+ WP theme
              </li>
            </ul>
            <div className='flex items-end gap-1 pb-5'>
              <div className='flex gap-1'>
                <h6 className='pricing-price transition-all duration-500 group-hover:text-white font-FiraSans font-semibold text-2xl text-PrimaryColor-0'>
                  $
                </h6>
                <CountUp
                  start={-9}
                  end={89}
                  prefix=''
                  suffix=''
                  className='pricing-price text-[46px] leading-[45px] font-FiraSans font-semibold text-PrimaryColor-0 transition-all duration-500 group-hover:text-white'
                />
              </div>
              <h6 className='pricing-price-date font-FiraSans text-TextColor2-0 text-lg transition-all duration-500 group-hover:text-TextColor-0'>
                / Month
              </h6>
            </div>
            <Link
              to={'/'}
              className='flex justify-start'
            >
              <button className='pricing-btn text-left font-FiraSans border rounded-full text-PrimaryColor-0 px-8 py-[10px] transition-all duration-500 group-hover:border-[#119695] group-hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#119695] before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100'>
                Purchaces Now
              </button>
            </Link>
          </div>
          <div className='pricing-box2 group shadow-shades text-center bg-white rounded-2xl overflow-hidden px-8 lg:px-4 xl:px-8 pt-9 pb-10 relative z-10 before:absolute before:top-0 before:right-0 before:-z-10 before:w-full before:h-0 before:bg-PrimaryColor-0 before:rounded-2xl before:transition-all before:duration-500 hover:before:h-full'>
            <div className='flex items-center gap-4'>
              <div className='pricing-icon size-[76px] bg-BodyBg-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#119695] before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100 rounded-full flex justify-center items-center'>
                <img
                  src={pricingIcon3}
                  draggable='false'
                  className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                />
              </div>
              <div className='text-left'>
                <h6 className='pricing-title text-xl sm:text-2xl lg:text-xl xl:text-[22px] rounded font-FiraSans text-HeadingColor-0 font-semibold transition-all duration-500 group-hover:text-white mt-4 mb-1'>
                  Premium Plan
                </h6>
                <p className='pricing-desc font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-TextColor-0 mb-4'>
                  Company
                </p>
              </div>
            </div>
            <ul className='flex flex-col gap-3 mt-6 mb-9'>
              <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-TextColor-0 border-b border-dashed border-[#1717173d] group-hover:border-BorderColor2-0 pb-3'>
                <img
                  src={icon}
                  draggable='false'
                  className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                />
                Unlimited Websites
              </li>
              <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-TextColor-0 border-b border-dashed border-[#1717173d] group-hover:border-BorderColor2-0 pb-3'>
                <img
                  src={icon}
                  draggable='false'
                  className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                />
                10+ Paid Plugin
              </li>
              <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-TextColor-0 border-b border-dashed border-[#1717173d] group-hover:border-BorderColor2-0 pb-3'>
                <img
                  src={icon}
                  draggable='false'
                  className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                />
                Woocommerce Support
              </li>
              <li className='pricing-list flex items-center gap-2 font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-TextColor-0 border-b border-dashed border-[#1717173d] group-hover:border-BorderColor2-0 pb-3'>
                <img
                  src={icon}
                  draggable='false'
                  className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
                />
                50+ WP theme
              </li>
            </ul>
            <div className='flex items-end gap-1 pb-5'>
              <div className='flex gap-1'>
                <h6 className='pricing-price transition-all duration-500 group-hover:text-white font-FiraSans font-semibold text-2xl text-PrimaryColor-0'>
                  $
                </h6>
                <CountUp
                  start={-9}
                  end={149}
                  prefix=''
                  suffix=''
                  className='pricing-price text-[46px] leading-[45px] font-FiraSans font-semibold text-PrimaryColor-0 transition-all duration-500 group-hover:text-white'
                />
              </div>
              <h6 className='pricing-price-date font-FiraSans text-TextColor2-0 text-lg transition-all duration-500 group-hover:text-TextColor-0'>
                / Month
              </h6>
            </div>
            <Link
              to={'/'}
              className='flex justify-start'
            >
              <button className='pricing-btn text-left font-FiraSans border rounded-full text-PrimaryColor-0 px-8 py-[10px] transition-all duration-500 group-hover:border-[#119695] group-hover:text-white relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#119695] before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100'>
                Purchaces Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <img
        src={pricingShape}
        draggable='false'
        className='absolute -z-10 top-44 left-0 animate-wiggle hidden 2xl:block'
      />
    </section>
  );
};

export default Pricing;
