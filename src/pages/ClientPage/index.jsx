import FullTableClients from "../../components/FullTableClients";
import Header from "../../components/Header";
import MenuTableClients from "../../components/MenuTableClients";
import Sidebar from "../../components/Sidebar";
import "./style.css";
import ModalClients from "../../components/ModalClients";
import { useMainContext } from "../../hooks/useMainContext";
import MensagemSucesso from "../../components/MensagemSucesso";
import { useEffect, useState } from "react";
import Axios from "../../services/api";
import LoadingPage from "../../components/LoadingPage/index";

export default function ClientsPage() {
  const { modalClients, messageSucessAddClient, userLog } = useMainContext();
  const [clients, setClients] = useState([]);
  const [removeLoad, setRemovedLoad] = useState(true);

  const title = "Clientes";

  const getClients = async () => {
    try {
      setRemovedLoad(false);
      const { data } = await Axios.get("/clients", {
        headers: {
          Authorization: userLog.token,
        },
      });

      setClients(data);
      setRemovedLoad(true);
    } catch (error) {
      console.log(error);
      setRemovedLoad(true);
    }
  };
  useEffect(() => {
    getClients();
  }, []);

  return (
    <div className="container-home ">
      <Sidebar />
      <div className="caitainer-back">
        <Header title={title} />

        <div className="container-clients">
          <MenuTableClients />
          <FullTableClients lista={clients} />
          {!removeLoad && <LoadingPage />}
        </div>
        {modalClients && <ModalClients />}
        {messageSucessAddClient && <MensagemSucesso />}
      </div>
    </div>
  );
}
