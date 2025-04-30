import React from "react";
import PriceTag from "../components/PriceTag";

const CohortCard = () => {
  return (
    <>
      <div className="w-86 h-[450px] rounded-3xl absolute top-490 left-260 bg-[#0F0655A6] transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset] max-sm:hidden">
        <iframe
          className="absolute top-3 left-8 rounded-2xl cursor-pointer "
          width="280"
          height="205"
          src="https://www.youtube.com/embed/Kjd-SWpe1do?si=-lMTyQjxRQtNmdNf" // Replace with your YouTube video ID
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h1 className="absolute top-57 left-9 text-white text-2xl jaldi-bold">
          Full Stack Data Science 1.0
        </h1>
        <h1 className="absolute top-65 left-9 text-white text-xl jaldi-bold">
          From Python basics to project deployment
        </h1>
        <PriceTag />
        <div
          onClick={() =>
            (window.location.href =
              "https://courses.chaicode.com/learn/view-all?show=batch&type=17")
          }
          className="w-72 h-12 bg-[#FE9332] absolute top-95 left-8 rounded-2xl flex flex-col justify-center items-center text-center cursor-pointer  transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,0,0,0.8)_inset]"
        >
          <span
            onClick={() =>
              (window.location.href =
                "https://courses.chaicode.com/learn/view-all?show=batch&type=17")
            }
            className="jaldi-bold text-4xl text-white "
          >
            Buy Now
          </span>
        </div>
      </div>
      {/* mobile  */}

      <div className="w-86 h-[450px] rounded-3xl absolute top-520 left-18 bg-[#0F0655A6] transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset] sm:hidden">
        <iframe
          className="absolute top-3 left-8 rounded-2xl cursor-pointer "
          width="280"
          height="205"
          src="https://www.youtube.com/embed/Kjd-SWpe1do?si=-lMTyQjxRQtNmdNf" // Replace with your YouTube video ID
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h1 className="absolute top-57 left-9 text-white text-2xl jaldi-bold">
          Full Stack Data Science 1.0
        </h1>
        <h1 className="absolute top-65 left-9 text-white text-xl jaldi-bold">
          From Python basics to project deployment
        </h1>
        <PriceTag />
        <div
          onClick={() =>
            (window.location.href =
              "https://courses.chaicode.com/learn/view-all?show=batch&type=17")
          }
          className="w-72 h-12 bg-[#FE9332] absolute top-95 left-8 rounded-2xl flex flex-col justify-center items-center text-center cursor-pointer  transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(255,0,0,0.8)_inset]"
        >
          <span
            onClick={() =>
              (window.location.href =
                "https://courses.chaicode.com/learn/view-all?show=batch&type=17")
            }
            className="jaldi-bold text-4xl text-white "
          >
            Buy Now
          </span>
        </div>
      </div>
    </>
  );
};

export default CohortCard;
