import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const ProcessCard = ({
  processIcon,
  processTitle,
  processDesc,
  processBtn,
}) => {
  return (
    <div className='group relative bg-white pl-6 sm:pl-10 pr-6 sm:pr-12 pt-10 pb-7 rounded-lg'>
      <div className='size-[78px] flex items-center justify-center rounded-full bg-BodyBg-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor2-0 before:-z-10 before:rounded-full before:scale-0 before:transition-all before:duration-500 group-hover:before:scale-100'>
        <img
          src={processIcon}
          draggable='false'
          className='transition-all duration-500 group-hover:brightness-0 group-hover:invert-[1]'
        />
      </div>
      <h5 className='font-FiraSans font-semibold text-HeadingColor2-0 text-xl pt-[26px] mb-3'>
        {processTitle}
      </h5>
      <p className='font-FiraSans text-TextColor2-0'>{processDesc}</p>
      <div className='inline-block mt-6'>
        <Link
          to={'/portfolio'}
          className='text-[22px] text-PrimaryColor2-0'
        >
          {processBtn}
        </Link>
      </div>
    </div>
  );
};

export default ProcessCard;
