import {
  Navigate,
  createBrowserRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Auth } from "../../Pages/Auth";
import { PageNot } from "../../Pages/PageNot";
import { Home, HomeMahasiswa } from "../../Pages/Home";
import { KelolaRuangan } from "../../Pages/KelolaData/KelolaRuangan";
import { KelolaJam } from "../../Pages/KelolaData/KelolaJam";
import { KelolaKompetensi } from "../../Pages/KelolaData/KelolaKompetensi";
import { KelolaDosen } from "../../Pages/KelolaData/KelolaDosen";
import { KelolaMahasiswa } from "../../Pages/KelolaData/KelolaMahasiswa";
import { Permintaan } from "../../Pages/RekapData/Permintaan";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSess, reset, resetAlert } from "../Features/AuthSlice";
import { LoadingPage } from "../../Pages/LoadingPage";
import { SpinnerLoading } from "../../Layout/Skelaton/SpinnerLoading";
import { RekapRuangan } from "../../Pages/RekapData/RekapRuangan";
import { Exportpdf } from "../Exportpdf";
import { RekapKompetensi } from "../../Pages/RekapData/RekapKompetensi";
import { Profile, ProfileMahasiswa } from "../../Pages/Profile";
import { PermintaanMahasiswa } from "../../Pages/Mahasiswa/PermintaanMhs";
import { OverleySessionOver } from "../../Layout/Skelaton/OverleySessionOver";
import { JadwalPeminjaman } from "../../Pages/JadwalPeminjaman";

const PrivateRoute = ({ element, RoleAllowed, fallbackPath }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [redirectPath, setRedirectPath] = useState(null);
  const { isSuccess, userses, isLoading, isError } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(UserSess());
    return () => {
      // dispatch(reset());
    };
  }, []);
  if (userses?.data.role === RoleAllowed) {
    return { ...element };
  }
  if (isError) {
    navigate("/login", { state: { from: location } });
  }
};

const AuthLogin = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  dispatch(resetAlert())
  clearTimeout()
  const [redirectPath, setRedirectPath] = useState(null);
  const { isSuccess, isLoading, userses, isError } = useSelector(
    (state) => state.auth
  );
  const { isSuccessLogin } = useSelector((state) => state.authLogin);
  const getDisp = () => {
    dispatch(UserSess());
  };
  useEffect(() => {
    getDisp();

    return () => {
      dispatch(reset());
    };
  }, [isSuccessLogin]);
  if (isLoading) {
    return <SpinnerLoading />;
  }
  if (isLoading) {
    return <LoadingPage />;
  }
 
  if (userses?.data.role === "_adminX69_") {
    return <Navigate to={"/admin/home"} replace />;
  }
  
  if (userses?.data.role === "mahasiswa") {
    return <Navigate to={"/home"} replace />;
  }
  return <Auth />;
};
const LoginMain = ()=>{
  return <Navigate to={"/login"} />
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginMain />
  },
  {
    path: "/login",
    element: <AuthLogin />,
  },
  {
    path: "/admin/home",
    element: (
      <PrivateRoute
        RoleAllowed={"_adminX69_"}
        element={<Home />}
        fallbackPath={"/login"}
      />
    ),
  },  {
    path: "/home",
    element: (
      <PrivateRoute
        RoleAllowed={"mahasiswa"}
        element={<HomeMahasiswa />}
        fallbackPath={"/login"}
      />
    ),
  },
  {
    path: "/admin/permintaan",
    element: (
      <PrivateRoute
        RoleAllowed={"_adminX69_"}
        element={<Permintaan />}
        fallbackPath={"/login"}
      />
    ),
  },
  {
    path: "/admin/kelolaruangan",
    element: (
      <PrivateRoute
        RoleAllowed={"_adminX69_"}
        element={<KelolaRuangan />}
        fallbackPath={"/login"}
      />
    ),
  },
  {
    path: "/admin/kelolajam",
    element: (
      <PrivateRoute
        RoleAllowed={"_adminX69_"}
        element={<KelolaJam />}
        fallbackPath={"/login"}
      />
    ),
  },
  {
    path: "/admin/keloladosen",
    element: (
      <PrivateRoute
        RoleAllowed={"_adminX69_"}
        element={<KelolaDosen />}
        fallbackPath={"/login"}
      />
    ),
  },
  {
    path: "/admin/kelolamahasiswa",
    element: (
      <PrivateRoute
        RoleAllowed={"_adminX69_"}
        element={<KelolaMahasiswa />}
        fallbackPath={"/login"}
      />
    ),
  },
  {
    path: "/admin/rekapruangan",
    element: (
      <PrivateRoute
        RoleAllowed={"_adminX69_"}
        element={<RekapRuangan />}
        fallbackPath={"/login"}
      />
    ),
  },
  {
    path: "/admin/rekapkompetensi",
    element: (
      <PrivateRoute
        RoleAllowed={"_adminX69_"}
        element={<RekapKompetensi />}
        fallbackPath={"/login"}
      />
    ),
  },
  {
    path: "/admin/kelolakompetensi",
    element: (
      <PrivateRoute
        RoleAllowed={"_adminX69_"}
        element={<KelolaKompetensi />}
        fallbackPath={"/login"}
      />
    ),
  },
  {
    path: "/permintaan",
    element: (
      <PrivateRoute
        RoleAllowed={"mahasiswa"}
        element={<PermintaanMahasiswa />}
        fallbackPath={"/login"}
      />
    ),
  },
  {
    path: "/exportruangan",
    element: (
      <PrivateRoute
        RoleAllowed={"_adminX69_"}
        element={<Exportpdf />}
        fallbackPath={"/login"}
      />
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute
        RoleAllowed={"mahasiswa"}
        element={<ProfileMahasiswa />}
        fallbackPath={"/login"}
      />
    ),
  },
  {
    path: "/admin/profile",
    element: (
      <PrivateRoute
        RoleAllowed={"_adminX69_"}
        element={<Profile />}
        fallbackPath={"/login"}
      />
    ),
  },
  {
    path: "/jadwal-peminjaman",
    element: (
      <PrivateRoute
        RoleAllowed={"mahasiswa"}
        element={<JadwalPeminjaman />}
        fallbackPath={"/login"}
      />
    ),
  },
  {
    path: "/*",
    element: <PageNot />,
  },
]);
