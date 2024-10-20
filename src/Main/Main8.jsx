import { Outlet } from "react-router-dom";
import Footer8 from "../Shared/Footer/Footer8";
import Navbar8 from "../Shared/Navbar/Navbar8";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";

const Main8 = () => {
  return (
    <>
      <Navbar8 />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer8 />
    </>
  );
};
export default Main8;
