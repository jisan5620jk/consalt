/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FeatureCard = ({
  featureUrl,
  featureIcon,
  featureTitle,
  featureDesc,
  featureBtn,
  featureBtnIcon,
}) => {
  return (
    <div className='group rounded-lg pt-8 px-6 lg:px-3 xl:px-6 bg-white transition-all duration-500 border border-transparent hover:border-PrimaryColor-0 relative z-10 pb-7 shadow-shades hover:-mt-2'>
      <div className='relative pt-[6px] z-10'>
        <img
          src={featureIcon}
          draggable='false'
        />
      </div>
      <Link to={featureUrl}>
        <button className='font-FiraSans text-left font-medium text-xl lg:text-lg xl:text-xl pb-[10px] text-HeadingColor-0 mt-6'>
          {featureTitle}
        </button>
      </Link>
      <p className='font-FiraSans text-TextColor-0 pb-5 mt-3'>{featureDesc}</p>
      <Link
        to={featureUrl}
        className='inline-block relative'
      >
        <button className='flex items-center gap-2 font-FiraSans uppercase overflow-hidden font-medium text-sm'>
          <span className='-ml-[76px] text-PrimaryColor-0 transition-all duration-500 group-hover:ml-0'>
            {featureBtn}
          </span>
          <span className='text-[22px] text-PrimaryColor-0'>
            {featureBtnIcon}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default FeatureCard;
