import {motion} from "framer-motion"
const Header = ({img,tittle,children ,span}) => {
  return ( 

    <>
     <div className="footerImage-container w-[100%] h-[27rem] overflow-hidden   ">
    <div className="h-[100%] w-[100%] bg-black grid place-items-center relative ">
    <div className="img w-full h-full absolute">
      <img src={img} alt="about image" className="w-full h-full opacity-40" />
    </div>
    <motion.div 
     initial={{scale:"0.7",opacity:0}}
     animate={{scale:1,opacity:1}}
     transition={{delay:1,duration:0.5,type:"tween",delay:0.3}}
    className="px-6">
    <div className="tittle  text-white mx-auto text-center text-lg p-4 w-[100%]">
      <h1 className="text-[#e8e8a0] uppercase font-semibold text-3xl md:text-5xl leading-snug  text-center">
        {tittle} <span className="text-[whitesmoke]">{span}</span>
      </h1>
    </div>
    <div className="underline bg-[#f8f8c2] w-24 h-1  text-center mx-auto mb-6"></div>
   <p  className="text-white text-xl w-fulll text-center  md:w-[600px]">{children}</p>
    </motion.div>
   </div>
   </div>
    </>
   );
}
 
export default Header;