import React from "react";

const Footer2 = () => {
  return (
    <>
      <div className="h-[170px] w-[560px] absolute top-2195 left-208 bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] max-sm:hidden">
        <h1 className="absolute top-1 left-5 text-white text-[55px] jaldi-bold">
          Assignments
        </h1>
        <h1 className="absolute top-20 left-5 text-white text-[20px] jaldi-bold">
          Take on challenging Assignments designed to test your knowledge <br />{" "}
          and improve your coding experience.
        </h1>
      </div>

      {/* mobile    */}

      <div className="h-[130px] w-[170px] absolute top-1560 left-60 bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] sm:hidden">
        <h1 className="absolute top-2 left-3 text-white text-[25px] jaldi-bold">
          Assignments
        </h1>
        <h1 className="absolute top-12 left-3 text-white text-[12px] jaldi-bold">
          Take on challenging Assignments designed to test your knowledge <br />{" "}
          and improve your coding experience.
        </h1>
      </div>
    </>
  );
};

export default Footer2;
