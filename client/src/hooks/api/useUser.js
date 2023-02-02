import useAsync from "../useAsync";

import * as authApi from "../../services/apiServices/authApi";

export default function useUser() {
  const {
    data: user,
    loading: userLoading,
    error: userError,
    act: getUser,
  } = useAsync(() => authApi.getUserData());

  return {
    user,
    userLoading,
    userError,
    getUser,
  };
}
