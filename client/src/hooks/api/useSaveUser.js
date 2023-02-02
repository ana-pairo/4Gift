import useAsync from "../useAsync";
import * as authApi from "../../services/apiServices/authApi";

export default function useSaveUser() {
  const {
    loading: saveUserLoading,
    error: saveUserError,
    act: saveUser,
  } = useAsync((data) => authApi.save(data), false);

  return {
    saveUserLoading,
    saveUserError,
    saveUser,
  };
}
