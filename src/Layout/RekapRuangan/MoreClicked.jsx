import React, { startTransition, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Datepicker from "react-tailwindcss-datepicker";
import { resetMore, setMore } from "../../App/Features/AuthSlice";
import { motion, Frame, AnimatePresence } from "framer-motion";
import * as XLSX from "xlsx";
export const MoreClicked = ({
  ClickToggleExDown,
  ClickToggleDown,
  toggleDdown,
  toggleExdown,
  dataDate,
  databack
}) => {
  const { MoreClick } = useSelector((state) => state.moreSlice);
  const dispatch = useDispatch();
  const clickedMore = (param) => {
    dispatch(setMore(param));
  };
  const exportToExcel = (data, fileName) => {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  
  };
  const ClearMore = () => {
    dispatch(resetMore());
  };
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
const ExportPdf = ()=>{
  console.log(databack)
  localStorage.setItem("exportDataRuangan", JSON.stringify(databack));

  return window.open("/exportruangan", "_blank");
}
  const handleValueChange = (newValue) => {
    setValue(newValue);
    dataDate(newValue);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-3 w-[340px] md:w-full    h-max ">
        <div className="w-full h-max flex">
          <Datepicker
            value={value}
            onChange={handleValueChange}
            inputClassName={
              " bg-white dark:bg-white   md:placeholder:text-[17px] placeholder:text-[15px] w-full h-[51px] rounded-xl pl-[60px] placeholder:font-[poppins]"
            }
            separator="to"
          />
        </div>

        <div className="w-full md:w-max flex font-[poppins] text-[#F0F0F0] gap-3 ">
          <div className="w-full md:w-max relative inline-block text-left">
            <button
              onClick={ClickToggleExDown}
              className="w-full md:w-[110px] lg:w-[170px] xl:w-[221px] h-[51px] text-[13px] rounded-md bg-[#252B48] px-4 py-2"
            >
              Export Data
            </button>
            <div
              className={`${
                !toggleExdown && "hidden"
              } origin-top-right z-10 absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
            >
              <ul className="py-1">
                <li onClick={ExportPdf}
                 className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100 cursor-pointer">
                  Pdf
                </li>
                <li
                  onClick={() => {
                    exportToExcel(
                 databack,
                      "export"
                    );
                  }}
                  className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  Excel
                </li>
              </ul>
            </div>
          </div>
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
                 
                  className="block px-4 py-2 text-[13px] text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                 Comingsoon
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3 w-[340px] md:w-full    h-max ">
        <ul className="  flex  w-full   h-max   ">
          <AnimatePresence>
            {MoreClick === "PER_NOT_ACC" ? (
              <motion.li
                key={"two"}
                onClick={ClearMore}
                className="text-[12px]  transition-opacity duration-300 ease-in cursor-pointer md:text-[14px] rounded-full font-[poppins] bg-[#252B48] text-[#F0F0F0] px-3 py-[6px] "
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.1 } }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                Belum terima
              </motion.li>
            ) : (
              ""
            )}
            {MoreClick === "PER_ACC" ? (
              <motion.li
                key={"one"}
                onClick={ClearMore}
                className="text-[12px]   cursor-pointer md:text-[14px] rounded-full font-[poppins] bg-[#252B48] text-[#F0F0F0] px-3 py-[6px] "
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.1 } }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                Sudah terima
              </motion.li>
            ) : (
              ""
            )}
          </AnimatePresence>
        </ul>
      </div>
    </>
  );
};
