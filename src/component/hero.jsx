import {motion} from "framer-motion"
import { Link } from "react-router-dom";
const HeroSection = () => {
  return ( 
    <>
    <div className="hero-section h-[calc(100vh-6rem)] mt-[6rem]  w-full bg-[url('/images/barber1.jpg')] bg-red-500 bg-cover bg-no-repeat bg-center">
      <div className="opacity-div relative h-full bg-black/70">

      <motion.div 
       initial={{x:"-20%",y:"-50%",opacity:0}}
       whileInView={{x:'-50%',y:'-50%',opacity:1}}
       viewport={{once:true, amount:0.4}}
       transition={{type:"tween",delay:0.3,duration:0.6}}
      className="hero-content transform translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%] w-full md:w-[auto] px-8 lg:px-0">
            <h1 className="text-[#fd8451] uppercase font-medium text-3xl md:text-4xl  leading-snug   pb-8">our hair styles <br /><span className="text-[#f3c8b5] mt-3 block">enhances your style</span></h1>
            
            <div className="baground"></div>
            <p className="text-white text-2xl  ">prime is the best teritory created for men who appreciates premium quality,time and flawless look</p>
            <Link to="/appointment" className="border transition duration-500  w-[16rem] border-[rgb(243,200,181)] text-[white] p-3 uppercase text-lg font-medium hover:bg-[#fd8451] block mt-14 ">make an appointment</Link>
          </motion.div>
      </div>
       
    </div>
    </>
   );
}
 
export default HeroSection;