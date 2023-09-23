import FullTableClients from "../../components/FullTableClients";
import Header from "../../components/Header";
import MenuTableClients from "../../components/MenuTableClients";
import Sidebar from "../../components/Sidebar";
import { clients } from "../../utils/data";
import "./style.css";
import ModalClients from "../../components/ModalClients";
import { useMainContext } from "../../hooks/useMainContext";
import MensagemSucesso from "../../components/MensagemSucesso";
import { useState } from "react";

export default function ClientsPage() {
  const { modalClients, messageSucessAddClient } = useMainContext();
  const title = "Clientes";

  const [lista, setLista] = useState(clients);
  const [novoItem, setNovoItem] = useState("");

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
          <MenuTableClients />
          <FullTableClients lista={lista} />
        </div>
        {modalClients && <ModalClients />}
        {messageSucessAddClient && <MensagemSucesso />}
      </div>
    </div>
  );
}
