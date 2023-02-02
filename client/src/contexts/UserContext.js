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
    localStorage.setItem("@Auth:token", accessToken);
    localStorage.setItem("@Auth:user", JSON.stringify({ ...userData }));
  }

  function updateLocalStorage(userData) {
    localStorage.setItem("@Auth:user", JSON.stringify({ ...userData }));
  }

  function cleanLocalStorage() {
    localStorage.clear();
  }

  //  async function checkDatabase(){
  //    AVERIGUA O USER, PEGA OU CRIA O USER
  //CONECTAR COM O BANCO
  //GET USER PELO TOKEN PRIMEIRO
  //--> SE RETORNAR ERRO
  //POST USER
  //SETUSERDATA
  //CREATELOCALSTORAGE
  //--> SE RETORNAR UM USER
  //SETUSERDATA
  //CREATELOCALSTORAGE
  // }

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        createLocalStorage,
        updateLocalStorage,
        cleanLocalStorage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
