import React, { useEffect, useState } from "react";
import "../../index.css";
import { Aside } from "../../Layout/Aside";
import { LayoutMainAll, LayoutMainKelola } from "../../Layout/LayoutMain";
import { MKelolaMahasiswa } from "../../Layout/KelolaMahasiswa/MKelolaMahasiswa";
import { CardList } from "../../Layout/KelolaMahasiswa/CardList";
import { MoreClicked } from "../../Layout/KelolaMahasiswa/MoreClicked";
import { useDispatch } from "react-redux";
import { setSearch } from "../../App/Features/AuthSlice";
export const KelolaMahasiswa = () => {
  const [IsMobile, setIsMobile] = useState(window.innerWidth);
  const [toggleModal, settoggleModal] = useState(false);
  const [toggleDdown, settoggleDdown] = useState(false);

  const updateScreenWidth = () => {
    setIsMobile(window.innerWidth);
  };
  const dispatch = useDispatch()
  dispatch(setSearch(""))
  useEffect(() => {
    document.title = "Home";
    document.body.className = "bg-[#EEEEEE]";
    document.title = "Kelola Mahasiswa";

    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  const ClickToggleDown = () => settoggleDdown(!toggleDdown);

  const ClickTambahData = () => settoggleModal(!toggleModal);

  return (
    <LayoutMainAll>
      {toggleModal && <MKelolaMahasiswa toggleClose={ClickTambahData} />}
      <Aside IsMobile={IsMobile} active={"ResourceIsClicked"} />
      <LayoutMainKelola
        title={"Kelola Mahasiswa"}
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
