/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

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
    <div className='group relative z-10 overflow-hidden pt-[30px] px-[30px] after:absolute after:rounded-t-full after:bottom-0 after:left-0 after:w-full after:h-full after:transition-all after:duration-500 after:border-2 after:border-white after:border-opacity-10 hover:after:border-opacity-35'>
      <div>
        <img
          src={teamThumb}
          draggable='false'
          className='w-full'
        />
      </div>
      <div className='text-center mt-8 pb-9 transition-all duration-500 group-hover:pb-[67px]'>
        <h5 className='font-FiraSans font-semibold text-lg sm:text-[22px] text-white'>
          {teamTitle}
        </h5>
        <p className='font-FiraSans text-TextColor-0'>{teamDesc}</p>
      </div>
      <div className='absolute z-10 -bottom-1/4 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-500 group-hover:bottom-6 group-hover:opacity-100'>
        <ul className='flex gap-3'>
          <li>
            <Link to={'/'}>
              <button className='text-white text-opacity-40 transition-all hover:text-opacity-100'>
                {socialIcon}
              </button>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <button className='text-white text-opacity-40 transition-all hover:text-opacity-100'>
                {socialIcon2}
              </button>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <button className='text-white text-opacity-40 transition-all hover:text-opacity-100'>
                {socialIcon3}
              </button>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <button className='text-white text-opacity-40 transition-all hover:text-opacity-100'>
                {socialIcon4}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
