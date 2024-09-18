import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const KelolaData = () => {
  return (
    <>
      <div className="w-[340px] mx-auto  sm:w-[422px] fixed rounded-md ring-1 ring-[#252B48] bottom-[120px] flex items-center justify-center z-20  left-1/2 transform -translate-x-1/2">
        <div className="relative bg-[#F0F0F0] rounded-lg shadow-lg w-full">
          <div className="p-6 font-[poppins] text-[#252B48]">
            <h2 className="text-[17px] font-[poppins] text-[#252B48] font-semibold">
              # Kelola Data
            </h2>
            <hr className="h-[4px] bg-[#252B48] "></hr>
            {/* <p className="text-gray-700 mt-4">Isi modal disini...</p> */}
            <section className="flex  font-medium flex-col gap-0 py-1">
              <Link
                to={"/admin/kelolaruangan"}
                className=" rounded-md py-1 px-7 hover:bg-[#252B48] hover:text-[#F0F0F0]"
              >
                Kelola Ruangan
              </Link>
              <Link
                to={"/admin/kelolajam"}
                className="rounded-md py-1 px-7  hover:bg-[#252B48] hover:text-[#F0F0F0]"
              >
                Kelola Jam
              </Link>
              <Link
                to={"/admin/keloladosen"}
                className="rounded-md py-1 px-7  hover:bg-[#252B48] hover:text-[#F0F0F0]"
              >
                Kelola Dosen
              </Link>
              <Link
                to={"/admin/kelolamahasiswa"}
                className="rounded-md py-1 px-7  hover:bg-[#252B48] hover:text-[#F0F0F0]"
              >
                Kelola Mahasiswa
              </Link>
              <Link
                to={"/admin/kelolakompetensi"}
                className="rounded-md py-1 px-7  hover:bg-[#252B48] hover:text-[#F0F0F0]"
              >
                Kelola Kompetensi
              </Link>
              <Link
                to={"/admin/permintaan"}
                className="rounded-md py-1 px-7  hover:bg-[#252B48] hover:text-[#F0F0F0]"
              >
                Permintaan
              </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
const KelolaDataMhs = () => {
  return (
    <>
      <div className="w-[340px] mx-auto  sm:w-[422px] fixed rounded-md ring-1 ring-[#252B48] bottom-[120px] flex items-center justify-center z-20  left-1/2 transform -translate-x-1/2">
        <div className="relative bg-[#F0F0F0] rounded-lg shadow-lg w-full">
          <div className="p-6 font-[poppins] text-[#252B48]">
            <h2 className="text-[17px] font-[poppins] text-[#252B48] font-semibold">
              # Peminjaman
            </h2>
            <hr className="h-[4px] bg-[#252B48] "></hr>
            {/* <p className="text-gray-700 mt-4">Isi modal disini...</p> */}
            <section className="flex  font-medium flex-col gap-0 py-1">
              <Link
                to={"/permintaan"}
                className=" rounded-md py-1 px-7 hover:bg-[#252B48] hover:text-[#F0F0F0]"
              >
                Permintaan
              </Link>
             
             
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
const Other = () => {
  return (
    <>
      <div className="w-[340px] mx-auto rounded-md ring-1 ring-[#252B48] sm:w-[422px] fixed  bottom-[120px] flex items-center justify-center z-50  left-1/2 transform -translate-x-1/2">
        <div className="fixed inset-0  "></div>
        <div className="relative bg-[#F0F0F0] rounded-lg shadow-lg w-full">
          <div className="p-6 font-[poppins] text-[#252B48]">
            <h2 className="text-[17px] font-[poppins] text-[#252B48] font-semibold">
              # Jadwal ruangan
            </h2>
            <hr className="h-[4px] bg-[#252B48] "></hr>
       
           <section  className="flex  font-medium flex-col gap-0 py-2">
            
            <Link className="rounded-md py-1 px-7  hover:bg-[#252B48] hover:text-[#F0F0F0]" to={"/jadwal-peminjaman"}>
              Jadwal Mahasiswa
            </Link>
            {/* <Link className="rounded-md py-1 px-7  hover:bg-[#252B48] hover:text-[#F0F0F0]" to={"/rekapkompetensi"}>
              Rekap Kompetensi
            </Link> */}
            </section> 
           
          
          
          </div>
        </div>
      </div>
    </>
  );
};
const RekapData = () => {
  return (
    <>
      <div className="w-[340px] mx-auto rounded-md ring-1 ring-[#252B48] sm:w-[422px] fixed  bottom-[120px] flex items-center justify-center z-50  left-1/2 transform -translate-x-1/2">
        <div className="fixed inset-0  "></div>
        <div className="relative bg-[#F0F0F0] rounded-lg shadow-lg w-full">
          <div className="p-6 font-[poppins] text-[#252B48]">
            <h2 className="text-[17px] font-[poppins] text-[#252B48] font-semibold">
              # Rekap Data
            </h2>
            <hr className="h-[4px] bg-[#252B48] "></hr>
            {/* <p className="text-gray-700 mt-4">Isi modal disini...</p> */}
           <section  className="flex  font-medium flex-col gap-0 py-2">
            
            <Link className="rounded-md py-1 px-7  hover:bg-[#252B48] hover:text-[#F0F0F0]" to={"/admin/rekapruangan"}>
              Rekap Ruang
            </Link>
            <Link className="rounded-md py-1 px-7  hover:bg-[#252B48] hover:text-[#F0F0F0]" to={"/admin/rekapkompetensi"}>
              Rekap Kompetensi
            </Link>
            </section> 
          
          </div>
        </div>
      </div>
    </>
  );
};

const MobilePanel = () => {
  const [PanelBar, setPanelBar] = useState({
    keloladata: false,
    rekapdata: false,
  });
  const { PanelClick } = useSelector((state) => state.panelSlice);
  const [clickSide, setclickSide] = useState(true);
  const PanelClicks = (key) => {
    setPanelBar((prevStatus) => {
      const newStatus = { ...prevStatus };
      // Periksa setiap elemen dalam objek status
      Object.keys(newStatus).forEach((item) => {
        // Jika elemen yang diklik adalah elemen yang sama, atur statusnya menjadi kebalikannya
        if (item === key) {
          newStatus[item] = !newStatus[item];
        } else {
          // Jika elemen yang diklik adalah elemen lain, atur statusnya menjadi false
          newStatus[item] = false;
        }
      });
      return newStatus;
    });
  };
  const clikSideButton = () => {
    setclickSide(!clickSide);
  };
  const variants ={
    "enter":
      {  opacity: 1, scale: 1 }
    
  }
  return (
    <>
   
        {PanelClick && (
          <nav
            key="one"
            className="w-[340px] z-20  sm:w-[422px]  px-[20px] h-[91px] bg-[#252B48]  rounded-xl my-[20px]  fixed bottom-0  left-1/2 transform -translate-x-1/2"
     
       
            
            >
            <ul className="h-full flex   justify-around items-center">
              <li onClick={() => PanelClicks("keloladata")} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 33 32"
                  fill="none"
                >
                  <rect width="33" height="32" rx="6" fill="#F0F0F0" />
                  <path
                    d="M24.9898 21.9533C25.5469 21.9533 26 22.4123 26 22.9766C26 23.5421 25.5469 24 24.9898 24H19.2797C18.7226 24 18.2695 23.5421 18.2695 22.9766C18.2695 22.4123 18.7226 21.9533 19.2797 21.9533H24.9898ZM21.0299 6.69906L22.5049 7.87078C23.1097 8.34377 23.513 8.96726 23.6509 9.62299C23.8101 10.3443 23.6403 11.0527 23.1628 11.6654L14.3764 23.0279C13.9732 23.5439 13.3789 23.8341 12.7422 23.8449L9.24039 23.8879C9.04939 23.8879 8.89021 23.7589 8.84777 23.5761L8.0519 20.1255C7.91395 19.4912 8.0519 18.8355 8.45514 18.3303L14.6841 10.268C14.7902 10.139 14.9813 10.1186 15.1086 10.2142L17.7297 12.2997C17.8994 12.4394 18.1329 12.5147 18.377 12.4824C18.8969 12.4179 19.2471 11.9449 19.1941 11.4397C19.1622 11.1817 19.0349 10.9667 18.8651 10.8055C18.812 10.7625 16.3183 8.76301 16.3183 8.76301C16.1591 8.63401 16.1273 8.39752 16.2546 8.23735L17.2415 6.95706C18.1541 5.78534 19.7459 5.67784 21.0299 6.69906Z"
                    fill="#252B48"
                  />
                </svg>
              </li>
              <li onClick={clikSideButton} className="cursor-pointer">
                <Link to={"/admin/home"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 35 33"
                    fill="none"
                  >
                    <path
                      d="M17.4953 0C17.285 2.89263e-05 17.0768 0.0447862 16.8827 0.131681C16.6886 0.218576 16.5125 0.345882 16.3646 0.506231L0.323067 15.5133C0.222881 15.5926 0.141453 15.6959 0.0853396 15.8151C0.0292262 15.9343 -4.78369e-06 16.0659 5.87193e-10 16.1994C5.87194e-10 16.4255 0.0837842 16.6424 0.232921 16.8023C0.382058 16.9622 0.584331 17.052 0.795242 17.052H4.77145V30.6936C4.77145 31.6348 5.48399 32.3988 6.36194 32.3988H12.7239C13.6018 32.3988 14.3144 31.6348 14.3144 30.6936V20.4624H20.6763V30.6936C20.6763 31.6348 21.3888 32.3988 22.2668 32.3988H28.6287C29.5067 32.3988 30.2192 31.6348 30.2192 30.6936V17.052H34.1954C34.4063 17.052 34.6086 16.9622 34.7577 16.8023C34.9069 16.6424 34.9907 16.4255 34.9907 16.1994C34.9907 16.0659 34.9614 15.9343 34.9053 15.8151C34.8492 15.6959 34.7678 15.5926 34.6676 15.5133L18.6354 0.516222C18.6323 0.512878 18.6292 0.509547 18.6261 0.506231C18.4782 0.345882 18.3021 0.218576 18.108 0.131681C17.9139 0.0447862 17.7057 2.89263e-05 17.4953 0Z"
                      fill="#F0F0F0"
                    />
                  </svg>
                </Link>
              </li>
              <li onClick={() => PanelClicks("rekapdata")} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 39 36"
                  fill="none"
                >
                  <rect
                    x="6"
                    y="4"
                    width="33"
                    height="32"
                    rx="6"
                    fill="#F0F0F0"
                  />
                  <circle
                    cx="10.5"
                    cy="10.5"
                    r="9.26471"
                    fill="#F0F0F0"
                    stroke="#252B48"
                    stroke-width="2.47059"
                  />
                  <path
                    d="M22 20L32 20"
                    stroke="#252B48"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M26 11L32 11"
                    stroke="#252B48"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M7 8L11 12"
                    stroke="#252B48"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 29L33 29"
                    stroke="#252B48"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M14 10L11 12"
                    stroke="#252B48"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
            </ul>
          </nav>
        )}
     

      {PanelBar.keloladata && <KelolaData />}
      {PanelBar.rekapdata && <RekapData />}
    </>
  );
};
const MobilePanelMahasiswa = () => {
  const [PanelBar, setPanelBar] = useState({
    keloladata: false,
    rekapdata: false,
  });
  const { PanelClick } = useSelector((state) => state.panelSlice);
  const [clickSide, setclickSide] = useState(true);
  const PanelClicks = (key) => {
    setPanelBar((prevStatus) => {
      const newStatus = { ...prevStatus };
      // Periksa setiap elemen dalam objek status
      Object.keys(newStatus).forEach((item) => {
        // Jika elemen yang diklik adalah elemen yang sama, atur statusnya menjadi kebalikannya
        if (item === key) {
          newStatus[item] = !newStatus[item];
        } else {
          // Jika elemen yang diklik adalah elemen lain, atur statusnya menjadi false
          newStatus[item] = false;
        }
      });
      return newStatus;
    });
  };
  const clikSideButton = () => {
    setclickSide(!clickSide);
  };
  const variants ={
    "enter":
      {  opacity: 1, scale: 1 }
    
  }
  return (
    <>
   
        {PanelClick && (
          <nav
            key="one"
            className="w-[340px] z-20  sm:w-[422px]  px-[20px] h-[91px] bg-[#252B48]  rounded-xl my-[20px]  fixed bottom-0  left-1/2 transform -translate-x-1/2"
            >
            <ul className="h-full flex   justify-around items-center">
              <li onClick={() => PanelClicks("keloladata")} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 33 32"
                  fill="none"
                >
                  <rect width="33" height="32" rx="6" fill="#F0F0F0" />
                  <path
                    d="M24.9898 21.9533C25.5469 21.9533 26 22.4123 26 22.9766C26 23.5421 25.5469 24 24.9898 24H19.2797C18.7226 24 18.2695 23.5421 18.2695 22.9766C18.2695 22.4123 18.7226 21.9533 19.2797 21.9533H24.9898ZM21.0299 6.69906L22.5049 7.87078C23.1097 8.34377 23.513 8.96726 23.6509 9.62299C23.8101 10.3443 23.6403 11.0527 23.1628 11.6654L14.3764 23.0279C13.9732 23.5439 13.3789 23.8341 12.7422 23.8449L9.24039 23.8879C9.04939 23.8879 8.89021 23.7589 8.84777 23.5761L8.0519 20.1255C7.91395 19.4912 8.0519 18.8355 8.45514 18.3303L14.6841 10.268C14.7902 10.139 14.9813 10.1186 15.1086 10.2142L17.7297 12.2997C17.8994 12.4394 18.1329 12.5147 18.377 12.4824C18.8969 12.4179 19.2471 11.9449 19.1941 11.4397C19.1622 11.1817 19.0349 10.9667 18.8651 10.8055C18.812 10.7625 16.3183 8.76301 16.3183 8.76301C16.1591 8.63401 16.1273 8.39752 16.2546 8.23735L17.2415 6.95706C18.1541 5.78534 19.7459 5.67784 21.0299 6.69906Z"
                    fill="#252B48"
                  />
                </svg>
              </li>
              <li onClick={clikSideButton} className="cursor-pointer">
                <Link to={"/home"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 35 33"
                    fill="none"
                  >
                    <path
                      d="M17.4953 0C17.285 2.89263e-05 17.0768 0.0447862 16.8827 0.131681C16.6886 0.218576 16.5125 0.345882 16.3646 0.506231L0.323067 15.5133C0.222881 15.5926 0.141453 15.6959 0.0853396 15.8151C0.0292262 15.9343 -4.78369e-06 16.0659 5.87193e-10 16.1994C5.87194e-10 16.4255 0.0837842 16.6424 0.232921 16.8023C0.382058 16.9622 0.584331 17.052 0.795242 17.052H4.77145V30.6936C4.77145 31.6348 5.48399 32.3988 6.36194 32.3988H12.7239C13.6018 32.3988 14.3144 31.6348 14.3144 30.6936V20.4624H20.6763V30.6936C20.6763 31.6348 21.3888 32.3988 22.2668 32.3988H28.6287C29.5067 32.3988 30.2192 31.6348 30.2192 30.6936V17.052H34.1954C34.4063 17.052 34.6086 16.9622 34.7577 16.8023C34.9069 16.6424 34.9907 16.4255 34.9907 16.1994C34.9907 16.0659 34.9614 15.9343 34.9053 15.8151C34.8492 15.6959 34.7678 15.5926 34.6676 15.5133L18.6354 0.516222C18.6323 0.512878 18.6292 0.509547 18.6261 0.506231C18.4782 0.345882 18.3021 0.218576 18.108 0.131681C17.9139 0.0447862 17.7057 2.89263e-05 17.4953 0Z"
                      fill="#F0F0F0"
                    />
                  </svg>
                </Link>
              </li>
              <li onClick={() => PanelClicks("rekapdata")} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 39 36"
                  fill="none"
                >
                  <rect
                    x="6"
                    y="4"
                    width="33"
                    height="32"
                    rx="6"
                    fill="#F0F0F0"
                  />
                  <circle
                    cx="10.5"
                    cy="10.5"
                    r="9.26471"
                    fill="#F0F0F0"
                    stroke="#252B48"
                    stroke-width="2.47059"
                  />
                  <path
                    d="M22 20L32 20"
                    stroke="#252B48"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M26 11L32 11"
                    stroke="#252B48"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M7 8L11 12"
                    stroke="#252B48"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11 29L33 29"
                    stroke="#252B48"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <path
                    d="M14 10L11 12"
                    stroke="#252B48"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                </svg>
              </li>
            </ul>
          </nav>
        )}
     

      {PanelBar.keloladata && <KelolaDataMhs />}
      {PanelBar.rekapdata && <Other />}
    </>
  );
};

export { MobilePanel,MobilePanelMahasiswa};
