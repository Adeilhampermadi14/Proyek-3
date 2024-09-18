import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { resetAlert, setAlert } from "../../App/Features/AuthSlice";
import Cookie from 'js-cookie'
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export const MEditRuangan = ({ toggleClose,data}) => {
  const [Form, setForm] = useState({
    nama_ruangan: data.nama_ruangan,
    lantai: data.lantai,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/admin/ruangan/edit/${data._id}`, Form,{headers:{Authorization: `Bearer ${Cookies.get('accessToken')}`}})
      .then((res) => {
        dispatch(
          setAlert({ show: true, status: true, message: res.data.message })
        );
        toggleClose();
      })
      .catch((res) => {
        
      
        dispatch(
          setAlert({
            show: true,
            status: false,
            message: res.response.data.message,
          })
        );
        toggleClose();
         
      });
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <form  onSubmit={handleSubmit} className="relative bg-[#F0F0F0] rounded-lg shadow-lg w-96">
          <div className="p-6">
            <h2 className="text-[25px] font-[poppins] text-[#252B48] font-semibold">
              Edit Ruangan
            </h2>

            <div className="my-4 mx-3">
              <label
                className=" text-[20px] text-[#252B48] font-[poppins] font-semibold"
                htmlFor="x"
              >
                Nama Ruangan
              </label>
              <input
                onChange={(e) =>
                  setForm({ ...Form, nama_ruangan: e.target.value })
                }
                defaultValue={data.nama_ruangan && data.nama_ruangan}
                placeholder="ex: Tengah"
                autoComplete="off"
                className="my-2 font-[poppins] bg-[#DFDFE0]   w-full h-[45px] rounded-md  px-3"
                type="text"
              />
            </div>
            <div className="my-4 mx-3">
              <label
                className=" text-[20px] text-[#252B48] font-[poppins] font-semibold"
                htmlFor="x"
              >
                Lokasi Lantai
              </label>
              <input
                onChange={(e) => setForm({ ...Form, lantai: e.target.value })}
                defaultValue={data.lantai && data.lantai}
                placeholder="ex: Lantai 9"
                autoComplete="off"
                className="my-2 w-full h-[45px] font-[poppins] bg-[#DFDFE0]  rounded-md  px-3"
                type="number"
              />
            </div>
          </div>
          <div className="p-3 bg-[#FFFFFF] text-right">
            <button
              onClick={toggleClose}
              className="px-4 mx-1 py-2 text-[#F0F0F0] bg-[#252B48] rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 mx-1 py-2 text-[#252B48] ring-2 ring-[#252B48] hover:text-[#F0F0F0] hover:bg-[#252B48] rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
