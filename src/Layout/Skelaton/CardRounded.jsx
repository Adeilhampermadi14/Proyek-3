import React from "react";

export const CardRounded = () => {
  return (
    <div className="w-full  shadow-xl sm:mx-0 md:w-[230px] xl:w-[230px] 2xl:w-[280px] bg-[#FFFFFF] h-[92px] md:h-[140px] ring-2 rounded-md ring-[#252B48]">
      <div className="flex gap-3 w-full h-full items-center px-5">
        <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full bg-slate-500 animate-pulse"></div>
        <ul className="font-[poppins] font-semibold text-[#252B48] ">
          <li className="font-bold animate-pulse w-[120px] bg-slate-500  h-6 rounded-md mb-3"></li>
          <li className="animate-pulse bg-slate-500 w-[70px] h-5 rounded-md"></li>
        </ul>
      </div>
    </div>
  );
};
