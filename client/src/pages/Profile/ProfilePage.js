import { AvatarContainer, AvatarWrapper } from "../commom/styles/Avatar";
import photo from "../../assets/images/avatar.png";
import styled from "styled-components";
import { Greeting } from "../commom/styles/Greeting";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  BsBagFill,
  BsFillTelephoneFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { useState } from "react";

export default function Profile() {
  const [isSessionOpen, setIsSessionOpen] = useState({
    addresses: false,
    shops: false,
    phones: false,
  });
  return (
    <>
      <AvatarContainer>
        <ProfileAvatarWrapper>
          <img src={photo} />
          <FollowButton>Seguindo</FollowButton>
        </ProfileAvatarWrapper>
      </AvatarContainer>
      <ProfileName>
        Ana Paula
        <h1>07/10</h1>
      </ProfileName>
      <InformationsWrapper>
        <Session isSessionOpen={isSessionOpen.addresses}>
          <SessionHeader>
            <Icon>
              <FaMapMarkerAlt size={"30px"} color={"#DFB068"} />
            </Icon>
            <Title>Meus Endereços</Title>
            <Arrow
              isSessionOpen={isSessionOpen.addresses}
              onClick={() => {
                setIsSessionOpen({
                  ...isSessionOpen,
                  addresses: !isSessionOpen.addresses,
                });
              }}
            >
              <AiOutlineDown size={"30px"} color={"#DFB068"} />
            </Arrow>
          </SessionHeader>
          <Teste>o</Teste>
          <SessionFooter>
            <BsFillPlusCircleFill size={"30px"} color={"#DFB068"} />
          </SessionFooter>
        </Session>
        <Session isSessionOpen={isSessionOpen.shops}>
          <SessionHeader>
            <Icon>
              <BsBagFill size={"30px"} color={"#DFB068"} />
            </Icon>
            <Title>Opções de lojas</Title>
            <Arrow
              isSessionOpen={isSessionOpen.shops}
              onClick={() => {
                setIsSessionOpen({
                  ...isSessionOpen,
                  shops: !isSessionOpen.shops,
                });
              }}
            >
              <AiOutlineDown size={"30px"} color={"#DFB068"} />
            </Arrow>
          </SessionHeader>
          <SessionFooter>
            <BsFillPlusCircleFill size={"30px"} color={"#DFB068"} />
          </SessionFooter>
        </Session>
        <Session isSessionOpen={isSessionOpen.phones}>
          <SessionHeader>
            <Icon>
              <BsFillTelephoneFill size={"30px"} color={"#DFB068"} />
            </Icon>
            <Title>Contatos</Title>
            <Arrow
              isSessionOpen={isSessionOpen.phones}
              onClick={() => {
                setIsSessionOpen({
                  ...isSessionOpen,
                  phones: !isSessionOpen.phones,
                });
              }}
            >
              <AiOutlineDown size={"30px"} color={"#DFB068"} />
            </Arrow>
          </SessionHeader>
          <SessionFooter>
            <BsFillPlusCircleFill size={"30px"} color={"#DFB068"} />
          </SessionFooter>
        </Session>
      </InformationsWrapper>
    </>
  );
}

const ProfileAvatarWrapper = styled(AvatarWrapper)`
  border: none;
`;

const FollowButton = styled.button`
  @media (max-width: 600px) {
    width: 50vw;
    height: 15vw;

    background-color: #dfb068;
    /* background-color: #1f3b62; */

    border-radius: 20px;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0;

    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 25px;
    color: #ffffff;
  }
`;

const ProfileName = styled(Greeting)`
  @media (max-width: 600px) {
    font-weight: 600;
    font-size: 30px;

    flex-direction: column;
    margin-bottom: 40px;

    h1 {
      font-weight: 400;
      font-size: 25px;
      margin-top: 10px;
    }
  }
`;

const InformationsWrapper = styled.div`
  @media (max-width: 600px) {
    width: 100vw;
    height: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }
`;

const Session = styled.div`
  @media (max-width: 600px) {
    width: 90vw;
    height: 60px;
    height: ${(props) => (props.isSessionOpen ? "fit-content" : "60px")};

    background-color: #ededed;
    border: 2px solid #1f3b62;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    display: flex;
    justify-content: start;
    align-items: center;

    flex-direction: column;

    margin-bottom: 20px;

    overflow: hidden;
  }
`;

const SessionHeader = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    min-height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SessionFooter = styled(SessionHeader)`
  @media (max-width: 600px) {
    margin-top: 20px;
  }
`;

const Icon = styled.div`
  @media (max-width: 600px) {
    width: 15%;
    height: 90%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.div`
  @media (max-width: 600px) {
    width: 70%;
    height: 90%;

    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 5px;

    font-size: 22px;
    color: #1f3b62;
  }
`;

const Arrow = styled(Icon)`
  @media (max-width: 600px) {
    /* background-color: gray; */
    transform: ${(props) =>
      props.isSessionOpen ? "rotate(180deg)" : "rotate(0deg)"};
    transition: 1s;
  }
`;

const Teste = styled.div`
  @media (max-width: 600px) {
    height: 80px;
    width: 10px;
    background-color: black;
    margin-top: 10px;
  }
`;
