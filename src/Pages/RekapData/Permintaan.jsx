import React from "react";
import { useState, useEffect } from "react";
import { Sidebar } from "../../Layout/Sidebar";
import { LayoutMainAll, LayoutMainKelola } from "../../Layout/LayoutMain";
import { Aside, AsideMahasiswa } from "../../Layout/Aside";
import { CardList } from "../../Layout/Permintaan/CardList";
import { MPermintaan } from "../../Layout/Permintaan/MPermintaan";
import { MoreClicked } from "../../Layout/Permintaan/MoreClicked";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { resetAlert, setAlert, setSearch } from "../../App/Features/AuthSlice";
import { useNavigate } from "react-router-dom";
export const Permintaan = () => {
  const [IsMobile, setIsMobile] = useState(window.innerWidth);

  const updateScreenWidth = () => {
    setIsMobile(window.innerWidth);
  };
  const navigate = useNavigate()
  document.body.className = "bg-[#EEEEEE]";
  document.title = "Kelola Dosen";
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
      } catch (res) {
        if (res.response.status === 401) {
          dispatch(setAlert({show:true,status:false,message:res.response.data.message}))
          setTimeout(()=>{
            dispatch(resetAlert())
            navigate("/login")
          },3000)  
          }
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
  const dispatch = useDispatch()
  dispatch(setSearch(""))
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    getData();
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
      <Sidebar active={"ResourceIsClicked"} />;
    };
  }, []);
  const [toggleModal, settoggleModal] = useState(false);
  const [toggleDdown, settoggleDdown] = useState(false);

  const ClickToggleDown = () => settoggleDdown(!toggleDdown);

  const ClickTambahData = () => settoggleModal(!toggleModal);

  return (
    <LayoutMainAll>
      {toggleModal && <MPermintaan data={data} toggleClose={ClickTambahData} />}
      <Aside IsMobile={IsMobile} active={"RequestIsClicked"} />
      <LayoutMainKelola
        title={"Permintaan Mahasiswa"}
        IsMobile={IsMobile}
        MoreComponent={
          <MoreClicked
            toggleDdown={toggleDdown}
            ClickToggleDown={ClickToggleDown}
            ClickTambahData={ClickTambahData}
          />
        }
      >
        <CardList />
      </LayoutMainKelola>
    </LayoutMainAll>
  );
};
 
