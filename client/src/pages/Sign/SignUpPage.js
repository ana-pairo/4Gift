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

import SignUpForm from "./components/SignUpForm";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/AuthContext";

export default function SignUp() {
  const { SignUpEmail, SignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatedPassword: "",
  });

  async function submitEmailSignUp(e) {
    setIsDisable(true);
    e.preventDefault();
    const { email, password } = formData;

    const result = await SignUpEmail({ email, password });

    setIsDisable(false);
    if (result.check) {
      toast("Email cadastrado com sucesso");
      navigate("/sign-in");
    }

    if (result.error === "auth/email-already-in-use") toast("Email já cadastrado");

    if (result.error === "auth/wrong-password") toast("Senha incorreta");

    if (result.error === "user-registration-failed") toast("Erro! Não foi possível cadastrar sua conta");

    if (result.error === "database") toast("Erro! Não foi possível cadastrar sua conta.");

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
      <SlideInUp screen={"up"}>
        <SignWrapper screen={"up"}>
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
          <FormBox>
            <SignUpForm
              submitSign={submitEmailSignUp}
              data={formData}
              setData={setFormData}
              isDisable={isDisable}
            />
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
