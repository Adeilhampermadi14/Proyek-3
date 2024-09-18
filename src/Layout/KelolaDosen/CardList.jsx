import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetAlert, setAlert } from "../../App/Features/AuthSlice";
import { Alert } from "../Alert";
import { CardRounded } from "../Skelaton/CardRounded";
import { MEditDosen } from "./MEditDosen";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { OverleySessionOver } from "../Skelaton/OverleySessionOver";

export const CardList = () => {
  const [cardStatus, setCardStatus] = useState({});
  const [cards, setCardS] = useState(null);
  const [clickEdit, setEditClick] = useState([]);
  const { show, message, status } = useSelector((state) => state.alertSlice);
  const { MoreClick } = useSelector((state) => state.moreSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate()
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
  const [sessionExp,SetSessionExp] =useState(null) 
  const { SearchResult } = useSelector((state) => state.searchSlice);
  const getDosen = async () => {
    setCardS(null);
 
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/admin/dosen/search`,
        { keyword: SearchResult },
        { headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` } }
      )
      .then((res) => {
        setCardS(res.data.data);
      })
      .catch((res) => {
        if (res.response.status === 401) {
          SetSessionExp(true)
      
          
          }
      });
  };
  const deleteRuangan = async (id) => {
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/admin/dosen/delete/${id}`, {
        headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
      })
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
        );
          }
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
    getDosen();
  }, [show, MoreClick,SearchResult]);
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
            {clickEdit[card._id] && (
              <MEditDosen
                toggleClose={() => toggleEdit(card._id)}
                data={card}
              />
            )}
            <div
              key={card._id}
              className="w-full  shadow-xl  sm:mx-0 md:w-[230px] xl:w-[230px] 2xl:w-[280px] bg-[#FFFFFF] h-[92px] md:h-[140px] ring-2 rounded-md ring-[#252B48]"
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
                <div
                  className={`${
                    !cardStatus[card._id] && "hidden"
                  } origin-top-right z-10 absolute right-0 mt-2 w-[100px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                >
                  <ul className="py-1">
                    <li
                      onClick={() => toggleEdit(card._id)}
                      className="block px-4 cursor-pointer py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                    >
                      Edit
                    </li>
                    <li
                      onClick={() => deleteRuangan(card._id)}
                      className="block px-4 cursor-pointer py-2 text-[13px] text-gray-700 hover:bg-gray-100"
                    >
                      Hapus
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-3 w-full h-full items-center px-5">
                <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full ring-2 ring-[#FF9B50]"></div>
                <ul className="font-[poppins] font-semibold text-[#252B48]">
                  <li className="font-bold first-letter:uppercase">
                    {card && card.nama_dosen.length >= 14
                      ? `${card.nama_dosen.substring(0, 14)}...`
                      : card.nama_dosen}
                  </li>
                  <li className=" first-letter:uppercase">{card.matkul}</li>
                </ul>
              </div>
            </div>
          </>
        ))
      ) : (
        <>
          <div className=" lg:col-span-3 md:col-span-3	text-center">
            <h3 className="font-[poppins] md:text-[20px]">Belum ada data</h3>
          </div>
        </>
      )}
    </>
  );
};
