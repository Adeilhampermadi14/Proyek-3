import React, { useEffect, useState } from "react";
import "../../index.css";
import { Aside } from "../../Layout/Aside";
import { LayoutMainAll, LayoutMainKelola } from "../../Layout/LayoutMain";
import { MKelolaRuangan } from "../../Layout/KelolaRuangan/MKelolaRuangan";
import { CardList } from "../../Layout/KelolaRuangan/CardList";
import { useDispatch } from "react-redux";
import { reset, resetMore, setSearch } from "../../App/Features/AuthSlice";
import { MoreClicked } from "../../Layout/KelolaRuangan/MoreClicked";
export const KelolaRuangan = () => {
  const [IsMobile, setIsMobile] = useState(window.innerWidth);
  const [toggleModal, settoggleModal] = useState(false);
  const [toggleDdown, settoggleDdown] = useState(false);

  const updateScreenWidth = () => {
    setIsMobile(window.innerWidth);
  };

  document.title = "Home";
  document.body.className = "bg-[#EEEEEE]";
  document.title = "Kelola Ruangan";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetMore());
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);
  const ClickToggleDown = () => settoggleDdown(!toggleDdown);

  const ClickTambahData = () => settoggleModal(!toggleModal);
  dispatch(setSearch(""));
  return (
    <LayoutMainAll>
      {toggleModal && <MKelolaRuangan toggleClose={ClickTambahData} />}
      <Aside IsMobile={IsMobile} active={"ResourceIsClicked"} />
      <LayoutMainKelola
        title={"Kelola Ruangan"}
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
