import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "./firebaseConfig";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export default async function signInGoogle() {

    try {
        const result = await signInWithPopup(auth, provider);

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        const userData = {
            user,
            token,
        };

        console.log(userData);

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        const errors = {
            errorCode,
            errorMessage,
            email,
            credential
        }

        console.log(errors);
    }
}
