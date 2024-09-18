import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAlert } from "../../App/Features/AuthSlice";
import Cookies from "js-cookie";
export const MEditPermintaan = ({ toggleClose, datas }) => {
  const [ToNext, setToNext] = useState(false);
 
  const [data, setdata] = useState({
    mahasiswa: null,
    dosen: null,
    kompetensi: null,
    ruangan: null,
    jam: null,
  });
  const getData = () => {
    const fetchData = async (url) => {
      try {
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
        });
        return response.data.data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    };

    Promise.all([
      fetchData(`${process.env.REACT_APP_API_URL}/admin/mahasiswa`),
      fetchData(`${process.env.REACT_APP_API_URL}/admin/dosen`),
      fetchData(`${process.env.REACT_APP_API_URL}/admin/kompetensi`),
      fetchData(`${process.env.REACT_APP_API_URL}/admin/ruangan`),
      fetchData(`${process.env.REACT_APP_API_URL}/admin/jam`),
    ]).then(([mahasiswa, dosen, kompetensi, ruangan, jam]) => {
      setdata({
        mahasiswa: mahasiswa,
        dosen: dosen,
        kompetensi: kompetensi,
        ruangan: ruangan,
        jam: jam,
      });
    });
  };
  const PageNext = () => setToNext(!ToNext);
  const [Form, setForm] = useState({
    _mhsID: datas._mhsID,
    _dosenID: datas._dosenID,
    _kompetensiID: datas._kompetensiID,
    _ruanganID: datas._ruanganID,
    _jamID: datas._jamID,
    tanggal: datas.tanggal,
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
 
    axios
      .put(`${process.env.REACT_APP_API_URL}/admin/permintaan/edit/${datas._id}`, Form, {
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
  useEffect(() => {
    getData();
  }, []);

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
              Tambah Ruangan
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
             
                {data.mahasiswa &&
                  data.mahasiswa.map((res) => {
                    return (
                      <option  selected={res._id === datas._mhsID?true:false} value={res._id} className="text-[12px]">
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
                
                {data.dosen &&
                  data.dosen.map((res) => {
                    return (
                      <option  selected={res._id === datas._dosenID?true:false} value={res._id} className="text-[12px]">
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
                
                {data.kompetensi &&
                  data.kompetensi.map((res) => {
                    return (
                      <option  selected={res._id === datas._kompetensiID?true:false} value={res._id} className="text-[12px]">
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
                
                {data.ruangan &&
                  data.ruangan.map((res) => {
                    return (
                      <option  selected={res._id === datas._ruanganID?true:false} value={res._id} className="text-[12px]">
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
                defaultValue={datas && datas.tanggal }
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
              
                {data.jam &&
                  data.jam.map((res) => {
                    return (
                      <option  selected={res._id === datas._jamID?true:false}  value={res._id} className="text-[12px]">
                        {res.jam_mulai} - {res.jam_selesai}
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
