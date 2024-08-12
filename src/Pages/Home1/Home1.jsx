import About from "../../Component1/About/About";
import Banner from "../../Component1/Banner/Banner";
import Blog from "../../Component1/Blog/Blog";
import Brand from "../../Component1/Brand/Brand";
import ContentSlider from "../../Component1/ContentSlider/ContentSlider";
import Counter from "../../Component1/Counter/Counter";
import Feature from "../../Component1/Feature/Feature";
import LatestWork from "../../Component1/LatestWork/LatestWork";
import Pricing from "../../Component1/Pricing/Pricing";
import Service from "../../Component1/Service/Service";
import TeamMember from "../../Component1/TeamMember/TeamMember";
import Testimonial from "../../Component1/Testimonial/Testimonial";
import Work from "../../Component1/Work/Work";

const Home1 = () => {
  return (
    <>
      <Banner />
      <Brand />
      <Feature />
      <Service />
      <ContentSlider />
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
