import { Outlet } from "react-router-dom";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import Navbar9 from "../Shared/Navbar/Navbar9";
import Footer9 from "../Shared/Footer/Footer9";

const Main9 = () => {
  return (
    <>
      <Navbar9 />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer9 />
    </>
  );
};
export default Main9;
