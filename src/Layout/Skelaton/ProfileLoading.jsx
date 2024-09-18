import React from "react";

export const ProfileLoading = () => {
  return (
    <>
      <div
        
        className=" animate-pulse   mr-[18px]   bg-slate-500  rounded-full w-[80px] h-[80px]"
      />

      <div className="flex flex-col gap-3">
        <div className="h-[25px] w-[100px]  bg-slate-500 animate-pulse rounded-md" />
        <div className="h-[20px] w-[120px] rounded-md bg-slate-500 animate-pulse  font-medium -mt-[4px]" />
      </div>
    </>
  );
};
