import React from "react";

const Benefits = () => {
  return (
    <>
      <div className="w-[700px] h-44 bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl absolute top-1060 left-122 flex flex-col cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] max-sm:hidden">
        <h1 className="absolute top-0 left-24 text-white text-[60px] jaldi-bold">
          Key Benefits of Cohort
        </h1>
        <h1 className="absolute top-20 left-23 text-white text-[28px] jaldi-bold">
          Cohorts are best way to learn because you finish
        </h1>
        <h1 className="absolute top-29 left-46 text-white text-[25px] jaldi-bold">
          the course in a timely manner.
        </h1>
      </div>
      // mobile
      <div className="w-[250px] h-22 bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl absolute top-910 left-30 flex flex-col cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] sm:hidden">
        <h1 className="absolute top-1 left-3 text-white text-[27px] jaldi-bold">
          Key Benefits of Cohort
        </h1>
        <h1 className="absolute top-10 left-3 text-white text-[12px] jaldi-bold">
          Cohorts are best way to learn because you finish
        </h1>
        <h1 className="absolute top-15 left-3 text-white text-[12px] jaldi-bold">
          the course in a timely manner.
        </h1>
      </div>
    </>
  );
};

export default Benefits;
