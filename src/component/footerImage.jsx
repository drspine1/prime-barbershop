import {motion} from "framer-motion"
import { Link } from "react-router-dom";
const FooterImage = ({image,tittle}) => {
  return ( 
   <>
   <div className="footerImage-container w-[100%] h-[25rem] overflow-hidden mt-32  ">
    <div className="h-[100%] w-[100%] bg-black grid place-items-center relative ">
    <div className="img w-full h-full absolute">
      <img src={image} alt="about image" className="w-full h-full opacity-40" />
    </div>
    <motion.div 
      initial={{y:"65px",opacity:0}}
      whileInView={{y:0,opacity:1}}
      viewport={{once:true,amount:0.2}}
      transition={{delay:1,duration:0.5,type:"tween",delay:0.3}}
    className="mx-auto text-center">
    <div className="tittle  text-white mx-auto text-center text-lg p-4 w-[100%]">
      <h1 className="text-[#e8e8a0] uppercase font-semibold text-3xl md:text-5xl leading-snug  ">
        we're here <br /> <span className="text-[whitesmoke]">for you</span>
      </h1>
    </div>
    <div className="underline bg-[#f8f8c2] w-24 h-1  text-center mx-auto mb-12"></div>
    <Link to="/appointment"  className="border bg-transparent transition duration-500  border-[rgb(243,200,181)] text-[white] p-3 uppercase text-lg font-medium hover:bg-[#fd8451]  cursor-pointer relative">make an appointment</Link>
     
    </motion.div>
   </div>
   </div>
   </>
   );
}
 
export default FooterImage;