import React from "react";

const UPriceTag = () => {
  const originalPrice = 3099;
  const discountedPrice = 399;

  return (
    <div className="flex items-center space-x-4 text-white jaldi-bold text-2xl absolute top-40 left-5 max-sm:hidden">
      <span className="line-through text-red-400">
        <br />₹{originalPrice}
      </span>
      <span className="text-[#FE9332]">
        <br />₹{discountedPrice}
      </span>
      <span className="text-[#f5f2ee] text-xl absolute top-15 left-0">
        Save 87%
      </span>
    </div>
  );
};

export default UPriceTag;
