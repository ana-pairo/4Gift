import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import useSaveUser from "../hooks/api/useSaveUser";
import { auth } from "../services/firebaseConfig";
import { Navigate } from "react-router-dom";
import UserContext from "./UserContext";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const { saveUser } = useSaveUser();
  const googleProvider = new GoogleAuthProvider();
  const {
    setUserData,
    cleanLocalStorage,
    createLocalStorage,
    checkAndSaveUserRegistration,
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

      response = {
        check: true,
        error: false,
      };

      createLocalStorage(firebaseResult.user, accessToken);

      const { displayName, photoURL, phoneNumber } = firebaseResult?.user;

      const databaseResponse = await checkAndSaveUserRegistration({
        accessToken,
        email: firebaseResult.user.email,
        displayName,
        photoURL,
        phoneNumber,
      });

      if (databaseResponse?.error) response = { ...databaseResponse };
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

      await saveUser(body);

      createLocalStorage(firebaseResult.user, accessToken);

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
