import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return ( 
    <>
    <footer className="w-full bg-[#02060d] grid grid-cols-1 gap-20  sm:grid-cols-2 md:grid-cols-3  p-20 mx-auto text-center ">
      <div className="left-footer ">
        <h1 className="text-[white] pb-6 uppercase text-2xl ">prime</h1>
        <div className="info text-[#c0bdbd] w-full md:w-[12rem] lg:w-[22rem]">
          <p className="text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos, voluptas possimus rerum officia, itaque </p>
          <ul className="socials flex mt-6 justify-center">
             <li className="mx-2 text-xl font-semibold hover:text-[white] hover:transform hover:translate-y-[0.5rem] transition duration-500"><FaFacebookF/></li>
             <li className="mx-2 text-xl font-semibold hover:text-[white] hover:transform hover:translate-y-[0.5rem] transition duration-500"><FaInstagramSquare/></li>
             <li className="mx-2 text-xl font-semibold hover:text-[white] hover:transform hover:translate-y-[0.5rem] transition duration-500"><FaLinkedinIn/></li>
             <li className="mx-2 text-xl font-semibold hover:text-[white] hover:transform hover:translate-y-[0.5rem] transition duration-500"><FaXTwitter/></li>
          </ul>
        </div>
      </div>
      <div className="center-footer">
        <h1 className="text-[white] pb-6 uppercase text-2xl">address</h1>
        <div className="text-[#c0bdbd]">  
           <p className="text-xl pb-2"> No:32 st.paul complex,divi st.#1000</p> 
       <p className="text-xl pb-2">ikeja,lagos state Nigeria</p>
       <h2 className="text-xl pb-2">Question? Call +124025981</h2>
       </div>
     
      </div>
      <div className="right-footer">
        <h1 className="text-[white] pb-6 uppercase text-2xl">info</h1>
        <div className="text-[#c0bdbd]">
        <h3 className="text-lg capitalize" >monday - friday <small>:</small> <span>9am - 9pm</span></h3>
      <h3 className="text-lg capitalize" >saturdays <small >:</small> <span>12pm - 9pm</span></h3>
      <h3 className="text-lg capitalize" >sundays <small>:</small> <span>close up</span></h3>

        </div>
     
      </div>
    </footer>
    </>
   );
}
 
export default Footer;