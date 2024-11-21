import { Link } from "react-router-dom";
import bannerThumb from "/images/banner2-image.png";
import bannerShape from "/images/hero_shape.png";
import { FaPhoneAlt } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-[url('/images/home2-banner.jpg')] bg-cover bg-center bg-no-repeat h-[600px] sm:h-[700px] md:h-[1100px] lg:h-[600px] xl:h-[548px] 2xl:h-[830px] flex items-center relative z-10 overflow-hidden">
      <div className="Container">
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0 mt-[72px]">
          <div className="relative">
            <h1 className="font-FiraSans font-semibold text-white text-[30px] leading-[36px] sm:text-[46px] sm:leading-[52px] md:text-[68x] lg:text-[50px] xl:text-[54px] xl:leading-[68px] 2xl:text-[56px] 2xl:leading-[70px]">
              Crafting the Digital
              <br />
              Solutions for your
              <br />
              <span className="relative before:absolute before:bottom-3 before:left-0 before:w-full before:h-[10px] before:bg-PrimaryColor-0 before:-z-10">
                Business
              </span>
            </h1>
            <p className="font-FiraSans text-TextColor-0 mb-[38px] mt-[22px]">
              Continually plagiarize virtual web services with resource{" "}
              <br className="hidden xl:block 2xl:hidden" />
              maximizing <br className="hidden 2xl:block" /> action items.
              Globally build front-end
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-8">
              <Link to={"/contact"}>
                <button className="primary-btn">{`Get Started now`}</button>
              </Link>
              <Link to={"/about"}>
                <button className="flex items-center gap-3 text-white font-FiraSans font-medium">
                  <FaPhoneAlt />
                  {`CALL : +123 (45678) 000`}
                </button>
              </Link>
            </div>
          </div>
          <div className="relative md:flex justify-end hidden">
            <img
              src={bannerThumb}
              draggable="false"
              className="md:w-11/12 xl:w-[inherit] 2xl:max-w-[inherit] -mb-11 relative left-[124px]"
            />
          </div>
        </div>
      </div>
      <img
        src={bannerShape}
        draggable={false}
        className="absolute top-24 2xl:top-[154px] left-[45%] md:left-3/4 lg:left-[45%] -translate-x-1/2 animate-rotational hidden sm:block"
      />
    </section>
  );
};

export default Banner;
