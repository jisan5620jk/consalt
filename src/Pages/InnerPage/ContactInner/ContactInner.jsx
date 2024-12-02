import { FaArrowRightLong } from 'react-icons/fa6';
import BreadCrumb from '../../../Shared/BreadCrumb/BreadCrumb';
import Contact from './Contact';
import Map from './Map';

const ContactInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={'Contact Us'}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbLink={'Contact Us'}
      />
      <Contact />
      <Map />
    </>
  );
};

export default ContactInner;
