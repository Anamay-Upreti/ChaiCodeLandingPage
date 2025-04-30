import React from "react";

const ApiCard = () => {
  return (
    <>
      <div className="absolute top-1990 left-64 bg-[#0F0655A6] w-[576px] h-[280px] rounded-3xl transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset] cursor-pointer max-sm:hidden">
        <h1 className="absolute top-4 left-5 text-white text-[33px] jaldi-bold">
          Unlock your Potential with our API Hub
        </h1>
        <h1 className="absolute top-19 left-5 text-white text-[18px] jaldi-bold">
          Our API Hub is designed at streamline your <br /> learning experience
          in API handling across <br /> various programming languages. <br />{" "}
          With the resource, you can effortlessly build and <br /> showcase your
          front-end portfolio in both web and mobile applications <br />
          Join us to enhance your skills and take your coding projects to the
          next level..!!{" "}
        </h1>
        <iframe
          className="absolute top-0 left-162 rounded-2xl cursor-pointer "
          width="460"
          height="265"
          src="https://www.youtube.com/embed/xJq0EQMFGyg?si=FmP9cvTmsINljr0F" // Replace with your YouTube video ID
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* mobile  */}

      <div className="absolute top-1435 left-17 bg-[#0F0655A6] w-[176px] h-[170px] rounded-3xl transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset] cursor-pointer sm:hidden">
        <h1 className="absolute top-6 left-3 text-white text-[10px] jaldi-bold">
          Unlock your Potential with our API Hub
        </h1>
        <h1 className="absolute top-13 left-3 text-white text-[8px] jaldi-bold">
          Our API Hub is designed at streamline your <br /> learning experience
          in API handling across <br /> various programming languages. <br />{" "}
          With the resource, you can effortlessly build and <br /> showcase your
          front-end portfolio in both web and mobile applications <br />
          Join us to enhance your skills and take your coding projects to the
          next level..!!{" "}
        </h1>
        <iframe
          className="absolute top-5 left-47 rounded-2xl cursor-pointer "
          width="150"
          height="135"
          src="https://www.youtube.com/embed/xJq0EQMFGyg?si=FmP9cvTmsINljr0F" // Replace with your YouTube video ID
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default ApiCard;
