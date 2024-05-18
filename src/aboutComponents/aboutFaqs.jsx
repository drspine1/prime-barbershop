import SingleAboutFaq from "./singleAboutFaq";
import {motion} from "framer-motion"
const AboutFaqs = ({about}) => {
  return ( 
    <>
    <motion.div
       initial={{y:"150px",opacity:0}}
       whileInView={{y:0,opacity:1}}
       viewport={{once:true,amount:0.2}}
       transition={{type:"tween",delay:0.5,duration:0.5}}>
      {about.map((abouts) =>{
        return <SingleAboutFaq key={abouts.id} {...abouts}/>
      })}
    </motion.div>
     </>
   );
}
 
export default AboutFaqs;