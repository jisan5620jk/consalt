import { Outlet } from 'react-router-dom';
import BackToTop from '../Shared/BackToTop/BackToTop';
import Footer9 from '../Shared/Footer/Footer9';
import Navbar10 from '../Shared/Navbar/Navbar10';
import HelmetChanger from '../Shared/Helmet/Helmet';

const Main10 = () => {
  return (
    <>
      <HelmetChanger title={'Buseness Consulting Dark'} />
      <Navbar10 />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer9 />
    </>
  );
};
export default Main10;
