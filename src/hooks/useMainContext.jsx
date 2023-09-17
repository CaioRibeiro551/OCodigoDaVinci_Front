import { useContext, useState } from "react";
import { useLocalStorage } from "react-use";
import { MainContext } from "../context/MainContext";

export function useMainContextProvider() {
  const [user, setUser, removeUser] = useLocalStorage("user", {});
  const [modalTeste, setModalTeste] = useState(false);

  return {
    user,
    setUser,
    removeUser,
    modalTeste,
    setModalTeste,
  };
}

export function useMainContext() {
  return useContext(MainContext);
}
