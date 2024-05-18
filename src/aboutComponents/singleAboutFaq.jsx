import { useState } from "react";

const SingleAboutFaq = ({about,desc}) => {
  const [isShowFaq,setIsShowFaq] = useState(false)
  return ( 
    <>
    <div className="mb-6">
      <div className="about flex justify-between bg-[rgb(68,48,48)] mb-1 text-[whitesmoke] p-5 text-xl font-bold" onClick={()=>setIsShowFaq(!isShowFaq)}>
        <h3 className="text-2xl">{about}</h3>
        <button className="">
          {isShowFaq ? "-":"+"}
          </button>
      </div>
      <div>
        <p className={`show-faq bg-[rgb(68,48,48)]  text-[white] text-xl lg:text-lg leading-[2rem]  ${isShowFaq ? "p-6 h-auto  ":"h-0 overflow-hidden"} transition duration-500`}>{desc}</p>
      </div>
    </div>
    </>
   );
}
 
export default SingleAboutFaq;