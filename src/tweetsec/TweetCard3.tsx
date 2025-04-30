import React from "react";

const TweetCard = () => {
  return (
    <div className="w-[300px] h-[300px] bg-[#38307194] rounded-3xl absolute top-255 left-270 transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(0,131,255,0.8)_inset] animate-pulse overflow-hidden max-sm:hidden max-md:hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffffff2a] to-transparent animate-shimmer" />
      <div className="relative z-10 flex items-center justify-center h-full text-white text-2xl jaldi-bold">
        Loading...
      </div>
    </div>
  );
};

export default TweetCard;
