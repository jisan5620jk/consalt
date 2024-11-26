import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import serviceDetailsThumb from '/images/service_img.png';
import { FaArrowRightLong, FaCheck } from 'react-icons/fa6';
import Feature from './Feature/Feature';
import Icon from '/images/service-icon1.png';
import Icon2 from '/images/service-icon2.png';
import { Link } from 'react-router-dom';
import Counter from './Counter/Counter';
import Accordion from './Accordion/Accordion';

const ServiceDetails = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Website Development'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbIcon2={<FaArrowRightLong />}
        breadCrumbLink={'Service'}
        breadCrumbLink2={'Website Development'}
      />
      <Feature />
      <section className='py-[120px] bg-BodyBg4-0'>
        <div className='Container'>
          <div>
            <img
              src={serviceDetailsThumb}
              draggable='false'
              className='w-full'
            />
          </div>
          <div className='grid grid-cols-3 mt-[62px]'>
            <div className='col-span-3 lg:col-span-2 lg:mr-7 2xl:mr-[84px]'>
              <h2 className='font-FiraSans font-semibold text-2xl sm:text-[42px] text-HeadingColor-0'>
                Website Development
              </h2>
              <p className='font-FiraSans text-TextColor2-0 mt-[26px]'>
                Globally engage cross-media leadership skills before cross-media
                innovation forward morph flexible whereas process-centric
                models. Efficiently transform customer directed alignments for
                front-end meta Dramatically harness cross-platform best
                practices whereas business services. Conveniently formula
                standards in innovation with wireless vertical intellectual
                capital before global architectures engage based results with
                visionary models.
              </p>
              <p className='font-FiraSans text-TextColor2-0 mt-7 mb-7'>
                Dramatically harness cross-platform best practices whereas
                business services. Conveniently formula standards in innovation
                with wireless Globally engage cross-media leadership best breed
                experience rather than bricks-and-clicks infomediaries
                monotonectally
              </p>
              <p className='font-FiraSans text-TextColor2-0'>
                Globally engage cross-media leadership skills before cross-media
                innovation forward morph whereas process-centric models.
                Efficiently transform customer directed alignments
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-14'>
                <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5'>
                  <div className='size-[76px] flex items-center justify-center rounded-full bg-BodyBg-0'>
                    <img
                      src={Icon}
                      alt='Icon'
                      draggable='false'
                    />
                  </div>
                  <div className='flex-1'>
                    <h5 className='font-FiraSans font-medium text-xl text-HeadingColor-0'>
                      Strategic Work Planning
                    </h5>
                    <p className='font-FiraSans text-TextColor2-0 mt-2'>
                      Completely implement globals turn markets in conveniently
                    </p>
                  </div>
                </div>
                <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-5'>
                  <div className='size-[76px] flex items-center justify-center rounded-full bg-BodyBg-0'>
                    <img
                      src={Icon2}
                      alt='Icon'
                      draggable='false'
                    />
                  </div>
                  <div className='flex-1'>
                    <h5 className='font-FiraSans font-medium text-xl text-HeadingColor-0'>
                      Business Solutions
                    </h5>
                    <p className='font-FiraSans text-TextColor2-0 mt-2'>
                      Completely implement globals turn markets in conveniently
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-3 lg:col-span-1 mt-8 lg:mt-0'>
              <div className='bg-white rounded-2xl px-4 md:px-[52px] lg:px-8 xl:px-[52px] pt-5 pb-6 md:pt-[50px] md:pb-[60px]'>
                <h4 className='font-FiraSans font-medium text-[22px] sm:text-[26px] lg:text-2xl xl:text-[26px] text-HeadingColor-0'>Benifit’s the Services</h4>
                <p className='font-FiraSans text-TextColor2-0 mt-2'>
                  Leadership skill before media innovation customer directed
                  alignments
                </p>
                <ul className='space-y-3 mt-5 mb-12'>
                  <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'><span className='text-PrimaryColor-0'><FaCheck size={"18"}/></span> Professional Team Member</li>
                  <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'><span className='text-PrimaryColor-0'><FaCheck size={"18"}/></span> Any Problem Solving</li>
                  <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'><span className='text-PrimaryColor-0'><FaCheck size={"18"}/></span> Implement Business</li>
                  <li className='font-FiraSans text-HeadingColor-0 flex items-center gap-2'><span className='text-PrimaryColor-0'><FaCheck size={"18"}/></span> Business Ideas</li>
                </ul>
                <Link to={'/contact'}>
                  <button className='primary-btn'>{`Contact With Us`}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Counter />
      <Accordion />
    </>
  );
};

export default ServiceDetails;
