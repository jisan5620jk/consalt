import { Outlet } from 'react-router-dom';
import Footer2 from '../Shared/Footer/Footer2';
import Navbar2 from '../Shared/Navbar/Navbar2';
import BackToTop from '../Shared/BackToTop/BackToTop';
import HelmetChanger from '../Shared/Helmet/Helmet';

const Main4 = () => {
  return (
    <>
      <HelmetChanger title={'Finance Consulting Creative'} />
      <Navbar2 />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer2 />
    </>
  );
};
export default Main4;
