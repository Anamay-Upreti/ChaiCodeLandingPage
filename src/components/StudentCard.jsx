import React from "react";
import studentImage from "../assets/student.jpg";

const StudentCard = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="w-56 h-24 bg-[#38307194] rounded-2xl absolute top-[1595px] left-[255px] transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(0,131,255,0.8)_inset] max-sm:hidden flex items-center gap-2 p-2">
        <img
          src={studentImage}
          alt="Student"
          className="w-12 h-12 rounded-full object-cover absolute left-5"
        />
        <div className="text-white text-sm absolute left-20">
          <div className="jaldi-bold">Aarav Sharma</div>
          <div className="text-xs jaldi-bold">Now @ Google as SDE</div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="w-26 h-12 bg-[#38307194] rounded-2xl absolute top-[920px] left-[83px] transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(0,131,255,0.8)_inset] sm:hidden flex items-center  p-2">
        <img
          src={studentImage}
          alt="Student"
          className="w-5 h-5 rounded-full object-cover"
        />
        <div className="text-white text-xs">
          <div className="fjaldi-bold">Aarav Sharma</div>
          <div className="text-xs jaldi-bold">Now @ Google</div>
        </div>
      </div>
    </>
  );
};

export default StudentCard;
