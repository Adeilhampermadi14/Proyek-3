import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../App/Features/AuthSlice";
import { resetStateLogin } from "../App/Features/AuthSlice";
import "../index.css";
import { Alert } from "./Alert";
import { SpinnerLoading } from "./Skelaton/SpinnerLoading";
import { FaEye, FaEyeSlash, FaLandmark } from "react-icons/fa";

export const Login = ({ IsRegistrasi }) => {
 
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [alerts, setAlerts] = useState({
    message: null,
    status: null,
    show: null,
  });
  const { messageLogin, isLoading } = useSelector((state) => state.authLogin);
  const dispatch = useDispatch();
const [seePassword,SetSeePassword] = useState(false)
const handleseePass = ()=>SetSeePassword(!seePassword)   

  document.title = "Login";
  const Auth = (e) => {
    e.preventDefault();
    setAlerts((prevAlerts) => ({ ...prevAlerts, show: false }));
    clearTimeout();
    dispatch(LoginUser(user)).then();
  };

  useEffect(() => {
    if (messageLogin.message) {
      setAlerts({ message: messageLogin.message, status: false, show: true });
      setTimeout(() => {
        setAlerts((prevAlerts) => ({ ...prevAlerts, show: false }));
      }, 2000);
    }
  }, [messageLogin]);

  useEffect(() => {
    return () => {
      dispatch(resetStateLogin());
    };
  }, []);

  return (
    <>
      <form onSubmit={Auth} className="flex flex-col gap-5">
        <div className="md:my-7 my-3 text-center md:text-start">
          <h1 className="font-[poppins] text-2xl text-center lg:text-4xl">
            Login
          </h1>
        </div>
        <div className="w-full lg:w-[381px]">
          <input
            className="w-full h-[40px]  items lg:h-[60px] rounded-md bg-[#DFDFE0] text-xl lg:text-2xl placeholder-poppins px-4 lg:px-8 placeholder-text-xl"
            placeholder="username"
            type="text"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="w-full relative  lg:w-[381px]">
          <input
            className="w-full h-[40px] lg:h-[60px]  rounded-md bg-[#DFDFE0] text-xl lg:text-2xl placeholder-poppins px-4 lg:px-8 placeholder-text-xl"
            placeholder="password"
            type={seePassword?"text":"password"}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
            <div  onClick={handleseePass} className="absolute cursor-pointer   transform -translate-y-1/2  top-1/2 right-4">{!seePassword ?(<FaEye  />):(<FaEyeSlash />)}</div>
        </div>
        <div className="flex justify-end">
          {/* <h3 className="font-[poppins] font-semibold">Lupa sandi ?</h3> */}
        </div>
        <div>
          <button
            className="w-full lg:w-[381px] h-[40px] lg:h-[60px]  bg-[#252B48] hover: font-poppins rounded-md text-xl lg:text-2xl text-[#DFDFE0]"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="text-center mt-[20px] md:mt-[40px]">
          <h2 className="font-[poppins] ">
            Kamu belum punya akun ?,{" "}
            <span
              onClick={() => IsRegistrasi(false)}
              className=" cursor-pointer underline "
            >
              registrasi
            </span>
          </h2>
        </div>
      </form>
      {isLoading && <SpinnerLoading />}
      {alerts.show && <Alert message={alerts.message} status={alerts.status} />}
    </>
  );
};
