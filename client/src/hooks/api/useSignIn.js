import useAsync from "../useAsync";
import * as authApi from "../../services/apiServices/authApi";

export default function useSignIn() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn,
  } = useAsync((data) => authApi.signIn(data), false);

  return {
    signInError,
    signInLoading,
    signIn,
  };
}
