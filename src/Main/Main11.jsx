import { Outlet } from "react-router-dom";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import Navbar11 from "../Shared/Navbar/Navbar11";
import Footer2 from "../Shared/Footer/Footer2";

const Main11 = () => {
  return (
    <>
      <Navbar11 />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer2 />
    </>
  );
};
export default Main11;
