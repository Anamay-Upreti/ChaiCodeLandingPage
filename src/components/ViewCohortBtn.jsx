import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const CohortBtn = () => {
  return (
    <>
      <div
        onClick={() =>
          window.open(
            "https://courses.chaicode.com/learn/view-all?show=batch&type=17"
          )
        }
        className="w-56 h-16 rounded-2xl bg-[#FE9332] absolute top-615 left-175  animate-gradient-border  cursor-pointer max-sm:hidden"
      >
        <h1 className="jaldi-bold text-2xl text-white absolute top-4 left-4">
          View All Cohorts
          <FaExternalLinkAlt className="text-white  absolute top-1 left-40" />
        </h1>
      </div>

      {/* mobile  */}

      <div
        onClick={() =>
          window.open(
            "https://courses.chaicode.com/learn/view-all?show=batch&type=17"
          )
        }
        className="w-34 h-8 rounded-2xl bg-[#FE9332] absolute top-640 left-46  animate-gradient-border  cursor-pointer sm:hidden"
      >
        <h1 className="jaldi-bold text-[15px] text-white absolute top-1.5 left-2">
          View All Cohorts
          <FaExternalLinkAlt className="text-white  absolute top-0.5 left-25" />
        </h1>
      </div>
    </>
  );
};

export default CohortBtn;
