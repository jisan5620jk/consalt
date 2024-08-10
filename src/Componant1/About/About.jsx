import aboutThumb from "/images/about_thumb.png";
import aboutShape from "/images/about_shape.png";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { ImCheckmark } from "react-icons/im";

const About = () => {
  return (
    <section className="mx-5 mt-5 rounded-[40px] py-[120px] bg-BodyBg-0 bg-no-repeat bg-center bg-cover relative">
      <div className="Container">
        <h1 className="font-FiraSans text-center font-semibold text-HeadingColor-0 text-[30px] leading-[36px] sm:text-[56px] sm:leading-[60px] md:text-[68x] lg:text-[50px] xl:text-[42px] xl:leading-[52px]">
          Perform Market Research to gain <br /> Insights into Industry Trends
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
          <div className="relative z-10">
            <img src={aboutThumb} draggable="false" />
            <div className="absolute top-0 right-0 size-[142px] bg-PrimaryColor-0 rounded-full flex items-center justify-center">
              <div className="text-inner size-24 animate-rotational relative before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:size-[15px] before:rounded-full before:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 250.5 250.5"
                  className="overflow-visible"
                >
                  <path
                    d="M.25,125.25a125,125,0,1,1,125,125,125,125,0,0,1-125-125"
                    id="e-path-35ee1b2" className="fill-transparent"
                  ></path>
                  <text className="font-FiraSans text-[38px]">
                    <textPath
                      id="e-text-path-35ee1b2"
                      href="#e-path-35ee1b2"
                      startOffset="0%"
                      className="fill-white"
                    >
                      * Buseness Consultant * Marketing * Vissions
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="relative">
            <h5 className="font-FiraSans font-medium text-PrimaryColor-0 uppercase flex items-center justify-center gap-2 mb-3">
              ABOUT COMPANY
            </h5>
            <h1 className="font-FiraSans font-semibold text-HeadingColor-0 text-[30px] leading-[36px] sm:text-[56px] sm:leading-[60px] md:text-[28x] lg:text-[38px] xl:text-[26px] xl:leading-[36px] 2xl:text-[28px] 2xl:leading-[38px]">
              Since 2007, We’re working Consulting agency
              <br />
              group of more than 120+ talented peoples
              <br />
              helps companies
            </h1>
            <p className="font-FiraSans text-TextColor2-0">
              Globally engage cross-media leadership skills before cross-media
              innovation develop standardized platforms without robust
              applications. Conveniently go forward collaboration and
              idea-sharing
            </p>
            <ul>
              <li className="flex items-center gap-4 font-FiraSans text-HeadingColor-0">
                <ImCheckmark className="text-PrimaryColor-0" />
                Professional Team Member
              </li>
            </ul>
            <Link to={"/about"}>
              <button className="primary-btn">
                {`Discover More`}
                <GoArrowRight size={"22"} />
              </button>
            </Link>
            <img
              src={aboutShape}
              draggable="false"
              className="absolute bottom-0 right-0 animate-movebtn hidden sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
