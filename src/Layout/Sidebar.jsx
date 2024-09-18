import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UserSess, reset, setClickStatus } from "../App/Features/AuthSlice";

import axios from "axios";
import { ProfileLoading } from "./Skelaton/ProfileLoading";
import Cookies from "js-cookie";
 
export const Sidebar = ({ active }) => {
  const [toggleProfil, setToggleProfil] = useState(false);
  const [profile, setProfile] = useState([]);
  const dispatch = useDispatch();
  const clickStatus = useSelector((state) => state.sidebar.clickStatus);
  const { isSuccess, userses, isLoading, isError } = useSelector(
    (state) => state.auth
  );

  const SideClicked = (key) => {
    const newClickStatus = Object.keys(clickStatus).reduce((acc, item) => {
      acc[item] = false;
      return acc;
    }, {});
    newClickStatus[key] = true;
    dispatch(setClickStatus(newClickStatus));
   };

  const onclickProfil = () => setToggleProfil(!toggleProfil);
  const navigate = useNavigate();
  const LogoutClick = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/logout`).then((res) => {
      if (res.data.status === 200) {
        Cookies.remove('accessToken',{expires:0})
        dispatch(reset());
        navigate("/login");
      }
    });
  };

  useEffect(() => {
    dispatch(UserSess());
  }, []);
 
  if (isError) {
    navigate("/login");
  }
  useEffect(() => {
    SideClicked(active);
  }, [active]);

  return (
    <>
      <nav className="mx-4     rounded-md bg-[#252B48] w-[326px] h-full">
        <ul className="text-[#F0F0F0]  py-[48px] font-[poppins]">
          <li className="mx-[27px] flex mb-[46px] items-center">
            {userses ? (
              <>
                <div
                  onClick={onclickProfil}
                  className=" cursor-pointer mr-[18px] ring-2 ring-[#FF9B50] rounded-full w-[80px] h-[80px]"
                >
                  <div
                    className={`${
                      !toggleProfil && "hidden"
                    }  inset-x-0 left-[35px] z-10 absolute mt-[85px] w-[100px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                  >
                    <ul className="py-1">
                      
                      <li
                      onClick={()=>navigate("/admin/profile")}
                        className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </li>
                      <li
                        onClick={LogoutClick}
                        className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </li>
                    </ul>
                    {/* </div> */}
                  </div>
                </div>

                <div className="">
                  <h1 className="text-[25px] font-semibold  first-letter:uppercase">
                    {userses && userses.data.role === "_adminX69_"
                      ? "admin"
                      : "mahasiswa"}
                  </h1>
                  <h2 className="text-[20px]  font-medium -mt-[4px]">
                    {userses && userses.data.mhs_name}
                  </h2>
                  <div></div>
                </div>
              </>
            ) : (
              <>
               <ProfileLoading />
              </>
            )}
          </li>
          <Link to={"/admin/home"}>
            <li
              onClick={() => SideClicked("HomeIsClicked")}
              className={`px-[27px] py-2 cursor-pointer text-[26px] ${
                clickStatus.HomeIsClicked
                  ? " bg-[#FF9B50]  text-[#252B48]"
                  : "text-[#F0F0F0]"
              }`}
            >
              Home
            </li>
          </Link>
          <li
            onClick={() => SideClicked("ResourceIsClicked")}
            className={` py-2 cursor-pointer ease-in-out duration-300 text-[26px]`}
          >
            <button
              className={` px-[27px] text-start    w-full h-full  ${
                clickStatus.ResourceIsClicked
                  ? " bg-[#FF9B50]  text-[#252B48] py-2"
                  : "text-[#F0F0F0]"
              } `}
            >
              Kelola Data
            </button>
            {clickStatus.ResourceIsClicked && (
              <ul className="px-[27px]  ml-[27px]">
                {/* Konten dropdown Report Data */}
                <li className="text-[#F0F0F0] bg-[#252B48]">
                  <Link to={"/admin/kelolaruangan"}>Kelola Ruangan</Link>
                </li>
                <li className="text-[#F0F0F0] bg-[#252B48]">
                  <Link to={"/admin/kelolajam"}>Kelola Jam</Link>
                </li>
                <li className="text-[#F0F0F0] bg-[#252B48]">
                  <Link to={"/admin/keloladosen"}>Kelola Dosen</Link>
                </li>
                <li className="text-[#F0F0F0] bg-[#252B48]">
                  <Link to={"/admin/kelolakompetensi"}>Kelola Kompetensi</Link>
                </li>
                <li className="text-[#F0F0F0] bg-[#252B48]">
                  <Link to={"/admin/kelolamahasiswa"}>Kelola Mahasiswa</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            onClick={() => SideClicked("ReportIsClicked")}
            className={` py-2 cursor-pointer text-[26px]`}
          >
            <button
              className={` px-[27px] text-start   w-full h-full  ${
                clickStatus.ReportIsClicked
                  ? " bg-[#FF9B50]  text-[#252B48] py-2"
                  : "text-[#F0F0F0]"
              } `}
            >
              Laporan Data
            </button>
            {clickStatus.ReportIsClicked && (
              <ul className="px-[27px] ml-[27px]">
                {/* Konten dropdown Report Data */}
                <li className="text-[#F0F0F0] bg-[#252B48]">
                
                  <Link to={"/admin/rekapkompetensi"}>Rekap Kompetensi</Link>
                </li>
                <li className="text-[#F0F0F0] bg-[#252B48]">
                <Link to={"/admin/rekapruangan"}>Rekap Ruangan</Link>
                  </li>
              </ul>
            )}
          </li>
          <Link to={"/admin/permintaan"}>
            <li
              onClick={() => SideClicked("RequestIsClicked")}
              className={`px-[27px] py-2 cursor-pointer text-[26px] 
              ${
                clickStatus.RequestIsClicked
                  ? " bg-[#FF9B50]  text-[#252B48]"
                  : "text-[#F0F0F0]"
              }`}
            >  
              Permintaan
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
export const SidebarMahasiswa = ({ active }) => {
  const [toggleProfil, setToggleProfil] = useState(false);
  const [profile, setProfile] = useState([]);
  const dispatch = useDispatch();
  const clickStatus = useSelector((state) => state.sidebar.clickStatus);
  const { isSuccess, userses, isLoading, isError } = useSelector(
    (state) => state.auth
  );

  const SideClicked = (key) => {
    const newClickStatus = Object.keys(clickStatus).reduce((acc, item) => {
      acc[item] = false;
      return acc;
    }, {});
    newClickStatus[key] = true;
    dispatch(setClickStatus(newClickStatus));
   };

  const onclickProfil = () => setToggleProfil(!toggleProfil);
  const navigate = useNavigate();
  const LogoutClick = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/logout`).then((res) => {
      if (res.data.status === 200) {
        Cookies.remove('accessToken',{expires:0})
        dispatch(reset());
        navigate("/login");
      }
    });
  };

  useEffect(() => {
    dispatch(UserSess());
  }, []);
  
  if (isError) {
    navigate("/login");
  }
  useEffect(() => {
    SideClicked(active);
  }, [active]);

  return (
    <>
      <nav className="mx-4      rounded-md bg-[#252B48] w-[326px]  h-full">
        <ul className="text-[#F0F0F0]  py-[48px] font-[poppins]">
          <li className="mx-[27px] flex mb-[46px] items-center">
            {userses ? (
              <>
                <div
                  onClick={onclickProfil}
                  className=" cursor-pointer mr-[18px] ring-2 ring-[#FF9B50] rounded-full w-[80px] h-[80px]"
                >
                  <div
                    className={`${
                      !toggleProfil && "hidden"
                    }  inset-x-0 left-[35px] z-10 absolute mt-[85px] w-[100px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                  >
                    <ul className="py-1">
                      
                      <li
                      onClick={()=>navigate("/profile")}
                        className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </li>
                      <li
                        onClick={LogoutClick}
                        className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </li>
                    </ul>
                    {/* </div> */}
                  </div>
                </div>

                <div className="">
                  <h1 className="text-[25px] font-semibold  first-letter:uppercase">
                  {userses && userses.data.role}
                  </h1>
                  <h2 className="text-[20px]  font-medium -mt-[4px]">
                    {userses && userses.data.mhs_name}
                  </h2>
                  <div></div>
                </div>
              </>
            ) : (
              <>
               <ProfileLoading />
              </>
            )}
          </li>
          <Link to={"/home"}>
            <li
              onClick={() => SideClicked("HomeIsClicked")}
              className={`px-[27px] py-2 cursor-pointer text-[26px] ${
                clickStatus.HomeIsClicked
                  ? " bg-[#FF9B50]  text-[#252B48]"
                  : "text-[#F0F0F0]"
              }`}
            >
              Home
            </li>
          </Link>
          <Link to={"/jadwal-peminjaman"}>
            <li
              onClick={() => SideClicked("ReportIsClicked")}
              className={`px-[27px] py-2 cursor-pointer text-[26px] ${
                clickStatus.ReportIsClicked
                  ? " bg-[#FF9B50]  text-[#252B48]"
                  : "text-[#F0F0F0]"
              }`}
            >
              Jadwal peminjaman
            </li>
          </Link>
      
          <Link to={"/permintaan"}>
            <li
              onClick={() => SideClicked("RequestIsClicked")}
              className={`px-[27px] py-2 cursor-pointer text-[26px] 
              ${
                clickStatus.RequestIsClicked
                  ? " bg-[#FF9B50]  text-[#252B48]"
                  : "text-[#F0F0F0]"
              }`}
            >  
              Permintaan
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};
