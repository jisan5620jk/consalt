import { FaUser } from 'react-icons/fa6';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';

const Appionment = () => {
  return (
    <section className='mx-2 xl:mx-5 bg-[url(/images/contact_bg.png)] py-20 md:py-28 bg-cover bg-center rounded-t-3xl sm:rounded-t-[50px] md:rounded-t-[70px] lg:rounded-t-[100px] xl:rounded-t-[140px]'>
      <div className='Container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 2xl:gap-[92px] items-center relative z-10'>
          <div>
            <h5 className='font-FiraSans font-medium text-sm sm:text-base text-white uppercase mb-3'>
              GET IN TOUCH
            </h5>
            <h1 className='font-FiraSans font-semibold text-white inline-block text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] relative pb-4'>
              Engaging Consulting except <br /> New elements of Business <br />{' '}
              Planning Complete
            </h1>
            <div className='flex flex-col sm:flex-row gap-5 sm:items-center mt-6'>
              <div className='size-[64px] rounded-full border-2 border-white border-opacity-30 bg-transparent flex justify-center items-center text-white'>
                <MdCall size={'26'} />
              </div>
              <div>
                <p className='font-FiraSans text-[15px] text-white text-opacity-50'>
                  Call Us AnyTime
                </p>
                <h5 className='font-FiraSans font-semibold text-white text-xl mt-1'>
                  +123 - (4567) - 890
                </h5>
              </div>
            </div>
          </div>
          <div>
            <form
              action='#'
              method='post'
              className='flex flex-col gap-y-7'
            >
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-7'>
                <div className='relative inline-block'>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Enter Name*'
                    required
                    className='font-FiraSans text-white placeholder:text-white placeholder:text-opacity-90 bg-transparent border-b-2 border-BorderColor2-0 h-[50px] w-full outline-none'
                  />
                  <FaUser
                    size={'14'}
                    className='absolute text-white top-5 right-0'
                  />
                </div>
                <div className='relative inline-block'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Enter E-Mail*'
                    required
                    className='font-FiraSans text-white placeholder:text-white placeholder:text-opacity-90 bg-transparent border-b-2 border-BorderColor2-0 h-[50px] w-full outline-none'
                  />
                  <HiOutlineMailOpen
                    size={'16'}
                    className='absolute text-white top-5 right-0'
                  />
                </div>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-7'>
                <div className='relative inline-block'>
                  <input
                    type='text'
                    name='number'
                    id='number'
                    placeholder='Enter Number*'
                    required
                    className='font-FiraSans text-white placeholder:text-white placeholder:text-opacity-90 bg-transparent border-b-2 border-BorderColor2-0 h-[50px] w-full outline-none'
                  />
                  <MdCall
                    size={'16'}
                    className='absolute text-white top-5 right-0'
                  />
                </div>
                <select
                  name='select'
                  id='select'
                  className='font-FiraSans text-white placeholder:text-white placeholder:text-opacity-90 bg-transparent border-b-2 border-BorderColor2-0 h-[50px] w-full outline-none'
                >
                  <option
                    value='subject'
                    className='text-HeadingColor-0'
                  >
                    Your Subject
                  </option>
                  <option
                    value='subject2'
                    className='text-HeadingColor-0'
                  >
                    Bangla
                  </option>
                  <option
                    value='subject3'
                    className='text-HeadingColor-0'
                  >
                    Arabic
                  </option>
                  <option
                    value='subject4'
                    className='text-HeadingColor-0'
                  >
                    China
                  </option>
                </select>
              </div>
              <textarea
                name='message'
                id='message'
                placeholder='Write a short meassage...'
                className='font-FiraSans text-white placeholder:text-white placeholder:text-opacity-90 bg-transparent border-b-2 border-BorderColor2-0 h-[120px] w-full outline-none resize-none'
              ></textarea>
              <div className='inline-block'>
                <button
                  type='submit'
                  className='primary-btn2 !bg-transparent !border !border-white !border-opacity-40'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appionment;
