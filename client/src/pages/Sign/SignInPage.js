import { Link, useNavigate, Navigate } from "react-router-dom";
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
  let userData;
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

    userData = JSON.parse(localStorage.getItem("@Auth:user"));

    const isMissingData =
      userData?.displayName === null ||
      userData?.birthday === null ||
      userData?.phoneNumber === null;

    setIsDisable(false);

    if (result.check && !isMissingData) navigate("/home");

    if (result.check && isMissingData) navigate("/account");

    if (result.error === "auth/user-not-found") toast("Email não cadastrado");

    if (result.error === "auth/wrong-password") toast("Senha incorreta");

    if (result.error === "database") toast("Erro! Tente novamente mais tarde.");
  }

  async function submitGoogleSignIn() {
    const result = await SignIn({ type: "Google" });

    userData = JSON.parse(localStorage.getItem("@Auth:user"));

    const isMissingData =
      userData.displayName === null ||
      userData.birthday === null ||
      userData.phoneNumber === null;

    if (result.check && !isMissingData) navigate("/home");

    if (result.check && isMissingData) navigate("/account");

    if (result.error === "user-registration-failed") {
      return toast("Erro! Não foi possível cadastrar sua conta");
    }

    if (result.error === "database") toast("Erro! Tente novamente mais tarde.");
  }

  async function submitFacebookSignIn() {
    toast("Funcionalidade em progresso! Tente com outra opção");
  }

  return JSON.parse(localStorage.getItem("@Auth:user")) ? (
    <Navigate to="/home" />
  ) : (
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
