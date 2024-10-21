import { FaArrowRightLong } from 'react-icons/fa6';
import featureIcon from '/images/feature1.png';
import featureIcon2 from '/images/feature2.png';
import featureIcon3 from '/images/feature3.png';
import FeatureCard from './FeatureCard';

const FeatureData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: `Strategic marketing`,
    featureDesc:
      'Completely mesh leveraged total main for resource maximizing applications. Credibly implement',
    featureUrl: '/service_details',
    featureBtnContent: 'Read More',
    featureBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: `Investment Planning`,
    featureDesc:
      'Completely mesh leveraged total main for resource maximizing applications. Credibly implement',
    featureUrl: '/service_details',
    featureBtnContent: 'Read More',
    featureBtnIcon: <FaArrowRightLong />,
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: `Insights & analytics`,
    featureDesc:
      'Completely mesh leveraged total main for resource maximizing applications. Credibly implement',
    featureUrl: '/service_details',
    featureBtnContent: 'Read More',
    featureBtnIcon: <FaArrowRightLong />,
  },
];

const Feature = () => {
  return (
    <section className='pt-28 pb-[120px] relative bg-white feature8'>
      <div className='Container'>
        <div className='text-center'>
          <h5 className='font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor2-0 uppercase mb-3'>
            FEATURED SERVICES
          </h5>
          <h1 className='font-FiraSans font-semibold text-HeadingColor2-0 inline-block text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] relative pb-4'>
            Engaging Consulting Exceptional
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:items-center lg:grid-cols-3 gap-7 mt-10 features8-box'>
          {FeatureData.map(
            ({
              id,
              featureIcon,
              featureTitle,
              featureDesc,
              featureUrl,
              featureBtnContent,
              featureBtnIcon,
            }) => {
              return (
                <div key={id}>
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureTitle={featureTitle}
                    featureDesc={featureDesc}
                    featureUrl={featureUrl}
                    featureBtnContent={featureBtnContent}
                    featureBtnIcon={featureBtnIcon}
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

export default Feature;
