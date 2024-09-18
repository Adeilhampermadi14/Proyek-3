import React, { useState } from "react";
import { resetAlert, setAlert } from "../../App/Features/AuthSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const MKelolaDosen = ({toggleClose}) => {
  const [Form, setForm] = useState({
    nama_dosen: null,
    matkul: null,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/admin/dosen/add`, Form,{headers:{Authorization: `Bearer ${Cookies.get('accessToken')}`}})
      .then((res) => {
        dispatch(
          setAlert({ show: true, status: true, message: res.data.message })
        );
        toggleClose();
      })
      .catch((res) => {
        if (res.response.status === 401) {
          dispatch(setAlert({show:true,status:false,message:res.response.data.message,sessionExp:true}))
           
          }else{
        dispatch(
          setAlert({
            show: true,
            status: false,
            message: res.response.data.message,
          })
        );
        toggleClose();}
      });
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <form  onSubmit={handleSubmit} className="relative bg-[#F0F0F0] rounded-lg shadow-lg w-96">
          <div className="p-6">
            <h2 className="text-[25px] font-[poppins] text-[#252B48] font-semibold">
              Tambah Dosen
            </h2>
            <div className="my-4 mx-3">
              <label
                className=" text-[20px] text-[#252B48] font-[poppins] font-semibold"
                htmlFor="x"
              >
                Nama Dosen
              </label>
              <input
              onChange={(e)=>setForm({...Form,nama_dosen:e.target.value})}
                placeholder="ex: Kaido D Ningrat"
                autoComplete="off"
                className="my-2 font-[poppins] bg-[#DFDFE0]   w-full h-[45px] rounded-md  px-3"
                name="x"
                type="text"
              />
            </div>
            <div className="my-4 mx-3">
              <label
                className=" text-[20px] text-[#252B48] font-[poppins] font-semibold"
                htmlFor="x"
              >
                Nama Matkul
              </label>
              <input
                 onChange={(e)=>setForm({...Form,matkul:e.target.value})}
                placeholder="ex: Anatomi"
                autoComplete="off"
                className="my-2 w-full h-[45px] font-[poppins] bg-[#DFDFE0]  rounded-md  px-3"
                name="x"
                type="text"
              />
            </div>
          </div>
          <div className="p-3 bg-[#FFFFFF] text-right">
            <button onClick={toggleClose} className="px-4 mx-1 py-2 text-[#F0F0F0] bg-[#252B48] rounded">
              Cancel
            </button>
            <button className="px-4 mx-1 py-2 text-[#252B48] ring-2 ring-[#252B48] hover:text-[#F0F0F0] hover:bg-[#252B48] rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
