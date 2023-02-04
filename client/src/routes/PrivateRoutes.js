
import { Navigate, Outlet } from "react-router-dom";
import Menu from "../pages/commom/Menu";
import { ContainerWrapper } from "../pages/commom/styles/Container";

export default function PrivatePage() {

  return (
    JSON.parse(localStorage.getItem("@Auth:user")) ? (
      <ContainerWrapper>
        <Outlet />
        <Menu />
      </ContainerWrapper>
    )
      : (
        <Navigate to="/" />
      )
  );
}
