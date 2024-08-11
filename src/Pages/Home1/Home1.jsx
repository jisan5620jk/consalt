import About from "../../Componant1/About/About";
import Banner from "../../Componant1/Banner/Banner";
import Blog from "../../Componant1/Blog/Blog";
import Brand from "../../Componant1/Brand/Brand";
import Counter from "../../Componant1/Counter/Counter";
import Feature from "../../Componant1/Feature/Feature";
import LatestWork from "../../Componant1/LatestWork/LatestWork";
import Pricing from "../../Componant1/Pricing/Pricing";
import Service from "../../Componant1/Service/Service";
import TeamMember from "../../Componant1/TeamMember/TeamMember";
import Testimonial from "../../Componant1/Testimonial/Testimonial";
import Work from "../../Componant1/Work/Work";

const Home1 = () => {
  return (
    <>
      <Banner />
      <Brand />
      <Feature />
      <Service />
      <About />
      <Counter />
      <Work />
      <Pricing />
      <LatestWork />
      <TeamMember />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home1;
