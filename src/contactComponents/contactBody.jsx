import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6"; 
import { VscLocation } from "react-icons/vsc";

const ContactBody = () => {
  return ( 
    <>
    <div className="contact-body w-[80%] mx-auto text-center flex justify-between mt-40
     flex-col md:flex-row">
      <div className="contact-info flex-1 text-left mb-24  md:mb-0">
        <h2 className=" text-left  text-3xl uppercase leading-[2.5rem] mb-5 font-medium text-[#212121]">contact info</h2>
          <div  className="mb-8">
            <h2 className="flex items-start">
            <span><MdOutlinePhone className="text-center mx-auto text-2xl font-bold  text-[#fd8451]"/></span>
             <div className="ml-3">
             <p className="text-2xl mb-2 ">Talk to us</p>
              <h3 className="font-semibold mb-2 capitalize text-xl">toll free: <span className="font-light ">12242234</span></h3>
            <h3 className="font-semibold capitalize text-xl">fax: <span className="font-light">12242265481</span></h3>
             </div>
            </h2>
            
          </div>
          <div  className="mb-8">
            <h2 className="flex items-start">
              <span className=""><MdOutlineEmail className="text-center mx-auto text-2xl font-bold  text-[#fd8451]"/></span>
              <div className="ml-3">
              <p className="text-2xl mb-2">Contact Us</p>
              <p className="text-xl">prime001@gmail.com</p>
              </div>
            </h2>
           
            
          </div>
          <div  className="mb-8">
            <h2 className="flex items-start">
              <span className=""><VscLocation className="text-center mx-auto text-2xl font-bold  text-[#fd8451]"/></span>
             <div className="ml-3">
             <p className="text-2xl mb-2">Location</p>
              <p className="text-xl">No:32 st.paul complex,divi st. <br /> ikeja, lagos state</p>
         
             </div>
            </h2>
           
          </div> 
          <div  className="mb-8">
            <h2 className="flex items-start">
              <span className=""><FaRegClock className="text-center mx-auto text-2xl font-bold  text-[#fd8451]"/></span>
               <div className="ml-3">
               <p className="text-2xl mb-4">Opening Hours</p>
              <h3 className="text-xl mb-2">Monday - Friday <small className="font-bold text-xl">:</small> <span>9am - 9pm</span></h3>
           <h3 className="text-xl mb-2" >Saturdays <small className="font-bold text-xl">:</small> <span>12pm - 9pm</span></h3>
            <h3 className="text-xl mb-2" >Sundays <small className="font-bold text-xl">:</small> <span>Close Up</span></h3>

               </div>
            </h2>
         
          </div>
          
      </div>
      <form action="" className="flex-1 w-[100%] ">
        <h2 className=" text-center md:text-left   text-3xl capitalize leading-[2.5rem] mb-8 font-medium text-[#212121]">enquiry form</h2>
        <ul>
        <li className="flex  mb-12 border-b-2 focus:border-red-900"><span><FaUser className="text-center mx-auto text-xl font-bold  text-[#fd8451]"/></span><input type="text" placeholder="Name" className="w-full  ml-5 bg-transparent outline-none text-xl"/></li>
        <li className="flex mb-12 border-b-2">  <span className=""><MdOutlineEmail className="text-center mx-auto text-xl font-bold  text-[#fd8451]"/></span> <input type="email"placeholder="Email" className="w-full ml-5 bg-transparent outline-none text-xl"/></li>
        <li className="flex mb-12 border-b-2"><span><MdOutlinePhone className="text-center mx-auto text-xl font-bold  text-[#fd8451]"/></span><input type="phone"placeholder="Phone" className="w-full ml-5 bg-transparent outline-none text-xl"/></li>
        <li className="flex mb-12 border-b-2"><span><FaEnvelope className="text-center mx-auto text-xl font-bold  text-[#fd8451]"/></span><textarea name="message"placeholder="Message" className="w-full ml-5 bg-transparent outline-none text-xl"></textarea></li>
        
        </ul>
       <button className="bg-[#fd8451] text-white text-2xl py-2 uppercase  w-full rounded hover:bg-[#0e3746] transition-all duration-500">submit</button>
      </form>
    </div>
    </>
   );
}
 
export default ContactBody;