import styled from "styled-components";
import backgroundImage from "../../../assets/images/4gift_background_welcome_left.jpg";

const FirstScreen = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;

  @media (max-width: 600px) {
    background-position-x: 50%;
    width: 100vw;
    height: 100vh;
  }
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 600px) {
    height: 10vh;
    width: 100%;
    padding: 1vh 8vw;
  }
`;

const HeaderWrapper = styled.div`
  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: fit-content;
      height: 8vh;
      object-fit: contain;
    }
  }
`;

const ButtonOptions = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    width: 30vw;
    height: 8vh;
    min-width: 110px;
    max-height: 45px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.color ? props.color : "transparent")};
  border: ${(props) =>
    props.color ? `solid 1px ${props.color}` : "solid 1px #1F3B62"};

  font-weight: 700;
  font-size: 15px;
  letter-spacing: 1px;
  color: ${(props) => (props.color ? props.color : "#1F3B62")};

  @media (max-width: 600px) {
    width: ${(props) => (props.visibility ? "0" : "100%")};
    height: 100%;
    border-radius: 5px;

    visibility: ${(props) => (props.visibility ? "hidden" : "initial")};
  }
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: end;
  align-items: left;
  flex-direction: column;

  @media (max-width: 600px) {
    height: fit-content;
    width: fit-content;
    padding-bottom: 30px;

    h1,
    h2 {
      font-weight: 400;
      font-size: 40px;
      color: #ffffff;
      font-family: "Sura", serif;
      width: fit-content;
    }

    h2 {
      margin-left: 10vw;
    }

    div {
      margin-top: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Logo = styled.h3`
  font-family: "Sura", serif;
  color: ${(props) => props.color};
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 40px;
    margin-left: 5px;
    margin-top: 5px;
  }
`;

export {
  FirstScreen,
  Header,
  HeaderWrapper,
  ButtonOptions,
  Button,
  Footer,
  Logo,
};
