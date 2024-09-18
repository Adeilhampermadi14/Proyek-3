import React, { useEffect, useState } from "react";
import "../../index.css";
import { LayoutMainAll,LayoutMainKelola } from "../../Layout/LayoutMain";
import { MKelolaKompetensi } from "../../Layout/KelolaKompetensi/MKelolaKompetensi";
import { CardList } from "../../Layout/KelolaKompetensi/CardList";
import { Aside } from "../../Layout/Aside";
import { MoreClicked } from "../../Layout/KelolaKompetensi/MoreClicked";
import { useDispatch } from "react-redux";
import { setSearch } from "../../App/Features/AuthSlice";
export const KelolaKompetensi = () => {
  const [IsMobile, setIsMobile] = useState(window.innerWidth);
  const [toggleModal, settoggleModal] = useState(false);
  const [toggleDdown, settoggleDdown] = useState(false);

  const updateScreenWidth = () => {
    setIsMobile(window.innerWidth);
  };
   useEffect(() => {
    document.title = "Home";
    document.body.className = "bg-[#EEEEEE]";
    document.title = "Kelola Kompetensi"

    window.addEventListener("resize", updateScreenWidth);
    
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  const dispatch = useDispatch()
  dispatch(setSearch(""))
  const ClickToggleDown = () => settoggleDdown(!toggleDdown)
  
  const ClickTambahData = () => settoggleModal(!toggleModal);

  return (
    <LayoutMainAll>
    {toggleModal && <MKelolaKompetensi toggleClose={ClickTambahData} />}
    <Aside IsMobile={IsMobile} active={"ResourceIsClicked"} />
    <LayoutMainKelola
      title={"Kelola Kompetensi"}
      IsMobile={IsMobile}
      MoreComponent={<MoreClicked 
        toggleDdown={toggleDdown}
        ClickToggleDown={ClickToggleDown}
        ClickTambahData={ClickTambahData} />}
    >
      <CardList />
    </LayoutMainKelola>
    </LayoutMainAll>
  );
};
