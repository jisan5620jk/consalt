import bgImage from '/images/breadcumb2.png';
import { FaCircle } from "react-icons/fa6";

const BreadCrumb2 = () => {
  return (
    <div className='relative z-10 before:-z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-[80%] before:bg-BodyBg4-0'>
      <div className='flex items-center justify-start sm:pb-[60px] h-[400px] sm:h-[500px] md:h-[600px] text-center mx-3 md:mx-10 lg:mx-[66px] rounded-2xl md:rounded-[30px] relative z-10'>
        <span className='absolute top-0 left-0 z-10'>
          <img
            src={bgImage}
            alt='Image'
            draggable='false'
            className='w-full h-fit'
          />
        </span>
        <div className='Container relative z-20'>
          <h6 className='font-FiraSans font-medium text-sm text-white bg-PrimaryColor-0 inline-block text-center rounded-r-full py-[5px] px-4 uppercase'>
            Business
          </h6>
          <h1 className='font-FiraSans font-semibold text-4xl md:text-[48px] md:leading-[58px] text-white capitalize relative z-10 mt-6 max-w-[655px] mx-auto'>
            How to Install Sales Statistics <br /> Report Extensions?
          </h1>
          <div className='mt-6 sm:mt-4 md:mt-[26px] inline-block'>
            <ul className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center mx-auto text-center'>
              <li>
                <h6 className='font-FiraSans text-center text-white flex items-center gap-2 uppercase'>
                 <FaCircle size={'8'} className="text-PrimaryColor-0"/>20 November, 2024
                </h6>
              </li>
              <li>
                <h6 className='font-FiraSans text-center text-white flex items-center gap-2 uppercase'>
                  <FaCircle size={'8'} className="text-PrimaryColor-0"/>By Admin
                </h6>
              </li>
              <li>
                <a href={'#comment'}>
                  <button className='font-FiraSans text-center text-white flex items-center gap-2 uppercase'>
                     <FaCircle size={'8'} className="text-PrimaryColor-0"/>Comments (1)
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb2;
