import { useContext, useState } from "react";
import { useLocalStorage } from "react-use";
import { MainContext } from "../context/MainContext";

export function useMainContextProvider() {
  const [userLog, setUserLog, removeUserLog] = useLocalStorage("user", {});
  const [modalTeste, setModalTeste] = useState(false);

  return {
    userLog,
    setUserLog,
    removeUserLog,
    modalTeste,
    setModalTeste,
  };
}

export function useMainContext() {
  return useContext(MainContext);
}
