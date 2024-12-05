import { Outlet } from 'react-router-dom';
import BackToTop from '../Shared/BackToTop/BackToTop';
import Navbar2 from '../Shared/Navbar/Navbar2';
import Footer2 from '../Shared/Footer/Footer2';
import HelmetChanger from '../Shared/Helmet/Helmet';

const Main3 = () => {
  return (
    <>
      <HelmetChanger title={'Buseness Consulting Dark'} />
      <Navbar2 />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer2 />
    </>
  );
};
export default Main3;
