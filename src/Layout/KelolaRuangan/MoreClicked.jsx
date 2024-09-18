import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetMore, setMore, setSearch } from "../../App/Features/AuthSlice";
import { disableInstantTransitions } from "framer-motion";

export const MoreClicked = ({
  ClickTambahData,
  ClickToggleDown,
  toggleDdown,
}) => {

  const { MoreClick } = useSelector((state) => state.moreSlice);
  const dispatch = useDispatch();
  const clickedMore = (param) => {
    dispatch(setMore(param));
  };
 
  const { SearchResult } = useSelector((state) => state.searchSlice);

  const handleSearchChange =  (e) => {
    dispatch(setSearch(e.target.value));
  };
 
  const ClearMore = () => {
    dispatch(resetMore());
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-3 w-[340px] md:w-full  h-max ">
        <div className="w-full h-max flex">
          <div className="relative  flex  items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="58"
              viewBox="0 0 55 58"
              fill="none"
              className="absolute left-2 w-[35px]"
            >
              <g filter="url(#filter0_d_57_561)">
                <path
                  d="M26.5138 43.2402C36.856 43.2402 45.24 34.8562 45.24 24.514C45.24 14.1718 36.856 5.78784 26.5138 5.78784C16.1716 5.78784 7.78766 14.1718 7.78766 24.514C7.78766 34.8562 16.1716 43.2402 26.5138 43.2402Z"
                  stroke="#252B48"
                  stroke-width="6.45161"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M39.5381 38.5109L46.8798 45.8335"
                  stroke="#252B48"
                  stroke-width="6.45161"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_57_561"
                  x="-2"
                  y="0"
                  width="58"
                  height="58"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_57_561"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_57_561"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <input
          value={SearchResult}
                      onChange={handleSearchChange}
            placeholder="Cari Ruangan"
            id="Search"
            className=" text-[23px] placeholder:text-[23px] w-full h-[51px] rounded-xl pl-[60px] placeholder:font-[poppins]"
            type="search"
          />
        </div>
        <div className="w-full md:w-max flex font-[poppins] text-[#F0F0F0] gap-3 ">
          <button
            onClick={ClickTambahData}
            className="w-full md:w-[110px] lg:w-[170px] xl:w-[221px] h-[51px] text-[13px] rounded-md bg-[#252B48]"
          >
            Tambah Data
          </button>
          <div className="w-full md:w-max relative inline-block text-left">
            <button
              onClick={ClickToggleDown}
              className="w-full md:w-[110px] lg:w-[170px] xl:w-[221px] h-[51px] text-[13px] rounded-md bg-[#252B48] px-4 py-2"
            >
              Lainnya
            </button>
            <div
              className={`${
                !toggleDdown && "hidden"
              } origin-top-right z-10 absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
            >
              <ul className="py-1">
                <li
                  // onClick={() => clickedMore("MHS_NOT_VERIFY")}
                  className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Comingsoon 🙌
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="flex  w-full h-max px-2 -mt-3">
       {MoreClick === "MHS_NOT_VERIFY"? (  <li
          onClick={ClearMore}
          className="text-[12px] cursor-pointer md:text-[14px] rounded-full font-[poppins] bg-[#252B48] text-[#F0F0F0] px-3 py-[6px] "
        >
          Belum verify
        </li>):""}
        {MoreClick === "MHS_VERIFY"? (  <li
          onClick={ClearMore}
          className="text-[12px] cursor-pointer md:text-[14px] rounded-full font-[poppins] bg-[#252B48] text-[#F0F0F0] px-3 py-[6px] "
        >
          Sudah verify
        </li>):""}
      
      </ul>
    </>
  );
};
