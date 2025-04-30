import React from "react";
import DiscordBtn from "../components/DiscordBtn";
import DiscordBtnSM from "../components/DiscordBtnSM";

const CommunityCard = () => {
  return (
    <>
      <div className="h-[300px] w-[1130px]  bg-[#38307194] rounded-3xl absolute top-2110 left-65  transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset] cursor-pointer max-sm:hidden">
        <h1 className="jaldi-bold text-6xl text-white absolute top-10 left-5 ">
          Community
        </h1>
        <h1 className="jaldi-bold text-2xl text-white absolute top-28 left-5 ">
          Join a thriving community of learners and mentors to enhance your{" "}
          <br /> skills through collaborations and shared insights
        </h1>
        <DiscordBtn />

        <div className="absolute top-10 left-165 bg-[#05031394] w-[430px] h-60 rounded-2xl">
          <h1 className="jaldi-bold text-4xl text-white absolute top-2 left-16">
            Our Youtube Channels
          </h1>
          <div className="absolute top-16 left-10 w-88 h-16  rounded-3xl bg-[#FE9332]  transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,0,0,0.8)_inset]">
            <h1 className="jaldi-bold text-2xl text-white absolute top-1 left-4">
              Hitesh Choudhary
            </h1>
            <h1 className="jaldi-bold text-xl text-white absolute top-8 left-5">
              980K+ Subscribers
            </h1>
            <button
              onClick={() =>
                window.open("https://www.youtube.com/@HiteshCodeLab", "_blank")
              }
              className="absolute top-4 right-4 w-20 h-10 rounded-2xl bg-[#005412]"
            >
              <h1 className="jaldi-bold text-2xl text-white cursor-pointer">
                Visit
              </h1>
            </button>
          </div>
          <div className="absolute top-36 left-10 w-88 h-16  rounded-3xl bg-[#FE9332]  transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,0,0,0.8)_inset]">
            <h1 className="jaldi-bold text-2xl text-white absolute top-1 left-4">
              Chai Aur Code (हिन्दी )
            </h1>
            <h1 className="jaldi-bold text-xl text-white absolute top-8 left-5">
              610K+ Subscribers
            </h1>
            <button
              onClick={() =>
                window.open("https://www.youtube.com/@chaiaurcode", "_blank")
              }
              className="absolute top-4 right-4 w-20 h-10 rounded-2xl bg-[#005412]"
            >
              <h1 className="jaldi-bold text-2xl text-white cursor-pointer ">
                Visit
              </h1>
            </button>
          </div>
        </div>
      </div>

      {/* //mobile  */}

      <div className="w-[80vw] max-w-[360px] h-[155px] bg-[#38307194] rounded-3xl absolute top-1515 left-19 transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset] cursor-pointer sm:hidden">
        <h1 className="jaldi-bold text-2xl text-white absolute top-4 left-4">
          Community
        </h1>
        <h1 className="jaldi-bold text-[13px] text-white absolute top-13 left-4 ">
          Join a thriving community of learners <br /> and mentors to enhance
          your <br /> skills through collaborations and <br /> shared insights
        </h1>
        <DiscordBtnSM />

        <div className="absolute top-4 left-54 bg-[#05031394] w-[105px] h-26 rounded-2xl">
          <h1 className="jaldi-bold text-[10px] text-white absolute top-2 left-2">
            Our Youtube Channels
          </h1>
          <div className="absolute top-8 left-2 w-22 h-6  rounded-xl bg-[#FE9332]  transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,0,0,0.8)_inset]">
            <h1 className="jaldi-bold text-[8px] text-white absolute top-1 left-1.5">
              Hitesh Choudhary
            </h1>
            <h1 className="jaldi-bold text-[7px] text-white absolute top-3 left-1.5">
              980K+ Subscribers
            </h1>
            <button
              onClick={() =>
                window.open("https://www.youtube.com/@HiteshCodeLab", "_blank")
              }
              className="absolute top-2 left-16 w-5 h-3 rounded-2xl bg-[#005412]"
            >
              <h1 className="jaldi-bold text-[5px] text-white cursor-pointer">
                Visit
              </h1>
            </button>
          </div>
          <div className="absolute top-16 left-2 w-22 h-6  rounded-3xl bg-[#FE9332]  transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,0,0,0.8)_inset]">
            <h1 className="jaldi-bold text-[7px] text-white absolute top-1 left-1.5">
              Chai Aur Code (हिन्दी )
            </h1>
            <h1 className="jaldi-bold text-[6px] text-white absolute top-3 left-1.5">
              610K+ Subscribers
            </h1>
            <button
              onClick={() =>
                window.open("https://www.youtube.com/@chaiaurcode", "_blank")
              }
              className="absolute top-2 left-16 w-5 h-3 rounded-2xl bg-[#005412]"
            >
              <h1 className="jaldi-bold text-[5px] text-white cursor-pointer ">
                Visit
              </h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityCard;
