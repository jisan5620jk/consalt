import { Outlet } from "react-router-dom";
import Footer6 from "../Shared/Footer/Footer6";
import Navbar6 from "../Shared/Navbar/Navbar6";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";

const Main6 = () => {
  return (
    <>
      <Navbar6 />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer6 />
    </>
  );
};
export default Main6;
