import React from "react";

const CCard = () => {
  return (
    <>
      <div className="w-96 h-60 bg-gradient-to-t from-[#17049BEB] to-[#38307194] rounded-3xl absolute top-1415 left-62 transition-all duration-1000  hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset] max-sm:hidden">
        <h1 className="text-white jaldi-bold absolute top-1 left-5 text-[33px]">
          Comprehensive Curriculum
        </h1>
        <h1 className="text-white jaldi-bold absolute top-19 left-5 text-xl">
          Master Key Concepts and Hands-on-skills
        </h1>
        <h1 className="text-white jaldi-bold absolute top-27 left-5 text-xl">
          with clarity and confidence.
        </h1>
        <h1 className="text-white jaldi-bold absolute top-35 left-5 text-xl">
          Learn what truly matters, the right way,
        </h1>
        <h1 className="text-white jaldi-bold absolute top-43 left-5 text-xl">
          thorough, practical, and easy to understand.
        </h1>
      </div>

      {/* // mobile */}

      <div className="w-42 h-26 bg-gradient-to-t from-[#17049BEB] to-[#38307194] rounded-3xl absolute top-1120 left-16 transition-all duration-1000  hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset] sm:hidden">
        <h1 className="text-white jaldi-bold absolute top-2 left-3 text-[14px]">
          Comprehensive Curriculum
        </h1>
        <h1 className="text-white jaldi-bold absolute top-10 left-3 text-[9px]">
          Master Key Concepts and Hands-on-skills
        </h1>
        <h1 className="text-white jaldi-bold absolute top-13 left-3 text-[9px]">
          with clarity and confidence.
        </h1>
        <h1 className="text-white jaldi-bold absolute top-16 left-3 text-[9px]">
          Learn what truly matters, the right way,
        </h1>
        <h1 className="text-white jaldi-bold absolute top-19 left-3 text-[9px]">
          thorough, practical, and easy to understand.
        </h1>
      </div>
    </>
  );
};

export default CCard;
