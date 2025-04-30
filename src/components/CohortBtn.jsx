import React from "react";

const CohortBtn = () => {
  return (
    <>
      <div
        onClick={() =>
          window.open(
            "https://courses.chaicode.com/learn/view-all?show=batch&type=17"
          )
        }
        className="w-56 h-16 rounded-2xl bg-[#FE9332] absolute top-185 left-175  animate-gradient-border flex flex-col justify-center items-center cursor-pointer max-sm:hidden"
      >
        <h1 className="jaldi-bold text-2xl text-white">
          Check All Live Cohorts
        </h1>
      </div>

      {/* // mobile */}
      <div
        onClick={() =>
          window.open(
            "https://courses.chaicode.com/learn/view-all?show=batch&type=17"
          )
        }
        className="w-30 h-10 rounded-2xl bg-[#FE9332] absolute top-100 left-48 animate-gradient-border flex flex-col justify-center items-center cursor-pointer sm:hidden"
      >
        <h1 className="jaldi-bold text-[12px] text-white">
          Check All Live Cohorts
        </h1>
      </div>
    </>
  );
};

export default CohortBtn;
