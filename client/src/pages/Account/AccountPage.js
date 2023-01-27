import { useContext } from "react";
import styled from "styled-components";

import { BiTrash } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";

import Menu from "../commom/Menu";
import {
  AvatarContainer,
  AvatarOptions,
  AvatarWrapper,
  ContainerWrapper,
} from "../commom/styles/Container";
import avatar from "../../assets/images/avatar.png";

import { AuthContext } from "../../contexts/AuthContext";

export default function Account() {
  const { userData } = useContext(AuthContext);
  return (
    <ContainerWrapper>
      <AvatarContainer>
        <AvatarWrapper>
          {userData.photoURL ? (
            <img src={userData.photoURL} />
          ) : (
            <img src={avatar} />
          )}
          <AvatarOptions type={"delete"}>
            <BiTrash size={"70%"} color={"#ededed"} />
          </AvatarOptions>
          <AvatarOptions type={"edit"}>
            <AiOutlineEdit size={"70%"} color={"#ededed"} />
          </AvatarOptions>
        </AvatarWrapper>
      </AvatarContainer>

      <Teste>oi</Teste>

      <Menu />
    </ContainerWrapper>
  );
}

const Teste = styled.div`
  height: 1000px;
  background-color: black;
  width: 90vw;
  margin-top: 10px;
`;
