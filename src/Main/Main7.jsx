import { Outlet } from 'react-router-dom';
import Footer7 from '../Shared/Footer/Footer7';
import Navbar7 from '../Shared/Navbar/Navbar7';
import BackToTop from '../Shared/BackToTop/BackToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HelmetChanger from '../Shared/Helmet/Helmet';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main7 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
  return (
    <>
      <HelmetChanger title={'IT Consulting'} />
      <Navbar7 />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer7 />
    </>
  );
};
export default Main7;
