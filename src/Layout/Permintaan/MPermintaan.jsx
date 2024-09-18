import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resetAlert, setAlert } from "../../App/Features/AuthSlice";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from "react-router-dom";
export const MPermintaan = ({ toggleClose, data }) => {
  const [ToNext, setToNext] = useState(false);
  const PageNext = () => setToNext(!ToNext);
  const [Form, setForm] = useState({
    _mhsID: null,
    _dosenID: null,
    _kompetensiID: null,
    _ruanganID: null,
    _jamID: null,
    tanggal: null,
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation()
  const handleSubmit = (e) => {
    e.preventDefault();
 
    axios
      .post(`${process.env.REACT_APP_API_URL}/admin/permintaan/add`, Form, {
        headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
      })
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
        <form
          onSubmit={handleSubmit}
          className="relative bg-[#F0F0F0] rounded-lg shadow-lg w-[340px]"
        >
          <div className={`p-6 ${ToNext && "hidden"} `}>
            <h2 className="text-[25px] font-[poppins] text-[#252B48] gap font-semibold">
              Buat permintaan
            </h2>

            <div className="my-4 mx-3">
              <label
                className=" text-[20px] text-[#252B48] font-[poppins]   font-semibold"
                htmlFor="x"
              >
                Nama Mahasiswa
              </label>
              <select
                onChange={(e) => {
                  setForm({ ...Form, _mhsID: e.target.value });
                }}
                className="my-2  font-[poppins] text-center bg-[#DFDFE0] optional:py-3   w-full h-[45px] rounded-md  px-3"
              >
                <option selected disabled className="h-[45px] text-[12px]">
                  -- Pilih Mahasiswa --
                </option>
                {data.mahasiswa &&
                  data.mahasiswa.map((res) => {
                    return (
                      <option value={res._id} className="text-[12px]">
                        {res.mhs_name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="my-4 mx-3">
              <label
                className=" text-[20px] text-[#252B48] font-[poppins] font-semibold"
                htmlFor="x"
              >
                Nama Dosen
              </label>
              <select
                onChange={(e) => {
                  setForm({ ...Form, _dosenID: e.target.value });
                }}
                className="my-2 font-[poppins] text-center bg-[#DFDFE0] optional:py-3   w-full h-[45px] rounded-md  px-3"
              >
                <option selected disabled className="text-[12px] ">
                  -- Pilih Dosen --
                </option>
                {data.dosen &&
                  data.dosen.map((res) => {
                    return (
                      <option value={res._id} className="text-[12px]">
                        {res.nama_dosen}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="my-4 mx-3">
              <label
                className=" text-[20px] text-[#252B48] font-[poppins] font-semibold"
                htmlFor="x"
              >
                Kompetensi
              </label>
              <select
                onChange={(e) => {
                  setForm({ ...Form, _kompetensiID: e.target.value });
                }}
                className="my-2 font-[poppins] text-center bg-[#DFDFE0] optional:py-3   w-full h-[45px] rounded-md  px-3"
              >
                <option selected disabled className="text-[12px]">
                  -- Pilih Kompetensi --
                </option>
                {data.kompetensi &&
                  data.kompetensi.map((res) => {
                    return (
                      <option value={res._id} className="text-[12px]">
                        {res.nama_kompetensi}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className={`p-6 ${!ToNext && "hidden"} `}>
            <h2 className="text-[25px] font-[poppins] text-[#252B48] font-semibold">
              Tambah Ruangan
            </h2>
            <div className="my-4 mx-3">
              <label
                className=" text-[20px] text-[#252B48] font-[poppins] font-semibold"
                htmlFor="x"
              >
                Nama Ruangan
              </label>
              <select
                onChange={(e) => {
                  setForm({ ...Form, _ruanganID: e.target.value });
                }}
                className="my-2 font-[poppins] text-center bg-[#DFDFE0] optional:py-3   w-full h-[45px] rounded-md  px-3"
              >
                <option disabled selected className="  ">
                  -- Pilih Ruangan --
                </option>
                {data.ruangan &&
                  data.ruangan.map((res) => {
                    return (
                      <option value={res._id} className="text-[12px]">
                        {res.nama_ruangan}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="my-4 mx-3">
              <label
                className=" text-[20px] text-[#252B48] font-[poppins] font-semibold"
                htmlFor="x"
              >
                Waktu Peminjaman
              </label>
              <input
                onChange={(e) => {
                  setForm({ ...Form, tanggal: e.target.value });
                }}
                placeholder="ex: Tengah"
                autoComplete="off"
                className="my-2 text-center font-[poppins] bg-[#DFDFE0]   w-full h-[45px] rounded-md  px-3"
                name="x"
                type="date"
              />
              <select
                onChange={(e) => {
                  setForm({ ...Form, _jamID: e.target.value });
                }}
                className="my-2 font-[poppins] text-center bg-[#DFDFE0] optional:py-3   w-full h-[45px] rounded-md  px-3"
              >
                <option disabled selected className="  ">
                  -- Pilih Jam Prak --
                </option>
                {data.jam &&
                  data.jam.map((res) => {
                    return (
                      <option value={res._id} className="text-[12px]">
                        {res.jam_mulai} - { res.jam_selesai}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="p-3 bg-[#FFFFFF] flex justify-end">
            <button
              onClick={toggleClose}
              className="px-4 mx-1 py-2 text-[#F0F0F0] bg-[#252B48] rounded"
            >
              Cancel
            </button>
            {!ToNext ? (
              <div
                onClick={PageNext}
                className="px-4 cursor-pointer mx-1 py-2 text-[#252B48] ring-2 ring-[#252B48] hover:text-[#F0F0F0] hover:bg-[#252B48] rounded"
              >
                Next
              </div>
            ) : (
              <button
                type="submit"
                className="px-4 mx-1 py-2 text-[#252B48] ring-2 ring-[#252B48] hover:text-[#F0F0F0] hover:bg-[#252B48] rounded"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};
