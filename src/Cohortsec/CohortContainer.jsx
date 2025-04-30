import React from "react";
import { Link } from "react-scroll";

const CohortContainer = () => {
  return (
    <>
      <section
        id="cohort-section"
        className="w-[426px] h-36 bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl absolute top-445 left-155 flex flex-col cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] max-sm:hidden"
      >
        <h1 className="absolute -top-4 left-28 text-white text-[70px] jaldi-bold">
          Cohorts
        </h1>
        <h1 className="absolute top-20 left-25 text-white text-[30px] jaldi-bold">
          Live Training Classes
        </h1>
      </section>
      {/* // mobile */}
      <div className="w-[176px] h-24 bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl absolute top-252 left-40 flex flex-col cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] sm:hidden">
        <h1 className="absolute top-1 left-8 text-white text-[40px] jaldi-bold">
          Cohorts
        </h1>
        <h1 className="absolute top-15 left-8 text-white text-[15px] jaldi-bold">
          Live Training Classes
        </h1>
      </div>
    </>
  );
};

export default CohortContainer;
