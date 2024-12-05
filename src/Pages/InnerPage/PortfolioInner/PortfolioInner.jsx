import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Portfolio from "./Portfolio/Portfolio";

const PortfolioInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Affordable Price"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Pricing"}
      />
      <Portfolio />
    </>
  );
};

export default PortfolioInner;
