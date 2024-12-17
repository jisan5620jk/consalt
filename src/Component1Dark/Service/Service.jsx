import serviceThumb from '/images/service_thumb01.jpg';
import serviceThumb2 from '/images/service_thumb02.jpg';
import serviceThumb3 from '/images/service_thumb03.jpg';
import ServiceCard from './ServiceCard';
import { LuMoveRight } from 'react-icons/lu';

const ServiceData = [
  {
    id: 1,
    serviceThumb: serviceThumb,
    serviceTitle: 'Globally Enable Accurate System Sustainable',
    serviceDesc:
      'Continually plagiarize virtual web services resource maximizing action items. Globally build front-end consult.',
    serviceUrl: '/service_details',
    serviceBtn: 'Read More',
    btnIcon: <LuMoveRight />,
  },
  {
    id: 2,
    serviceThumb: serviceThumb2,
    serviceTitle: 'Cultivate Exceptional Net Works Markets',
    serviceDesc:
      'Continually plagiarize virtual web services resource maximizing action items. Globally build front-end consult.',
    serviceUrl: '/service_details',
    serviceBtn: 'Read More',
    btnIcon: <LuMoveRight />,
  },
  {
    id: 3,
    serviceThumb: serviceThumb3,
    serviceTitle: 'Communication is with World Infrastructure',
    serviceDesc:
      'Continually plagiarize virtual web services resource maximizing action items. Globally build front-end consult.',
    serviceUrl: '/service_details',
    serviceBtn: 'Read More',
    btnIcon: <LuMoveRight />,
  },
];

const Service = () => {
  return (
    <section className='bg-HeadingColor-0 bg-cover bg-bottom bg-no-repeat pt-28 pb-[120px] relative'>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-FiraSans font-medium text-sm sm:text-base text-white text-opacity-90 uppercase flex items-center justify-center gap-2 mb-3'>
            SOLUTION APPROACH
          </h5>
          <h1 className='font-FiraSans font-semibold text-white text-sm leading-[24px] sm:text-2xl sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[42px] xl:leading-[52px]'>
            Individuals offer Professional Services
            <br />
            in the field of business Consulting
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10 mt-14'>
          {ServiceData.map(
            ({
              id,
              serviceThumb,
              serviceTitle,
              serviceDesc,
              serviceUrl,
              serviceBtn,
              btnIcon,
            }) => {
              return (
                <div key={id}>
                  <ServiceCard
                    serviceThumb={serviceThumb}
                    serviceTitle={serviceTitle}
                    serviceDesc={serviceDesc}
                    serviceUrl={serviceUrl}
                    serviceBtn={serviceBtn}
                    btnIcon={btnIcon}
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

export default Service;
