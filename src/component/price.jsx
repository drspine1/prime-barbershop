import { Link } from "react-router-dom";

const Price = () => {
  return ( 
    <>
    <div className="price-container w-full text-center mx-auto mt-48 bg-[hsl(49,33%,77%)]  p-10 md:px-24">
      <h1 className=" text-2xl md:text-4xl font-semibold text-[rgb(68,48,48)] uppercase">our <span>prices</span></h1>
      <div className="underline h-[0.2rem] w-[5rem] bg-[#f3b59a]  mb-4 mt-6 mx-auto"></div>
         
      <p className="text-[hsla(0,6%,13%,1)]   md:px-24  lg:px-32 text-xl leading-[2rem]">Our service spectrum emcompasses many techniques and procedures,from straight hairstyling to face care</p>

      <div className="price-list grid grid-cols-1 md:grid-cols-2 mt-12 gap-10 mb-8">
        <div className="list flex justify-between mb-3 uppercase text-xl font-medium border-b border-[#4444]">
          <h3>haircut</h3>
          <h4>$15</h4>
        </div>

        <div className="list flex justify-between mb-3 uppercase text-xl font-medium border-b border-[#4444]">
          <h3>children haircut </h3>
          <h4>$10</h4>
        </div>

        <div className="list flex justify-between mb-3 uppercase text-xl font-medium border-b border-[#4444]">
          <h3>razor cut</h3>
          <h4>$5</h4>
        </div>

        <div className="list flex justify-between mb-3 uppercase text-xl font-medium border-b border-[#4444]">
          <h3>neck shave</h3>
          <h4>$7</h4>
        </div>

        <div className="list flex justify-between mb-3 uppercase text-xl font-medium border-b border-[#4444]">
          <h3>shaving whole head <head></head></h3>
          <h4>$8</h4>
        </div>

        <div className="list flex justify-between mb-3 uppercase text-xl font-medium border-b border-[#4444]">
          <h3>shaving top of head </h3>
          <h4>$5</h4>
        </div>

        <div className="list flex justify-between mb-3 uppercase text-xl font-medium border-b border-[#4444]">
          <h3>beard trim</h3>
          <h4>$6</h4>
        </div>

        <div className="list flex justify-between mb-3 uppercase text-xl font-medium border-b border-[#4444]">
          <h3>sing</h3>
          <h4>$5</h4>
        </div>

        <div className="list flex justify-between mb-3 uppercase text-xl font-medium border-b border-[#4444]">
          <h3>tonic hair dressing </h3>
          <h4>$4</h4>
        </div>



        <div className="list flex justify-between mb-3 uppercase text-xl font-medium border-b border-[#4444]">
          <h3>haircut</h3>
          <h4>$15</h4>
        </div>

         <div className="list flex justify-between mb-3 uppercase text-xl font-medium border-b border-[#4444]">
          <h3>face massage</h3>
          <h4>$15</h4>
        </div>

        <div className="list flex justify-between mb-3 uppercase text-xl font-medium border-b border-[#4444]">
          <h3>neck massage</h3>
          <h4>$15</h4>
        </div>

        
      </div>
      <Link to="/appointment" className="bg-[#fd8451] py-4 mt-6 block text-xl  px-6 mx-auto  uppercase font-semibold text-[#f4f2ec] rounded hover:bg-[#0e3746] transition-all duration-500 w-[20rem] ">make an  appointment</Link>
    </div>
    </>
   );
}
 
export default Price;