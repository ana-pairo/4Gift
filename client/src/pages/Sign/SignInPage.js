import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

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
import { auth } from "../../services/firebaseConfig";
import { toast } from "react-toastify";

export default function SignIn() {
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  async function submitEmailSignIn(e) {
    setIsDisable(true);
    e.preventDefault();

    const result = await signInWithEmailAndPassword(
      formData.email,
      formData.password
    );

    setIsDisable(false);
    if (result) {
      navigate("/register");
    }
  }

  useEffect(() => {
    if (error?.message === "Firebase: Error (auth/wrong-password).") {
      toast("Senha incorreta");
    }

    if (error?.message === "Firebase: Error (auth/user-not-found).") {
      toast("Email não cadastrado");
    }
  }, [error]);

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
