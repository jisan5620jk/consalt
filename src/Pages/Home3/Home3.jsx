import About from "../../Componant3/About/About";
import Banner from "../../Componant3/Banner/Banner";
import Blog from "../../Componant3/Blog/Blog";
import Faq from "../../Componant3/Faq/Accordion/Faq";
import Feature from "../../Componant3/Feature/Feature";
import Portfolio from "../../Componant3/Portfolio/Portfolio";
import Process from "../../Componant3/Process/Process";
import Service from "../../Componant3/Service/Service";
import TeamMember from "../../Componant3/TeamMember/TeamMember";
import Testimonial from "../../Componant3/Testimonial/Testimonial";

const Home3 = () => {
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Service />
      <Process />
      <Faq />
      <Portfolio />
      <TeamMember />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home3;
