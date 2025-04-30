import React from "react";
import studentImage from "../assets/student.jpg";
const FeedbackCard = () => {
  return (
    <>
      <div className="w-82 h-52 bg-[#38307194] rounded-2xl absolute top-705 left-65 transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(0,131,255,0.8)_inset] max-sm:hidden cursor-pointer overflow-hidden">
        <div className="flex items-center gap-3">
          <img
            src={studentImage}
            alt="Student"
            className="w-12 h-12 rounded-full object-cover absolute top-2 left-2"
          />
          <div>
            <div className="jaldi-bold text-base text-[#f1bb88] absolute top-2 left-18">
              Ras Mendy
            </div>
            <div className="text-xs jaldi-bold text-[#FFBD80] absolute top-8 left-18">
              Web Dev Cohort '24
            </div>
          </div>
        </div>
        <p className="text-sm italic mt-2 jaldi-bold text-white absolute top-22 left-2">
          “This course truly transformed my career. The mentors, the structure —
          everything was on point! I feel confident in my skills now.”
        </p>
      </div>

      {/* mobile */}

      <div className="w-36 h-22 bg-[#38307194] rounded-2xl absolute top-705 left-65 transition-all duration-1000 hover:shadow-[0_0_15px_5px_rgba(0,131,255,0.8)_inset] sm:hidden">
        <div className="flex items-center gap-3">
          <img
            src={studentImage}
            alt="Student"
            className="w-7 h-7 rounded-full object-cover absolute top-2 left-2"
          />
          <div>
            <div className="jaldi-bold text-xs text-[#f1bb88] absolute top-2 left-10">
              Ras Mendy
            </div>
            <div className="text-xs jaldi-bold text-[#FFBD80] absolute top-5 left-10">
              Web Dev Cohort '24
            </div>
          </div>
        </div>
        <p className="text-[7px] italic mt-2 jaldi-bold text-white absolute top-10 left-2">
          “This course truly transformed my career. The mentors, the structure —
          everything was on point! I feel confident in my skills now.”
        </p>
      </div>
    </>
  );
};

export default FeedbackCard;
