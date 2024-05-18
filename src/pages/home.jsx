import Choose from "../component/choose";
import Goals from "../component/goals";
import HeroSection from "../component/hero";
import Professionals from "../component/professionals";
import Years from "../component/years";
import Price from "../component/price";
import OpeningHour from "../component/openingHour";
import Faq from "../component/faq";
import FooterImage from "../component/footerImage";
import Testimonials from "../component/testimonials";


const Home = () => {
  return ( 
    <>
    <div className="home-page">
      <HeroSection/>
      <Goals/>
       <Years/>
       <Choose/>
       <Price/>
       <Professionals/>
       <OpeningHour/>
       <Testimonials/>
      <Faq/>
      
      <FooterImage image="/images/barber3.jpg" tittle="we're here for you"/>
    </div>
    </>
   );
}
 
export default Home;