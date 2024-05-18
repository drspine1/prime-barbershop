import AboutBody from "../aboutComponents/aboutBody";
import Header from "../aboutComponents/header";
import FooterImage from "../component/footerImage";

const About = () => {
  return ( 
    <>
    <div className="about-page">
    <Header  img="/images/aboutbg.jpg" tittle="about" span="us">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos repel
      </Header>
      <AboutBody/>
      <FooterImage image="/images/barber3.jpg" tittle="we're here for you"/>
     
    </div>
    </>
   );
}
 
export default About;