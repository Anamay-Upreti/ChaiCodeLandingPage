import React from "react";

const ProofCContainer = () => {
  return (
    <>
      <div className="w-[700px] h-36 bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl absolute top-1370 left-122 flex flex-col cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] max-sm:hidden">
        <h1 className="absolute top-0 left-35 text-white text-[60px] jaldi-bold">
          But Why ChaiCode?
        </h1>
        <h1 className="absolute top-20 left-18 text-white text-[30px] jaldi-bold">
          Chai Code exists because we love tech and teaching.
        </h1>
      </div>

      {/* 
    // mobile  */}

      <div className="w-[260px] h-26 bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl absolute top-1090 left-30 flex flex-col cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] sm:hidden">
        <h1 className="absolute top-1 left-10 text-white text-[25px] jaldi-bold">
          But Why ChaiCode?
        </h1>
        <h1 className="absolute top-10 left-5 text-white text-[18px] jaldi-bold">
          Chai Code exists because we love tech and teaching.
        </h1>
      </div>
    </>
  );
};

export default ProofCContainer;
