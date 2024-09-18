import React from "react";
import { useState, useEffect } from "react";
import { Sidebar } from "../Layout/Sidebar";
import { LayoutMainAll, LayoutMainKelola, LayoutMainReport } from "../Layout/LayoutMain";
import { Aside, AsideMahasiswa } from "../Layout/Aside";
import { CardList } from "../Layout/JadwalPeminjaman/CardList";
import { MPermintaan } from "../Layout/JadwalPeminjaman/MPermintaan";
import { MoreClicked } from "../Layout/JadwalPeminjaman/MoreClicked";
import axios from "axios";
import Cookies from "js-cookie";
export const JadwalPeminjaman = () => {
  const [IsMobile, setIsMobile] = useState(window.innerWidth);
  const updateScreenWidth = () => {
    setIsMobile(window.innerWidth);
  };
  document.body.className = "bg-[#EEEEEE]";
  document.title = "Jadwal Peminjaman";
  const [data, setdata] = useState({
    mahasiswa: null,
    dosen: null,
    kompetensi: null,
    ruangan: null,
    jam: null,
  });
 
 
  useEffect(() => {
 
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
      <Sidebar active={"ResourceIsClicked"} />;
    };
  }, []);
  const [toggleModal, settoggleModal] = useState(false);
  const [toggleDdown, settoggleDdown] = useState(false);
  const [toggleExdown, settoggleExdown] = useState(false);
  const [datedata, setdatedata] = useState({});
  const [databack, setdataback] = useState([]);
 
  const ClickToggleDown = () => settoggleDdown(!toggleDdown);
  const ClickTambahData = () => settoggleDdown(!toggleDdown);

  const clickExDown = () => settoggleExdown(!toggleExdown);

  return (
    <LayoutMainAll>
      {toggleModal && <MPermintaan data={data} toggleClose={ClickTambahData} />}
      <AsideMahasiswa IsMobile={IsMobile} active={"ReportIsClicked"} />
      <LayoutMainReport
        title={"Jadwal Peminjaman"}
        IsMobile={IsMobile}
        MoreComponent={
          <MoreClicked
          databack={databack}
            toggleDdown={toggleDdown}
            toggleExdown={toggleExdown}
            ClickToggleDown={ClickToggleDown}
            ClickToggleExDown={clickExDown}
        dataDate={setdatedata}
          />
        }
      >
        <CardList dataBack={setdataback}  dateData={datedata}   />
      </LayoutMainReport>
    </LayoutMainAll>
  );
};
