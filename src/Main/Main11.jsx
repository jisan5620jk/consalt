import { Outlet } from 'react-router-dom';
import BackToTop from '../Shared/BackToTop/BackToTop';
import Navbar11 from '../Shared/Navbar/Navbar11';
import Footer2 from '../Shared/Footer/Footer2';
import HelmetChanger from '../Shared/Helmet/Helmet';

const Main11 = () => {
  return (
    <>
      <HelmetChanger title={'Inner Page'} />
      <Navbar11 />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer2 />
    </>
  );
};
export default Main11;
