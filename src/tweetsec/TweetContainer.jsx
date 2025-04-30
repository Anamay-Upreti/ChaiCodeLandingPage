import React from "react";

const TweetCard = () => {
  return (
    <>
      <div className="w-[426px] h-32 bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl absolute top-215 left-155 flex flex-col cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] max-sm:hidden">
        <h1 className="absolute top-2 left-17 text-white text-xl jaldi-bold">
          Love that we get from our community
        </h1>
        <h1 className="absolute top-10 left-20 text-white text-[60px] jaldi-bold">
          Tweet Love
        </h1>
      </div>

      {/* mobile */}
      <div className="w-[226px] h-22 bg-gradient-to-t from-[#E16B00] to-[#7B3A00] rounded-2xl absolute top-125 left-35 flex flex-col cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] sm:hidden">
        <h1 className="absolute top-4 left-5 text-white text-[13px] jaldi-bold">
          Love that we get from our community
        </h1>
        <h1 className="absolute top-10 left-13 text-white text-[30px] jaldi-bold">
          Tweet Love
        </h1>
      </div>
    </>
  );
};

export default TweetCard;
