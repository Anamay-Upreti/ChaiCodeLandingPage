import React from "react";

const ContainerOne = () => {
  return (
    <>
      <div className="h-[270px] w-[1100px] bg-gradient-to-t from-[#17049BEB] via-[#17049BEB] to-[#635aa40d] rounded-3xl absolute top-4 left-70 cursor-pointer max-sm:hidden transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset]">
        <h1 className="jaldi-bold text-6xl text-[#FE9332] absolute top-3 left-60">
          Consistency and Community
        </h1>
        <h1 className="jaldi-bold text-4xl text-[#FFBD80] absolute top-18 left-60">
          An Unmatched Learning Experience For Coding{" "}
        </h1>
        <h1 className="jaldi-bold text-4xl text-[#FFBD80] absolute top-28 left-125">
          Courses.
        </h1>
        <h1 className="jaldi-bold text-xl text-white absolute top-40 left-60">
          Content is <span className="text-[#FE9332]">Everywhere</span>, we
          provide a learning experience that is
          <span className="text-[#FFBD80]"> unmatched</span>.{" "}
          <span className="text-[#FE9332]"> Bounties</span>, <br />{" "}
          <span className="text-[#FFBD80]"> Peer Learning</span> ,
          <span className="text-[#FE9332]"> Peer Code Reviews</span> ,
          <span className="text-[#FFBD80]"> Virtual Hostel</span>,
          <span className="text-[#FE9332]"> Alumni Network</span> ,{" "}
          <span className="text-[#FFBD80]"> Doubt Sessions</span>, <br />{" "}
          <span className="text-[#FE9332]"> Group Projects</span> , and so many
          other activities to keep you on track..!!
        </h1>
      </div>

      {/* mobile   cursor-pointer */}
      <div className="w-[80vw] max-w-[360px] h-[140px] bg-gradient-to-t from-[#17049BEB] via-[#17049BEB] to-[#635aa40d] rounded-3xl absolute left-20 top-3 transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(254,147,50,0.7)_inset] cursor-pointer sm:hidden ">
        <div className="p-4">
          <h1 className="jaldi-bold text-[5.5vw] sm:text-[23px] text-[#FE9332] absolute top-3 left-8">
            Consistency and Community
          </h1>
          <h1 className="jaldi-bold text-[3.2vw] sm:text-[14px] absolute top-11 left-4 text-[#FFBD80]">
            An Unmatched Learning Experience For Coding Courses.
          </h1>
          <div className="absolute top-19 left-2">
            <p className="jaldi-bold text-[2.0vw] sm:text-[10px] text-white">
              Content is <span className="text-[#FE9332]">Everywhere</span>, we
              provide a learning experience that is
              <span className="text-[#FFBD80]"> unmatched</span>.{" "}
              <span className="text-[#FE9332]"> Bounties</span>,
              <span className="text-[#FFBD80]"> Peer Learning</span>,{" "}
              <span className="text-[#FE9332]"> Peer Code Reviews</span>,
              <span className="text-[#FFBD80]"> Virtual Hostel</span>,{" "}
              <span className="text-[#FE9332]"> Alumni Network</span>,
              <span className="text-[#FFBD80]"> Doubt Sessions</span>,{" "}
              <span className="text-[#FE9332]"> Group Projects</span>, <br />
              and so many other activities to keep you on track..!!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerOne;
