import { Outlet } from "react-router-dom";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import Footer9 from "../Shared/Footer/Footer9";
import Navbar10 from "../Shared/Navbar/Navbar10";

const Main10 = () => {
  return (
    <>
      <Navbar10 />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer9 />
    </>
  );
};
export default Main10;
