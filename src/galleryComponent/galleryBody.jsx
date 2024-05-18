import { useState } from "react";
import image from "../galleryComponent/galleryData"
console.log(image)
const GalleryBody = () => {
  const [gallery,setGallery] = useState(image)
  return ( 
    <>
   <div className="gallery-body w-[90%] lg:w-[90%] mx-auto text-center mt-32 grid place-content-center">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {
        gallery.map((gal)=>{
          const {id,image} = gal
          return <div key={id} className="">
              <img src={image} className="w-[27rem] h-[24rem] overflow-hidden object-cover border-[1rem] border-[rgb(216,209,177)] grid place-items-center" />
          </div>
        })
      }
    </div>
    <button className="bg-[#fd8451] p-3 px-5 text-xl uppercase font-semibold text-[#f4f2ec] rounded hover:bg-[#0e3746] transition-all duration-500 w-[22rem] mx-auto mt-11 py-4 mb-12 flex justify-center">make an  appointment</button>
   </div>
    </>
   );
}
 
export default GalleryBody;