import processIcon from '/images/proses1.png';
import processIcon2 from '/images/proses2.png';
import processIcon3 from '/images/proses3.png';
import ProcessCard from './ProcessCard';
import { BsArrowRight } from 'react-icons/bs';

const processData = [
  {
    id: 1,
    processIcon: processIcon,
    processBtn: <BsArrowRight />,
    processTitle: 'Start A Project',
    processDesc:
      'Completely implement globals without impactful markets in conveniently done innovate customer directed',
  },

  {
    id: 2,
    processIcon: processIcon2,
    processBtn: <BsArrowRight />,
    processTitle: 'Project Analysis',
    processDesc:
      'Completely implement globals without impactful markets in conveniently done innovate customer directed',
  },
  {
    id: 3,
    processIcon: processIcon3,
    processBtn: <BsArrowRight />,
    processTitle: 'Deliver to Succes',
    processDesc:
      'Completely implement globals without impactful markets in conveniently done innovate customer directed',
  },
];

const Process = () => {
  return (
    <section className='pt-20 md:pt-28 pb-10 relative bg-Secondarycolor2-0 z-10 '>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-FiraSans text-sm sm:text-base font-semibold text-PrimaryColor2-0'>
            SIMPLE PROCESS
          </h5>
          <h1 className='font-FiraSans font-bold text-base leading-7 sm:text-[30px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px]'>
            Engaging {`Consulting's`} exceptional <br /> Involves a series of
            Steps
          </h1>
          <p className='font-FiraSans text-TextColor-0 mt-[10px]'>
            Globally engage cross-media leadership skills before cross-media
            innovation forward <br className='hidden md:block' /> develop
            standardized platforms without robust
          </p>
        </div>
        <div className='pb-16 mt-[56px]'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10'>
            {processData.map(
              ({ id, processIcon, processBtn, processTitle, processDesc }) => {
                return (
                  <div key={id}>
                    <ProcessCard
                      processIcon={processIcon}
                      processBtn={processBtn}
                      processTitle={processTitle}
                      processDesc={processDesc}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
