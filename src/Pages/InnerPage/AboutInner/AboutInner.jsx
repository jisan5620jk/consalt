import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import About from "../../../Component2Default/About/About";
import Counter from "../../../Component1Default/Counter/Counter";
import TeamMember from "../../../Component1Default/TeamMember/TeamMember";
import ContentSlider from "../../../Component1Default/ContentSlider/ContentSlider";
import WhyChoose from "./WhyChoose/WhyChoose";

const AboutInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"About Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"About Us"}
      />
      <About />
      <Counter />
      <TeamMember />
      <ContentSlider />
      <WhyChoose />
    </>
  );
};

export default AboutInner;
