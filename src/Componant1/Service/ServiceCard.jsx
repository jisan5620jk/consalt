/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const serviceCard = ({
  serviceUrl,
  serviceIcon,
  serviceTitle,
  serviceDesc,
  serviceNumber,
}) => {
  return (
    <div className="group rounded-md relative z-10 overflow-hidden after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:transition-all after:duration-500 after:bg-gradient-to-t after:from-PrimaryColor-0 after:to-transparent hover:after:h-4/6">
      <div className="relative pt-[6px] z-10">
        <img src={serviceIcon} draggable="false" />
      </div>
      <Link to={serviceUrl}>
        <button className="font-FiraSans font-semibold text-[22px] sm:text-[26px] pb-[10px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-4">
          {serviceTitle}
        </button>
      </Link>
      <p className="font-FiraSans text-TextColor2-0 transition-all duration-500 group-hover:text-white pb-2">
        {serviceDesc}
      </p>
      <h6>{serviceNumber}</h6>
    </div>
  );
};

export default serviceCard;
