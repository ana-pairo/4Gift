import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

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
import { auth } from "../../services/firebaseConfig";
import { toast } from "react-toastify";

export default function SignUp() {
  const navigate = useNavigate();
  const [isDisable, setIsDisable] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatedPassword: "",
  });

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  async function submitEmailSignUp(e) {
    setIsDisable(true);
    e.preventDefault();

    const result = await createUserWithEmailAndPassword(
      formData.email,
      formData.password
    );

    setIsDisable(false);
    if (result) {
      toast("Email cadastrado com sucesso");
      navigate("/sign-in");
    }
  }

  useEffect(() => {
    if (error?.message === "Firebase: Error (auth/email-already-in-use).")
      toast("Email já cadastrado");
  }, [error]);

  return (
    <>
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
    </>
  );
}
