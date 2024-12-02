/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TeamCard = ({
  teamThumb,
  socialIcon,
  socialIcon2,
  socialIcon3,
  socialIcon4,
  teamTitle,
  teamDesc,
}) => {
  return (
    <div className='group relative'>
      <div className='relative rounded-md overflow-hidden'>
        <img
          src={teamThumb}
          className='w-full rounded-md xl:w-[inherit] m-auto'
        />
        <div className='absolute z-10 left-1/2 -translate-x-1/2 -bottom-10 opacity-0 transition-all duration-500 group-hover:bottom-[30px] group-hover:opacity-100'>
          <ul className='flex gap-3'>
            <li>
              <Link to={'/'}>
                <button className='size-10 flex justify-center items-center rounded-full overflow-hidden relative bg-BodyBg4-0 text-PrimaryColor-0 transition-all duration-500 hover:text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                  {socialIcon}
                </button>
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <button className='size-10 flex justify-center items-center rounded-full overflow-hidden relative bg-BodyBg4-0 text-PrimaryColor-0 transition-all duration-500 hover:text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                  {socialIcon2}
                </button>
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <button className='size-10 flex justify-center items-center rounded-full overflow-hidden relative bg-BodyBg4-0 text-PrimaryColor-0 transition-all duration-500 hover:text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                  {socialIcon3}
                </button>
              </Link>
            </li>
            <li>
              <Link to={'/'}>
                <button className='size-10 flex justify-center items-center rounded-full overflow-hidden relative bg-BodyBg4-0 text-PrimaryColor-0 transition-all duration-500 hover:text-white text-sm z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:rounded-full before:-z-10 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100'>
                  {socialIcon4}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='relative transition-all duration-500 text-center pt-[22px]'>
        <h5 className='font-FiraSans font-semibold text-2xl text-HeadingColor-0 transition-all duration-500 pb-1'>
          {teamTitle}
        </h5>
        <p className='font-FiraSans text-TextColor2-0 transition-all duration-500'>
          {teamDesc}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
