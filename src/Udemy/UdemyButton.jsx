import React from "react";

const UdemyButton = () => {
  return (
    <>
      <div
        onClick={() =>
          window.open(
            "https://www.udemy.com/course/web-dev-master/?couponCode=CHAIFRIDAY80"
          )
        }
        className="w-56 h-16 rounded-2xl bg-[#FE9332] absolute top-70 left-5  animate-gradient-border flex flex-col justify-center items-center cursor-pointer max-sm:hidden"
      >
        <h1 className="jaldi-bold text-2xl text-white">Check Udemy Courses</h1>
      </div>

      {/* // mobile */}
      <div
        onClick={() =>
          window.open(
            "https://www.udemy.com/course/web-dev-master/?couponCode=CHAIFRIDAY80"
          )
        }
        className="w-10 h-4 rounded-xs bg-[#FE9332] absolute top-32 left-24 animate-gradient-border flex flex-col justify-center items-center cursor-pointer sm:hidden"
      >
        <h1 className="jaldi-bold text-[4px] text-white">
          Check Udemy Courses
        </h1>
      </div>
    </>
  );
};

export default UdemyButton;
