import FullTableClients from "../../components/FullTableClients";
import Header from "../../components/Header";
import MenuTableClients from "../../components/MenuTableClients";
import Sidebar from "../../components/Sidebar";
import "./style.css";
import ModalClients from "../../components/ModalClients";
import { useMainContext } from "../../hooks/useMainContext";
import MensagemSucesso from "../../components/MensagemSucesso";
import { useState } from "react";
import Loading from "../../components/LoadingPage/index";
import ModalEditeClients from "../../components/ModalEditClients";

export default function ClientsPage() {
  const { modalClients, messageSucessAddClient, modalEditeClients, clients } =
    useMainContext();

  const [removeLoad, setRemovedLoad] = useState(false);

  const title = "Clientes";

  return (
    <div className="container-home ">
      <Sidebar />
      <div className="caitainer-back">
        <Header title={title} />

        <div className="container-clients">
          <MenuTableClients />
          <FullTableClients lista={clients} />
        </div>
        {modalClients && <ModalClients />}
        {modalEditeClients && <ModalEditeClients />}
        {messageSucessAddClient && <MensagemSucesso />}
      </div>
    </div>
  );
}
