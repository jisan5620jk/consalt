import { Outlet } from "react-router-dom";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import Navbar2 from "../Shared/Navbar/Navbar2";
import Footer2 from "../Shared/Footer/Footer2";

const Main3 = () => {
  return (
    <>
      <Navbar2 />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer2 />
    </>
  );
};
export default Main3;
