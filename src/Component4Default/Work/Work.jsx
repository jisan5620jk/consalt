/* eslint-disable no-unused-vars */
import workThumb from "/images/work1.png";
import workThumb2 from "/images/work2.png";
import workThumb3 from "/images/work3.png";
import workThumb4 from "/images/work4.png";
import WorkCard from "./WorkCard";
import { PiStarFourFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const WorkData = [
  {
    id: 1,
    workThumb: workThumb,
    workTitle: "Market Analysis",
    workDesc: "Tecnology",
    workUrl: "/servie_details",
    workBtn: <HiOutlineArrowRight />,
  },
  {
    id: 2,
    workThumb: workThumb2,
    workTitle: "Risk Assesment",
    workDesc: "Tecnology",
    workUrl: "/servie_details",
    workBtn: <HiOutlineArrowRight />,
  },
  {
    id: 3,
    workThumb: workThumb3,
    workTitle: "Invest Insights",
    workDesc: "Tecnology",
    workUrl: "/servie_details",
    workBtn: <HiOutlineArrowRight />,
  },
  {
    id: 4,
    workThumb: workThumb4,
    workTitle: "Estate planning",
    workDesc: "Tecnology",
    workUrl: "/servie_details",
    workBtn: <HiOutlineArrowRight />,
  },
];

const Work = () => {
  return (
    <section className='pt-28 pb-[120px] relative z-10'>
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
          <div></div>
        </div>
        <div className='grid grid-cols-2 items-center mt-[56px]'>
          <div></div>
          <div>
            {WorkData.map(
              ({ id, workThumb, workTitle, workDesc, workUrl, workBtn }) => {
                return (
                  <>
                    <div key={id}>
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
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
