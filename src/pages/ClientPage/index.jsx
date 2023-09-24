import FullTable from "../../components/FullTable";
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
    <div className="container-clients">
      <Sidebar />
      <Header />
      <div className="main-page-client ">
        <MenuTableClients />
        <FullTable lista={clients} />
        {!removeLoad && <LoadingPage />}
      </div>
      {modalClients && (
        <ModalClients setClients={setClients} clients={clients} />
      )}
      {messageSucessAddClient && <MensagemSucesso />}
    </div>
  );
}
