import React, { useState, useEffect } from "react";
import { Login } from "../Layout/Login";
import { Register } from "../Layout/Register";
import SidebarTop from "./SidebarTop";

export const LayoutMainAuth = ({ children }) => {
  const [authIsActive, setAuthIsActive] = useState(true);

  document.body.classList = "bg-[#F0F0F0]";

  return (
    <React.Fragment>
      <div className="flex flex-col sm:flex-col md:flex-row items-center  justify-around md:justify-around  md:gap-[10px] lg:gap-[40px] xl:gap-[25px] only:md:px-[40px] xl:px-20 lg:px-[50px]   lg:py-5 h-screen lg:h-screen">
        {children}
        {authIsActive ? (
          <Login IsRegistrasi={setAuthIsActive} />
        ) : (
          <Register IsLogin={setAuthIsActive} />
        )}
      </div>
    </React.Fragment>
  );
};

export const LayoutMainAll = ({ children }) => {
  return (
    <React.Fragment>
      <div className="flex py-7   h-screen ">{children}</div>
    </React.Fragment>
  );
};

export const LayoutMainKelola = ({
  title,
  children,
  IsMobile,
 MoreComponent
}) => {
  return (
    <React.Fragment>
      <main className="h-max w-full gap-6 px-[20px]  sm:px-[60px] flex flex-col   items-center ">
        {IsMobile < 1024 && <SidebarTop />}
        <div className="flex flex-row items-center w-[340px] md:w-full  ">
          <h1 className="font-[poppins] font-semisbold whitespace-nowrap mr-5 text-[25px]   md:text-[35px]">
            {title}
          </h1>
          <div className="w-full h-[7px] rounded-md  bg-black"></div>
        </div>
      {MoreComponent}
        <ul
          className="h-[300px] md:h-[380px] pb-[120px]   overflow-y-auto   w-[340px] md:w-full grid py-7  grid-cols-1 md:grid-cols-3 
          lg:grid-cols-2 xl:grid-cols-3 gap-5  md:gap-5 px-[20px] lg:px-[50px]  	"
        >
          {children}
        </ul>
      </main>
    </React.Fragment>
  );
};
export const LayoutMainProfile = ({
  title,
  children,
  IsMobile,
 MoreComponent
}) => {
  return (
    <React.Fragment>
      <main className="h-max w-full gap-6 px-[20px]  sm:px-[60px] flex flex-col   items-center ">
        {IsMobile < 1024 && <SidebarTop />}
        <div className="flex flex-row items-center w-[340px] md:w-full  ">
          <h1 className="font-[poppins] font-semisbold whitespace-nowrap mr-5 text-[25px]   md:text-[35px]">
            {title}
          </h1>
          <div className="w-full h-[7px] rounded-md  bg-black"></div>
        </div>
   
        <div
          className="  md:h-[380px] -mt-5 md:mt-0    w-[340px] md:w-full grid    -justify-items-center-  grid-cols-1 md:grid-cols-3 
       -justify-evenly- gap-5  md:gap-9 px-[20px] lg:px-[50px]  	"
        >
          {children}
        </div>
      </main>
    </React.Fragment>
  );
};
export const LayoutMainReport = ({
  title,
  children,
  IsMobile,
 MoreComponent
}) => {
  return (
    <React.Fragment>
      <main className="h-max w-full gap-6 px-[20px]  sm:px-[60px] flex flex-col   items-center ">
        {IsMobile < 1024 && <SidebarTop />}
        <div className="flex flex-row items-center w-[340px] md:w-full  ">
          <h1 className="font-[poppins] font-semisbold whitespace-nowrap mr-5 text-[25px]   md:text-[35px]">
            {title}
          </h1>
          <div className="w-full h-[7px] rounded-md  bg-black"></div>
        </div>
      {MoreComponent}
        {/* <div
          className="h-[60px] overflow-hidden md:h-[380px] pb-[120px]     w-[340px] md:w-full  
            "
        > */}
          {children}
        {/* </div> */}
      </main>
    </React.Fragment>
  );
};
