import React from "react";
import discordBlue from "../assets/discord-icon-svgrepo-com.svg";

const DiscordBtnSM = () => {
  return (
    <div
      onClick={() => window.open("https://discord.gg/TJDhuMjxb9", "_blank")}
      className="w-18 h-6 rounded-2xl bg-[#FE9332] absolute top-30 left-30 cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,0,0,0.8)_inset] sm:hidden"
    >
      <h1 className=" text-[12px] jaldi-bold text-white absolute top-1 left-2">
        Discord
      </h1>
      <img
        src={discordBlue}
        alt="discord"
        className="w-4 h-4 absolute top-1 left-12 "
      />
    </div>
  );
};

export default DiscordBtnSM;
