import { Outlet } from 'react-router-dom';
import Footer6 from '../Shared/Footer/Footer6';
import Navbar6 from '../Shared/Navbar/Navbar6';
import BackToTop from '../Shared/BackToTop/BackToTop';
import HelmetChanger from '../Shared/Helmet/Helmet';

const Main6 = () => {
  return (
    <>
      <HelmetChanger title={'Finance Consulting Dark'} />
      <Navbar6 />
      <BackToTop />
      <div>
        <Outlet />
      </div>
      <Footer6 />
    </>
  );
};
export default Main6;
