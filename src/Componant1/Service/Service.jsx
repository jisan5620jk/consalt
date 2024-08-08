import serviceThumb from "/images/service1.png";
import serviceThumb2 from "/images/service2.png";
import serviceThumb3 from "/images/service3.png";
import serviceThumb4 from "/images/service4.png";
import ServiceCard from "./ServiceCard";
import { FaLinkedinIn, FaPinterestP, FaXTwitter } from "react-icons/fa6";
import { PiStarFourFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const serviceData = [
  {
    id: 1,
    serviceThumb: serviceThumb,
    serviceTitle: "Anjelina Watson",
    serviceDesc: "Solar Engineer",
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
  },
  {
    id: 2,
    serviceThumb: serviceThumb2,
    serviceTitle: "Jhon D. Alexon",
    serviceDesc: "Solar Engineer",
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
  },
  {
    id: 3,
    serviceThumb: serviceThumb3,
    serviceTitle: "Al-Amin Islam",
    serviceDesc: "Solar Engineer",
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
  },
  {
    id: 4,
    serviceThumb: serviceThumb4,
    serviceTitle: "Ricerd Powel",
    serviceDesc: "Solar Engineer",
    socialIcon: <FaXTwitter />,
    socialIcon2: <FaLinkedinIn />,
    socialIcon3: <FaPinterestP />,
  },
];

const Service = () => {
  return (
    <section className="py-28 bg-HeadingColor-0">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-FiraSans text-lg font-medium text-PrimaryColor-0 flex items-center justify-center gap-2">
            <PiStarFourFill size={"14"} />
            service MEMBER
            <PiStarFourFill size={"14"} />
          </h5>
          <h1 className="font-FiraSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[44px] xl:leading-[54px] 2xl:text-[46px] 2xl:leading-[56px] text-white mt-4 mb-4 pb-1">
            Meet Our Leadership service
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">
          {serviceData.map(
            ({
              id,
              serviceThumb,
              serviceTitle,
              serviceDesc,
              socialIcon,
              socialIcon2,
              socialIcon3,
            }) => {
              return (
                <div key={id} className="service-member-box">
                  <ServiceCard
                    serviceThumb={serviceThumb}
                    serviceTitle={serviceTitle}
                    serviceDesc={serviceDesc}
                    socialIcon={socialIcon}
                    socialIcon2={socialIcon2}
                    socialIcon3={socialIcon3}
                  />
                </div>
              );
            }
          )}
        </div>
        <div className="flex justify-center mt-[70px] relative z-10 before:absolute before:top-1/2 before:left-0 before:w-1/3 before:h-[1px] before:-translate-y-1/2 before:bg-[linear-gradient(90deg,_rgba(12,89,219,1)_20%,_rgba(255,255,255,0)_80%)] after:absolute after:top-1/2 after:right-0 after:w-1/3 after:h-[1px] after:-translate-y-1/2 after:bg-[linear-gradient(-90deg,_rgba(12,89,219,1)_20%,_rgba(255,255,255,0)_80%)]">
          <p className="font-FiraSans text-white font-medium">
            You can also find our Consultant Service to{" "}
            <Link to={"/contact"} className="text-PrimaryColor-0 font-semibold">
              Contact
            </Link>{" "}
            for the consulting
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
