import React from "react";
import revision from "../assets/rev.jpeg";
const BenefitsCard = () => {
  return (
    <>
      <div className="w-96 h-60 bg-gradient-to-t from-[#E16B00] to-[#2C140193] rounded-3xl absolute top-1175 left-257 transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] max-sm:hidden">
        <div className="bg-white w-88 h-12 absolute top-4 left-4 rounded-2xl">
          <img
            src={revision}
            alt="asf"
            className="w-24 h-12 absolute top-0 left-0 rounded-2xl"
          />
        </div>
        <h1 className="text-[#FFE9A2] jaldi-bold absolute top-19 left-5 text-4xl">
          Revision Classes
        </h1>
        <div className="text-white jaldi-bold absolute top-34 left-6 text-xl">
          <h1>We have so many peer classes by fellow</h1>
          <h1>learners that you get so many chances to</h1>
          <h1>learn that topic.</h1>
        </div>
      </div>

      {/* mobile  */}

      <div className="w-38 h-26 bg-gradient-to-t from-[#E16B00] to-[#2C140193] rounded-2xl absolute top-1000 left-62 transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] sm:hidden">
        <div className="bg-white w-30 h-6 absolute top-3 left-4 rounded-2xl">
          <img
            src={revision}
            alt="asf"
            className="w-12 h-6 absolute top-0 left-0 rounded-2xl"
          />
        </div>
        <h1 className="text-[#FFE9A2] jaldi-bold absolute top-10 left-2 text-[13px]">
          Revision Classes
        </h1>
        <div className="text-white jaldi-bold absolute top-15 left-2 text-[8px]">
          <h1>We have so many peer classes by fellow</h1>
          <h1>learners that you get so many chances to</h1>
          <h1>learn that topic.</h1>
        </div>
      </div>
    </>
  );
};

export default BenefitsCard;
