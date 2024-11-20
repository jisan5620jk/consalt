import workThumb from '/images/work_img.png';
import WorkCard from './WorkCard';
import { Link } from 'react-router-dom';
import { RxArrowTopRight } from 'react-icons/rx';
import './work-box.css';

const WorkData = [
  {
    id: 1,
    workTitle: 'New Business Implement',
    workDesc: 'Technology',
    workUrl: '/blog_details',
    workBtn: <RxArrowTopRight />,
  },
  {
    id: 2,
    workTitle: 'Finance Developments',
    workDesc: 'Technology',
    workUrl: '/blog_details',
    workBtn: <RxArrowTopRight />,
  },
  {
    id: 3,
    workTitle: 'Business Grow Planning',
    workDesc: 'Technology',
    workUrl: '/blog_details',
    workBtn: <RxArrowTopRight />,
  },
  {
    id: 4,
    workTitle: 'Family Insurence Policy',
    workDesc: 'Technology',
    workUrl: '/blog_details',
    workBtn: <RxArrowTopRight />,
  },
];

const Work = () => {
  return (
    <section className='mx-2 lg:mx-5 pt-20 md:pt-28 pb-20 md:pb-[120px] bg-Secondarycolor2-0 relative z-10'>
      <div className='Container'>
        <div className='flex justify-between flex-wrap items-center'>
          <div>
            <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor2-0 uppercase mb-3'>
              LATEST WORKS
            </h5>
            <h1 className='font-FiraSans font-semibold text-white inline-block text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] relative pb-4'>
              Recently We’ve Finishd those <br />
              Works Highly Satisfaction
            </h1>
          </div>
          <div>
            <Link to={'/blog_grid'}>
              <button className='primary-btn4 !bg-transparent !border-white hover:!border-PrimaryColor2-0 before:!bg-PrimaryColor2-0 !py-[15px] after:bg-opacity-50 after:!top-9'>{`Browse Works`}</button>
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-9 items-center mt-[44px]'>
          <div>
            <img
              src={workThumb}
              alt='Image'
              draggable='false'
            />
          </div>
          <div className='work-boxs mx-32'>
            {WorkData.map(({ id, workTitle, workDesc, workUrl, workBtn }) => {
              return (
                <>
                  <div
                    key={id}
                    className='work-box'
                  >
                    <WorkCard
                      workThumb={workThumb}
                      workTitle={workTitle}
                      workDesc={workDesc}
                      workUrl={workUrl}
                      workBtn={workBtn}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
