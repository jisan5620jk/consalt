/* eslint-disable no-unused-vars */
import serviceThumb from "/images/service_3.png";
import serviceThumb2 from "/images/service_4.png";
import serviceIcon from "/images/service_icon1.png";
import serviceIcon2 from "/images/service_icon2.png";
import ServiceCard from "./ServiceCard";
import { GoArrowUpRight } from "react-icons/go";

const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceSubTitle: "Finance",
    serviceTitle: "Investment Idea",
    serviceDesc: "Business visualize strategic informatic beanchmark",
    serviceUrl: "/service_details",
    btnContent: "View Details",
    btnIcon: <GoArrowUpRight />,
    serviceThumb: serviceThumb,
  },  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceSubTitle: "Finance",
    serviceTitle: "Investment Idea",
    serviceDesc: "Business visualize strategic informatic beanchmark",
    serviceUrl: "/service_details",
    btnContent: "View Details",
    btnIcon: <GoArrowUpRight />,
    serviceThumb: serviceThumb2,
  },{
    id: 3,
    serviceIcon: serviceIcon,
    serviceSubTitle: "Finance",
    serviceTitle: "Investment Idea",
    serviceDesc: "Business visualize strategic informatic beanchmark",
    serviceUrl: "/service_details",
    btnContent: "View Details",
    btnIcon: <GoArrowUpRight />,
    serviceThumb: serviceThumb,
  },{
    id: 4,
    serviceIcon: serviceIcon2,
    serviceSubTitle: "Finance",
    serviceTitle: "Investment Idea",
    serviceDesc: "Business visualize strategic informatic beanchmark",
    serviceUrl: "/service_details",
    btnContent: "View Details",
    btnIcon: <GoArrowUpRight />,
    serviceThumb: serviceThumb2,
  },
];

const Service = () => {
  return (
    <section className="relative pt-28 pb-[120px] bg-BodyBg4-0">
      <div className="Container">
        <div>
          <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3">
            SERVICES WE PROVIDE
          </h5>
          <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[38px] lg:leading-[48px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] mb-4">
            Individuals offer Professional <br /> Services we Provide
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px] mt-[54px] ml-0 lg:ml-7 xl:ml-[46px] 2xl:ml-[314px]">
        {ServiceData.map(
          ({
            id,
            serviceIcon,
            serviceSubTitle,
            serviceTitle,
            serviceDesc,
            btnContent,
            serviceUrl,
            btnIcon,
            serviceThumb,
          }) => {
            return (
              <>
                <div key={id}>
                  <ServiceCard
                    serviceIcon={serviceIcon}
                    serviceSubTilte={serviceSubTitle}
                    serviceTitle={serviceTitle}
                    serviceDesc={serviceDesc}
                    btnContent={btnContent}
                    serviceUrl={serviceUrl}
                    btnIcon={btnIcon}
                    serviceThumb={serviceThumb}
                  />
                </div>
              </>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Service;
