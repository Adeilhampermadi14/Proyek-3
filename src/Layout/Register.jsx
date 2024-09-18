import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert } from "./Alert";

export const Register = ({ IsLogin }) => {
  document.title = "Register";
  const [tonext, setnext] = useState(false);
  const changeNext = () => {
    setnext(!tonext);
  };
  const [alerts, setAlerts] = useState({
    message: null,
    status: null,
    show: null,
  });
  const [form, setForm] = useState({
    username: null,
    mhs_name: null,
    nim: null,
    no_wa: null,
    password: null,
    profilePath: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlerts((prevAlerts) => ({ ...prevAlerts, show: false }));
    clearTimeout();
    await axios
      .post(`${process.env.REACT_APP_API_URL}/register`, form)
      .then((res) => {
        console.log(res.data);
        setAlerts({
          ...alerts,
          message: res.data.message,
          show: true,
          status: true,
        });
        setTimeout(() => {
          setAlerts((prevAlerts) => ({ ...prevAlerts, show: false }));
        }, 5000);
      })
      .catch((res) => {
        console.log(res);
        setAlerts({
          ...alerts,
          message: res.response.data.message,
          show: true,
          status: false,
        });
        setTimeout(() => {
          setAlerts((prevAlerts) => ({ ...prevAlerts, show: false }));
        }, 5000);
      });
  };

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5" action="">
        <div className="md:my-7 my-3 text-center md:text-start">
          <h1 className="font-[poppins] text-2xl lg:text-4xl text-center">
            Registrasi
          </h1>
        </div>
        {!tonext && (
          <>
            <div className="w-full lg:w-[381px]">
              <input
                onChange={(e) => {
                  setForm({ ...form, username: e.target.value });
                }}
                className="w-full h-[40px] lg:h-[50px] rounded-md bg-[#DFDFE0] text-xl lg:text-2xl placeholder-poppins px-4 lg:px-8 placeholder-text-xl"
                placeholder="username"
                type="text"
              />
            </div>
            <div className="w-full lg:w-[381px]">
              <input
                onChange={(e) => {
                  setForm({ ...form, no_wa: e.target.value });
                }}
                className="w-full h-[40px] lg:h-[50px] rounded-md bg-[#DFDFE0] text-xl lg:text-2xl placeholder-poppins px-4 lg:px-8 placeholder-text-xl"
                placeholder="no whatsapp"
                type="number"
              />
            </div>
            <div className="w-full lg:w-[381px]">
              <input
                onChange={(e) => {
                  setForm({ ...form, mhs_name: e.target.value });
                }}
                className="w-full h-[40px] lg:h-[50px] rounded-md bg-[#DFDFE0] text-xl lg:text-2xl placeholder-poppins px-4 lg:px-8 placeholder-text-xl"
                placeholder="nama mhs"
                type="text"
              />
            </div>
          </>
        )}

        {tonext && (
          <>
            <div className="w-full lg:w-[381px]">
              <input
                onChange={(e) => {
                  setForm({ ...form, nim: e.target.value });
                }}
                className="w-full h-[40px] lg:h-[50px]  rounded-md bg-[#DFDFE0] text-xl lg:text-2xl placeholder-poppins px-4 lg:px-8 placeholder-text-xl"
                placeholder="nim"
                type="number"
              />
            </div>
            <div className="w-full lg:w-[381px]">
              <input
                onChange={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
                className="w-full h-[40px] lg:h-[50px]  rounded-md bg-[#DFDFE0] text-xl lg:text-2xl placeholder-poppins px-4 lg:px-8 placeholder-text-xl"
                placeholder="password"
                type="password"
              />
            </div>
          </>
        )}

        <div className="mt-[30px]">
          {tonext ? (
            <button
              className="w-full lg:w-[381px] h-[40px] lg:h-[60px]  bg-[#252B48] font-poppins rounded-md text-xl lg:text-2xl text-[#DFDFE0]"
              type="submit"
            >
              Daftar
            </button>
          ) : (
            <div
              onClick={setnext}
              className="w-full cursor-pointer flex items-center justify-center lg:w-[381px] h-[40px] lg:h-[60px]  bg-[#252B48] font-poppins rounded-md text-xl lg:text-2xl text-[#DFDFE0]"
            >
              Next
            </div>
          )}
        </div>
        <div className="text-center mt-[20px] md:mt-[40px]">
          <h2 className="font-[poppins] ">
            sudah punya akun ?,{" "}
            <span
              onClick={() => IsLogin(true)}
              className="cursor-pointer underline"
            >
              login
            </span>
          </h2>
        </div>
      </form>
      {alerts.show && <Alert message={alerts.message} status={alerts.status} />}
    </>
  );
};
