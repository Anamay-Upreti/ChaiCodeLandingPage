import React from "react";

const DisUserSM = () => {
  return (
    <div
      onClick={() => window.open("https://discord.gg/TJDhuMjxb9", "_blank")}
      className="w-52 h-12 rounded-2xl bg-[#FE9332] absolute top-1380 left-35 animate-gradient-border cursor-pointer sm:hidden"
    >
      <h1 className="jaldi-bold text-[15px] text-white absolute top-3 left-2">
        80,000+ Active Coders on Discord
      </h1>
    </div>
  );
};

export default DisUserSM;
