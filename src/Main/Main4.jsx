import { Outlet } from 'react-router-dom';
import Footer6 from '../Shared/Footer/Footer6';
import Navbar4 from '../Shared/Navbar/Navbar4';
import BackToTop from '../Shared/BackToTop/BackToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HelmetChanger from '../Shared/Helmet/Helmet';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Main4 = () => {
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
      <HelmetChanger title={'Finance Consulting Creative'} />
      <Navbar4 />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer6 />
    </>
  );
};
export default Main4;
