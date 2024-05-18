import Header from "../aboutComponents/header"; 
import FooterImage from "../component/footerImage";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiProtractor } from "react-icons/si";
import { RiAwardFill } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";
import { IoIosStarHalf } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
const Service = () => {
  return ( 
    <>
     <Header  img="/images/servicebg.jpg" tittle="our" span="services">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
      </Header>
     <div className="service-body w-[90%] mx-auto text-center mt-40">
     <div 
    
     className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        <div 
        
        
        className="flex   ">
          <span><SiProtractor className="mx-auto text-center text-3xl text-[#fd8451]"/></span>
         <div 
            
         
         className="text-left ml-8">
         <h1 className="text-2xl font-semibold mb-6 text-[#212121]">affordable prices</h1>
          <p className="text-lg text-[hsla(0,6%,13%,1)]">
          In earum voluptates omnis nulla dolorum, eaque dolores nihil aperiam error repellat nostrum ipsum facere accusantium, doloremque 
          </p>
         </div>
        </div>
         <motion.div 
           initial={{y:"35px",opacity:0}}
           whileInView={{y:0,opacity:1}}
           viewport={{once:true,amount:0.2}}
           transition={{type:"tween",delay:0.4,duration:0.5}}
         
         className="flex">
          <span><GrTechnology className="mx-auto text-center text-3xl text-[#fd8451]"/></span>
          <div className="text-left ml-8">
          <h1 className="text-2xl font-semibold mb-6 text-[#212121]">modern technology</h1>
          <p className="text-lg text-[hsla(0,6%,13%,1)]">
          In earum voluptates omnis nulla dolorum, eaque dolores nihil aperiam error repellat nostrum ipsum facere accusantium, doloremque 
          </p>
          </div>
        </motion.div>
         <motion.div 
           initial={{y:"35px",opacity:0}}
           whileInView={{y:0,opacity:1}}
           viewport={{once:true,amount:0.2}}
           transition={{type:"tween",delay:0.6,duration:0.5}}
         
         className="flex">
          <span><RiAwardFill className="mx-auto text-center text-3xl text-[#fd8451]"/></span>
         <div className="text-left ml-8">
         <h1 className="text-2xl font-semibold mb-4 text-[#212121]">award winning</h1>
          <p className="text-lg text-[hsla(0,6%,13%,1)]">
          In earum voluptates omnis nulla dolorum, eaque dolores nihil aperiam error repellat nostrum ipsum facere accusantium, doloremque 
          </p>
         </div>
        </motion.div>
         <motion.div 
           initial={{y:"35px",opacity:0}}
           whileInView={{y:0,opacity:1}}
           viewport={{once:true,amount:0.2}}
           transition={{type:"tween",delay:0.8,duration:0.5}}
         
         className="flex">
          <span><FaPeopleGroup className="mx-auto text-center text-3xl text-[#fd8451]"/></span>
          <div className="text-left ml-8">
          <h1 className="text-2xl font-semibold mb-4 text-[#212121]">Expert Team</h1>
          <p className="text-lg text-[hsla(0,6%,13%,1)]">
          In earum voluptates omnis nulla dolorum, eaque dolores nihil aperiam error repellat nostrum ipsum facere accusantium, doloremque 
          </p>
          </div>
        </motion.div>
         <motion.div 
           initial={{y:"35px",opacity:0}}
           whileInView={{y:0,opacity:1}}
           viewport={{once:true,amount:0.2}}
           transition={{type:"tween",delay:1,duration:0.5}}
         
         className="flex">
          <span><FaRegClock className="mx-auto text-center text-3xl text-[#fd8451]"/></span>
             <div className="text-left ml-8">
             <h1 className="text-2xl font-semibold mb-4 text-[#212121]">Always Open</h1>
          <p className="text-lg text-[hsla(0,6%,13%,1)]">In earum voluptates omnis nulla dolorum, eaque dolores nihil aperiam error repellat nostrum ipsum facere accusantium, doloremque  </p>
             </div>
        </motion.div>
         <motion.div 
           initial={{y:"35px",opacity:0}}
           whileInView={{y:0,opacity:1}}
           viewport={{once:true,amount:0.2}}
           transition={{type:"tween",delay:1.2,duration:0.5}}
         className="flex">
          <span><FaPeopleGroup className="mx-auto text-center text-3xl text-[#fd8451]"/></span>
          <div className="text-left ml-8">
          <h1 className="text-2xl font-semibold mb-4 text-[#212121]">fast services</h1>
          <p className="text-lg text-[hsla(0,6%,13%,1)]">
          In earum voluptates omnis nulla dolorum, eaque dolores nihil aperiam error repellat nostrum ipsum facere accusantium, doloremque 
          </p>
          </div>
        </motion.div>
        
      </div>
      <motion.div
       initial={{y:"45px",opacity:0}}
       whileInView={{y:0,opacity:1}}
       viewport={{once:true,amount:0.2}}
       transition={{type:"tween",delay:0.3,duration:0.5}}
      className="mt-24 flex flex-col md:flex-row justify-between items-center mx-6 lg:mx-32">
        <div className="text-left mb-14 md:mb-0">
          <h3 className="text-2xl font-semibold text-[#212121]">Get answers and Advice</h3>
          <p className="text-xl font-medium  text-[hsla(0,6%,13%,1)] mt-2">Our goal is to provide answers to all your questions in a timely manner</p>
        </div>
       <Link to="/contact" className="bg-[#fd8451] px-[1.5rem] uppercase text-lg text-white py-3 rounded hover:bg-[#0e3746] transition-all duration-500 font-bold">contact us</Link>
      </motion.div>
     </div>
    <FooterImage image="/images/barber3.jpg" tittle="we're here for you"/>
      </>
   );
}
 
export default Service;