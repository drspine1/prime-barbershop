import { ImScissors } from "react-icons/im";
import { FaGlasses } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import {motion} from "framer-motion"
const Years = () => {
  return ( 
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{delay:1,duration:0.5}}
    viewport={{once:true,amount:0.4}}
    className="years w-full p-10 px-8 md:px-20 text-center mx-auto grid grid-cols-2 md:grid-cols-4 bg-[whitesmoke] gap-14  md:gap-0 ">
      <div className="flex items-center">
        <ImScissors className="text-4xl font-semibold text-[#fd8451]"/>
       <div className="info ml-1 md:ml-5">
        <h2 className="text-3xl font-bold text-[#fd8451]">10</h2>
        <h3 className="text-[#212121] pt-3 uppercase font-medium text-lg">skilled barbers</h3>
       </div>
      </div>
      <div className="flex items-center">
        <FaGlasses className="text-4xl font-semibold text-[#fd8451]"/>
        <div className="info ml-1 md:ml-5">
        <h2 className="text-3xl font-semibold text-[#fd8451]">120</h2>
        <h3 className="text-[#212121] pt-3 uppercase font-medium text-lg">happy client</h3>
       </div>
       </div>
       <div className="flex items-center">
        <IoIosPerson className="text-4xl font-semibold text-[#fd8451]"/>
        <div className="info ml-1 md:ml-5">
        <h2 className="text-3xl font-semibold text-[#fd8451]">300</h2>
        <h3 className="text-[#212121] pt-3 uppercase font-medium text-lg">customers haircut</h3>
       </div>
       </div>
      
      <div className="flex items-center">
        <SlCalender className="text-4xl font-semibold text-[#fd8451]"/>
        <div className="info ml-1 md:ml-5">
        <h2 className="text-3xl font-semibold text-[#fd8451]">25</h2>
        <h3 className="text-[#212121] pt-3 uppercase font-medium text-lg">years experience</h3>
       </div>
      </div>
      
    </motion.div>
   );
}
 
export default Years;