import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const DisUser = () => {
  return (
    <div
      onClick={() => window.open("https://discord.gg/TJDhuMjxb9", "_blank")}
      className="w-92 h-22 rounded-2xl bg-[#FE9332] absolute top-1910 left-150 animate-gradient-border cursor-pointer max-sm:hidden"
    >
      <h1 className="jaldi-bold text-[28px] text-white absolute top-6 left-2">
        80,000+ Active Coders on Discord
      </h1>
    </div>
  );
};

export default DisUser;
