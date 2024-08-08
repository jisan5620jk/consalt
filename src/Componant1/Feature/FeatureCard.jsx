/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const FeatureCard = ({
  featureUrl,
  featureIcon,
  featureTitle,
  featureDesc,
  featureNumber,
}) => {
  return (
    <div className="group rounded-2xl  pt-10 px-6 bg-[url(/images/feature_shape.png)] transition-all duration-500 bg-cover bg-repeat-round relative z-10 hover:bg-[url(/images/feature_itm.png)] hover:bg-[inherit]">
      <div className="relative pt-[6px] z-10">
        <img src={featureIcon} draggable="false" />
      </div>
      <Link to={featureUrl}>
        <button className="font-FiraSans text-left font-medium text-xl pb-[10px] text-HeadingColor-0 mt-4">
          {featureTitle}
        </button>
      </Link>
      <p className="font-FiraSans text-TextColor-0 pb-2">{featureDesc}</p>
      <h6 className="relative before:absolute before:-top-3 before:left-1/2 before:-translate-x-1/2 before:w-2 before:h-2 before:rounded-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 before:scale-0 after:absolute after:-top-3 after:left-1/2 after:-translate-x-1/2 after:w-[1px] after:h-0 after:rounded-full after:bg-PrimaryColor-0 after:transition-all after:duration-500 group-hover:before:scale-100 group-hover:after:h-7 font-FiraSans text-[17px] text-PrimaryColor-0">
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 transition-all duration-500 group-hover:-bottom-11">{featureNumber}</span>
      </h6>
    </div>
  );
};

export default FeatureCard;
