import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import facebookLetter from "../../assets/images/facebookLetter.png";
import googleLetter from "../../assets/images/googleLetter.png";
import { FadeIn, SlideInUp } from "../../utils/AnimationsList";
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

import SignInForm from "./components/SignInForm";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";

export default function SignIn() {
  const { SignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function submitEmailSignIn(e) {
    setIsDisable(true);
    e.preventDefault();

    const { email, password } = formData;

    const result = await SignIn({ type: "Email", email, password });

    setIsDisable(false);

    if (result.check) navigate("/home");

    if (result.error === "auth/user-not-found") toast("Email não cadastrado");

    if (result.error === "auth/wrong-password") toast("Senha incorreta");
  }

  async function submitGoogleSignIn() {
    const result = await SignIn({ type: "Google" });

    if (result.check) navigate("/home");

    if (result.error) toast("Erro! Por favor tente novamente mais tarde");
  }

  async function submitFacebookSignIn() {
    toast("Funcionalidade em progresso! Tente com outra opção");
  }

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
            <SocialButton
              background={facebookLetter}
              onClick={submitFacebookSignIn}
            ></SocialButton>
            <SocialButton
              background={googleLetter}
              onClick={submitGoogleSignIn}
            ></SocialButton>
          </SignOptions>
          <Break>
            <Line />
            <h1>Ou</h1>
            <Line />
          </Break>
          <FormBox screen={"in"}>
            <SignInForm
              submitSign={submitEmailSignIn}
              data={formData}
              setData={setFormData}
              isDisable={isDisable}
            />
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
