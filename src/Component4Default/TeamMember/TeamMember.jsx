import teamThumb from "/images/team_1.png";
import teamThumb2 from "/images/team_2.png";
import teamThumb3 from "/images/team_3.png";
import teamThumb4 from "/images/team_2.png";
import TeamCard from "./TeamCard";
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaXTwitter } from "react-icons/fa6";

const teamData = [
  {
    id: 1,
    teamThumb: teamThumb,
    teamTitle: 'Anjelina Watson',
    teamDesc: 'Solar Engineer',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
  },
  {
    id: 2,
    teamThumb: teamThumb2,
    teamTitle: 'Jhon D. Alexon',
    teamDesc: 'Solar Engineer',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
  },
  {
    id: 3,
    teamThumb: teamThumb3,
    teamTitle: 'Al-Amin Islam',
    teamDesc: 'Solar Engineer',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
  },
  {
    id: 4,
    teamThumb: teamThumb4,
    teamTitle: 'Ricerd Powel',
    teamDesc: 'Solar Engineer',
    socialIcon: <FaFacebookF />,
    socialIcon2: <FaXTwitter />,
    socialIcon3: <FaLinkedinIn />,
    socialIcon4: <FaPinterestP />,
  },
];

const TeamMember = () => {
  return (
    <section className='mx-5 py-28 bg-Secondarycolor2-0'>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-FiraSans text-sm sm:text-base font-semibold text-PrimaryColor2-0'>
            MEET THE TEAM
          </h5>
          <h1 className='font-FiraSans font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px]'>
            Our Active & Dedicated Members <br /> for Helping the Customer
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12'>
          {teamData.map(
            ({
              id,
              teamThumb,
              teamTitle,
              teamDesc,
              socialIcon,
              socialIcon2,
              socialIcon3,
              socialIcon4,
            }) => {
              return (
                <div
                  key={id}
                  className='team-member-box'
                >
                  <TeamCard
                    teamThumb={teamThumb}
                    teamTitle={teamTitle}
                    teamDesc={teamDesc}
                    socialIcon={socialIcon}
                    socialIcon2={socialIcon2}
                    socialIcon3={socialIcon3}
                    socialIcon4={socialIcon4}
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
