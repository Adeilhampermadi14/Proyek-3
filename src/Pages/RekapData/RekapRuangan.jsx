import React from "react";
import { useState, useEffect } from "react";
import { Sidebar } from "../../Layout/Sidebar";
import { LayoutMainAll, LayoutMainKelola, LayoutMainReport } from "../../Layout/LayoutMain";
import { Aside } from "../../Layout/Aside";
import { CardList } from "../../Layout/RekapRuangan/CardList";
import { MPermintaan } from "../../Layout/RekapRuangan/MPermintaan";
import { MoreClicked } from "../../Layout/RekapRuangan/MoreClicked";
import axios from "axios";
import Cookies from "js-cookie";
export const RekapRuangan = () => {
  const [IsMobile, setIsMobile] = useState(window.innerWidth);

  const updateScreenWidth = () => {
    setIsMobile(window.innerWidth);
  };
  document.body.className = "bg-[#EEEEEE]";
  document.title = "Rekap Ruangan";
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
        const response = await axios.get(url,{headers:{Authorization: `Bearer ${Cookies.get('accessToken')}`}});
        return response.data.data;
      } catch (error) {
  
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
  // window.addEventListener("resize", updateScreenWidth);
  useEffect(() => {
    getData();
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
      <Aside IsMobile={IsMobile} active={"ReportIsClicked"} />
      <LayoutMainReport
        title={"Rekap Ruangan"}
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
