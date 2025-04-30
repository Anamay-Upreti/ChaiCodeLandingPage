import React from "react";

const FreeAPI = () => {
  return (
    <>
      <div className="w-[496px] h-32 bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl absolute top-1951 left-150 flex flex-col cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset max-sm:hidden] max-sm:hidden">
        <h1 className="absolute top-6 left-5 text-white text-[53px] jaldi-bold">
          FreeAPI - Open Source
        </h1>
      </div>

      {/* mobile  */}

      <div className="w-[196px] h-18 bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl absolute top-1411 left-36 flex flex-col cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] sm:hidden">
        <h1 className="absolute top-5 left-3.5 text-white text-[20px] jaldi-bold">
          FreeAPI - Open Source
        </h1>
      </div>
    </>
  );
};

export default FreeAPI;
