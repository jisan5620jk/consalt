/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const WorkCard = ({
  workIcon,
  workTitle,
  workDesc,
  workUrl,
  workBtn,
}) => {
  return (
    <div className='group px-[38px] lg:px-6 xl:px-[38px] pt-10 pb-7 rounded-lg relative z-10 overflow-hidden bg-[#0a4243] before:absolute before:top-0 before:-z-10 before:left-1/2 before:w-0 before:h-full before:bg-PrimaryColor-0 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0'>
      <div className='size-[76px] rounded-full bg-PrimaryColor-0 flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#119695] before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100 mb-6'>
        <img
          src={workIcon}
          draggable='false'
          className='brightness-0 invert-[1]'
        />
      </div>
      <Link to={workUrl}>
        <button className='font-FiraSans text-left font-medium text-xl text-white'>
          {workTitle}
        </button>
      </Link>
      <p className='font-FiraSans text-TextColor-0 pt-3 pb-6'>{workDesc}</p>
      <Link to={workUrl}>
        <button className='text-white text-2xl'>{workBtn}</button>
      </Link>
    </div>
  );
};

export default WorkCard;
