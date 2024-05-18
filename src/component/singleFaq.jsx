import { useState } from "react";

const SingleFaq = ({id,question,answer}) => {
  const [showQuestion,setShowQuestion] = useState(false)
  return ( 
    <>
    <div className="singlefaq-container mb-6">
      <div className="questions-container flex justify-between bg-[rgb(68,48,48)] text-[whitesmoke] p-6 px-6 cursor-pointer" onClick={() => setShowQuestion(!showQuestion)}>
        <h3 className="text-xl font-bold text-left">{question}</h3>
        <button className="text-2xl font-semibold">
          {showQuestion ? "-" :"+"}
          </button> 
      </div>
      <div className={`answer-container bg-[rgb(68,48,48)] mt-1 text-[white] text-lg text-left leading-snug ${showQuestion? " h-auto p-8   ": "h-0 overflow-hidden"}`}>
        <p className="xl leading-[2rem] ">{answer}</p>
      </div>
    </div>
    </>
   );
}
 
export default SingleFaq;