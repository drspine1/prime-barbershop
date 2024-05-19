import { useEffect, useState } from "react";
import testimonyData from "./testData"
import {motion} from "framer-motion"
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
console.log(testimonyData)
const Testimonials = () => {
   const [testimonies,setTestimony] = useState(testimonyData)
   const [index,setIndex] = useState(0)

   useEffect(() =>{
    const lastIndex = testimonyData.length -1
    if (index < 0){
        setIndex(lastIndex)
    }
    if (index > lastIndex){
      setIndex(0)
    }
   },[testimonies,index])

   useEffect(()=>{
    const interval = setInterval(() => {
       setIndex(index+1)
    },3000);
    return ()=>{
      clearInterval(interval)
    }
   },[index])
  return ( 
    <>
        <motion.div 
        initial={{y:"150px",opacity:0}}
        whileInView={{y:0,opacity:1}}
        viewport={{once:true,amount:0.2}}
        transition={{delay:1,duration:0.5,type:"tween",delay:0.3}}
        className="testimonial-container w-[100%] text-center mx-auto grid place-content-center mt-40">
          <h1  className="pb-3 text-3xl font-semibold  leading-[3rem] uppercase text-[#fd8451]">testimonial</h1>
          <div className="underline h-[0.2rem] w-[5rem] bg-[#f3b59a]  mb-12 mt-2 mx-auto"></div>
        <div className="testimonial w-[80vw] h-[450px] md:h-[350px]  max-w-[700px] relative flex overflow-hidden rounded-md">
      {testimonies.map((person,personIndex) =>{
            const {id,name,job,image,testimony} =person
            let position = 'nextSlide'
            if (personIndex === index){
              position = "activeSlide"
            }
            if (
              personIndex === index-1 ||
              (index === 0 && personIndex === testimonyData - 1)
              ){
                 position = 'lastSlide'
              }
            return <article key={id} className={` ${position} absolute top-0 left-0 w-full h-full mx=auto text-center opacity-0 bg-[rgb(216,209,177)] p-6 transition duration-500`}>
              <img src={image} alt={name} className="w-[150px] h-[150px] object-cover rounded-full mx-auto text-center border-4 border-[cornsilk]"/>
              <div>
              <h3
              className="pt-4 text-xl uppercase font-medium text-[rgb(68,48,48)]">{name}</h3>
              <h2 className="text-lg font-bold uppercase text-[#fd8451] pt-1">{job}</h2>
              <p className="text-lg leading-[2rem] ">{testimony}</p>
              </div>
            </article>
        })} 
         
    </div>
               <div className="buttons mt-6 flex justify-center">
                <button className="mx-4 bg-[#fd8451] py-2 px-4 uppercase text-xl rounded text-[#f4f2ec] font-semibold hover:bg-[#0e3746] transition-all duration-500" onClick={() => setIndex(index -1)}><SlArrowLeft/></button>
                <button className="mx-4 bg-[#fd8451] py-2 px-4 uppercase text-xl rounded text-[#f4f2ec] font-semibold hover:bg-[#0e3746] transition-all duration-500" onClick={() => setIndex(index +1)}><SlArrowRight/></button>
               </div>
        </motion.div>
    
    </>
   );
}
 
export default Testimonials;