import AboutFaq from "./aboutFaq";
import {motion} from "framer-motion"
const AboutBody = () => {
  return ( 
    <>
    <div className="about-body w-[90%] mx-auto text-center flex justify-between flex-col md:flex-row mt-24 gap-x-20">
       <motion.div 
       initial={{y:"150px",opacity:0}}
       whileInView={{y:0,opacity:1}}
       viewport={{once:true,amount:0.2}}
       transition={{type:"tween",delay:0.3,duration:0.5}}
       className="left flex-1">
        <h2 className="text-xl uppercase font-semibold pb-4 text-[rgba(11,11,6,0.86)]">what we do</h2>
        <div className="do-paragraph">
         <p className="text-lg">autem ipsam, ab accusantium asperiores possimus! Fuga culpa modi asnatur sapiente quaerat itaque quas eos velper, cumque harum deleniti dolor tempora expedita quisquam voluptatem deserunt.</p>
         <ul className="mt-14 text-lg">
          <li className=" pb-3 text-left">leniti dolor tempora expedita quisquam voluptatem deserunt.</li>
          <li className=" pb-3 text-left"> quaerat itaque quas eos velper, cumque harum deleniti dolor </li>
          <li className=" pb-3 text-left">ipsam, ab accusantium asperiores possimus! Fuga culpa modi asnatur</li>
          <li className=" pb-3 text-left">ipsam, ab accusantium asperiores possimus! Fuga culpa modi asnatur</li>
         </ul>
       </div>
       </motion.div>
       <div className="right flex-1 mt-16">
        <AboutFaq/>
       </div>

    </div>
    </>
   );
}
 
export default AboutBody;