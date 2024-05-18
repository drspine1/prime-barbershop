import {motion} from "framer-motion"
const Appointment = () => {
  return ( 
    <>
      <div className="appointment-container h-[calc(100vh-6rem)] mt-[6rem]  w-full bg-[url('/images/barber1.jpg')] bg-red-500 bg-cover bg-no-repeat bg-center">
      <div className="opacity-div relative h-full bg-black/40">

      <div 
      
      className="hero-content transform translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%] w-full md:w-[auto] px-8 lg:px-0">
           <motion.form 
           
           initial={{scale:"0.6",opacity:0}}
           whileInView={{scale:'1',opacity:1}}
          
           transition={{type:"tween",delay:0.3,duration:0.6}}
           className=" w-[100%] bg-[#fd8451] p-8 mx-auto text-center rounded-md">
          
           <div className="basic-info mt-5 lg:mt-12">
            <div className="flex justify-between flex-col sm:flex-row md:flex-col lg:flex-row  items-center gap-5 mb-9">
              <input type="text" name="name" placeholder="Your full name"  className="w-full p-2 md:p-3 outline-none"/>
              <input type="email" name="email" placeholder=" Email address" className="w-full p-2 outline-none" />
            </div>
            <div className="flex justify-between flex-col sm:flex-row md:flex-col lg:flex-row  items-center gap-5 mb-9">
             <input type="text" name="category" placeholder="Style" className="w-full p-2 outline-none"/>
             <input type="phone" name="phone" placeholder="Phone" className="w-full p-2 outline-none"/>
            </div>
               <input type="date" name="calender" className="w-full p-3 outline-none mb-9"/>
               <textarea name="message" placeholder="Write Message" className="w-full p-2 outline-none mb-9"></textarea>

           </div>
           <button className="bg-white text-[#fd8451] py-3 px-4 text-xl uppercase font-medium rounded hover:bg-[whitesmoke] transition duration-500">make appointment</button>
           </motion.form>
            
           
            
          </div>
      </div>
       
    </div>
    </>
   );
}
 
export default Appointment;