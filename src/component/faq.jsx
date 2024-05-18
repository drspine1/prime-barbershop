import { useState } from "react";
import faqData from "../component/faqData"
import Faqs from "./faqs";
console.log(faqData)
const Faq = () => {
  const [askQuestions,setAskQuestions] = useState(faqData)
  return (
  <> 
<div className="faq-container w-[90%] md:w-[80%] lg:w-[50%] mx-auto text-center mt-32">
  
  <h2 className="uppercase text-2xl font-semiboldtext-[#fd8451] text-[#fd8451] mb-10 font-semibold">thus, our customers ask?</h2>
  <div className="underline"></div>
 <Faqs askQuestions={askQuestions}/>
</div>
  </>
   );
}
 
export default Faq;