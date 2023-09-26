import { useContext, useState } from "react";
import { useLocalStorage } from "react-use";
import { MainContext } from "../context/MainContext";

export function useMainContextProvider() {
  const [userLog, setUserLog, removeUserLog] = useLocalStorage("user", {});
  const [modalTeste, setModalTeste] = useState(false);

  const [modalClients, setModalClients] = useState(false);
  const [messageSucessAddClient, setMessageSucessAddClient] = useState(false);

  const [messageFlash, setMessageFlash] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const [openEdith, setOpenEdith] = useState(false);
  const handleOpenEdith = () => {
    setOpenEdith((prevOpen) => !prevOpen);
  };

  return {
    userLog,
    setUserLog,
    removeUserLog,
    modalTeste,
    setModalTeste,
    modalClients,
    setModalClients,
    messageSucessAddClient,
    setMessageSucessAddClient,
    messageFlash,
    setMessageFlash,
    handleOpen,
    open,
    openEdith,
    handleOpenEdith,
  };
}

export function useMainContext() {
  return useContext(MainContext);
}
