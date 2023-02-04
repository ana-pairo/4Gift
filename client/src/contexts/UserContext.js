import useUser from "../hooks/api/useUser";
import useSaveUser from "../hooks/api/useSaveUser";
import { createContext, useEffect, useState } from "react";
const UserContext = createContext();

export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const { user, getUser, userError } = useUser();
  const { saveUser } = useSaveUser();

  useEffect(() => {
    const sessionToken = localStorage.getItem("@Auth:token");
    const sessionUser = JSON.parse(localStorage.getItem("@Auth:user"));

    if (sessionToken && sessionUser) setUserData({ ...sessionUser });
  }, []);

  function createLocalStorage(userData, accessToken) {
    localStorage.setItem("@Auth:user", JSON.stringify({ ...userData }));
    createLocalStorageToken(accessToken);
  }

  function createLocalStorageToken(accessToken) {
    localStorage.setItem("@Auth:token", accessToken);
  }

  function updateLocalStorageUser(userData) {
    localStorage.setItem("@Auth:user", JSON.stringify({ ...userData }));
  }

  function cleanLocalStorage() {
    localStorage.clear();
  }

  async function checkAndSaveUserRegistration(body) {
    try {
      console.log(
        "entrando no check user com token",
        localStorage.getItem("@Auth:token")
      );
      const checandSeTem = await getUser();
      console.log(checandSeTem);
    } catch (error) {
      await saveUser(body);
      createLocalStorageToken(body.accessToken);
    }

    const userResult = await getUser();

    setUserData({ ...userResult });
    updateLocalStorageUser(userResult);
  }

  async function userRegistration(body) {
    await saveUser(body);
  }

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        createLocalStorage,
        updateLocalStorageUser,
        cleanLocalStorage,
        checkAndSaveUserRegistration,
        userRegistration,
        createLocalStorageToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
