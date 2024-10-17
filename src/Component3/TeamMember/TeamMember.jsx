import TeamCard from './TeamCard';
import teamThumb from '/images/team1.png';
import teamThumb2 from '/images/team2.png';
import teamThumb3 from '/images/team3.png';
import teamThumb4 from '/images/team4.png';
import teamShape from '/images/team-dot.png';
import circleShape from '/images/team_rotate.png';
import border from '/images/hero_border.png';
import aboutShape from '/images/about_shape_3.png';
import serviceShape2 from '/images/tir.png';
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { GoShareAndroid } from 'react-icons/go';

const teamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamTitle: 'Charles S. Brown',
    teamShare: <GoShareAndroid />,
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: 'Lead Developer',
    teamShape:teamShape,
  },
  {
    id: 2,
    teamThumb: teamThumb2,
    teamTitle: 'James E. Huey',
    teamShare: <GoShareAndroid />,
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: 'UI/UX Designer',
    teamShape:teamShape,
  },
  {
    id: 3,
    teamThumb: teamThumb3,
    teamTitle: 'Anjelina Jholi',
    teamShare: <GoShareAndroid />,
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: 'Web Developer',
    teamShape:teamShape,
  },
  {
    id: 4,
    teamThumb: teamThumb4,
    teamShare: <GoShareAndroid />,
    teamTitle: 'Jhon D. Alexon',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    teamDesc: 'Team Leader',
    teamShape:teamShape,
  },
];

const TeamMember = () => {
  return (
    <section className='py-28 relative z-10'>
      <div className='absolute -z-10 top-10 left-1/2 -translate-x-1/2'>
        <img
          src={circleShape}
          draggable='false'
          className='max-w-[inherit] w-[inherit]'
        />
      </div>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3'>
            MEET THE TEAM
          </h5>
          <h1 className='font-FiraSans font-semibold text-HeadingColor-0 inline-block text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] relative pb-4'>
            We’ve 36+ Dedicated Members
            <img
              src={border}
              draggable='false'
              className='absolute bottom-0 left-1/2 -translate-x-1/2'
            />
          </h1>
          <img
            src={aboutShape}
            draggable='false'
            className='absolute -z-10 top-32 right-10 xl:right-80  animate-dance3 hidden md:block'
          />

          <div className='absolute -z-10 top-36 left-[22%] hidden 2xl:block animate-rotate'>
            <img
              src={serviceShape2}
              draggable='false'
            />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-7 mt-[60px]'>
          {teamData.map(
            ({
              id,
              teamThumb,
              teamTitle,
              teamShare,
              socialIcon,
              socialIcon2,
              socialIcon3,
              teamDesc,
              teamShape,
            }) => {
              return (
                <div key={id}>
                  <TeamCard
                    teamThumb={teamThumb}
                    teamTitle={teamTitle}
                    teamShare={teamShare}
                    socialIcon={socialIcon}
                    socialIcon2={socialIcon2}
                    socialIcon3={socialIcon3}
                    teamDesc={teamDesc}
                    teamShape={teamShape}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
