import { createContext, useContext } from "react";
import { auth } from "../services/firebaseConfig";
import { Navigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getAuth,
  deleteUser,
} from "firebase/auth";

import UserContext from "./UserContext";
import useSignUp from "../hooks/api/useSignUp";
import useSignIn from "../hooks/api/useSignIn";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const { signUp } = useSignUp();
  const { signIn } = useSignIn();
  const googleProvider = new GoogleAuthProvider();
  const { setUserData, cleanLocalStorage, createLocalStorage } =
    useContext(UserContext);

  async function SignIn({ type, email, password }) {
    let response;
    let firebaseResult;

    try {
      if (type === "Google") {
        firebaseResult = await signInWithPopup(auth, googleProvider);
      }

      if (type === "Email") {
        firebaseResult = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      }

      console.log("entrou no try do firebase e chegou no fim")
    } catch (error) {
      response = {
        check: false,
        error: error.code,
      };

      console.log("entrou no catch do firebase")

      return response;
    }

    console.log("passou o firebase com resultado tal e agora criando body", firebaseResult.user)

    const { accessToken, displayName, phoneNumber, photoURL } =
      firebaseResult.user;

    const body = {
      email: firebaseResult.user.email,
      accessToken,
      displayName,
      phoneNumber,
      photoURL,
    };

    console.log("body", body)

    try {

      console.log("entrando no try do database")
      const userResult = await signIn(body);

      console.log("passou o await signIn comr esultao", userResult)

      createLocalStorage(userResult, accessToken);

      console.log("local storage ")

      setUserData({ ...userResult });

      console.log("setou o userData e acabou o try")
    } catch (error) {
      response = {
        check: false,
        error: "database",
      };
      console.log("entrou no catch do databse com erro", error)
      return response;
    }

    response = {
      check: true,
      error: false,
    };

    return response;
  }

  async function SignUpEmail({ email, password }) {
    let response;
    let body;
    try {
      const firebaseResult = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );


      const accessToken = firebaseResult.user.accessToken;

      body = {
        email,
        accessToken,
      };
    } catch (error) {
      response = {
        check: false,
        error: error.code,
      };
      return response;
    }

    try {
      await signUp(body);

    } catch (error) {

      const firebaseUser = getAuth().currentUser;

      await deleteUser(firebaseUser);

      response = {
        check: false,
        error: "database",
      };

      return response;
    }

    response = {
      check: true,
      error: false,
    };

    return response;
  }

  async function SignOut() {
    cleanLocalStorage();

    setUserData(null);

    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }

    return <Navigate to="/" />;
  }

  return (
    <AuthContext.Provider value={{ SignIn, SignUpEmail, SignOut }}>
      {children}
    </AuthContext.Provider>
  );
}
