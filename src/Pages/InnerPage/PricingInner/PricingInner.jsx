import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Pricing from "./Pricing";
import ContentSlider from "../../../Component3/ContentSlider/ContentSlider";
import Accordion from "./Accordion/Accordion";


const PricingInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Pricing Plan'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Pricing Plan'}
      />
      <Pricing />
      <ContentSlider />
      <Accordion />
    </>
  );
};

export default PricingInner;
