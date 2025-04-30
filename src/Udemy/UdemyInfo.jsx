import React from "react";

const CohortContainer = () => {
  return (
    <>
      <div className="w-[426px] h-42 bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl absolute top-867 left-155 flex flex-col cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] max-sm:hidden">
        <h1 className="absolute -top-4 left-30 text-white text-[70px] jaldi-bold">
          Udemy
        </h1>
        <h1 className="absolute top-17 left-24 text-white text-[25px] jaldi-bold">
          Not Only in India, we are{" "}
        </h1>
        <h1 className="absolute top-25 left-17 text-white text-[25px] jaldi-bold">
          global leaders in tech education
        </h1>
      </div>

      <div className="w-[226px] h-26 bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl absolute top-810 left-33 flex flex-col cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] sm:hidden">
        <h1 className="absolute top-1 left-18 text-white text-[35px] jaldi-bold">
          Udemy
        </h1>
        <h1 className="absolute top-12 left-11 text-white text-[15px] jaldi-bold">
          Not Only in India, we are{" "}
        </h1>
        <h1 className="absolute top-17 left-11 text-white text-[13px] jaldi-bold">
          global leaders in tech education
        </h1>
      </div>
    </>
  );
};

export default CohortContainer;
