import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "./style.css";
import ModalClients from "../../components/ModalClients";
import MenuTableCobranca from "../../components/MenuTableCobranca";
import FullTableCobranca from "../../components/FullTableCobranca";
import { useMainContext } from "../../hooks/useMainContext";
import { useState, useEffect } from "react";

import api from "../../services/api";
import { format } from "date-fns";
import Loading from "../../components/LoadingPage";

export default function CobrancaPage() {
  const {
    modalClients,
    userLog,
    handleOpen,
    modalType,
    charges,
    removeLoad,
    setRemovedLoad,
  } = useMainContext();
  const title = "Cobranças";

  const [cobrancas, setCobrancas] = useState([]);

  return (
    <div className="container-home ">
      <Sidebar />
      <div className="caitainer-back">
        <Header title={title} />

        <main className="container-clients">
          <MenuTableCobranca />
          <FullTableCobranca
            cobrancas={charges}
            handleOpen={handleOpen}
            setCobrancas={setCobrancas}
          />
        </main>

        {modalClients && <ModalClients />}
        {!removeLoad && <Loading />}
      </div>
    </div>
  );
}
