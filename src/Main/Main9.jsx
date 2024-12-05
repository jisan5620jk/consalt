import { Outlet } from 'react-router-dom';
import BackToTop from '../Shared/BackToTop/BackToTop';
import Navbar9 from '../Shared/Navbar/Navbar9';
import Footer9 from '../Shared/Footer/Footer9';
import HelmetChanger from '../Shared/Helmet/Helmet';

const Main9 = () => {
  return (
    <>
      <HelmetChanger title={'Buseness Consulting Classic'} />
      <Navbar9 />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer9 />
    </>
  );
};
export default Main9;
