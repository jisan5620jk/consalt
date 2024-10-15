/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const ServiceCard = ({
  serviceSubTilte,
  serviceTitle,
  serviceDesc,
  serviceUrl,
  btnContent,
  btnIcon,
  serviceThumbShape,
  serviceThumb,
  thumbIcon,
  contentShape,
}) => {
  return (
    <div className='service-box rounded-lg shadow-cases bg-white group relative z-10 overflow-hidden p-5 before:absolute before:right-0 before:bottom-0 before:w-0 before:h-[5px] before:rounded-lg before:z-10 before:bg-[#ff9307] before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full'>
      <div className='relative overflow-hidden'>
        <img
          src={serviceThumb}
          draggable='false'
        />
        <img
          src={serviceThumbShape}
          draggable='false'
          className='service-thumb-shape absolute top-0 left-0 h-0 opacity-0 transition-all duration-500 group-hover:h-full group-hover:opacity-100'
        />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-block'>
          <Link to={serviceUrl}>
            <button className='service-thumb-btn scale-0 transition-all duration-500 group-hover:scale-100'>
              <img
                src={thumbIcon}
                draggable='false'
              />
            </button>
          </Link>
        </div>
      </div>
      <div className='text-center relative'>
        <img
          src={contentShape}
          draggable='false'
          className='service-content-shape absolute top-8 right-5 scale-0 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100'
        />
        <h6 className='service-sub-title font-FiraSans text-[15px] text-white inline-block py-1 px-5 rounded overflow-hidden bg-PrimaryColor-0 uppercase mt-8 relative z-10 before:absolute before:right-0 before:top-0 before:h-full before:w-0 before:-z-10 before:bg-[#ff9307] before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:left-0'>
          {serviceSubTilte}
        </h6>
        <br />
        <Link to={serviceUrl}>
          <button className='font-FiraSans font-semibold text-xl pb-[10px] text-HeadingColor-0 mt-4'>
            {serviceTitle}
          </button>
        </Link>
        <p className='font-FiraSans text-TextColor2-0 pb-2 mt-2'>
          {serviceDesc}
        </p>
        <Link
          to={serviceUrl}
          className='inline-block'
        >
          <button className='service-btn font-FiraSans font-semibold overflow-hidden flex gap-2 items-center text-[15px] pb-[10px] text-HeadingColor-0 mt-4 transition-all duration-500 group-hover:text-PrimaryColor-0 mb-1'>
            <span>{btnContent}</span>
            <span className='text-xl rotate-45'>{btnIcon}</span>
          </button>
        </Link>
        <img
          src={contentShape}
          draggable='false'
          className='service-content-shape absolute bottom-3 left-8 scale-0 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100'
        />
      </div>
    </div>
  );
};

export default ServiceCard;
