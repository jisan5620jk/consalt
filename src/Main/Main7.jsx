import { Outlet } from 'react-router-dom';
import Footer7 from '../Shared/Footer/Footer7';
import Navbar7 from '../Shared/Navbar/Navbar7';
import BackToTop from '../Shared/BackToTop/BackToTop';
import HelmetChanger from '../Shared/Helmet/Helmet';

const Main7 = () => {
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
