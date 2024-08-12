import serviceThumb from "/images/service_thumb01.png";
import ServiceCard from "./ServiceCard";
import { LuMoveRight } from "react-icons/lu";
import serviceShape from "/images/service_rotate.png"

const ServiceData = [
  {
    id: 1,
    serviceThumb: serviceThumb,
    serviceTitle: "Globally Enable Accurate System Sustainable",
    serviceUrl: "/",
    serviceBtn: "Read More",
    btnIcon: <LuMoveRight />,
  },
  {
    id: 2,
    serviceThumb: serviceThumb,
    serviceTitle: "Cultivate Exceptional Net Works Markets",
    serviceUrl: "/",
    serviceBtn: "Read More",
    btnIcon: <LuMoveRight />,
  },
  {
    id: 3,
    serviceThumb: serviceThumb,
    serviceTitle: "Communication is with World Infrastructure",
    serviceUrl: "/",
    serviceBtn: "Read More",
    btnIcon: <LuMoveRight />,
  },
];

const Service = () => {
  return (
    <section className="bg-[url(/images/service-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[206px] pb-[150px] relative -mt-28 mx-5 rounded-b-[40px]">
      <div className="size-[97px] rounded-full bg-PrimaryColor-0 flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-[36px]">
        <img src={serviceShape} className="animate-rotational" />
      </div>
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans font-medium text-PrimaryColor-0 uppercase flex items-center justify-center gap-2 mb-3">
            SOLUTION APPROACH
          </h5>
          <h1 className="font-FiraSans font-semibold text-white text-[30px] leading-[36px] sm:text-[56px] sm:leading-[60px] md:text-[68x] lg:text-[50px] xl:text-[42px] xl:leading-[52px]">
            Individuals offer Professional Services
            <br />
            in the field of business Consulting
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10 mt-14">
          {ServiceData.map(
            ({
              id,
              serviceThumb,
              serviceTitle,
              serviceUrl,
              serviceBtn,
              btnIcon,
            }) => {
              return (
                <div key={id}>
                  <ServiceCard
                    serviceThumb={serviceThumb}
                    serviceTitle={serviceTitle}
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
