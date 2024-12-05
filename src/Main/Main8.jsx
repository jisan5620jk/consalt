import { Outlet } from 'react-router-dom';
import Footer8 from '../Shared/Footer/Footer8';
import Navbar8 from '../Shared/Navbar/Navbar8';
import BackToTop from '../Shared/BackToTop/BackToTop';
import HelmetChanger from '../Shared/Helmet/Helmet';

const Main8 = () => {
  return (
    <>
      <HelmetChanger title={'Buseness Consulting Creative'} />
      <Navbar8 />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer8 />
    </>
  );
};
export default Main8;
