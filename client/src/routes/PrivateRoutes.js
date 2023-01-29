import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function PrivatePage() {
  const { signed } = useContext(AuthContext);

  return signed ? <Outlet /> : <Navigate to="/" />;
}
