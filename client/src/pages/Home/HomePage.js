// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthContext";
import styled from "styled-components";
import Header from "../commom/Header";
import SearchBox from "../commom/Search";

export default function Home() {
  // const { userData } = useContext(AuthContext);

  // return userData.displayName && userData.birthday ? (
  //   <div>HOME</div>
  // ) : (
  // <Navigate to="/account" />;
  // );

  return (
    <>
      <Header generic={false}></Header>
      <SearchBox />
      <Teste>ola</Teste>
    </>
  );
}

const Teste = styled.div`
  height: 1000px;
  width: 90vw;
  background-color: aqua;
  margin-top: 50px;
`;
