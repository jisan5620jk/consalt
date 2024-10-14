import { Link } from 'react-router-dom';
import footerShape2 from '/images/footer_shape.png';
import footerShape from '/images/choose_rotete.png';
import footerImg from '/images/footer_1.png';
import footerImg2 from '/images/footer_2.png';
import { FaAnglesRight } from 'react-icons/fa6';
import { IoPaperPlaneSharp } from 'react-icons/io5';
import { FaCircle } from 'react-icons/fa';

const Footer3 = () => {
  return (
    <footer className="bg-[url('/images/footer_bg.jpg')] bg-no-repeat bg-center bg-cover relative z-10 pt-28 overflow-hidden">
      <img
        src={footerShape}
        draggable='false'
        className='absolute -z-10 left-20 bottom-28 animate-rotational'
      />
      <img
        src={footerShape2}
        draggable='false'
        className='absolute -z-10 top-20 right-20 animate-dance2'
      />
      <div className='Container'>
        <div className='grid grid-cols-12'>
          <div className='col-span-12 md:col-span-6 lg:col-span-4'>
            <h4 className='font-FiraSans text-2xl text-HeadingColor-0 font-medium'>
              About Us
            </h4>
            <p className='font-FiraSans text-TextColor2-0 text-[15px] mt-5 mb-8 max-w-[290px] w-full'>
              Continually plagiarize virtual web service with resource
              maximizing monotonectally reintermediate expanded
            </p>
            <form
              action='#'
              method='post'
              className='relative w-8/12'
            >
              <label
                htmlFor='email'
                className='relative'
              >
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter Your E-Mail*'
                  required
                  className='w-full h-[56px] outline-none font-FiraSans border-b border-HeadingColor-0 border-opacity-30 bg-transparent py-4 text-HeadingColor-0 placeholder:text-HeadingColor-0 mb-4'
                />
              </label>
              <div className='absolute top-3 right-0'>
                <button
                  type='submit'
                  className='size-9 rounded-full border border-PrimaryColor-0 bg-PrimaryColor-0 gap-2 text-sm text-white font-FiraSans flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded before:bg-HeadingColor-0 before:-z-10 before:scale-0 before:transition-all before:duration-500 hover:before:scale-100'
                >
                  <IoPaperPlaneSharp size={'20'} />
                </button>
              </div>
            </form>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <h4 className='font-FiraSans text-2xl text-HeadingColor-0 font-medium mb-[30px]'>
              Company
            </h4>
            <ul className='overflow-hidden'>
              <li>
                <Link
                  to={'/about'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-3'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/team'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-3'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                    Meet Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-3'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                   Ingrations
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/contact'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-3'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                   Contact Us
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/blog'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                  Blog
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-2'>
            <h4 className='font-FiraSans text-2xl text-HeadingColor-0 font-medium mb-[30px]'>
              Services
            </h4>
            <ul className='overflow-hidden'>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-3'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                   Consultant
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-3'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                    Web Development
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-3'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                    UI Design
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-3'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                   Networking
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to={'/'}
                  className='inline-block'
                >
                  <button className='flex items-center gap-2 font-FiraSans -ml-5 hover:ml-0 text-[15px] text-HeadingColor-0 transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1'>
                    <FaAnglesRight className='text-xs text-PrimaryColor-0' />
                    SEO Marketing
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-12 md:col-span-6 lg:col-span-3'>
            <h4 className='font-FiraSans text-2xl text-HeadingColor-0 font-medium mb-[36px]'>
              Latest Blog
            </h4>
            <Link
              to={'/'}
              className='flex items-center gap-[18px] group'
            >
              <div>
                <img
                  src={footerImg}
                  className='rounded'
                />
              </div>
              <div className='flex-1'>
                <h6 className='font-FiraSans font-medium text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0'>
                  Sustainability Consulting <br className='hidden 2xl:block'/> for Business Planning
                </h6>
                <p className='font-FiraSans text-sm text-TextColor2-0 flex items-center gap-2 mt-1'>
                  <span className='text-PrimaryColor-0'>
                    <FaCircle size={'8'} />
                  </span>
                  Nov 16, 2024
                </p>
              </div>
            </Link>
            <Link
              to={'/'}
              className='flex items-center gap-[18px] group mt-7'
            >
              <div>
                <img
                  src={footerImg2}
                  className='rounded'
                />
              </div>
              <div className='flex-1'>
                <h6 className='font-FiraSans font-medium text-HeadingColor-0 transition-all duration-500 group-hover:text-PrimaryColor-0'>
                  Globally disintermediate <br className='hidden 2xl:block'/> exten services resource
                </h6>
                <p className='font-FiraSans text-sm text-TextColor2-0 flex items-center gap-2 mt-1'>
                  <span className='text-PrimaryColor-0'>
                    <FaCircle size={'8'} />
                  </span>
                  Nov 16, 2024
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className='Container flex flex-col gap-5 md:flex-row md:gap-0 justify-between mt-[120px] py-6 border-t border-HeadingColor-0 border-opacity-20'>
        <p className='font-FiraSans text-HeadingColor-0 text-[15px]'>
          Copyright © 2024 <Link to={'/'} className='text-PrimaryColor-0'>Consalt</Link> . Designed & Developed
          by Dream-IT
        </p>
        <div>
          <ul className='flex gap-7'>
            <li>
              <Link to={'/'}>
                <button className='font-FiraSans text-HeadingColor-0 text-[15px] transition-all duration-500 hover:text-PrimaryColor-0'>
                  Privacy & Terms
                </button>
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <button className='font-FiraSans text-HeadingColor-0 text-[15px] transition-all duration-500 hover:text-PrimaryColor-0'>
                  FAQ
                </button>
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <button className='font-FiraSans text-HeadingColor-0 text-[15px] transition-all duration-500 hover:text-PrimaryColor-0'>
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;
