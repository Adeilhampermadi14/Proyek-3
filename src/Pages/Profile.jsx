import React from "react";
import { useState, useEffect } from "react";
import { Sidebar, SidebarMahasiswa } from "../Layout/Sidebar";
import { LayoutMainAll, LayoutMainProfile } from "../Layout/LayoutMain";
import { Aside, AsideMahasiswa } from "../Layout/Aside";
import { FaEye, FaEyeSlash } from "react-icons/fa";
 
import axios from "axios";

import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { resetAlert, setAlert, setSearch } from "../App/Features/AuthSlice";
import { Alert } from "../Layout/Alert";
import { useNavigate } from "react-router-dom";
import { OverleySessionOver } from "../Layout/Skelaton/OverleySessionOver";
export const Profile = () => {
  const [IsMobile, setIsMobile] = useState(window.innerWidth);
 
  const [invisi, visib] = useState(false);
  const enbaleinvi = () => visib(!invisi);
  const [Form, setForm] = useState({
    username: null,
    nim: null,
    no_wa: null,
    mhs_name: null,
    password: null,
  });
  const { show, message, status } = useSelector((state) => state.alertSlice);

  const getProfile = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/profilev2`, {
        headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
      })
      .then((res) => {
        setForm(res.data.data);
      })
      .catch((res) => {});
  };

  const submitForm = async (e) => {
    e.preventDefault();

    await axios
      .put(`${process.env.REACT_APP_API_URL}/profile/edit`, Form, {
        headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
      })
      .then((res) => {
        dispatch(
          setAlert({ show: true, status: true, message: res.data.message })
        );
      })
      .catch((res) => {
        dispatch(
          setAlert({
            show: true,
            status: false,
            message: res.response.data.message,
          })
        );
      });
  };
  const updateScreenWidth = () => {
    setIsMobile(window.innerWidth);
  };
  document.body.className = "bg-[#EEEEEE]";
  document.title = "Kelola Dosen";

  const dispatch = useDispatch();

  useEffect(() => {
    clearTimeout();
    window.addEventListener("resize", updateScreenWidth);
    getProfile();
    if (show) {
      setTimeout(() => {
        dispatch(resetAlert());
       
      }, 3000);
    }
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
      <Sidebar active={"ResourceIsClicked"} />;
    };
  }, [show]);
 
  return (
    <LayoutMainAll>
      <Aside IsMobile={IsMobile} active={"RequestIsClicked"} />
      <LayoutMainProfile
        title={"Profile"}
        IsMobile={IsMobile}
        
      >
        {show && <Alert status={status} message={message} />}
        <div className="font-['poppins'] md:mb-0 mb-5  flex flex-col items-center">
            <div className=" animate-pulse w-[100px]  md:w-[200px] md:h-[200px] mb-2 h-[100px] rounded-full  bg-slate-400"></div>
            <h3 className="first-letter:uppercase font-semibold md:text-[25px]">
              {Form.mhs_name}
            </h3>
            <h3 className=" first-letter:uppercase md:text-[25px]">
              {Form.username}
            </h3>
          </div>
        <form
          onSubmit={submitForm}
          className=" grid -mt-5 grid-cols-2   gap-3 font-['poppins']    col-span-2 h-full   w-full"
        >
          <div className="flex flex-col w-full gap-2  col-span-2  md:col-span-1">
            <label className="font-semibold text-[14px]" htmlFor="">
              Nama Mahasiswa
            </label>
            <input
              onChange={(e) => setForm({ ...Form, mhs_name: e.target.value })}
              value={Form.mhs_name}
              className=" h-8 md:h-10 rounded-md text-[14px] px-2"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full gap-2  col-span-2  md:col-span-1">
            <label className="font-semibold text-[14px]" htmlFor="">
              Nim
            </label>
            <input
              onChange={(e) => setForm({ ...Form, nim: e.target.value })}
              value={Form.nim}
              className=" h-8 md:h-10  rounded-md text-[14px] px-2"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full gap-2  col-span-2  md:col-span-1">
            <label className="font-semibold text-[14px]" htmlFor="">
              No whatsapp
            </label>
            <input
              onChange={(e) => setForm({ ...Form, no_wa: e.target.value })}
              value={Form.no_wa}
              className=" h-8 md:h-10  rounded-md text-[14px] px-2"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full gap-2   col-span-1   ">
            <label className="font-semibold text-[14px] " htmlFor="">
              Username
            </label>
            <input
              onChange={(e) => setForm({ ...Form, username: e.target.value })}
              value={Form.username}
              className=" h-8 md:h-10  rounded-md text-[14px] px-2"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full gap-2 col-span-1   ">
            <label className="font-semibold text-[14px]" htmlFor="">
              Password
            </label>
            <div className="relative">
              <input
                onChange={(e) => setForm({ ...Form, password: e.target.value })}
                value={Form.password}
                className=" h-8 rounded-md md:h-10  w-full text-[14px] px-2"
                type={invisi ? "text" : "password"}
              />
              <div
                onClick={enbaleinvi}
                className="absolute  top-1/2 right-2 transform -translate-y-1/2 bg-transparent border-none p-0 m-0 cursor-pointer "
              >
                {invisi ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
          </div>
          <div className="flex  col-span-2  flex-col w-full    col-start-1  ">
            <button
              type="submit"
              className="md:h-12   w-full text-[14px] h-10 bg-[#252B48] rounded-md text-white"
            >
              Save
            </button>
          </div>
        </form>
      </LayoutMainProfile>
    </LayoutMainAll>
  );
};
export const ProfileMahasiswa = () => {
  const [IsMobile, setIsMobile] = useState(window.innerWidth);
 
  const [invisi, visib] = useState(false);
  const enbaleinvi = () => visib(!invisi);
  const [Form, setForm] = useState({
    username: null,
    nim: null,
    no_wa: null,
    mhs_name: null,
    password: null,
  });
  const navigate = useNavigate()
  const { show, message, status } = useSelector((state) => state.alertSlice);
  const [sessionExp,SetSessionExp] =useState(null) 
  const getProfile = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/profilev2`, {
        headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
      })
      .then((res) => {
        setForm(res.data.data);
      })
      .catch((res) => {
        if (res.response.status === 401) {
         SetSessionExp(true)
        }
      });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`${process.env.REACT_APP_API_URL}/profile/edit`, Form, {
        headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
      })
      .then((res) => {
        dispatch(
          setAlert({ show: true, status: true, message: res.data.message })
        );
      })
      .catch((res) => {
        if (res.response.status === 401) {
        SetSessionExp(true)
          }else{
        dispatch(
          setAlert({
            show: true,
            status: false,
            message: res.response.data.message,
          })
        );
          }
      });
  };
  const updateScreenWidth = () => {
    setIsMobile(window.innerWidth);
  };
  document.body.className = "bg-[#EEEEEE]";
  document.title = "Kelola Dosen";

  const dispatch = useDispatch();
  dispatch(setSearch(""))
  useEffect(() => {
    clearTimeout();
    window.addEventListener("resize", updateScreenWidth);
    getProfile();
    if (show) {
      setTimeout(() => {
        dispatch(resetAlert());
       
      }, 3000);
    }
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
      <SidebarMahasiswa active={"ResourceIsClicked"} />;
    };
  }, [show]);
 
  return (
    <LayoutMainAll>
      <AsideMahasiswa IsMobile={IsMobile} active={"RequestIsClicked"} />
      <LayoutMainProfile
        title={"Profile"}
        IsMobile={IsMobile}
        
      >
        {sessionExp && <OverleySessionOver />}
        {show && <Alert status={status} message={message} />}
        <div className="font-['poppins'] md:mb-0 mb-5  flex flex-col items-center">
            <div className="  animate-pulse w-[100px]  md:w-[200px] md:h-[200px] mb-2 h-[100px] rounded-full  bg-slate-400" />
            {/* <div className=" ring-inset ring-4 ring-[#FF9B50] w-[100px]  md:w-[200px] md:h-[200px] mb-2 h-[100px] rounded-full  bg-slate-400"/> */}
            <h3 className="first-letter:uppercase font-semibold md:text-[25px]">
              {Form.mhs_name}
            </h3>
            <h3 className=" first-letter:uppercase md:text-[25px]">
              {Form.username}
            </h3>
          </div>
        <form
          onSubmit={submitForm}
          className=" grid -mt-5 grid-cols-2   gap-3 font-['poppins']    col-span-2 h-full   w-full"
        >
          <div className="flex flex-col w-full gap-2  col-span-2  md:col-span-1">
            <label className="font-semibold text-[14px]" htmlFor="">
              Nama Mahasiswa
            </label>
            <input
              onChange={(e) => setForm({ ...Form, mhs_name: e.target.value })}
              value={Form.mhs_name}
              className=" h-8 md:h-10 rounded-md text-[14px] px-2"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full gap-2  col-span-2  md:col-span-1">
            <label className="font-semibold text-[14px]" htmlFor="">
              Nim
            </label>
            <input
              onChange={(e) => setForm({ ...Form, nim: e.target.value })}
              value={Form.nim}
              className=" h-8 md:h-10  rounded-md text-[14px] px-2"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full gap-2  col-span-2  md:col-span-1">
            <label className="font-semibold text-[14px]" htmlFor="">
              No whatsapp
            </label>
            <input
              onChange={(e) => setForm({ ...Form, no_wa: e.target.value })}
              value={Form.no_wa}
              className=" h-8 md:h-10  rounded-md text-[14px] px-2"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full gap-2   col-span-1   ">
            <label className="font-semibold text-[14px] " htmlFor="">
              Username
            </label>
            <input
              onChange={(e) => setForm({ ...Form, username: e.target.value })}
              value={Form.username}
              className=" h-8 md:h-10  rounded-md text-[14px] px-2"
              type="text"
            />
          </div>
          <div className="flex flex-col w-full gap-2 col-span-1   ">
            <label className="font-semibold text-[14px]" htmlFor="">
              Password
            </label>
            <div className="relative">
              <input
                onChange={(e) => setForm({ ...Form, password: e.target.value })}
                value={Form.password}
                className=" h-8 rounded-md md:h-10  w-full text-[14px] px-2"
                type={invisi ? "text" : "password"}
              />
              <div
                onClick={enbaleinvi}
                className="absolute  top-1/2 right-2 transform -translate-y-1/2 bg-transparent border-none p-0 m-0 cursor-pointer "
              >
                {invisi ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
          </div>
          <div className="flex  col-span-2  flex-col w-full    col-start-1  ">
            <button
              type="submit"
              className="md:h-12   w-full text-[14px] h-10 bg-[#252B48] rounded-md text-white"
            >
              Save
            </button>
          </div>
        </form>
      </LayoutMainProfile>
    </LayoutMainAll>
  );
};
