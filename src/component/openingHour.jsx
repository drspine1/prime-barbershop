import {motion} from "framer-motion"
const OpeningHour = () => {
  return ( 
    <>
    <motion.div 
    initial={{scale:"0.5",opacity:0}}
    whileInView={{scale:1 ,opacity:1}}
    viewport={{once:true,amount:0.4}}
    transition={{delay:0.3,duration:0.5,type:"tween",delay:0.3}}
    className="openingtime-container mt-40 mx-auto text-center w-[90%] md:w-[60%] bg-[rgb(216,209,177)] rounded p-6 mb-8 ">
      <h1 className=" text-3xl font-semibold uppercase text-[#fd8451]">opening hours</h1>
      <div className="underline h-[0.2rem] w-[5rem] bg-[#f3b59a]  mb-6 mt-4 mx-auto"></div>
      <h3 className=" text-lg md:text-xl uppercase flex justify-center items-center text-[rgb(68,48,48)]">monday - friday <small className="mx-4 font-bold text-2xl">:</small> <span>9am - 9pm</span></h3>
      <h3 className=" text-lg md:text-xl uppercase flex justify-center items-center text-[rgb(68,48,48)]">saturdays <small className="mx-4 font-bold text-2xl">:</small> <span>12pm - 9pm</span></h3>
      <h3 className=" text-lg md:text-xl uppercase flex justify-center items-center text-[rgb(68,48,48)]">sundays <small className="mx-4 font-bold text-2xl">:</small> <span>close up</span></h3>

      <div className="shop mt-12">
        <h1 className="text-2xl  uppercase font-semibold text-[#fd8451]">shop</h1>
        <div className="underline h-[0.2rem] w-[5rem] bg-[#f3b59a]  mb-6 mt-4 mx-auto"></div>
       
       <p className="text-xl pb-2"> No:32 st.paul complex,divi st.#1000</p> 
       <p className="text-xl pb-2">ikeja,lagos state Nigeria</p>
      </div>

    </motion.div>
    </>
   );
}
 
export default OpeningHour;