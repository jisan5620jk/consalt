import { Link } from "react-router-dom";
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import CountUp from "react-countup";
import { useEffect } from "react";

const Pricing = () => {

   useEffect(() => {
     const handleMouseEnter = (event) => {
       event.target.classList.add("active");

       // Remove 'active' class from siblings
       const parent = event.target.parentElement;
       if (parent) {
         const siblings = parent.querySelectorAll(".choose-box");
         siblings.forEach((sibling) => {
           if (sibling !== event.target) {
             sibling.classList.remove("active");
           }
         });
       }
     };

     const elements = document.querySelectorAll(".choose-box");
     elements.forEach((element) => {
       element.addEventListener("mouseenter", handleMouseEnter);
     });

     // Clean up event listeners when component unmounts
     return () => {
       elements.forEach((element) => {
         element.removeEventListener("mouseenter", handleMouseEnter);
       });
     };
   }, []);

  return (
    <section className="relative overflow-hidden py-28 bg-BodyBg2-0 mx-5">
      <div className="Container">
        <div className="grid grid-cols-1 gap-10 lg:gap-16 xl:gap-24 2xl:gap-[140px] lg:grid-cols-2 items-center">
          <div className="w-full mx-auto">
            <h5 className="font-FiraSans font-medium text-PrimaryColor-0 uppercase flex items-center justify-center gap-2 mb-3">
              PRICING PLANS
            </h5>
            <h1 className="font-FiraSans font-semibold text-white text-[30px] leading-[36px] sm:text-[56px] sm:leading-[60px] md:text-[68x] lg:text-[50px] xl:text-[42px] xl:leading-[52px]">
              Choose the Comfotable
              <br />
              Pricing Plans for your
              <br />
              Consultant Service
            </h1>
            <p>
              Continually plagiarize virtual web services home one maximizing
              action items. Globally build front-end consult.
            </p>
            <Link to={"/service"}>
              <button className="size-20 rounded-full text-white transition-all duration-500 rotate-45 hover:text-PrimaryColor-0 bg-PrimaryColor-0 flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:rounded-full before:scale-0 before:-z-10 before:transition-all before:duration-500 group-hover:before:scale-100">
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
          <div>
            <div className="choose-box group text-center bg-white rounded-md px-[30px] lg:px-4 xl:px-[30px] pt-9 pb-10 relative z-10  before:absolute before:top-0 before:right-0 before:-z-10 before:w-0 before:h-full before:bg-HeadingColor-0 before:rounded-md before:transition-all before:duration-500">
              <div className="choose-icon flex justify-center text-PrimaryColor-0 transition-all duration-500">
                <IoDiamondOutline size={"70px"} />
              </div>
              <h6 className="choose-title text-[26px] rounded font-FiraSans text-HeadingColor-0 font-semibold transition-all duration-500 mt-4 mb-1">
                Business Plan
              </h6>
              <p className="choose-desc font-FiraSans text-TextColor2-0 transition-all duration-500 mb-4">
                The markets and front market
              </p>
              <div className="flex items-end justify-center gap-1 border-b border-BorderColor2-0 pb-5">
                <div className="flex gap-1">
                  <h6 className="choose-price transition-all duration-500 font-FiraSans font-semibold text-2xl text-HeadingColor-0">
                    $
                  </h6>
                  <CountUp
                    start={-9}
                    end={49}
                    prefix=""
                    suffix=""
                    className="choose-price text-[50px] leading-[50px] font-FiraSans font-semibold text-HeadingColor-0 transition-all duration-500"
                  />
                </div>
                <h6 className="choose-price font-FiraSans text-TextColor2-0 text-lg transition-all duration-500">
                  / Month
                </h6>
              </div>
              <ul className="flex flex-col gap-3 mt-6 mb-9">
                <li className="choose-list font-FiraSans text-TextColor2-0 transition-all duration-500">
                  10+ user Account
                </li>
                <li className="choose-list font-FiraSans text-TextColor2-0 transition-all duration-500">
                  Moneyback Gaurentee
                </li>
                <li className="choose-list font-FiraSans text-TextColor2-0 transition-all duration-500">
                  Unlimited Database
                </li>
                <li className="choose-list font-FiraSans text-TextColor2-0 transition-all duration-500">
                  24/7 Supports
                </li>
              </ul>
              <Link to={"/"}>
                <button className="choose-btn font-FiraSans font-medium bg-[#e6eefb] text-lg text-HeadingColor-0 rounded px-8 py-[10px] transition-all duration-500">
                  Purchaces
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
