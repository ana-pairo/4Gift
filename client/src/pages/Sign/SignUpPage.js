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

import SignUpForm from "./components/SignUpForm";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <SecondScreen>
      <Header>
        <FadeIn>
          <h1>4Gift</h1>
        </FadeIn>
      </Header>
      <SlideInUp screen={"up"}>
        <SignWrapper screen={"up"}>
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
          <FormBox>
            <SignUpForm />
          </FormBox>

          <Link to="/sign-in" style={{ textDecoration: "none" }}>
            Já possui conta?
            <span style={{ color: "#DFB068" }}> Entre agora!</span>
          </Link>
        </SignWrapper>
      </SlideInUp>
    </SecondScreen>
  );
}
