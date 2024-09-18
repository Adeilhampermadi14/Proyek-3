import React, { useEffect } from "react";
import { useState } from "react";
import { resetAlert, setAlert } from "../../../App/Features/AuthSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { CardRounded } from "../../Skelaton/CardRounded";
import { Alert } from "../../Alert";
import Cookies from "js-cookie";
import { MEditPermintaan } from "./MEditPermintaan";
import { useNavigate } from "react-router-dom";
import { FaTruckMonster } from "react-icons/fa";
import { OverleySessionOver } from "../../Skelaton/OverleySessionOver";

export const CardList = ({ data }) => {
  const [cardStatus, setCardStatus] = useState({});
  const [cards, setCardS] = useState(null);
  const [clickEdit, setEditClick] = useState([]);
  const { show, message, status } = useSelector((state) => state.alertSlice);
  const { MoreClick } = useSelector((state) => state.moreSlice);
  const dispatch = useDispatch();
  const toggleCard = (cardId) => {
    if (cardStatus[cardId]) {
      setCardStatus((prevStatus) => {
        const newStatus = {
          [cardId]: !prevStatus[cardId],
        };
        return newStatus;
      });
    }
    setCardStatus((prevStatus) => {
      const newStatus = {
        [cardId]: !prevStatus[cardId],
      };
      return newStatus;
    });
  };
  const toggleEdit = (cardId) => {
 
    setEditClick((prevStatus) => ({
      ...prevStatus,
      [cardId]: !prevStatus[cardId],
    }));
  };
  const navigate = useNavigate()
  const [sessionExp,SetSessionExp] =useState(null) 
  const getPermintaan = async () => {
    if(MoreClick === "PER_NOT_ACC"){
    await axios
      .get(`${process.env.REACT_APP_API_URL}/mahasiswa/permintaan/self/diss`,{headers:{Authorization: `Bearer ${Cookies.get('accessToken')}`}})
      .then((res) => {
       
        setCardS(res.data.data);
     
      })
      .catch((res) => {
        if (res.response.status === 401) {
        
         SetSessionExp(true)
          }
      });
    }else{
      await axios
      .get(`${process.env.REACT_APP_API_URL}/mahasiswa/permintaan/self/acc`,{headers:{Authorization: `Bearer ${Cookies.get('accessToken')}`}})
      .then((res) => {
        
        setCardS(res.data.data);
      })
      .catch((res) => {      if (res.response.status === 401) {
       SetSessionExp(true) 
        }     });
    }
  };
 
  const deletePermintaan = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/admin/permintaan/delete/${id}`,{headers:{Authorization: `Bearer ${Cookies.get('accessToken')}`}})
      .then((res) => {
        dispatch(
          setAlert({ show: true, status: true, message: res.data.message })
        );
      })
      .catch((res) => {
        if (res.response.status === 401) {
          SetSessionExp(true)
          }else{
        dispatch(
          setAlert({
            show: true,
            status: false,
            message: res.response.data.message,
          })
        );}
      });
  };
  useEffect(() => {
    
    clearTimeout();

    if (show) {
      setCardS(null)
      setTimeout(() => {
        dispatch(resetAlert());
      }, 3000);
    }
    if (MoreClick) {
      setCardS(null)
    }
    getPermintaan();
    setCardStatus({})
  }, [show, MoreClick]);
 
  return (
    <>
    {sessionExp && <OverleySessionOver />}
  {show && <Alert message={message} status={status} />}
      {!cards ? (
        <>
          <CardRounded />
          <CardRounded />
          <CardRounded />
        </>
      ) : cards.length > 0 ? (
        cards.map((card) => (
          <>
          {clickEdit[card._id] && <MEditPermintaan toggleClose={()=>toggleEdit(card._id)} datas={card} />}
          <li
            key={card._id}
            className="w-full  shadow-xl  sm:mx-0 lg:w-[230px] xl:w-[230px] 2xl:w-[280px] bg-[#FFFFFF] h-[220px] md:h-[220px] ring-2 rounded-md ring-[#252B48]"
          >
            <div className="relative">
              <div
                onClick={() => toggleCard(card._id)}
                className=" cursor-pointer absolute w-[37px] h-[37px] rounded-md -right-[17px] -top-[17px] bg-[#F0F0F0]"
              >
                <svg
                onClick={toggleCard}
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="37"
                  viewBox="0 0 49 49"
                  fill="none"
                >
                  <path
                    d="M35.133 0C43.4385 0 49 5.831 49 14.504V34.5205C49 43.169 43.4385 49 35.133 49H13.8915C5.586 49 0 43.169 0 34.5205V14.504C0 5.831 5.586 0 13.8915 0H35.133ZM35.476 21.5625C33.859 21.5625 32.536 22.883 32.536 24.5C32.536 26.117 33.859 27.44 35.476 27.44C37.093 27.44 38.3915 26.117 38.3915 24.5C38.3915 22.883 37.093 21.5625 35.476 21.5625ZM24.5 21.5625C22.883 21.5625 21.56 22.883 21.56 24.5C21.56 26.117 22.883 27.44 24.5 27.44C26.117 27.44 27.44 26.117 27.44 24.5C27.44 22.883 26.117 21.5625 24.5 21.5625ZM13.524 21.5625C11.907 21.5625 10.584 22.883 10.584 24.5C10.584 26.117 11.907 27.44 13.524 27.44C15.141 27.44 16.464 26.117 16.464 24.5C16.464 22.883 15.141 21.5625 13.524 21.5625Z"
                    fill="#252B48"
                  />
                </svg>
              </div>
              {!card.status_permintaan && 
                (<>
                   <div
                className={`${
                  !cardStatus[card._id] && "hidden"
                } origin-top-right z-10 absolute right-0 mt-2 w-[100px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
              >
                <ul className="py-1">
               <>
                  <li 
                onClick={()=>toggleEdit(card._id)}
                  className="block  cursor-pointer px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                  >
                    Edit
                  </li>
                  <li
                    onClick={()=>deletePermintaan(card._id)}
                    className="block cursor-pointer px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                  >
                    Hapus
                  </li>
                </>
                </ul>
              </div>
                </>)}
           
            </div>
            <div className="flex gap-3 w-max h-full items-center px-5 mb-[60px]  ">
              <div className="h-full">
                <div className="w-[60px] h-[60px] sm:w-[65px] sm:h-[65px] rounded-md ring-2 ring-[#FF9B50] mt-[20px]"></div>
              </div>
              <ul className="font-[poppins]  font-semibold text-[#252B48]  ">
                <li className="font-bold first-letter:uppercase">{card.mahasiswa}</li>
                <li> 🕵️‍♂️{card.dosen.length >13 ?`${card.dosen.substring(0,13)}...`:card.dosen}</li>
                <li> 📖{card.kompetensi.length > 13 ?`${card.kompetensi.substring(0,13)}...`:card.kompetensi}</li>
                {/* <li> 📚Ukur Jarak</li> */}
                <li> 🚪{card.ruangan.length> 13 ?`${card.ruangan.substring(0,13)}...`:card.ruangan}</li>
                <li> 🪑 Lantai {card.lantai}</li>
                <li> 📅{card.tanggal}</li>
                <li> 🕑{card.jam_mulai} - {card.jam_selesai}</li>
                <li> ⌛ {card.status_permintaan ? "Diterima":"Belum diterima"}</li>
              </ul>
            </div>
          </li>
          </>
        ))
      ) : (
        <>
          <li className=" col-span-1 md:col-span-2 lg:col-span-3	text-center">
            <h3 className="font-[poppins] md:text-[20px]">Belum ada data</h3>
          </li>
        </>
      )}
 
    </>
  );
};
