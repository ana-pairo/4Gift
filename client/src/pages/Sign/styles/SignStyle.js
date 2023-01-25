import styled from "styled-components";
import backgroundImage from "../../../assets/images/4gift_background_welcome_left.jpg";

const SecondScreen = styled.div`
  position: relative;
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
    height: 80vh;
    padding: 5vh 5vw 6vh 5vw;

    border-radius: 20px;
  }
`;

export { SecondScreen, Header, SignWrapper };
