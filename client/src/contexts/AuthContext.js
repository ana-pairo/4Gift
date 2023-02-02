import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "../services/firebaseConfig";
import { Navigate } from "react-router-dom";
import UserContext from "./UserContext";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const googleProvider = new GoogleAuthProvider();
  const { setUserData, cleanLocalStorage } = useContext(UserContext);
  //  const { CHECKDATABASE } = useContext(UserContext);

  async function SignIn({ type, email, password }) {
    let response;
    let tokenAcess;
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

      tokenAcess = firebaseResult?.user?.tokenAcess;

      response = {
        check: true,
        error: false,
      };
    } catch (error) {
      response = {
        check: false,
        error: error.code,
      };
    }

    //CHAMAR FUNÇÃO USERCONTEXT CHECKDATABASE

    return response;
  }

  async function SignUpEmail({ email, password }) {
    let response;
    let tokenAcess;
    try {
      const firebaseResult = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      tokenAcess = firebaseResult?.user?.tokenAcess;
      console.log(tokenAcess);

      //CHAMAR FUNÇÃO USERCONTEXT CHECKDATABASE

      response = {
        check: true,
        error: false,
      };
    } catch (error) {
      response = {
        check: false,
        error: error.code,
      };
    }

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

// async function SignInGoogle() {
//   let response;
//   let tokenAcess;
//   try {
//     const result = await signInWithPopup(auth, googleProvider);

//     tokenAcess = result.user.tokenAcess;

//     response = {
//       check: true,
//       error: false,
//     };
//   } catch (error) {
//     response = {
//       check: false,
//       error: error.code,
//     };
//   }

//   //CHAMA FUNÇÃO CHECKDATABASE
// }

// async function SignInEmail(email, password) {
//   let response;
//   let tokenAcess;
//   try {
//     const result = await signInWithEmailAndPassword(auth, email, password);

//     tokenAcess = result.user.tokenAcess;

//     return (response = {
//       check: true,
//       error: false,
//     });
//   } catch (error) {
//     response = {
//       check: false,
//       error: error.code,
//     };
//   }

//   //FUNÇÃO QUE CONECTA COM O BANCO E FAZ ESSA VALIDAÇÃO
// }
