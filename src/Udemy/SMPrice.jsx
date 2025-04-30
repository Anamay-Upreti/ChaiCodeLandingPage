import React from "react";

const SMPrice = () => {
  const originalPrice = 3099;
  const discountedPrice = 399;

  return (
    <div className="flex items-center space-x-4 text-white jaldi-bold text-xs absolute top-27 left-7 sm:hidden">
      <span className="line-through text-red-400">
        <br />₹{originalPrice}
      </span>
      <span className="text-[#FE9332]">
        <br />₹{discountedPrice}
      </span>
      <span className="text-[#f5f2ee] text-xs absolute top-8 left-0">
        Save 87%
      </span>
    </div>
  );
};

export default SMPrice;
