import React from "react";
import ChaiCode from "../assets/chaicode-white.png";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineDiscord } from "react-icons/ai";

const FooterMain = () => {
  return (
    <>
      <div className="h-[500px] w-[1140px] absolute top-2245 left-64 bg-[#38307194] rounded-4xl max-sm:hidden">
        <img
          src={ChaiCode}
          alt="ChaiCode"
          className="w-60 h-15 absolute top-4 left-4"
        />
        <h1 className="jaldi-bold text-[18px] text-white absolute top-22 left-6">
          Home For Programmers
        </h1>
        <AiOutlineYoutube
          onClick={() => {
            window.open("https://www.youtube.com/@chaiaurcode");
          }}
          size={28}
          className="absolute top-30 left-6 text-white cursor-pointer"
        />
        <IoLogoInstagram
          onClick={() => {
            window.open("https://www.instagram.com/hiteshchoudharyofficial/");
          }}
          size={24}
          className="absolute top-30 left-15 text-white cursor-pointer"
        />
        <LuGithub
          onClick={() => {
            window.open("https://github.com/hiteshchoudhary");
          }}
          size={24}
          className="absolute top-30 left-24 text-white cursor-pointer"
        />
        <FaXTwitter
          onClick={() => {
            window.open("https://x.com/Hiteshdotcom");
          }}
          size={24}
          className="absolute top-30 left-33 text-white cursor-pointer"
        />
        <CiLinkedin
          onClick={() => {
            window.open("https://www.linkedin.com/in/hiteshchoudhary/");
          }}
          size={24}
          className="absolute top-30 left-42 text-white cursor-pointer"
        />
        <AiOutlineDiscord
          onClick={() => {
            window.open("https://discord.gg/TJDhuMjxb9");
          }}
          size={24}
          className="absolute top-30 left-51 text-white cursor-pointer"
        />
        <h1 className="jaldi-bold text-[12px] text-white absolute top-38 left-5">
          ©️ 2025 ChaiCode. All rights reserved.
        </h1>
        <h1 class="jaldi-bold text-[178px] absolute top-74 left-0 bg-gradient-to-b from-[#A59AF0] to-[#201A4E] text-transparent bg-clip-text">
          CHAI AUR CODE
        </h1>
        <ul className="flex flex-col gap-1/2 jaldi-bold text-[12px] text-white absolute top-5 left-245">
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://courses.chaicode.com/learn"
          >
            Courses
          </a>
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
          >
            Cohorts
          </a>
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://courses.chaicode.com/learn/batch/about?bundleId=226894"
          >
            Coding Hero
          </a>
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://freeapi.app/"
          >
            FreeAPI
          </a>
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://masterji.co/login"
          >
            Masterji
          </a>
        </ul>
        <ul className="flex flex-col gap-1/2 jaldi-bold text-[12px] text-white absolute top-5 left-265">
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://docs.chaicode.com/"
          >
            Docs
          </a>
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://www.chaicode.com/privacy-policy"
          >
            Privacy Policy
          </a>
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://www.chaicode.com/terms-of-services"
          >
            Terms of Policy
          </a>
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://www.chaicode.com/pricing-policy"
          >
            Pricing Policy
          </a>
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://www.chaicode.com/refund-policy"
          >
            Refund Policy
          </a>
        </ul>
      </div>

      {/* mobile */}

      <div className="h-[200px] w-[340px] absolute top-1600 left-17 bg-[#38307194] rounded-4xl sm:hidden">
        <img
          src={ChaiCode}
          alt="ChaiCode"
          className="w-22 h-6 absolute top-4 left-4"
        />
        <h1 className="jaldi-bold text-[8px] text-white absolute top-12 left-4">
          Home For Programmers
        </h1>
        <AiOutlineYoutube
          onClick={() => {
            window.open("https://www.youtube.com/@chaiaurcode");
          }}
          size={16}
          className="absolute top-15 left-4 text-white cursor-pointer"
        />
        <IoLogoInstagram
          onClick={() => {
            window.open("https://www.instagram.com/hiteshchoudharyofficial/");
          }}
          size={12}
          className="absolute top-15.5 left-9 text-white cursor-pointer"
        />
        <LuGithub
          onClick={() => {
            window.open("https://github.com/hiteshchoudhary");
          }}
          size={16}
          className="absolute top-15 left-14 text-white cursor-pointer"
        />
        <FaXTwitter
          onClick={() => {
            window.open("https://x.com/Hiteshdotcom");
          }}
          size={16}
          className="absolute top-15 left-19 text-white cursor-pointer"
        />
        <CiLinkedin
          onClick={() => {
            window.open("https://www.linkedin.com/in/hiteshchoudhary/");
          }}
          size={16}
          className="absolute top-15 left-24 text-white cursor-pointer"
        />
        <AiOutlineDiscord
          onClick={() => {
            window.open("https://discord.gg/TJDhuMjxb9");
          }}
          size={16}
          className="absolute top-15 left-29 text-white cursor-pointer"
        />
        <h1 className="jaldi-bold text-[8px] text-white absolute top-21 left-4">
          ©️ 2025 ChaiCode. All rights reserved.
        </h1>
        <h1 class="jaldi-bold text-[51px] absolute top-34 left-2 bg-gradient-to-b from-[#A59AF0] to-[#201A4E] text-transparent bg-clip-text">
          CHAI AUR CODE
        </h1>
        <ul className="flex flex-col gap-1/2 jaldi-bold text-[8px] text-white absolute top-3 left-55">
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://courses.chaicode.com/learn"
          >
            Courses
          </a>
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
          >
            Cohorts
          </a>
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://courses.chaicode.com/learn/batch/about?bundleId=226894"
          >
            Coding Hero
          </a>
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://freeapi.app/"
          >
            FreeAPI
          </a>
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://masterji.co/login"
          >
            Masterji
          </a>
        </ul>
        <ul className="flex flex-col gap-1/2 jaldi-bold text-[8px] text-white absolute top-3 left-70">
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://docs.chaicode.com/"
          >
            Docs
          </a>
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://www.chaicode.com/privacy-policy"
          >
            Privacy Policy
          </a>
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://www.chaicode.com/terms-of-services"
          >
            Terms of Policy
          </a>
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://www.chaicode.com/pricing-policy"
          >
            Pricing Policy
          </a>
          <a
            className="hover:transition-all hover:duration-700 hover:text-[#E16B00]"
            href="https://www.chaicode.com/refund-policy"
          >
            Refund Policy
          </a>
        </ul>
      </div>
    </>
  );
};

export default FooterMain;
