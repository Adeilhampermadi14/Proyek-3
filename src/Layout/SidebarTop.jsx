import axios from "axios";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UserSess, reset, setPanel } from "../App/Features/AuthSlice";
import { ProfileLoadingTop } from "./Skelaton/ProfileLoadingTop";
import Cookies from "js-cookie";

const SidebarTop = () => {
  const [toggleClick, setToggle] = useState(false);
  const { isSuccess, userses, isLoading, isError } = useSelector(
    (state) => state.auth
  );
  const { PanelClick } = useSelector(
    (state) => state.panelSlice
  )
  const onClickToggle = () => setToggle(!toggleClick);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LogoutClick = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/logout`).then((res) => {
      if (res.data.status === 200) {
        Cookies.remove("accessToken", { expires: 0 });
        dispatch(reset());
        navigate("/login");
      }
    });
  };
  if (isError) {
    navigate("/login");
  }
  useEffect(() => {
    dispatch(UserSess());
  }, []);
  return (
    <>
      <nav className="w-[340px] sm:w-full h-[85px] bg-[#252B48] rounded-xl justify-between flex items-center gap-3 px-6">
        {userses ? (
          <>
            <div className="flex gap-2">
              <div className="text-[#F0F0F0] text-left font-[poppins]">
                <h1 className="font-semibold text-[20px] first-letter:uppercase">
                  {userses && userses.data.role === "_adminX69_"
                    ? "admin"
                    : "mahasiswa"}
                </h1>
                <h2 className=" text-[15px] first-letter:uppercase">
                  {userses && userses.data.mhs_name}
                </h2>
              </div>
            </div>
            <div
              onClick={onClickToggle}
              className="relative w-[58px] h-[58px] rounded-full ring-2 ring-[#FF9B50]"
            >
              {/* <div className='relative'>    */}
              <div
                className={`${
                  !toggleClick && "hidden"
                }  inset-x-0 -left-5 z-10 absolute mt-[65px] w-[100px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
              >
                <ul className="py-1">
                
                  <li
                  onClick={()=>userses && userses.data.role === "mahasiswa"?navigate("/profile"):navigate("/admin/profile")}
                    className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                  >
                     Profile

                  </li>
                
                  <li
                   onClick={()=>{
                   
                    dispatch(setPanel(!PanelClick))}
                  }
                    className="flex justify-between   px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                  >
                    Panel    <span className={`text-right   font-['poppins'] font-semibold ${PanelClick?" text-green-500" :"text-red-500"}`} >{PanelClick? "ON":"OFF"}</span>
                  </li>
                  <li
                    onClick={LogoutClick}
                    className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <ProfileLoadingTop />
        )}
      </nav>
    </>
  );
};

export default SidebarTop;
