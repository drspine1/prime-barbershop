import {motion} from "framer-motion"
const Choose = () => {
  return ( 
    <div className="choose-container w-[95%] md:w-[95%] lg:w-[80%] mx-auto text-center md:p-5 p-4 mt-36">
      
      <div className="choose-info  grid  grid-cols-1 md:grid-cols-2 gap-12 mt-8 ">
        <motion.div 
          initial={{y:"150px",opacity:0}}
          whileInView={{y:0,opacity:1}}
          viewport={{once:true}}
          transition={{delay:0.3,duration:0.5,type:"tween",duration:0.3}}
        className="choose-info-content">
        <h1 className=" text-center md:text-left  md:ml-4 text-2xl md:text-4xl uppercase leading-[2.5rem] mb-5 font-semibold text-[#212121]">why choose <br /><span className="text-[rgba(11,11,6,0.86)]">our <br /> barbershop?   </span></h1>
      <div className="underline h-[0.2rem] w-[5rem] bg-[#f3b59a]  mb-4 md:ml-4 mx-auto text-center "></div>
          <p className="text-xl leading-[2rem] mt-6">Our barbeshop is the territory created purely for males who appreciate premium quality,time and flawless look.At our place,you have a chance to have a really good time</p>
        </motion.div>
        <motion.div 
        initial={{y:"150px",opacity:0}}
        whileInView={{y:0,opacity:1}}
        viewport={{once:true}}
        transition={{delay:0.3,duration:0.5,type:"tween",delay:0.6}}
        className="choose-info-image relative">
          <div className="choose_image-bg absolute h-[21.4rem] w-[16rem] bg-[rgb(216,209,177)]"></div>
          <div className="choose_image-lg relative w-[100%] lg:w-[29rem] top-0 left-0 md:top-[1rem] md:left-[1rem] h-[24rem] md:h-[27rem] transition duration-500 ">
            <img src="/images/barber4.jpg" alt="choose image" className="h-full"/>
          </div>
          <div className="choose_image-sm hidden lg:block w-[25rem] h-[28rem] absolute top-[6rem] left-[9rem] overflow-hidden transition duration-500">
          <img src="/images/barber4.jpg" alt="choose image" />
          </div>
        </motion.div>
      </div>
    </div>
   );
}
 
export default Choose;