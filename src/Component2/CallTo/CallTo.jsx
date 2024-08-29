import { FaRegThumbsUp } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";

const CallTo = () => {
    return (
      <section className="bg-BodyBg3-0 py-8">
        <div className="Container">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div>
              <h5 className="font-FiraSans font-medium text-sm sm:text-base text-white uppercase mb-3">
                CALL TO ACTION
              </h5>
              <h1 className="font-FiraSans font-semibold text-white text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] mb-4">
                Get A Free Finance Consultant
              </h1>
            </div>
            <div className="grid grid-cols-2 items-center">
              <div className="flex items-center gap-5">
                <div className="size-[58px] rounded-full border-2 border-white flex items-center justify-center text-white">
                  <LuPhone size={"24"} />
                </div>
                <div className="flex-1">
                  <h6 className="font-FiraSans text-white text-opacity-70 text-[15px]">CALL US ANYTIME</h6>
                  <Link to={"/"}>
                    <button className="font-FiraSans font-medium text-xl text-white">+980 123 (4567) 890</button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-end">
                <Link to={"/contact"}>
                  <button className="primary-btn2 !border-2 !border-BorderColor2-0">
                    <FaRegThumbsUp />
                    {`Contact Us`}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default CallTo;