import React from "react";
import "../index.css";
import { AuthHeader } from "../Layout/AuthHeader";
import { LayoutMainAuth } from "../Layout/LayoutMain";
import { setSearch } from "../App/Features/AuthSlice";
import { useDispatch } from "react-redux";
export const Auth = () => {
  const dispatch = useDispatch()
  dispatch(setSearch(""))
  return (
    
    <LayoutMainAuth>
      <AuthHeader />
    </LayoutMainAuth>
  );
};
