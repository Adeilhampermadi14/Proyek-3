import React, { useEffect, useState } from "react";
import "../../index.css";
import { Sidebar } from "../../Layout/Sidebar";
import { MKelolaDosen } from "../../Layout/KelolaDosen/MKelolaDosen";
import { CardList } from "../../Layout/KelolaDosen/CardList";
import { LayoutMainAll, LayoutMainKelola } from "../../Layout/LayoutMain";
import { Aside } from "../../Layout/Aside";
import { MoreClicked } from "../../Layout/KelolaDosen/MoreClicked";
import { useDispatch } from "react-redux";
import { resetMore, setSearch } from "../../App/Features/AuthSlice";

export const KelolaDosen = () => {
  const [IsMobile, setIsMobile] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const updateScreenWidth = () => {
    setIsMobile(window.innerWidth);
  };
  document.body.className = "bg-[#EEEEEE]";
  document.title = "Kelola Dosen";
  useEffect(() => {
    dispatch(resetMore());
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
      <Sidebar active={"ResourceIsClicked"} />;
    };
  }, []);
  const [toggleModal, settoggleModal] = useState(false);
  const [toggleDdown, settoggleDdown] = useState(false);

  const ClickToggleDown = () => settoggleDdown(!toggleDdown);

  const ClickTambahData = () => settoggleModal(!toggleModal);
  dispatch(setSearch(""))
  return (
    <LayoutMainAll>
      {toggleModal && <MKelolaDosen toggleClose={ClickTambahData} />}
      <Aside IsMobile={IsMobile} active={"ResourceIsClicked"} />
      <LayoutMainKelola
        title={"Kelola Dosen/Plp"}
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
