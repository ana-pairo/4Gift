import signInGoogle from "../../services/signIn";
import facebookLetter from "../../assets/images/facebookLetter.png";
import googleLetter from "../../assets/images/googleLetter.png";

import { FadeIn, SlideInUp } from "../../assets/animations/AnimationsList";
import { SecondScreen, Header, SignWrapper } from "./styles/SignStyle";

import styled from "styled-components";

export default function SignUp() {
  return (
    <SecondScreen>
      <Header>
        <FadeIn>
          <h1>4Gift</h1>
        </FadeIn>
      </Header>
      <SlideInUp>
        <SignWrapper>
          <SignHeader>Entre com</SignHeader>
          <SignOptions>
            <SocialButton background={facebookLetter}></SocialButton>
            <SocialButton background={googleLetter}></SocialButton>
          </SignOptions>
          <Break>
            <Line />
            <h1>Ou</h1>
            <Line />
          </Break>
        </SignWrapper>
      </SlideInUp>
    </SecondScreen>
  );
}

const SignHeader = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    height: fit-content;
    margin-top: 10px;
    /* background-color: aqua; */

    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SignOptions = styled.div`
  @media (max-width: 600px) {
    width: 100%;
    height: 8vh;
    max-height: 40px;
    margin-top: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    /* background-color: gray; */
  }
`;

const SocialButton = styled.div`
  border: 1px solid #77869e;
  border-radius: 10px;

  @media (max-width: 600px) {
    width: 45%;
    height: 100%;

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
