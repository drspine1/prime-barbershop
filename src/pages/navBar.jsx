import { Link,NavLink } from "react-router-dom";


import { RxScissors } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";

const NavBar = () => {
  const[showNav,setShowNav] = useState(false)

  return ( 
    <>
    <header className="w-[100%] fixed top-0 left-0 h-[6rem] z-10">  
      <nav className=" absolute flex justify-between items-start p-6 px-8 w-full h-full md:px-10 bg-[#faf7ea]  ">
      <div className="logo transform rotate-[-25deg] text-2xl  ">
         <h1 className="italic text-[#0e3746] font-semibold text-xl md:text-2xl ">prime</h1>
         <RxScissors className="w-14 "/> 
      </div>
      <ul className="mt-3 hidden md:block">
        <li className="inline-block text-[#fd8451] font-semibold capitalize mx-2 lg:mx-6 text-2xl"><NavLink to="/" className={({isActive}) => isActive ? 'active-nav' :''}>home</NavLink></li>
        <li className="inline-block text-[#fd8451] font-semibold capitalize mx-2 lg:mx-6 text-2xl"><NavLink to="/about" className={({isActive}) => isActive ? 'active-nav' :''}>about us</NavLink></li>
        <li className="inline-block text-[#fd8451] font-semibold capitalize mx-2 lg:mx-6 text-2xl"><NavLink to="/service" className={({isActive}) => isActive ? 'active-nav' :''}>services</NavLink></li>
        <li className="inline-block text-[#fd8451] font-semibold capitalize mx-2 lg:mx-6 text-2xl"><NavLink to="/contact" className={({isActive}) => isActive ? 'active-nav' :''}>contact</NavLink></li>
        <li className="inline-block text-[#fd8451] font-semibold capitalize mx-2 lg:mx-6 text-2xl"><NavLink to="/gallery" className={({isActive}) => isActive ? 'active-nav' :''}>Gallery</NavLink></li>
        
      </ul>
     
       <ul className={`nav-bar mt-3 block absolute right-0 md:hidden top-[87%]  bg-[black] w-[100vw] h-[100vh] p-6 overflow-hidden  transition duration-500 ${showNav ? "mr-0 " :"mr-[-100%]"}`}>
        <li className="block text-[#fd8451] font-semibold capitalize mx-3 text-2xl pb-4 pt-6 text-center" onClick={()=>setShowNav(false)}><Link to="/">home</Link></li>
        <li className="block text-[#fd8451] font-semibold capitalize mx-3 text-2xl pb-4 text-center" onClick={()=>setShowNav(false)}><Link to="/about">about us</Link></li>
        <li className="block text-[#fd8451] font-semibold capitalize mx-3 text-2xl pb-4 text-center" onClick={()=>setShowNav(false)}><Link to="service">services</Link></li>
        <li className="block text-[#fd8451] font-semibold capitalize mx-3 text-2xl pb-4 text-center" onClick={()=>setShowNav(false)}><Link to="contact">contact</Link></li>
        <li className="block text-[#fd8451] font-semibold capitalize mx-3 text-2xl pb-4 text-center" onClick={()=>setShowNav(false)}><Link to="gallery">Gallery</Link></li>
        
      </ul>
      <div className="toggle-btn mt-3 text-[#000] text-2xl font-bold block md:hidden " onClick={()=>setShowNav(!showNav)}>
         {showNav ? <LiaTimesSolid/> :<CiMenuFries/>}
      </div>
    </nav>



    </header>
  
    </>
   );
}
 
export default NavBar;