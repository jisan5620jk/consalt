import { Link } from "react-router-dom";
import bannerThumb from "/images/banner-thumb.png";
import bannerShape from "/images/hero_shape.png";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
    const [toggler, setToggler] = useState(false);
  return (
    <section className="mx-5 mt-5 bg-[url('/images/banner.png')] bg-contain 2xl:bg-cover bg-center bg-no-repeat h-[1000px] sm:h-[1200px] lg:h-[660px] xl:h-[548px] 2xl:h-[830px] flex items-center relative z-10 overflow-hidden rounded-[40px] 2xl:rounded-none">
      <div className="Container">
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0 mt-[72px]">
          <div className="relative">
            <h1 className="font-FiraSans font-semibold text-white text-[30px] leading-[36px] sm:text-[56px] sm:leading-[60px] md:text-[68x] lg:text-[50px] xl:text-[54px] xl:leading-[68px] 2xl:text-[56px] 2xl:leading-[70px]">
              Crafting the Digital
              <br />
              Solutions for your
              <br />
              <span className="relative before:absolute before:bottom-3 before:left-0 before:w-full before:h-[10px] before:bg-PrimaryColor-0 before:-z-10">
                Business
              </span>
            </h1>
            <p className="font-FiraSans text-TextColor-0 mb-[38px] mt-[22px]">
              Continually plagiarize virtual web services with home one{" "}
              <br className="hidden lg:block 2xl:hidden" />
              maximizing <br className="hidden 2xl:block" /> action items.
              Globally build front-end
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-8">
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
          <div className="relative">
            <img src={bannerThumb} draggable="false" className="2xl:max-w-[inherit]" />
            <div className="absolute top-[54%] -left-[58px] 2xl:-left-[42px] -translate-y-1/2">
              <button className="h-14 w-14 sm:h-[90px] sm:w-[90px] rounded-full bg-PrimaryColor-0 flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping">
                <IoPlayOutline
                  size={"30"}
                  className="text-white"
                  onClick={() => setToggler(!toggler)}
                />
              </button>
              <FsLightbox
                toggler={toggler}
                sources={[
                  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src={bannerShape}
        draggable={false}
        className="absolute top-24 2xl:top-[154px] left-[45%] -translate-x-1/2 animate-rotational hidden sm:block"
      />
    </section>
  );
};

export default Banner;