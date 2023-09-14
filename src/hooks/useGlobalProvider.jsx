import { useState } from "react";
import { useLocalStorage } from "react-use";

function useGlobalProvider() {
  const [openAddEditModal, setOpenAddEditModal] = useState(false);
  const [token, setToken, removeToken] = useLocalStorage("token", "");

  return {
    openAddEditModal,
    setOpenAddEditModal,
    token,
    setToken,
    removeToken,
  };
}

export default useGlobalProvider;
