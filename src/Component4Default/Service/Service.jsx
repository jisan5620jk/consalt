import serviceIcon from '/images/service1.png';
import serviceIcon2 from '/images/service2.png';
import serviceIcon3 from '/images/service3.png';
import serviceIcon4 from '/images/service4.png';
import ServiceCard from './ServiceCard';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import './service.css';

const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceSubTitle: 'Solutions',
    serviceTitle: 'Creative Design Works',
    serviceDesc: 'Seamlessly expedite extensible methodologies benchmark',
    serviceUrl: '/servie_details',
    serviceBtn: <HiOutlineArrowUpRight />,
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceSubTitle: 'Solutions',
    serviceTitle: 'Human Resources',
    serviceDesc: 'Seamlessly expedite extensible methodologies benchmark',
    serviceUrl: '/servie_details',
    serviceBtn: <HiOutlineArrowUpRight />,
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceSubTitle: 'Development',
    serviceTitle: 'Global Business Const',
    serviceDesc: 'Seamlessly expedite extensible methodologies benchmark',
    serviceUrl: '/servie_details',
    serviceBtn: <HiOutlineArrowUpRight />,
  },
  {
    id: 4,
    serviceIcon: serviceIcon4,
    serviceSubTitle: 'Consult',
    serviceTitle: 'Insurence Consulting',
    serviceDesc: 'Seamlessly expedite extensible methodologies benchmark',
    serviceUrl: '/servie_details',
    serviceBtn: <HiOutlineArrowUpRight />,
  },
];

const Service = () => {
  return (
    <section className='pt-28 pb-[120px] bg-white relative z-10 service8'>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor2-0 uppercase mb-3'>
            SERVICES WE PROVIDES
          </h5>
          <h1 className='font-FiraSans font-semibold text-HeadingColor2-0 inline-block text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] relative pb-4'>
            Engaging Consulting exceptional <br />
            Business Solutions
          </h1>
          <p className='font-FiraSans text-TextColor2-0 pb-6 max-w-[565px] w-full mx-auto'>
            Seamlessly expedite extensible catalysts for change rather than 24/7
            services methodologies. Appropriately benchmark innovative
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-[54px] services8-box'>
          {ServiceData.map(
            ({
              id,
              serviceIcon,
              serviceSubTitle,
              serviceTitle,
              serviceDesc,
              serviceUrl,
              serviceBtn,
            }) => {
              return (
                <>
                  <div
                    key={id}
                    className='service8-box'
                  >
                    <ServiceCard
                      serviceIcon={serviceIcon}
                      serviceSubTitle={serviceSubTitle}
                      serviceTitle={serviceTitle}
                      serviceDesc={serviceDesc}
                      serviceUrl={serviceUrl}
                      serviceBtn={serviceBtn}
                    />
                  </div>
                </>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Service;
