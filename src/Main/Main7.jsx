import { Outlet } from "react-router-dom";
import Footer7 from "../Shared/Footer/Footer7";
import Navbar7 from "../Shared/Navbar/Navbar7";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";

const Main7 = () => {
  return (
    <>
      <Navbar7 />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer7 />
    </>
  );
};
export default Main7;
