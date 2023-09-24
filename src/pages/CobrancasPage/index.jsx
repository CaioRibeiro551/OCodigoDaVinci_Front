import FullTable from "../../components/FullTableClients";
import Header from "../../components/Header";
import MenuTableClients from "../../components/MenuTableClients";
import Sidebar from "../../components/Sidebar";
import { clients } from "../../utils/data";
import "./style.css";
import ModalClients from "../../components/ModalClients";
import MenuTableCobranca from "../../components/MenuTableCobranca";
import FullTableCobranca from "../../components/FullTableCobranca";
import { useMainContext } from "../../hooks/useMainContext";
import { useState, useEffect } from "react";
import Axios from "../../services/api";

export default function CobrancaPage() {
  const { modalClients } = useMainContext();
  const title = "Cobranças";

  const [lista, setLista] = useState(clients);

  const [cobrancas, setCobrancas] = useState([]);
  const [remoLoad, setRemovedLoad] = useState(true);
  const { userLog } = useMainContext();

  useEffect(() => {
    async function getCobrancas() {
      try {
        setRemovedLoad(false);
        const response = await Axios.get(`/charges`, {
          headers: { Authorization: `Bearer ${userLog.token}` },
        });

        setCobrancas(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getCobrancas();
  }, []);

  const adicionarItem = () => {
    if (novoItem.trim() !== "") {
      const novaLista = [...lista, novoItem];
      setLista(novaLista);
      setNovoItem("");
    }
  };
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
