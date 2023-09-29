import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "./style.css";
import ModalClients from "../../components/ModalClients";
import MenuTableCobranca from "../../components/MenuTableCobranca";
import FullTableCobranca from "../../components/FullTableCobranca";
import { useMainContext } from "../../hooks/useMainContext";

export default function CobrancaPage() {
  const { modalClients, handleOpen, charges } = useMainContext();
  const title = "Cobranças";

  return (
    <div className="container-home ">
      <Sidebar />
      <div className="caitainer-back">
        <Header title={title} />

        <main className="container-clients">
          <MenuTableCobranca />
          <FullTableCobranca cobrancas={charges} handleOpen={handleOpen} />
        </main>
        {modalClients && <ModalClients />}
      </div>
    </div>
  );
}
