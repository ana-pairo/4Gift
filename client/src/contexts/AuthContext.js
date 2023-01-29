import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth } from "../services/firebaseConfig";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const googleProvider = new GoogleAuthProvider();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const sessionToken = localStorage.getItem("@Auth:token");
    const sessionUser = JSON.parse(localStorage.getItem("@Auth:user"));

    if (sessionToken && sessionUser) setUserData({ ...sessionUser });
  }, []);

  async function SignInGoogle() {
    let response;
    try {
      const result = await signInWithPopup(auth, googleProvider);

      if (result) {
        const { displayName, phoneNumber, photoURL, accessToken } = result.user;

        setUserData({
          displayName,
          phoneNumber,
          photoURL,
          birthday: null,
        });

        localStorage.setItem(
          "@Auth:user",
          JSON.stringify({
            displayName,
            phoneNumber,
            photoURL,
            birthday: null,
          })
        );
        localStorage.setItem("@Auth:token", accessToken);

        return (response = {
          check: true,
          error: false,
        });
      }
    } catch (error) {
      const errorCode = error.code;
      return (response = {
        check: false,
        error: errorCode,
      });
    }
  }

  async function SignInEmail(email, password) {
    let response;
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      if (result) {
        const { displayName, phoneNumber, photoURL, accessToken } = result.user;

        setUserData({
          displayName,
          phoneNumber,
          photoURL,
          birthday: null,
        });

        localStorage.setItem(
          "@Auth:user",
          JSON.stringify({
            displayName,
            phoneNumber,
            photoURL,
            birthday: null,
          })
        );
        localStorage.setItem("@Auth:token", accessToken);

        return (response = {
          check: true,
          error: false,
        });
      }
    } catch (error) {
      const errorCode = error.code;
      return (response = {
        check: false,
        error: errorCode,
      });
    }
  }

  async function SignUpEmail(email, password) {
    let response;
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (result) {
        return (response = {
          check: true,
          error: false,
        });
      }
    } catch (error) {
      const errorCode = error.code;
      return (response = {
        check: false,
        error: errorCode,
      });
    }
  }

  async function SignOut() {
    localStorage.clear();
    setUserData(null);
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }

    return <Navigate to="/" />;
  }

  return (
    <AuthContext.Provider
      value={{
        SignInEmail,
        SignUpEmail,
        SignInGoogle,
        SignOut,
        signed: !!userData,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
