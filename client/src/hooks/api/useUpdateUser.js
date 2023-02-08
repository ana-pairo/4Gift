import useAsync from "../useAsync";
import * as userApi from "../../services/apiServices/userApi";

export default function useUpdateUser() {
  const {
    loading: updateUserLoading,
    error: updateUserError,
    act: updateUser,
  } = useAsync((data) => userApi.updateUser(data), false);

  return {
    updateUser,
    updateUserLoading,
    updateUserError,
  };
}
