import { FaUser } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import appoinmentThumb from '/images/contact.jpg'

const Appointment = () => {
    return (
      <section>
        <div className='Container'>
          <div className='grid grid-cols-12 items-center'>
            <div className='col-span-7'>
              <div>
                <img
                  src={appoinmentThumb}
                  draggable='false'
                />
              </div>
            </div>
            <div className='col-span-5'>
              <form
                action='#'
                method='post'
                className='flex flex-col gap-y-5 mt-9'
              >
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                  <div className='relative inline-block'>
                    <input
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Enter Name*'
                      required
                      className='font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0'
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
                      className='font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0'
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
                    className='font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0'
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
                  <div className='relative inline-block'>
                    <input
                      type='text'
                      name='number'
                      id='number'
                      placeholder='Enter Number*'
                      required
                      className='font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-xl py-2 px-6 h-[60px] w-full focus:outline-PrimaryColor-0'
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
                  className='font-AlbertSans text-HeadingColor-0 placeholder:text-HeadingColor-0 font-light bg-transparent border border-Secondarycolor-0 border-opacity-45 rounded-2xl py-2 px-6 h-[150px] w-full focus:outline-PrimaryColor-0 resize-none'
                ></textarea>
                <div className='inline-block mt-2'>
                  <button
                    type='submit'
                    className='primary-btn'
                  >
                    Send Now
                   
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Appointment;