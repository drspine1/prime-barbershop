import { useState } from "react";
import data from "../aboutComponents/aboutFaqData"
import AboutFaqs from "./aboutFaqs";

const AboutFaq = () => {
  const [about,setAbout] =useState(data)
  return (  
    <>
    <div className="faq-about">
      <AboutFaqs about={about}/>
    </div>
    </>
  );
}
 
export default AboutFaq;