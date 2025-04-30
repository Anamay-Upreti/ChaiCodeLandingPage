import React from "react";
import ChaiCode from "../assets/chaicode-white.png";
import ButtonLogIn from "./ButtonLogIn";
import ChaiWhite from "../assets/chai-white.png";
import Codes from "../assets/code-xxl.png";
import { SiUdemy } from "react-icons/si";
import { LuBookOpenText } from "react-icons/lu";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[97.7vh] w-56 rounded-3xl bg-[#0F0655A6] fixed  top-2 left-3 transition-all duration-1000 max-sm:h-screen max-sm:w-12 max-sm:block hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset] max-sm:fixed max-md:w-12">
      <ul className="flex flex-col items-center justify-start  p-8 space-y-6 gap-12">
        <img
          onClick={() => (window.location.href = "#http://chaiwalichai.com/")}
          src={ChaiCode}
          alt="chaicode"
          className="w-50 h-12 translate-y-3 max-sm:hidden cursor-pointer"
        />
        <img
          src={ChaiWhite}
          alt="chai"
          className="sm:hidden w-10 h-10 translate-y-3  "
        />
        <a
          href="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
          className="jaldi-bold  text-[#FE9332] text-5xl transition-all duration-150 hover:text-[#FFBD80] max-sm:hidden"
        >
          Cohorts{" "}
          <span className="absolute top-29.5 right-4.5 w-2 h-2 bg-red-600 rounded-full glow-pulse" />
        </a>

        <a
          href="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
          className="transition-all duration-150 hover:text-[#FFBD80] sm:hidden"
        >
          {" "}
          <img className="w-8 h-8" src={Codes} alt="gad" />
          <span className="absolute top-26 left-6 w-[1px] h-[1px] bg-red-600 rounded-full glow-pulse" />
        </a>

        <a
          href="https://www.udemy.com/course/web-dev-master/?srsltid=AfmBOooFa_w8-UsCXFhQ7HoDkaglWD3MFs7MeqjRwX4oOiGrCKLN6QLm&couponCode=ST7MT290425G3"
          className="jaldi-bold  text-[#FE9332] text-5xl transition-all duration-150 hover:text-[#FFBD80] max-sm:hidden"
        >
          Udemy
        </a>

        <a
          href="https://www.udemy.com/course/web-dev-master/?srsltid=AfmBOooFa_w8-UsCXFhQ7HoDkaglWD3MFs7MeqjRwX4oOiGrCKLN6QLm&couponCode=ST7MT290425G3"
          className="jaldi-bold  text-[#ffffff] text-5xl transition-all duration-150 hover:text-[#FFBD80] sm:hidden"
        >
          <SiUdemy className="w-8 h-8" />
        </a>

        <a
          href="https://docs.chaicode.com/"
          className="jaldi-bold  text-[#FE9332] text-5xl transition-all duration-150 hover:text-[#FFBD80] max-sm:hidden"
        >
          Docs
        </a>

        <a
          href="https://docs.chaicode.com/"
          className="jaldi-bold  text-[#ffffff] text-5xl transition-all duration-150 hover:text-[#FFBD80] sm:hidden"
        >
          <LuBookOpenText className="w-8 h-8" />
        </a>

        <Link
          to="/review"
          className="jaldi-bold   text-[#FE9332] text-5xl transition-all duration-150 hover:text-[#FFBD80] max-sm:hidden"
        >
          Reviews
        </Link>

        <Link
          to="/review"
          className="jaldi-bold   text-[#fffaf6] text-5xl transition-all duration-150 hover:text-[#FFBD80] sm:hidden"
        >
          <IoIosStarOutline className="w-8 h-8" />
        </Link>
        <ButtonLogIn className="w-4" />
      </ul>
    </nav>
  );
};

export default Navbar;
