import { createContext, useEffect, useState } from "react";
const UserContext = createContext();

export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useState(null);

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

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        createLocalStorage,
        updateLocalStorageUser,
        cleanLocalStorage,
        createLocalStorageToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
