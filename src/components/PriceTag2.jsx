import React from "react";

const PriceTag = () => {
  const originalPrice = 7999;
  const discountedPrice = 4999;

  return (
    <div className="flex items-center space-x-4 text-white jaldi-bold text-2xl absolute top-70 left-9">
      <span className="line-through text-red-400">
        <br />₹{originalPrice}
      </span>
      <span className="text-[#FE9332]">
        <br />₹{discountedPrice}
      </span>
      <span className="text-[#f5f2ee] text-xl absolute top-15 left-0">
        Save 38%
      </span>
    </div>
  );
};

export default PriceTag;
