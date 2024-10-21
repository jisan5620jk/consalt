/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FeatureCard = ({
  featureIcon,
  featureTitle,
  featureUrl,
  featureDesc,
  featureBtnContent,
  featureBtnIcon,
}) => {
  return (
    <div className='flex gap-8 rounded-md bg-transparent group relative z-10'>
      <div className='feature-icon size-[100px] rounded-full rounded-se-md bg-[#ffebeb] relative transition-all duration-500 flex justify-center items-center z-10 overflow-hidden group-hover:rounded-se-full'>
        <img
          src={featureIcon}
          draggable='false'
        />
      </div>
      <div className='flex-1 overflow-hidden relative -mt-1'>
        <h5 className='font-FiraSans font-medium text-HeadingColor-0 text-xl sm:text-[22px] lg:text-lg xl:text-[22px]-white pb-3'>
          {featureTitle}
        </h5>
        <p className='font-FiraSans text-[15px] text-TextColor2-0'>
          {featureDesc}
        </p>
        <div className="inline-block mt-4">
          <Link to={featureUrl}>
            <button className='font-FiraSans overflow-hidden flex gap-2 items-center text-HeadingColor-0'>
              <span className='-ml-[84px] transition-all duration-500 group-hover:ml-0'>
                {featureBtnContent}
              </span>
              <span className='text-HeadingColor-0 text-xl'>
                {featureBtnIcon}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
