/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import line from '/images/line_shape.png';

const BreadCrumb2 = ({
  bgImage,
  breadCrumbTitle,
  breadCrumbIcon,
  breadCrumbIcon2,
  url,
  url2,
  breadCrumbLink,
  breadCrumbLink2,
}) => {
  return (
    <div className="relative z-10 before:-z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-[80%] before:bg-BodyBg4-0">
      <div className="flex items-center justify-start h-[400px] sm:h-[500px] md:h-[600px] text-center mx-3 md:mx-10 lg:mx-[66px] rounded-2xl md:rounded-[30px] relative z-10">
        <span className="absolute top-0 left-0 z-10"><img src={bgImage} alt="Image" draggable='false' className="w-full h-fit" /></span>
        <div className='Container relative z-20'>
          <h1 className='font-FiraSans font-semibold text-4xl md:text-[48px] text-white capitalize relative z-10'>
            {breadCrumbTitle}
            <img
              src={line}
              alt='Shape'
              draggable='false'
              className='absolute -bottom-4 left-1/2 -translate-x-1/2'
            />
          </h1>
          <div className='mt-8 sm:mt-6 md:mt-8 inline-block'>
            <ul className='flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center mx-auto text-center'>
              <li>
                <Link to={'/'}>
                  <button className='font-FiraSans font-medium text-center text-white flex items-center gap-2 transition-all duration-500 hover:text-PrimaryColor-0'>
                    <IoHome className='text-white' />
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <div className='text-white text-center hidden sm:block'>
                  {breadCrumbIcon}
                </div>
              </li>
              <li>
                <Link to={url}>
                  <button className='font-FiraSans text-center font-medium capitalize text-white'>
                    {breadCrumbLink}
                  </button>
                </Link>
              </li>
              <li>
                <div className='text-white text-center hidden sm:block'>
                  {breadCrumbIcon2}
                </div>
              </li>
              <li>
                <Link to={url2}>
                  <button className='font-FiraSans text-center font-medium capitalize text-white'>
                    {breadCrumbLink2}
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb2;
