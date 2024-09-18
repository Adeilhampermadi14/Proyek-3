import React, { useEffect, useState } from "react";
import "../index.css";

import { LayoutMainAll } from "../Layout/LayoutMain";
import { Aside, AsideMahasiswa } from "../Layout/Aside";
import { Main, MainUser } from "../Layout/Home/Main";
import { useDispatch } from "react-redux";
import { reset, resetMore, setSearch } from "../App/Features/AuthSlice";
export const Home = () => {
  const [IsMobile, setIsMobile] = useState(window.innerWidth);
  const updateScreenWidth = () => {
    setIsMobile(window.innerWidth);
  };
  const dispatch = useDispatch();
  document.title = "Home";
 
  document.body.className = "bg-[#EEEEEE]";
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => {
 dispatch(resetMore())
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <>
      <LayoutMainAll>
        <Aside IsMobile={IsMobile} active={"HomeIsClicked"} />
        <Main IsMobile={IsMobile} />
      </LayoutMainAll>
    </>
  );
};
export const HomeMahasiswa = () => {
  const [IsMobile, setIsMobile] = useState(window.innerWidth);
  const updateScreenWidth = () => {
    setIsMobile(window.innerWidth);
  };
  const dispatch = useDispatch();
  document.title = "Home";
 
  document.body.className = "bg-[#EEEEEE]";
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => {
 dispatch(resetMore())
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  dispatch(setSearch(""))
  return (
    <>
      <LayoutMainAll>
        <AsideMahasiswa IsMobile={IsMobile} active={"HomeIsClicked"} />
        <MainUser IsMobile={IsMobile} />
      </LayoutMainAll>
    </>
  );
};
