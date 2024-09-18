import React from "react";
import { useState, useEffect } from "react";
import { Sidebar, SidebarMahasiswa } from "../../Layout/Sidebar";
import { LayoutMainAll, LayoutMainKelola } from "../../Layout/LayoutMain";
import { Aside, AsideMahasiswa } from "../../Layout/Aside";
import { CardList } from "../../Layout/Mahasiswa/Permintaan/CardList";
import { MPermintaan } from "../../Layout/Mahasiswa/Permintaan/MPermintaan";
import { MoreClicked } from "../../Layout/Mahasiswa/Permintaan/MoreClicked";
export const PermintaanMahasiswa = () => {
  const [IsMobile, setIsMobile] = useState(window.innerWidth);

  const updateScreenWidth = () => {
    setIsMobile(window.innerWidth);
  };
  document.body.className = "bg-[#EEEEEE]";
  document.title = "Kelola Dosen";
  const [data, setdata] = useState({
    mahasiswa: null,
    dosen: null,
    kompetensi: null,
    ruangan: null,
    jam: null,
  });
 
  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
 
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
      <SidebarMahasiswa active={"ResourceIsClicked"} />;
    };
  }, []);
  const [toggleModal, settoggleModal] = useState(false);
  const [toggleDdown, settoggleDdown] = useState(false);

  const ClickToggleDown = () => settoggleDdown(!toggleDdown);

  const ClickTambahData = () => settoggleModal(!toggleModal);

  return (
    <LayoutMainAll>
      {toggleModal && <MPermintaan data={data} toggleClose={ClickTambahData} />}
      <AsideMahasiswa IsMobile={IsMobile} active={"RequestIsClicked"} />
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
