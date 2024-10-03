import React, { useEffect, useState } from 'react'
import Avatar from "../assets/hero.png";
import Countdown from './Countdown';
import axios from 'axios';
import Cookies from 'js-cookie';
export const AuthHeader = () => {
 
  const [data,setdata] = useState(  {
    total_mahasiswa: 0,
    total_dosen: 0,
    total_kompetensi: 0,
    total_matkul: 0,
    total_ruangan: 0,
  },)
  const [sessionExp,SetSessionExp] = useState(false)
  const getTotals = async ()=>{
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/totalsdata`,{ headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` } }
      ).then((res)=>{
setdata(res.data.data[0])
      }).catch(res=>res)
  }
  useEffect(()=>{
    getTotals()
  },[])
  return (
    <>
      
      <header className="gap-5 flex flex-col sm:pr-[0px] w-[284px]  lg:px-0  md:w-auto lg:w-[870px]">
        <aside className="shadow-md flex h-[238px] md:h-[430px] xl:h-[460px]  bg-[#252B48] rounded-lg lg:rounded-l-lg">
          <figure className="relative top-[-33px] left-[-37px] md:left-[-55px] md:top-[-50px] h-auto">
            <img
              className="w-[217px] md:w-[357px] lg:w-[377px] xl:w-[400px] 2xl:w-[400px]   sm:w-[217px]"
              src={Avatar}
              alt=""
            />
          </figure>
          <div className="font-[poppins] top-[40px]   text-[#F0F0F0]  h-max relative">
              <div className="ml-[-100px] lg:ml-[-160px] absolute lg:static md:ml-[-200px]   lg:w-auto w-[150px] md:w-[200px] ">
                <h1 className="text-[20px]  md:text-[35px] lg:text-[50px] xl:text-[80px] font-semibold">
                  
                </h1>
                <h2 className="text-[15px]  md:text-[30px] lg:text-[30px] xl:text-[40px]">
                 Peminjaman Ruangan Lab
                </h2>
              </div>
            </div>
        </aside>
        <main className="ring-[#252B48] hidden  -sm  lg:block   shadoweria rounded-lg lg:rounded-r-lg w-full lg:w-[100%] h-32 lg:h-[132px]">
          <ul className="flex items-center h-full justify-around ">
            <li className="text-center font-[poppins] text-[#252B48]">
          
             <Countdown  finalValue={data.total_ruangan} etcValue={data.total_ruangan >= 100?"+":""}  Classvalue={"lg:text-[41px] xl:text-[51px] md:text-[21px] font-extrabold"} />
              <h2 className="-mt-4 lg:text-[17px] md:text-[10px]  xl:text-[20px] font-semibold">ruangan</h2>
            </li>
            <li className="font-[poppins] text-center text-[#252B48]">
            <Countdown finalValue={data.total_matkul} etcValue={data.total_matkul >= 100?"+":""} Classvalue={"lg:text-[41px] xl:text-[51px] md:text-[21px] font-extrabold"} />
              <h2 className="-mt-4 lg:text-[17px] md:text-[10px]  xl:text-[20px] font-semibold">matkul</h2>
            </li>
            <li className="font-[poppins] text-center text-[#252B48]">
            <Countdown finalValue={data.total_mahasiswa} etcValue={data.total_mahasiswa >= 100?"+":""} Classvalue={"lg:text-[41px] xl:text-[51px] md:text-[21px] font-extrabold"}  />
              <h2 className="-mt-4 lg:text-[17px] md:text-[10px]  xl:text-[20px] font-semibold">mahasiswa</h2>
            </li>
            <li className="font-[poppins] text-[#252B48] text-center">
            <Countdown  finalValue={data.total_kompetensi} etcValue={data.total_kompetensi >= 100?"+":""}  Classvalue={"lg:text-[41px] xl:text-[51px] md:text-[21px] font-extrabold"} />
              <h2 className="-mt-4 lg:text-[17px] md:text-[10px]  xl:text-[20px] font-semibold">kompetensi</h2>
            </li>
            <li className="font-[poppins] text-[#252B48] text-center">
            <Countdown  finalValue={data.total_dosen} etcValue={data.total_dosen >= 100?"+":""}  Classvalue={"lg:text-[41px] xl:text-[51px] md:text-[21px] font-extrabold"} />
              <h2 className="-mt-4 lg:text-[17px] md:text-[10px]  xl:text-[20px] font-semibold">dosen</h2>
            </li>
           
          </ul>
        </main>
      </header>
    </>
  )
}
