import React from "react";
import UPriceTag from "./UdemyPric.jsx";
import UdemyButton from "./UdemyButton.jsx";
import SMPrice from "./SMPrice.jsx";
const ContainerOne = () => {
  return (
    <>
      <div className="h-[470px] w-[1100px] bg-[#0F0655A6] rounded-3xl absolute top-920 left-70 hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset] cursor-pointer max-sm:hidden">
        <div className="absolute top-10 left-10 h-96 w-[450px] rounded-3xl bg-[#0B091A]">
          <h1 className="absolute top-2 left-3 text-white text-[30px] jaldi-bold">
            Complete Web Development Course
          </h1>
          <h1 className="absolute top-15 left-3 text-white text-[16px] jaldi-bold">
            Only web development course that you will need. Covers HTML, CSS,
            Tailwind, Node, React, MongoDB, Prisma, Deployment etc
          </h1>
          <div className=" text-white text-[16px] jaldi-bold">
            <h1 className="absolute top-30 left-5 text-6xl">4.7</h1>
            <h1 className="absolute top-35 left-25">⭐⭐⭐⭐⭐</h1>
            <UPriceTag />
            <UdemyButton />
          </div>
        </div>
        <div className="absolute top-20 left-132 rounded-3xl cursor-pointer max-sm:hidden ">
          <iframe
            className="rounded-3xl"
            width="560"
            height="285"
            src="https://www.youtube.com/embed/KZ31wDjYleI?si=wan1xvf7EBJinNoh" // Replace with your YouTube video ID
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* //mobile */}
      <div className="w-[70vw] max-w-[360px] h-[190px]  bg-[#0F0655A6] rounded-3xl absolute top-845 left-24 transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset] cursor-pointer sm:hidden">
        <div className="absolute top-5 left-5 h-36 w-[130px] rounded-3xl bg-[#0B091A]"></div>

        <h1 className="absolute top-8 left-7 text-white text-[8.5px] jaldi-bold">
          Complete Web Development Course
        </h1>
        <h1 className="absolute top-15 left-6 text-white text-[6px] jaldi-bold">
          Only web development course that you will need. <br /> Covers HTML,
          CSS, Tailwind, Node, React, MongoDB, <br /> Prisma, Deployment etc
        </h1>
        <div className=" text-white text-[16px] jaldi-bold">
          <h1 className="absolute top-24 left-7 text-xl">4.7</h1>
          <h1 className="absolute top-26 left-15 text-xs">⭐⭐⭐⭐⭐</h1>
          <SMPrice />
          <UdemyButton />
        </div>
        <iframe
          className="rounded-3xl absolute top-10 left-38"
          width="130"
          height="85"
          src="https://www.youtube.com/embed/KZ31wDjYleI?si=wan1xvf7EBJinNoh" // Replace with your YouTube video ID
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default ContainerOne;
