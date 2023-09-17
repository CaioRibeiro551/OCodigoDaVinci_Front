import Modal from "../../components/ModalTeste";
import Sidebar from "../../components/Sidebar/index";
import Table from "../../components/Table/index";
import TituloCobranca from "../../components/TituloCobranca/index";
import Header from "../../components/Header/index";
import { useMainContext } from "../../hooks/useMainContext";

export default function Home() {
  const { modalTeste } = useMainContext();
  return (
    <div className="page-container">
      <Header />
      <main className="main-container">
        <Sidebar />
        <div className="card-container">
          <div className="card">
            <TituloCobranca tipo="pagas" valor="R$ 30.000" />
            <Table />
          </div>

          <div className="card">
            <TituloCobranca tipo="vencidas" valor="R$ 30.000" />
            <Table />
          </div>

          <div className="card">
            <TituloCobranca tipo="previstas" valor="R$ 30.000" />
            <Table />
          </div>
        </div>
      </main>
      {<>{modalTeste && <Modal />}</>}
    </div>
  );
}
