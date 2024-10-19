import { FaRegThumbsUp } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";
import callShape from "/images/call-to-dark-arrow.png";

const CallTo = () => {
  return (
    <section className="bg-BodyBg-0 py-8">
      <div className="Container">
        <div className="grid grid-cols-6 gap-5 lg:gap-0 lg:grid-cols-12 items-center">
          <div className="col-span-6 xl:col-span-7 relative z-10">
            <div className="absolute z-10 top-2 right-10 animate-swing hidden xl:block">
              <img src={callShape} draggable="false" />
            </div>
            <h5 className="font-FiraSans font-medium text-sm sm:text-base text-PrimaryColor-0 uppercase mb-3">
              CALL TO ACTION
            </h5>
            <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[32px] lg:leading-[42px] mb-4">
              Get A Free Finance Consultant
            </h1>
          </div>
          <div className="col-span-6 xl:col-span-5">
            <div className="flex flex-col gap-8 sm:gap-0 sm:flex-row sm:justify-between sm:items-center relative z-10 before:absolute before:left-1/2 before:top-1/2 before:translate-x-8 before:-translate-y-1/2 before:hidden 2xl:before:block before:w-[2px] before:h-12 before:bg-Secondarycolor-0 before:bg-opacity-15">
              <div className="flex items-center gap-5">
                <div className="size-[58px] rounded-full border-2 border-PrimaryColor-0 flex items-center justify-center text-PrimaryColor-0">
                  <LuPhone size={"24"} />
                </div>
                <div className="flex-1">
                  <h6 className="font-FiraSans text-TextColor2-0 text-[15px]">
                    CALL US ANYTIME
                  </h6>
                  <Link to={"/"}>
                    <button className="font-FiraSans font-medium text-left text-lg 2xl:text-xl text-HeadingColor-0">
                      +980 123 (4567) 890
                    </button>
                  </Link>
                </div>
              </div>
              <div className="">
                <Link to={"/contact"}>
                  <button className="primary-btn2 !bg-BodyBg-0 !border-2 !border-Secondarycolor-0 !border-opacity-15 !text-HeadingColor-0 hover:!text-white">
                    <FaRegThumbsUp />
                    {`Contact Us`}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallTo;
