import useAsync from "../useAsync";

import * as authApi from "../../services/apiServices/authApi";

export default function useTest() {
  const {
    data: test,
    loading: testLoading,
    error: testError,
    act: getTest,
  } = useAsync(() => authApi.teste());

  return {
    test,
    testLoading,
    testError,
    getTest,
  };
}
