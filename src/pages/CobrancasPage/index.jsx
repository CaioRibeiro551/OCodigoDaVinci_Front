import Header from "../../components/Header";

import Sidebar from "../../components/Sidebar";

import "./style.css";
import ModalClients from "../../components/ModalClients";
import MenuTableCobranca from "../../components/MenuTableCobranca";
import FullTableCobranca from "../../components/FullTableCobranca";
import { useMainContext } from "../../hooks/useMainContext";
import { useState, useEffect } from "react";
import Axios from "../../services/api";

export default function CobrancaPage() {
  const { modalClients, userLog } = useMainContext();
  const title = "Cobranças";

  const [cobrancas, setCobrancas] = useState([]);
  const [remoLoad, setRemovedLoad] = useState(true);

  useEffect(() => {
    async function getCobrancas() {
      try {
        setRemovedLoad(false);
        const response = await Axios.get(`/charges`, {
          headers: { Authorization: `Bearer ${userLog.token}` },
        });
        setRemovedLoad(true);
        setCobrancas(response.data);
      } catch (error) {
        setRemovedLoad(true);
        console.log(error);
      }
    }

    getCobrancas();
  }, []);

  return (
    <div className="container-home ">
      <Sidebar />
      <div className="caitainer-back">
        <Header title={title} />

        <div className="container-clients">
          <MenuTableCobranca />
          <FullTableCobranca cobrancas={cobrancas} />
        </div>
        {modalClients && <ModalClients />}
      </div>
    </div>
  );
}
