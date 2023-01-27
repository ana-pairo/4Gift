import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Home() {
  const { userData } = useContext(AuthContext);

  return userData.displayName && userData.birthday ? (
    <div>HOME</div>
  ) : (
    <Navigate to="/account" />
  );
}
