import facebookLetter from "../../assets/images/facebookLetter.png";
import googleLetter from "../../assets/images/googleLetter.png";

import { FadeIn, SlideInUp } from "../../assets/animations/AnimationsList";
import {
  SecondScreen,
  Header,
  SignWrapper,
  SignHeader,
  SignOptions,
  SocialButton,
  Break,
  Line,
  FormBox,
} from "./styles/SignStyle";

import { Link } from "react-router-dom";
import SignInForm from "./components/SignInForm";

export default function SignIn() {
  return (
    <SecondScreen>
      <Header>
        <FadeIn>
          <h1>4Gift</h1>
        </FadeIn>
      </Header>
      <SlideInUp screen={"in"}>
        <SignWrapper screen={"in"}>
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
          <FormBox screen={"in"}>
            <SignInForm />
          </FormBox>
          <Link to="/sign-up" style={{ textDecoration: "none" }}>
            Primeira vez?
            <span style={{ color: "#DFB068" }}> Cadastre-se</span>
          </Link>
        </SignWrapper>
      </SlideInUp>
    </SecondScreen>
  );
}
