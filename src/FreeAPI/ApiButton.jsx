import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ApiButton = () => {
  return (
    <div
      onClick={() =>
        window.open(
          "https://freeapi.hashnode.space/api-guide/apireference/getARandomQuote",
          "_blank"
        )
      }
      className="w-68 h-18 rounded-2xl bg-[#FE9332] absolute top-2070 left-170 animate-gradient-border cursor-pointer max-sm:hidden"
    >
      <h1 className="jaldi-bold text-2xl text-white absolute top-5 left-4">
        Check FreeAPI Docs
        <FaExternalLinkAlt className="text-white  absolute top-1 left-52" />
      </h1>
    </div>
  );
};

export default ApiButton;
