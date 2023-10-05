import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import "./style.css";
import ModalClients from "../../components/ModalClients";

import FullTableCobranca from "../../components/FullTableCobranca";
import { useMainContext } from "../../hooks/useMainContext";

import Loading from "../../components/LoadingPage";
import MenuTableClients from "../../components/MenuTableClients";

export default function CobrancaPage() {
  const { modalClients, handleOpen, charges, setCharges, removeLoad } =
    useMainContext();
  const title = "Cobranças";

  if (removeLoad) {
    return <Loading />;
  }

  return (
    <div className="container-home ">
      <Sidebar />
      <div className="caitainer-back">
        <Header title={title} />

        <main className="container-clients">
          <MenuTableClients name={title} />
          <FullTableCobranca
            cobrancas={charges}
            handleOpen={handleOpen}
            setCobrancas={setCharges}
          />
        </main>

        {modalClients && <ModalClients />}
      </div>
    </div>
  );
}
