import axios from "axios";
import React, { useState } from "react";
import { Alert } from "../Alert";
import { useDispatch, useSelector } from "react-redux";
import { resetAlert, setAlert } from "../../App/Features/AuthSlice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
 
export const MKelolaMahasiswa = ({toggleClose,alert}) => {
  const [next,setNext] = useState(false)

  const dispatch = useDispatch()
  const [Form,setForm] = useState({
    username: null,
    mhs_name: null,
    nim: null,
    no_wa: null,
    password: null,
    profilePath: null,
  })
  const clickNext = () => setNext(!next)
  const navigate = useNavigate()
  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post(`${process.env.REACT_APP_API_URL}/admin/mahasiswa/add`,Form,{headers:{Authorization: `Bearer ${Cookies.get('accessToken')}`}}).then(res=>{
      dispatch(setAlert({show:true,status:true,message:res.data.message}))
      toggleClose()
    }).catch(res=>{
      if (res.response.status === 401) {
        
      dispatch(setAlert({show:true,status:false,message:res.response.data.message}))
      toggleClose()}
    })
  }
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <form onSubmit={handleSubmit} className="relative bg-[#F0F0F0] rounded-lg shadow-lg w-96">
          <div  className="p-6">
            <h2 className="text-[25px] font-[poppins] text-[#252B48] font-semibold">
              Tambah Mahasiswa
            </h2>
            {/* <p className="text-gray-700 mt-4">Isi modal disini...</p> */}
            {!next && (<>
              <div className="my-4 mx-3">
              <label
                className=" text-[20px] text-[#252B48] font-[poppins] font-semibold"
                htmlFor="x"
              >
                Username
              </label>
              <input
              onChange={(e)=>setForm({...Form,username:e.target.value})}
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
                Nama Mahasiswa
              </label>
              <input
              onChange={(e)=>setForm({...Form,mhs_name:e.target.value})}

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
                No Whatsapp
              </label>
              <input
              onChange={(e)=>setForm({...Form,no_wa:e.target.value})}

                placeholder="ex: 088888888888"
                autoComplete="off"
                className="my-2 w-full h-[45px] font-[poppins] bg-[#DFDFE0]  rounded-md  px-3"
                name="x"
                type="number"
              />
            </div>
            </>)}
        
            {next && (<>
              <div className="my-4 mx-3">
              <label
                className=" text-[20px] text-[#252B48] font-[poppins] font-semibold"
                htmlFor="x"
              >
                Nim
              </label>
              <input
              onChange={(e)=>setForm({...Form,nim:e.target.value})}

                placeholder="ex: Kaido D Ningrat"
                autoComplete="off"
                className="my-2 font-[poppins] bg-[#DFDFE0]   w-full h-[45px] rounded-md  px-3"
                name="x"
                type="number"
              />
            </div>
            <div className="my-4 mx-3">
              <label
                className=" text-[20px] text-[#252B48] font-[poppins] font-semibold"
                htmlFor="x"
              >
                Password
              </label>
              <input
              onChange={(e)=>setForm({...Form,password:e.target.value})}

                placeholder="ex: "
                autoComplete="off"
                className="my-2 w-full h-[45px] font-[poppins] bg-[#DFDFE0]  rounded-md  px-3"
                name="x"
                type="text"
              />
            </div>
            </>)}
          
          </div>
          <div className="p-3 bg-[#FFFFFF] flex justify-end">
            <button onClick={toggleClose} className="px-4 mx-1 py-2 text-[#F0F0F0] bg-[#252B48] rounded">
              Cancel
            </button>
            {!next ? (<div  onClick={clickNext} className="px-4 cursor-pointer mx-1 py-2 text-[#252B48] ring-2 ring-[#252B48] hover:text-[#F0F0F0] hover:bg-[#252B48] rounded">
              Next
            </div>):(<button type="submit" className="px-4 mx-1 py-2 text-[#252B48] ring-2 ring-[#252B48] hover:text-[#F0F0F0] hover:bg-[#252B48] rounded">
              Submit
            </button>)}
         
          </div>
        </form>
      </div>
      
    </>
  );
};
