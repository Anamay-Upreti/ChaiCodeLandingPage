import React from "react";
import discordBlue from "../assets/discord-icon-svgrepo-com.svg";

const DiscordBtn = () => {
  return (
    <div
      onClick={() => window.open("https://discord.gg/TJDhuMjxb9", "_blank")}
      className="w-58 h-18 rounded-2xl bg-[#FE9332] absolute top-50 left-10 cursor-pointer transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,0,0,0.8)_inset] max-sm:hidden"
    >
      <h1 className=" text-4xl jaldi-bold text-white absolute top-3.5 left-4">
        Discord
      </h1>
      <img
        src={discordBlue}
        alt="discord"
        className="w-10 h-10 absolute top-4 right-8"
      />
    </div>
  );
};

export default DiscordBtn;
