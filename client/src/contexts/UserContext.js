import useUser from "../hooks/api/useUser";
import useSaveUser from "../hooks/api/useSaveUser";
import { createContext, useEffect, useState } from "react";
const UserContext = createContext();

export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const { user, getUser } = useUser();
  const { saveUser } = useSaveUser();

  useEffect(() => {
    const sessionToken = localStorage.getItem("@Auth:token");
    const sessionUser = JSON.parse(localStorage.getItem("@Auth:user"));

    if (sessionToken && sessionUser) setUserData({ ...sessionUser });
  }, []);

  function createLocalStorage(userData, accessToken) {
    localStorage.setItem("@Auth:token", accessToken);
    localStorage.setItem("@Auth:user", JSON.stringify({ ...userData }));
  }

  function updateLocalStorage(userData) {
    localStorage.setItem("@Auth:user", JSON.stringify({ ...userData }));
  }

  function cleanLocalStorage() {
    localStorage.clear();
  }

  async function checkAndSaveUserRegistration(body) {
    console.log(body);
    try {
      await getUser();
    } catch (error) {
      console.log(user);

      if (!user) {
        await saveUser(body);
        return;
      }

      setUserData({ ...user });
      updateLocalStorage(user);
    }
  }

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        createLocalStorage,
        updateLocalStorage,
        cleanLocalStorage,
        checkAndSaveUserRegistration,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
