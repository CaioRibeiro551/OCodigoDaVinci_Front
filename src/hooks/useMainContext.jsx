import { useContext, useState } from "react";
import { useLocalStorage } from "react-use";
import { MainContext } from "../context/MainContext";

export function useMainContextProvider() {
  const [userLog, setUserLog, removeUserLog] = useLocalStorage("user", {});
  const [modalTeste, setModalTeste] = useState(false);


  const [modalClients, setModalClients] = useState(false);


  return {
    userLog,
    setUserLog,
    removeUserLog,
    modalTeste,
    setModalTeste,
    modalClients,
    setModalClients,

  };
}

export function useMainContext() {
  return useContext(MainContext);
}
