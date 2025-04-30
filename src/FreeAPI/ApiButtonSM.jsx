import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ApiButtonSM = () => {
  return (
    <div className="w-40 h-12 rounded-2xl bg-[#FE9332] absolute top-1484 left-40 animate-gradient-border cursor-pointer sm:hidden">
      <h1 className="jaldi-bold text-[18px] text-white absolute top-3 left-0">
        Check FreeAPI Docs
        <FaExternalLinkAlt className="text-white  absolute top-2 w-3 h-3 left-35.5" />
      </h1>
    </div>
  );
};

export default ApiButtonSM;
