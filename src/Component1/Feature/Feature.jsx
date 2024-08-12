import featureIcon from "/images/feature_icon01.png";
import featureIcon2 from "/images/feature_icon02.png";
import featureIcon3 from "/images/feature_icon03.png";
import featureIcon4 from "/images/feature_icon04.png";
import FeatureCard from "./FeatureCard";
import featureShape from "/images/arrow.png"

const featureData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureTitle: "Business Planning and Technologist",
    featureDesc:
      "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    featureUrl: "/",
    featureNumber: "01",
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureTitle: "Human home ones and Consulting",
    featureDesc:
      "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    featureUrl: "/",
    featureNumber: "02",
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureTitle: "Opportunities Global Business Service",
    featureDesc:
      "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    featureUrl: "/",
    featureNumber: "03",
  },
  {
    id: 4,
    featureIcon: featureIcon4,
    featureTitle: "Insurance for Family Consulting",
    featureDesc:
      "Completely implement globals without impactful markets in conveniently done innovate customer directed",
    featureUrl: "/",
    featureNumber: "04",
  },
];

const Feature = () => {
  return (
    <section className="pt-28 pb-[196px] bg-[url(/images/feature_bg.png)] bg-cover bg-no-repeat bg-bottom rounded-[40px] relative z-10 m-5">
      <div className="Container relative">
        <img src={featureShape} className="absolute top-0 right-16 animate-swing"/>
        <div className="text-center">
          <h5 className="font-FiraSans font-medium text-PrimaryColor-0 uppercase flex items-center justify-center gap-2 mb-3">
            Featured Service
          </h5>
          <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[30px] leading-[36px] sm:text-[56px] sm:leading-[60px] md:text-[68x] lg:text-[50px] xl:text-[42px] xl:leading-[52px]">
            Unlocking Your {`Business's`} Potential with
            <br />
            the Best Innovate Consulting active and
            <br />
            Dedicated Customers
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-12">
          {featureData.map(
            ({
              id,
              featureIcon,
              featureTitle,
              featureDesc,
              featureUrl,
              featureNumber,
            }) => {
              return (
                <div key={id} className="feature-box">
                  <FeatureCard
                    featureIcon={featureIcon}
                    featureTitle={featureTitle}
                    featureDesc={featureDesc}
                    featureUrl={featureUrl}
                    featureNumber={featureNumber}
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
