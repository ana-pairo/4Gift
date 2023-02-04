import { createContext, useContext } from "react";
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
  const {
    setUserData,
    userData,
    cleanLocalStorage,
    createLocalStorageToken,
    checkAndSaveUserRegistration,
    userRegistration,
  } = useContext(UserContext);

  async function SignIn({ type, email, password }) {
    let response;
    let accessToken;
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

      accessToken = firebaseResult?.user?.accessToken;

      if (accessToken !== null) {
        response = {
          check: true,
          error: false,
        };

        createLocalStorageToken(accessToken);

        const { displayName, photoURL, phoneNumber } = firebaseResult?.user;

        await checkAndSaveUserRegistration({
          accessToken,
          email: firebaseResult.user.email,
          displayName,
          photoURL,
          phoneNumber,
        });

        console.log("VOLTOU DO BANCO E AGORA TEM USER", userData);
      }
    } catch (error) {
      response = {
        check: false,
        error: error.code,
      };
    }

    return response;
  }

  async function SignUpEmail({ email, password }) {
    let response;
    try {
      const firebaseResult = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const accessToken = firebaseResult.user.accessToken;

      const body = {
        email,
        accessToken,
      };

      if (accessToken !== null) {
        response = {
          check: true,
          error: false,
        };

        const databaseResponse = await userRegistration(body);

        if (databaseResponse?.error) response = { ...databaseResponse };
      }
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
