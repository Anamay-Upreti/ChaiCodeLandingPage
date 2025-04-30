import React from "react";

const CohortContainer = () => {
  return (
    <>
      <div className="w-[666px] h-48 bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl absolute top-645 left-125 flex flex-col cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] max-sm:hidden">
        <h1 className="absolute top-1 left-16 text-white text-[60px] jaldi-bold">
          Our Student Feedbacks
        </h1>
        <h1 className="absolute top-20 left-14 text-white text-[28px] jaldi-bold">
          Explore the incredible advantages of enrolling in our
        </h1>
        <h1 className="absolute top-30 left-42 text-white text-[25px] jaldi-bold">
          courses and enhancing your skills
        </h1>
      </div>

      {/* mobile  */}
      <div className="w-[226px] h-22 bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl absolute top-655 left-33 flex flex-col cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] sm:hidden">
        <h1 className="absolute top-1 left-4 text-white text-[22px] jaldi-bold">
          Our Student Feedbacks
        </h1>
        <h1 className="absolute top-9 left-5 text-white text-[9px] jaldi-bold">
          Explore the incredible advantages of enrolling in our
        </h1>
        <h1 className="absolute top-12 left-5 text-white text-[9px] jaldi-bold">
          courses and enhancing your skills
        </h1>
      </div>
    </>
  );
};

export default CohortContainer;
