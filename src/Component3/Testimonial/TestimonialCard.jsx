/* eslint-disable react/prop-types */
const TestimonialCard = ({
  testiThumb,
  testiQuote,
  testiRatingIcon,
  testiName,
  testiDesignation,
  testiDesc,
}) => {
  return (
    <div className='testi-box relative text-center bg-white shadow-cases px-10 pt-10 pb-9 rounded-md rounded-ss-[80px] transition-all duration-500 before:absolute before:right-0 before:bottom-0 before:w-0 before:h-[5px] before:rounded-lg before:z-10 before:bg-[#ff9307] before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full'>
      <div className='relative flex items-center justify-center'>
        <img
          src={testiThumb}
          draggable='false'
          className='mx-auto'
        />
        <img
          src={testiQuote}
          draggable='false'
          className='absolute bottom-[6px] left-1/2 translate-x-[20px]'
        />
      </div>
      <h5 className='font-FiraSans font-semibold inline-block text-HeadingColor-0 text-xl pt-5 pb-1'>
        {testiName}
      </h5>
      <p className='font-FiraSans text-TextColor2-0 text-[15px]'>
        {testiDesignation}
      </p>
      <p className='font-FiraSans text-HeadingColor-0 m-auto pt-6'>
        {testiDesc}
      </p>
      <ul className='flex gap-[6px] items-center justify-center mt-8'>
        <li className='text-[#ffb609] text-xl'>{testiRatingIcon}</li>
        <li className='text-[#ffb609] text-xl'>{testiRatingIcon}</li>
        <li className='text-[#ffb609] text-xl'>{testiRatingIcon}</li>
        <li className='text-[#ffb609] text-xl'>{testiRatingIcon}</li>
        <li className='text-[#ffb609] text-xl'>{testiRatingIcon}</li>
      </ul>
    </div>
  );
};

export default TestimonialCard;
