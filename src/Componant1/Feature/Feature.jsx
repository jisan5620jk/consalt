import featureIcon from "/images/feature_icon01.png";
import FeatureCard from "./FeatureCard";

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
];

const Feature = () => {
  return (
    <section className="py-28 bg-[url(/images/feature_bg.png)] bg-cover bg-no-repeat bg-bottom rounded-[40px]">
      <div className="Container">
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
            <span className="relative before:absolute before:bottom-3 before:left-0 before:w-full before:h-[10px] before:bg-PrimaryColor-0 before:-z-10">
              Business
            </span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">
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
                <div key={id} className="feature-member-box">
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
