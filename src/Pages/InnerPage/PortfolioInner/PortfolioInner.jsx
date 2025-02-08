import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Portfolio from "./Portfolio/Portfolio";

const PortfolioInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Our Portfolio"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Portfolio"}
      />
      <Portfolio />
    </>
  );
};

export default PortfolioInner;
