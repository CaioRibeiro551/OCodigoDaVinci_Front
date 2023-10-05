import { useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { MainContext } from "../context/MainContext";
import Axios from "../services/api";

export function useMainContextProvider() {
  const [userLog, setUserLog, removeUserLog] = useLocalStorage("user", {});
  const [modalTeste, setModalTeste] = useState(false);
  const [removeLoad, setRemovedLoad] = useState(true);
  const [modalClients, setModalClients] = useState(false);
  const [messageSucessAddClient, setMessageSucessAddClient] = useState(false);
  const [modalEditeClients, setModalEditeClients] = useState(false);
  const [messageSucessUpdateUser, setMessageSucessUpdateUser] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);
  const [messageFlash, setMessageFlash] = useState(false);
  const [filter, setFilter] = useState("");
  const [getOne, setGetOne] = useState();
  const [openDetails, setOpenDetails] = useState(false);

  const handleOpenDetails = () => {
    setOpenDetails((prevOpen) => !prevOpen);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
    setOpenModalRegister(false);
  };

  const [openEdith, setOpenEdith] = useState(false);
  const handleOpenEdith = () => {
    setOpenEdith((prevOpen) => !prevOpen);
  };

  const [cobrancaExcluir, setCobrancaExcluir] = useState(false);
  const [clients, setClients] = useState([]);

  const getClients = async () => {
    setRemovedLoad(true);
    try {
      setRemovedLoad(false);
      const { data } = await Axios.get("/clients", {
        headers: {
          Authorization: userLog.token,
        },
      });

      setClients(data);
      setRemovedLoad(false);
    } catch (error) {
      setRemovedLoad(false);
      throw error;
    }
  };

  useEffect(() => {
    if (userLog.token) {
      getClients();
    }
  }, [userLog.token]);

  const [charges, setCharges] = useState([]);

  const getCharges = async () => {
    try {
      const { data } = await Axios.get(`/charges`, {
        headers: { Authorization: `Bearer ${userLog.token}` },
      });

      setCharges(data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (userLog.token) {
      getCharges();
    }
  }, [userLog.token]);

  const [showClient, setShowClient] = useState();

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
    messageSucessUpdateUser,
    setMessageSucessUpdateUser,
    modalEditeClients,
    setModalEditeClients,
    openModalRegister,
    setOpenModalRegister,
    cobrancaExcluir,
    setCobrancaExcluir,
    clients,
    removeLoad,
    charges,
    setCharges,
    showClient,
    setShowClient,
    filter,
    setFilter,
    handleOpenDetails,
    openDetails,
    getOne,
    setGetOne,
    setClients,
  };
}

export function useMainContext() {
  return useContext(MainContext);
}
