import React from "react";
import lappHC from "../assets/hc-laptop.png";
const Community = () => {
  return (
    <>
      <div className=" w-[536px] h-72 absolute top-1800 left-65  bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] max-sm:hidden">
        <h1 className="absolute top-1 left-4 text-white text-[60px] jaldi-bold">
          Join our <br /> Community where Creativity thrives.
        </h1>
      </div>
      <div className="w-[536px] h-[465px] bg-[#0F0655A6] absolute top-1780 left-210 rounded-3xl cursor-pointer transition-all duration-1000  hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset] max-sm:hidden">
        <img
          src={lappHC}
          alt="sir"
          className="w-130 5-130 absolute -top-7 left-2"
        />
      </div>

      {/* mobile  */}
      <div className=" w-[166px] h-32 absolute top-1335 left-20  bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] sm:hidden">
        <h1 className="absolute top-4 left-4 text-white text-[20px] jaldi-bold">
          Join our <br /> Community where Creativity thrives.
        </h1>
      </div>
      <div className="w-[150px] h-[170px] bg-[#0F0655A6] absolute top-1330 left-64 rounded-3xl cursor-pointer transition-all duration-1000  hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset] sm:hidden">
        <img
          src={lappHC}
          alt="sir"
          className="w-130 t-120 absolute top-2 left-0"
        />
      </div>
    </>
  );
};

export default Community;
