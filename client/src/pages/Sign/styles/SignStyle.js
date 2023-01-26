import styled from "styled-components";
import backgroundImage from "../../../assets/images/4gift_background_welcome_left.jpg";

const SecondScreen = styled.div`
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;

  @media (max-width: 600px) {
    align-items: center;
    background-position-x: 50%;
    width: 100vw;
    height: 100vh;

    overflow-y: hidden;
  }
`;

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 600px) {
    height: 10vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-weight: 700;
      font-size: 50px;
      font-family: "Sura", serif;
      color: #1f3b62;
      font-family: "Sura", serif;
      width: fit-content;
    }
  }
`;

const SignWrapper = styled.div`
  background-color: #ffffff;

  @media (max-width: 600px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    width: 100vw;
    height: ${(props) => (props.screen === "up" ? "650px" : "500px")};
    padding: 5vh 5vw 6vh 5vw;

    border-radius: 20px;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const SignHeader = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    height: fit-content;
    margin-top: 10px;

    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SignOptions = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    min-height: 40px;
    margin-top: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const SocialButton = styled.div`
  border: 1px solid #77869e;
  border-radius: 10px;

  @media (max-width: 600px) {
    width: 45%;
    height: 40px;

    background-image: ${(props) => `url(${props.background})`};
    background-size: auto 60%;
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
  }
`;

const Break = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    height: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;

    h1 {
      font-size: 16px;
      color: #77869e;
    }
  }
`;

const Line = styled.hr`
  border-top: 0.1em solid rgb(0, 0, 0, 0.3);
  width: 40%;
`;

const FormBox = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    height: fit-content;
    min-height: ${(props) => (props.screen ? "250px" : "370px")};
    margin-bottom: 20px;
  }
`;

export {
  SecondScreen,
  Header,
  SignWrapper,
  SignHeader,
  SignOptions,
  SocialButton,
  Break,
  Line,
  FormBox,
};
