import { FaPhoneAlt, FaRegThumbsUp, FaUser } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';
import border from '/images/hero_border.png';
import appoinmentShape from '/images/contact_shape.png';
import serviceShape3 from '/images/service_shpe2.png';
import { Link } from 'react-router-dom';
import { FaRegEnvelopeOpen } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';

const Contact = () => {
  return (
    <section className='py-28 relative'>
      <div className='absolute -z-10 right-48 bottom-10 hidden 2xl:block animate-rotate'>
        <img
          src={serviceShape3}
          draggable='false'
        />
      </div>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 items-center'>
          <div>
            <div>
              <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase flex items-center gap-2 mb-3 pt-4'>
                GET IN TOUCH
              </h5>
              <h1 className='font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]'>
                Trusted By the Genius
                <br />
                People with Consalt
              </h1>
              <p className='font-FiraSans text-TextColor2-0 pt-4'>
                Globally engage cross-media leadership skills before cross-media
                innovation forward
                <br className='hidden md:block' /> develope standardized
                platforms without robust
              </p>
            </div>
            <div className='bg-BodyBg4-0 rounded-xl p-10 mt-11'>
              <div className='flex items-center gap-5 group border-b border-dashed border-HeadingColor-0 border-opacity-40 pb-5'>
                <div className='size-[70px] bg-white rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100'>
                  <FaPhoneAlt size={'20'} />
                </div>
                <div>
                  <h6 className='font-FiraSans text-TextColor2-0'>
                    Call us Anytime
                  </h6>
                  <Link to={'/'}>
                    <button className='font-FiraSans text-xl text-HeadingColor-0 font-medium mt-1'>
                      +123 - (4567) - 890
                    </button>
                  </Link>
                </div>
              </div>
              <div className='flex items-center gap-5 group border-b border-dashed border-HeadingColor-0 border-opacity-40 py-5'>
                <div className='size-[70px] bg-white rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100'>
                  <FaRegEnvelopeOpen size={'20'} />
                </div>
                <div>
                  <h6 className='font-FiraSans text-TextColor2-0'>
                    E-Mail us
                  </h6>
                  <Link to={'/'}>
                    <button className='font-FiraSans text-xl text-HeadingColor-0 font-medium mt-1'>
                      example@gmail.com
                    </button>
                  </Link>
                </div>
              </div>
              <div className='flex items-center gap-5 group pt-5 pb-2'>
                <div className='size-[70px] bg-white rounded-full flex items-center justify-center text-PrimaryColor-0 transition-all duration-500 group-hover:text-white relative z-10 before:absolute before:left-0 before:top-0 before:size-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100'>
                  <IoLocationOutline size={'24'} />
                </div>
                <div>
                  <h6 className='font-FiraSans text-TextColor2-0'>
                    Our Locations
                  </h6>
                  <p className='font-FiraSans text-HeadingColor-0 mt-2'>
                    102/B Soltek New Elephant Road <br /> California, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <img
              src={appoinmentShape}
              draggable='false'
              className='absolute top-0 right-6 animate-movebtn'
            />
            <div className='relative z-20 bg-white shadow-shades pt-16 px-4 sm:px-6 md:px-[50px] lg:px-4 xl:px-10 2xl:px-[50px] rounded-md'>
              <div className='text-center'>
                <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3'>
                  CONTACT US
                </h5>
                <h1 className='font-FiraSans font-semibold text-HeadingColor-0 inline-block text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[30px] lg:leading-[44px] xl:text-[32px] xl:leading-[44px] 2xl:text-[34px] 2xl:leading-[44px] relative pb-4'>
                  Get In Touch With Consalt
                  <img
                    src={border}
                    draggable='false'
                    className='absolute bottom-0 left-1/2 -translate-x-1/2'
                  />
                </h1>
              </div>
              <form
                action='#'
                method='post'
                className='flex flex-col gap-y-5 pt-11 pb-[60px]'
              >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                  <div className='relative inline-block'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Enter Name*'
                      required
                      className='font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0'
                    />
                    <FaUser
                      size={'14'}
                      className='absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5'
                    />
                  </div>
                  <div className='relative inline-block'>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Enter E-Mail*'
                      required
                      className='font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0'
                    />
                    <HiOutlineMailOpen
                      size={'16'}
                      className='absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5'
                    />
                  </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                  <select
                    name='select'
                    id='select'
                    className='font-FiraSans text-TextColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0'
                  >
                    <option
                      value='subject'
                      className='text-TextColor-0'
                    >
                      Your Subject
                    </option>
                    <option
                      value='subject2'
                      className='text-TextColor-0'
                    >
                      Bangla
                    </option>
                    <option
                      value='subject3'
                      className='text-TextColor-0'
                    >
                      Arabic
                    </option>
                    <option
                      value='subject4'
                      className='text-TextColor-0'
                    >
                      China
                    </option>
                  </select>
                  <div className='relative inline-block'>
                    <input
                      type='text'
                      name='number'
                      id='number'
                      placeholder='Enter Number*'
                      required
                      className='font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[54px] w-full focus:outline-PrimaryColor-0'
                    />
                    <MdCall
                      size={'16'}
                      className='absolute text-PrimaryColor-0 top-1/2 -translate-y-1/2 right-5'
                    />
                  </div>
                </div>
                <textarea
                  name='message'
                  id='message'
                  placeholder='Write a short meassage...'
                  className='font-FiraSans text-HeadingColor-0 placeholder:text-TextColor-0 text-sm bg-transparent border border-Secondarycolor-0 border-opacity-20 rounded py-2 px-6 h-[120px] w-full focus:outline-PrimaryColor-0 resize-none'
                ></textarea>
                <label
                  htmlFor='terms'
                  className='font-FiraSans text-TextColor-0 text-sm flex items-center gap-2 cursor-pointer'
                >
                  <input
                    type='checkbox'
                    name='terms'
                    id='terms'
                  />
                  I accept all terms & conditions.
                </label>
                <div className='inline-block mt-2'>
                  <button className='primary-btn2 !py-[15px]'>
                    <FaRegThumbsUp />
                    {`Submit Now`}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
