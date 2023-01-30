import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Menu from "../pages/commom/Menu";
import { ContainerWrapper } from "../pages/commom/styles/Container";

export default function PrivatePage() {
  const { signed } = useContext(AuthContext);

  return (
    <ContainerWrapper>
      <Outlet />
      <Menu />
    </ContainerWrapper>
  );

  // signed ? (
  //   <ContainerWrapper>
  //     <Outlet />
  //     <Menu />
  //   </ContainerWrapper>
  // )
  // : (
  //   <Navigate to="/" />
  // );
}
