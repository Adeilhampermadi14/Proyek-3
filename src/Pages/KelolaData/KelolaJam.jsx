import React, { useEffect, useState } from "react";
import "../../index.css";
import { MkelolaJam } from "../../Layout/KelolaJam/MKelolaJam";
import { CardList } from "../../Layout/KelolaJam/CardList";
import { LayoutMainAll, LayoutMainKelola } from "../../Layout/LayoutMain";
import { Aside } from "../../Layout/Aside";
import { MoreClicked } from "../../Layout/KelolaJam/MoreClicked";
import { useDispatch } from "react-redux";
import { resetMore, setSearch } from "../../App/Features/AuthSlice";
export const KelolaJam = () => {
  const [IsMobile, setIsMobile] = useState(window.innerWidth);
  const [toggleModal, settoggleModal] = useState(false);
  const [toggleDdown, settoggleDdown] = useState(false);

  const updateScreenWidth = () => {
    setIsMobile(window.innerWidth);
  };

  // Daftar kartu dan kontennya
  document.body.className = "bg-[#EEEEEE]";
  document.title = "Kelola Jam Praktikum";
  const dispatch = useDispatch()
  dispatch(setSearch(""))
  useEffect(() => {
dispatch(resetMore())
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  const ClickToggleDown = () => settoggleDdown(!toggleDdown);

  const ClickTambahData = () => settoggleModal(!toggleModal);

  return (
    <LayoutMainAll>
      {toggleModal && <MkelolaJam toggleClose={ClickTambahData} />}
      <Aside IsMobile={IsMobile} active={"ResourceIsClicked"} />
      <LayoutMainKelola
        title={"Kelola Jam Praktikum"}
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
