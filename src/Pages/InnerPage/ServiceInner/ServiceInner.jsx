import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Service from "../../../Component3/Service/Service";
import CallTo from "../../../Component2Default/CallTo/CallTo";
import Testimonial from "../../../Component2Default/Testimonial/Testimonial";
import Pricing from "../../../Component2Default/Pricing/Pricing";

const ServiceInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Our Services"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Service"}
      />
      <Service />
      <CallTo />
      <Testimonial />
      <Pricing />
    </>
  );
};

export default ServiceInner;
