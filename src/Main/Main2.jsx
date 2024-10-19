import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import Footer from "../Shared/Footer/Footer";

const Main2 = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default Main2;
