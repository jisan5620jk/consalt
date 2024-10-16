import { FaRegThumbsUp, FaUser } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdCall, MdLocalPhone } from "react-icons/md";
import appoinmentThumb from '/images/contact.jpg'
import border from '/images/hero_border.png';
import appoinmentShape from '/images/contact_shape.png';
import appoinmentThumbShape from '/images/contact_shapes.png';
import serviceShape3 from '/images/service_shpe2.png';
import { Link } from "react-router-dom";

const Appointment = () => {
    return (
      <section className='pt-[120px] pb-28 relative'>
        <div className='absolute -z-10 right-48 bottom-10 hidden 2xl:block animate-rotate'>
          <img
            src={serviceShape3}
            draggable='false'
          />
        </div>
        <div className='Container'>
          <div className='grid grid-cols-12 items-start'>
            <div className='col-span-7'>
              <div className='relative z-10'>
                <img
                  src={appoinmentThumb}
                  draggable='false'
                  className='max-w-[inherit] rounded-md'
                />
                <img
                  src={appoinmentThumbShape}
                  draggable='false'
                  className='absolute top-[58%] left-14 animate-swing'
                />
                <div className='absolute bottom-[65px] left-[55px] bg-white bg-opacity-10 rounded-full pr-10 border-2 border-white border-opacity-40 backdrop-filter backdrop-blur-md flex items-center gap-7'>
                  <div className='size-[78px] rounded-full bg-[#ff9307] flex items-center justify-center relative z-10 after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:size-[80px] after:rounded-full after:bg-[#ff9307] after:-z-10 before:absolute before:-top-3 before:-left-3 before:size-[102px] before:rounded-full before:border-2 before:border-[#ff9307]'>
                    <span className='size-9 flex items-center justify-center rounded-full text-white border-2 border-white'>
                      <MdLocalPhone size={'20'} />
                    </span>
                  </div>
                  <Link
                    to={'/'}
                    className='font-FiraSans font-medium text-2xl text-white'
                  >
                    +980 123 (4567) 890
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-span-5 relative'>
              <img
                src={appoinmentShape}
                draggable='false'
                className='absolute top-0 right-6 animate-movebtn'
              />
              <div className='relative z-20 bg-white shadow-shades pt-11 mt-[100px] px-[50px] rounded-md'>
                <div className='text-center'>
                  <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3'>
                    CONTACT US
                  </h5>
                  <h1 className='font-FiraSans font-semibold text-HeadingColor-0 inline-block text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[34px] xl:leading-[44px] 2xl:text-[34px] 2xl:leading-[44px] relative pb-4'>
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
                    <button className='primary-btn3'>
                      <FaRegThumbsUp />
                      {`Get Started now`}
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

export default Appointment;