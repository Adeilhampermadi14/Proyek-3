import React, { useEffect, useState } from 'react'
import Avatar from "../../assets/hero.png";
import SidebarTop from '../SidebarTop';
import { useSelector } from 'react-redux';
import Countdown from '../Countdown';
import axios from 'axios';
import Cookies from 'js-cookie';
import { OverleySessionOver } from '../Skelaton/OverleySessionOver';

export const Main = ({IsMobile}) => {
  const {userses} = useSelector(state=>state.auth)
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
      }).catch(res=>res.response.status === 401 ? SetSessionExp(true):SetSessionExp(false))
  }
  useEffect(()=>{
    getTotals()
  },[])
  return (
    <>
    {sessionExp && <OverleySessionOver />}
       <main className="h-auto w-full gap-7 px-[20px]  sm:px-[60px] flex flex-col   items-center ">
          {IsMobile < 1024 && <SidebarTop />}

          <header className="bg-[#252B48] flex rounded-md w-[331px] sm:w-full h-[303px] lg:h-[460px]">
            <div className=" relative  h-max top-[-50px] left-[-37px] md:left-[-55px] md:top-[-50px]">
              <img className="w-[280px]   lg:w-[400px] " src={Avatar} alt="" />
            </div>
            <div className="font-[poppins] top-[40px]   text-[#F0F0F0]  h-max relative">
              <div className="ml-[-110px] lg:ml-[-160px] absolute lg:static   sm:w-max lg:w-auto w-[150px] ">
                <h1 className="text-[20px] sm:text-[60px] lg:text-[50px] xl:text-[80px] font-semibold">
                  Halo {userses && userses.data.role === "_adminX69_"? "Admin": "Mahasiswa"}
                </h1>
                <h2 className="text-[15px] sm:text-[30px] lg:text-[30px] xl:text-[40px]">
                  Jangan lupa lihat notif yaa
                </h2>
              </div>
            </div>
          </header>

          <div className="ring-[#252B48]  lg:block   shadoweria rounded-lg lg:rounded-r-lg sm:w-full lg:w-[100%] h-[90px] sm:h-[132px]">
            <ul className="flex items-center h-full justify-around gap-2">
              <li className="text-center font-[poppins] text-[#252B48]">
                
              <Countdown finalValue={data.total_ruangan} etcValue={data.total_ruangan >= 100?"+":""} Classvalue={"sm:text-[51px] text-[27px] font-extrabold"} />
                <h2 className="-mt-4 text-[13px]  sm:text-[20px] font-semibold">
                  ruangan
                </h2>
              </li>
              <li className="font-[poppins] text-center text-[#252B48]">
              <Countdown finalValue={data.total_matkul} etcValue={data.total_matkul >= 100?"+":""} Classvalue={"sm:text-[51px] text-[27px] font-extrabold"} />
              
                <h2 className="-mt-4 text-[13px]  sm:text-[20px] font-semibold">
                  matkul
                </h2>
              </li>
              <li className="font-[poppins] text-center text-[#252B48]">
              <Countdown finalValue={data.total_mahasiswa} etcValue={data.total_mahasiswa >= 100?"+":""} Classvalue={"sm:text-[51px] text-[27px] font-extrabold"} />
              
                <h2 className="-mt-4 text-[13px]    sm:text-[20px] font-semibold">
                  mahasiswa
                </h2>
              </li>
              <li className="font-[poppins] text-[#252B48] text-center">
              
              <Countdown finalValue={data.total_kompetensi} etcValue={data.total_kompetensi >= 100?"+":""} Classvalue={"sm:text-[51px] text-[27px] font-extrabold"} />
                <h2 className="-mt-4 text-[13px]   sm:text-[20px] font-semibold">
                  kompetensi
                </h2>
              </li>
              <li className="font-[poppins] text-[#252B48] text-center">
              <Countdown finalValue={data.total_dosen} etcValue={data.total_dosen >= 100?"+":""}   Classvalue={"sm:text-[51px] text-[27px] font-extrabold"} />
               
                <h2 className="-mt-4 text-[13px]   sm:text-[20px] font-semibold">
                  dosen
                </h2>
              </li>
            </ul>
          </div>
        </main></>
  )
}
export const MainUser = ({IsMobile}) => {
  const {userses} = useSelector(state=>state.auth)
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
      }).catch(res=>res.response.status === 401 ? SetSessionExp(true):SetSessionExp(false))
  }
  useEffect(()=>{
    getTotals()
  },[])
  return (
    <>
       <main className="h-auto w-full gap-7 px-[20px]  sm:px-[60px] flex flex-col   items-center ">
          {IsMobile < 1024 && <SidebarTop />}
          <header className="bg-[#252B48] flex rounded-md w-[331px] sm:w-full h-[303px] lg:h-[460px]">
            <div className=" relative  h-max top-[-50px] left-[-37px] md:left-[-55px] md:top-[-50px]">
              <img className="w-[280px]   lg:w-[400px] " src={Avatar} alt="" />
            </div>
            <div className="font-[poppins] top-[40px]   text-[#F0F0F0]  h-max relative">
              <div className="ml-[-110px] lg:ml-[-160px] absolute lg:static   sm:w-max lg:w-auto w-[150px] ">
                <h1 className="text-[20px] sm:text-[60px] lg:text-[50px] xl:text-[80px] font-semibold">
                  Halo {userses && userses.data.role === "_adminX69_"? "Admin": "Mahasiswa"}
                </h1>
                <h2 className="text-[15px] sm:text-[30px] lg:text-[30px] xl:text-[40px]">
                  Selamat datang 
                </h2>
              </div>
            </div>
          </header>

          <div className="ring-[#252B48]  lg:block   shadoweria rounded-lg lg:rounded-r-lg sm:w-full lg:w-[100%] h-[90px] sm:h-[132px]">
            <ul className="flex items-center h-full justify-around gap-2">
              <li className="text-center font-[poppins] text-[#252B48]">
                
              <Countdown finalValue={data.total_ruangan} etcValue={data.total_ruangan >= 100?"+":""} Classvalue={"sm:text-[51px] text-[27px] font-extrabold"} />
                <h2 className="-mt-4 text-[13px]  sm:text-[20px] font-semibold">
                  ruangan
                </h2>
              </li>
              <li className="font-[poppins] text-center text-[#252B48]">
              <Countdown finalValue={data.total_matkul} etcValue={data.total_matkul >= 100?"+":""} Classvalue={"sm:text-[51px] text-[27px] font-extrabold"} />
              
                <h2 className="-mt-4 text-[13px]  sm:text-[20px] font-semibold">
                  matkul
                </h2>
              </li>
              <li className="font-[poppins] text-center text-[#252B48]">
              <Countdown finalValue={data.total_mahasiswa} etcValue={data.total_mahasiswa >= 100?"+":""} Classvalue={"sm:text-[51px] text-[27px] font-extrabold"} />
              
                <h2 className="-mt-4 text-[13px]    sm:text-[20px] font-semibold">
                  mahasiswa
                </h2>
              </li>
              <li className="font-[poppins] text-[#252B48] text-center">
              
              <Countdown finalValue={data.total_kompetensi} etcValue={data.total_kompetensi >= 100?"+":""} Classvalue={"sm:text-[51px] text-[27px] font-extrabold"} />
                <h2 className="-mt-4 text-[13px]   sm:text-[20px] font-semibold">
                  kompetensi
                </h2>
              </li>
              <li className="font-[poppins] text-[#252B48] text-center">
              <Countdown finalValue={data.total_dosen} etcValue={data.total_dosen >= 100?"+":""}   Classvalue={"sm:text-[51px] text-[27px] font-extrabold"} />
               
                <h2 className="-mt-4 text-[13px]   sm:text-[20px] font-semibold">
                  dosen
                </h2>
              </li>
            </ul>
          </div>
        </main></>
  )
}
