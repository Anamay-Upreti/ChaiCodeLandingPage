import React from "react";
import sir from "../assets/sir.png";
const HC = () => {
  return (
    <>
      <div className="h-[745px] w-92 rounded-3xl bg-[#38307194] absolute top-1415 left-161  transition-all duration-1000  hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset] max-sm:hidden">
        <img
          className="rounded-3xl w-78 h-52 left-6.5 absolute top-3"
          src={sir}
          alt="sir"
        />
        <h1 className="jaldi-bold text-5xl text-white top-57 absolute left-5">
          Hitesh Choudhary
        </h1>
        <h1 className="jaldi-bold text-[25px] text-white top-72 absolute left-5">
          ⚡Retired from Corporate. <br /> ⚡Full Time Youtuber of LCO <br />{" "}
          (ACQUIRED), <br /> ⚡X CTO, Sr. Director At PW. ⚡2YT Channels (970K+
          & 610K+), <br /> ⚡Stepped into 43 Countries.
        </h1>
        <h1 className="jaldi-bold text-[40px] text-white top-130 absolute left-5">
          Approach
        </h1>
        <h1 className="jaldi-bold text-[25px] text-white top-145 absolute left-5">
          Projects based courses with peer <br /> learning and bounties with
          many <br />
          activities.
        </h1>
      </div>

      {/* // mobile  */}

      <div className="h-[335px] w-42 rounded-3xl bg-[#38307194] absolute top-1151 left-38  transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset] sm:hidden">
        <img
          className="rounded-3xl w-38 h-24 left-2 absolute top-1"
          src={sir}
          alt="sir"
        />
        <h1 className="jaldi-bold text-xl text-white top-25 absolute left-3">
          Hitesh Choudhary
        </h1>
        <h1 className="jaldi-bold text-[12px] text-white top-32 absolute left-3">
          ⚡Retired from Corporate. <br /> ⚡Full Time Youtuber of LCO <br />{" "}
          (ACQUIRED), <br /> ⚡X CTO, Sr. Director At PW. ⚡2YT Channels (970K+
          & 610K+), <br /> ⚡Stepped into 43 Countries.
        </h1>
        <h1 className="jaldi-bold text-xl text-white top-62.5 absolute left-3">
          Approach
        </h1>
        <h1 className="jaldi-bold text-[10px] text-white top-70 absolute left-3">
          Projects based courses with peer <br /> learning and bounties with
          many <br />
          activities.
        </h1>
      </div>
    </>
  );
};

export default HC;
