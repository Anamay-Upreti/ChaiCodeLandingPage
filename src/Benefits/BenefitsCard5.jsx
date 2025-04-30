import React from "react";
import leetlab from "../assets/leetlab.jpeg";
const BenefitsCard = () => {
  return (
    <>
      <div className="w-96 h-60 bg-gradient-to-t from-[#E16B00] to-[#2C140193] rounded-3xl absolute top-1175 left-159 transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] max-sm:hidden">
        <div className="bg-white w-88 h-12 absolute top-4 left-4 rounded-2xl">
          <img
            src={leetlab}
            alt="asf"
            className="w-24 h-12 absolute top-0 left-0 rounded-2xl"
          />
        </div>
        <h1 className="text-[#FFE9A2] jaldi-bold absolute top-19 left-5 text-4xl">
          Leet Lab
        </h1>
        <div className="text-white jaldi-bold absolute top-34 left-6 text-xl">
          <h1>Our In-House built LeetCode style platform</h1>
          <h1>that helps you to understand foundation</h1>
          <h1>programming language.</h1>
        </div>
      </div>

      {/* mobile  */}

      <div className="w-38 h-26 bg-gradient-to-t from-[#E16B00] to-[#2C140193] rounded-2xl absolute top-1000 left-22 transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] sm:hidden">
        <div className="bg-white w-30 h-6 absolute top-3 left-4 rounded-2xl">
          <img
            src={leetlab}
            alt="asf"
            className="w-12 h-6 absolute top-0 left-0 rounded-2xl"
          />
        </div>
        <h1 className="text-[#FFE9A2] jaldi-bold absolute top-10 left-2 text-[13px]">
          Leet Lab
        </h1>
        <div className="text-white jaldi-bold absolute top-15 left-2 text-[8px]">
          <h1>Our In-House built LeetCode style platform</h1>
          <h1>that helps you to understand foundation</h1>
          <h1>programming language.</h1>
        </div>
      </div>
    </>
  );
};

export default BenefitsCard;
