import React from "react";
import { MdAccountCircle } from "react-icons/md";

const ButtonLogIn = () => {
  return (
    <>
      <div
        onClick={() =>
          (window.location.href =
            "https://courses.chaicode.com/learn/account/signin")
        }
        className="h-12 w-30 bg-[#3932FED3] rounded-2xl text-center items-center justify-center flex flex-col cursor-pointer transition-all duration-300 hover:h-14 hover:w-32 max-sm:hidden"
      >
        <h1 className="text-[#FE9332] jaldi-bold text-3xl max-sm:hidden">
          Log In
        </h1>
      </div>
      {/* //mobile */}
      <div
        onClick={() =>
          (window.location.href =
            "https://courses.chaicode.com/learn/account/signin")
        }
        className="h-8 w-8 bg-[#3932FED3] rounded-full text-center items-center justify-center flex flex-col cursor-pointer transition-all duration-300 hover:h-14 hover:w-32 sm:hidden"
      >
        <MdAccountCircle className="w-5 h-5 text-white" />
      </div>
    </>
  );
};

export default ButtonLogIn;
