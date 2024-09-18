import React, { useEffect } from "react";
import { useState } from "react";
import { resetAlert, setAlert } from "../../App/Features/AuthSlice";
import axios from "axios";
import moment from 'moment'
import { useDispatch, useSelector } from "react-redux";
import { CardRounded } from "../Skelaton/CardRounded";
import { Alert } from "../Alert";
import Cookies from "js-cookie";
import { MEditPermintaan } from "./MEditPermintaan";
import { TableDataRow } from "../Skelaton/TableDataRow";

export const CardList = ({ dateData,dataBack }) => {
  const [cardStatus, setCardStatus] = useState({});
  const [Data, setData] = useState(null);
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

  const getPermintaan = async () => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/admin/permintaan`, dateData, {
        headers: { Authorization: `Bearer ${Cookies.get("accessToken")}` },
      })
      .then((res) => {
        dataBack(res.data.data)
        setData(res.data.data);
        
      })
      .catch((res) => {});
  };

  useEffect(() => {
    setData(null)
    clearTimeout();
    getPermintaan();

    if (show) {
      setTimeout(() => {
        dispatch(resetAlert());
      }, 3000);
    }
    setCardStatus({});
  }, [MoreClick, dateData]);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(Data ? Data.length : 0 / 10);

  const currentPageData = Data && Data.slice((currentPage - 1) * 10, currentPage * 10);

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <div className="w-[340px] md:w-full  h-max mb-[120px]    overflow-auto  ">
        <table className="w-full border-spacing-2   font-['poppins']  	 table-fixed   h-[150px] border-collapse border border-slate-500">
          <thead className="sticky -top-1">
            <tr className="  bg-[#252B48] md:text-[15px] text-white text-[13px] ">
              <th className="  	px-2  py-2  w-10  font-semibold ">#</th>
              <th className="    px-2 text-left font-semibold w-[150px]">
                Mahasiswa/i
              </th>
              <th className=" px-2 text-left  w-[100px] font-semibold ">Nim</th>
              <th className="  px-2 text-left font-semibold w-[150px]">
                Dosen
              </th>
              <th className=" px-2 text-left font-semibold w-[150px]">
                Kompetensi
              </th>
              <th className="  px-2 text-left font-semibold w-[100px]">Jam</th>
              <th className="  px-2 text-left font-semibold w-[100px]">
                Tanggal
              </th>
            </tr>
          </thead>
          <tbody className=" overflow-auto">
            {Data ? (
              currentPageData.map((res, index) => {
                return (
                  <tr className="text-[13px] border border-b-[1px] border-[#252B48]">
                    <td className=" w-full h-full justify-center flex items-center  ">
                      {index + 1}
                    </td>
                    <td className=" px-2  ">{res.mahasiswa}</td>
                    <td className=" px-2">{res.nim}</td>
                    <td className="px-2 break-words">{res.dosen}</td>
                    <td className="px-2 break-words">
                      {res.kompetensi}
                    </td>
                    <td className="px-2">
                      {res.jam_mulai} - {res.jam_selesai}
                    </td>
                    <td className="px-2">{moment(res.tanggal).format("DD/MM/YYYY")}</td>
                  </tr>
                );
              })
            ) : (
              <TableDataRow />
            )}
          </tbody>
        </table>
        <div>
          <div className="flex gap-3 mt-4 w-full h-max justify-center">
            {/* Tombol navigasi */}
            <button
              className="ring-1 ring-black rounded-sm px-[4px] py-[0px]"
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Prevs
            </button>
            <button
              className="ring-1 ring-black rounded-sm px-[4px] py-[0px]"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>

          {/* Menampilkan informasi halaman saat ini */}
          <div className="text-center">
            Page {currentPage} of {totalPages}
          </div>
        </div>
      </div>
    </>
  );
};
