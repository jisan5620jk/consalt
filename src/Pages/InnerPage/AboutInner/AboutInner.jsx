import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Feature from "./Feature/Feature";
import About from "./About/About";
import TeamMember from "../../../Componant1/TeamMember/TeamMember";
import Counter from "../../../Componant1/Counter/Counter";
import Testimonial from "../../../Componant1/Testimonial/Testimonial";
import Brand from "../../../Componant1/Brand/Brand";

const AboutInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"About Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"About Us"}
      />
      <Feature />
      <About />
      <TeamMember />
      <Counter />
      <Testimonial />
      <Brand />
    </>
  );
};

export default AboutInner;
