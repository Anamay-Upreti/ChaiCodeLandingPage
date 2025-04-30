import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const CohortClassBtn = () => {
  return (
    <>
      <div
        onClick={() =>
          window.open(
            "https://courses.chaicode.com/learn/view-all?show=batch&type=17"
          )
        }
        className="w-76 h-18 rounded-2xl bg-[#FE9332] absolute top-340 left-170 animate-gradient-border cursor-pointer max-sm:hidden"
      >
        <h1 className="jaldi-bold text-2xl text-white absolute top-5 left-4">
          Join Cohort Live Classes
          <FaExternalLinkAlt className="text-white  absolute top-1 left-60" />
        </h1>
      </div>

      {/* mobile */}

      <div
        onClick={() =>
          window.open(
            "https://courses.chaicode.com/learn/view-all?show=batch&type=17"
          )
        }
        className="w-46 h-12 rounded-2xl bg-[#FE9332] absolute top-195 left-40 animate-gradient-border cursor-pointer sm:hidden"
      >
        <h1 className="jaldi-bold text-[16px] text-white absolute top-3 left-2">
          Join Cohort Live Classes
          <FaExternalLinkAlt className="text-white absolute top-1 left-38" />
        </h1>
      </div>
    </>
  );
};

export default CohortClassBtn;
