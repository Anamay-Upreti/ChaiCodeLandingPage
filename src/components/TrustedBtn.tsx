import React from "react";

const TrustedBtn = () => {
  return (
    <>
      {/* Desktop */}
      <div className="relative w-[300px] h-16 bg-[#E16B00] rounded-xl flex items-center justify-center cursor-pointer overflow-hidden max-sm:hidden lg:w-[350px] xl:w-[400px] 2xl:w-[450px]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500] to-[#FFD700] animate-gradient-border rounded-xl"></div>
        <h1 className="relative z-10 text-center jaldi-bold text-xl sm:text-2xl lg:text-3xl text-white">
          Trusted By 1.5M+ Code Learners
        </h1>
      </div>

      {/* Mobile */}
      <div className="sm:hidden fixed top-41 left-62 transform -translate-x-1/2 z-50">
        <div className="relative w-[80vw] max-w-[150px] h-10 bg-[#E16B00] rounded-xl flex items-center justify-center cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF4500] to-[#FFD700] animate-gradient-border rounded-xl"></div>
          <h1 className="relative z-10 text-center jaldi-bold text-xs sm:text-sm lg:text-base text-white">
            Trusted By 1.5M+ Code Learners
          </h1>
        </div>
      </div>
    </>
  );
};

export default TrustedBtn;
