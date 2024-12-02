import {
  FaArrowRightLong,
} from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import TeamMember from "./TeamMember/TeamMember";



const TeamInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Team Member"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={"Team Member"}
      />
      <TeamMember />
    </>
  );
};

export default TeamInner;
