import React from "react";
import logo from "../assets/user-profile.png";
const AluminiCard = () => {
  return (
    <>
      <div className="w-[1040px] h-[400px] bg-gradient-to-t  from-[#E16B00] to-[#7B3A00] rounded-3xl absolute top-1245 left-77 transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] cursor-pointer max-sm:hidden">
        <div className="bg-[#D9D9D9] w-[460px] h-[360px]  absolute top-5 left-4 rounded-2xl border-2 overflow-hidden ">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-12 h-12 rounded-full bg-white overflow-hidden"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
                right: `${Math.random() * 80}%`,
                bottom: `${Math.random() * 80}%`,
                animation: `floatFree ${2 + Math.random() * 2}s ease-in-out ${
                  Math.random() * 1
                }s infinite`,
              }}
            >
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-contain p-1"
              />
            </div>
          ))}
        </div>
        <div>
          <h1 className="jaldi-bold text-white text-[55px] top-15 absolute left-125 max-sm:hidden">
            Alumni and Job Listings
          </h1>
          <h1 className="jaldi-bold text-white text-[22px] absolute left-125 top-40">
            The alumni Network that you always wished for in your <br />{" "}
            college. We have a dedicated platform where students get <br /> to
            know each other, do projects, make agencies and join <br />{" "}
            Hackathons. Our HR team also post regular job updates that <br />{" "}
            you can apply directly whenever you are ready
          </h1>
        </div>
      </div>
      {/* // mobile */}
      <div className="w-[325px] h-[170px] bg-gradient-to-t  from-[#E16B00] to-[#7B3A00] rounded-3xl absolute top-1032 left-20 transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,248,121,0.8)_inset] cursor-pointer sm:hidden">
        <div className="bg-[#D9D9D9] w-[130px] h-[130px]  absolute top-5 left-4 rounded-2xl border-2 overflow-hidden ">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full bg-white overflow-hidden"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
                right: `${Math.random() * 80}%`,
                bottom: `${Math.random() * 80}%`,
                animation: `floatFree ${2 + Math.random() * 2}s ease-in-out ${
                  Math.random() * 1
                }s infinite`,
              }}
            >
              <img
                src={logo}
                alt="logo"
                className="w-full h-full object-contain p-1"
              />
            </div>
          ))}
        </div>
        <div>
          <h1 className="jaldi-bold text-white text-[15px] top-12 absolute left-42 sm:hidden">
            Alumni and Job Listings
          </h1>
          <h1 className="jaldi-bold text-white text-[7px] absolute left-40 top-20">
            The alumni Network that you always wished for in your <br />{" "}
            college. We have a dedicated platform where students get <br /> to
            know each other, do projects, make agencies and join <br />{" "}
            Hackathons. Our HR team also post regular job updates that <br />{" "}
            you can apply directly whenever you are ready
          </h1>
        </div>
      </div>
    </>
  );
};

export default AluminiCard;
