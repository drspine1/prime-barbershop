import {motion} from "framer-motion"
const Goals = () => {
  return ( 
    <>
    <div className="goals-container w-[100%] mx-auto text-center flex justify-between flex-col sm:flex-row gap-10  mt-32 bg-[rgb(216,209,177)] p-20 px-8 md:px-12">
      <motion.div 
      initial={{x:"-150px",opacity:0}}
      whileInView={{x:0,opacity:1}}
      transition={{delay:0.2,duration:0.5,type:"tween"}}
      viewport={{once:true, amount:0.2}}
      
     
      className="goal-img">
        <img src="/images/barber2.jpg" alt="barber3" className="flex-1 w-[100rem] h-[20rem]"/>
      </motion.div>
      <motion.div
       initial={{x:"400px",opacity:0}}
       whileInView={{x:0,opacity:1}}
       viewport={{once:true}}
       transition={{delay:0.4,duration:0.5,type:"tween"}}
     
      className="goal-content flex-2">
        <h3 className="text-[#212121] text-2xl md:text-2xl font-bold pb-6">Our goal is to provide a superior customer experience</h3>
        <p className="text-[hsla(0,6%,13%,1)] text-xl mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus labore laudantium possimus aspernatur neque exercitationem impedit, saepe nam perspiciatis corrupti doloremque odit tempora ipsum voluptatem.</p>
       
      </motion.div>
    </div>
    </>
   );
}
 
export default Goals;