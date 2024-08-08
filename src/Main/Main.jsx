import { Outlet } from "react-router-dom";
import { useRef } from "react";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import Navbar from "../Shared/Navbar/Navbar";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import Footer from "../Shared/Footer/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const Main = () => {
  const main = useRef();
  const smoother = useRef();


  useGSAP(
    () => {
      // create the smooth scroller FIRST!
      smoother.current = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });
    },
    { scope: main }
  );
  return (
    <>
      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
          <Navbar />
          <ScrollToTop />
          <div>
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Main;
