import Sidebar from "../../components/Sidebar/index";
import Table from "../../components/Table/index";
import TituloCobranca from "../../components/TitutloCobranca/index";
import Modal from "../../components/ModalTeste";
import { useMainContext } from "../../hooks/useMainContext";

export default function Home() {
  const { modalTeste, setModalTeste } = useMainContext();

  const handleModal = () => {
    setModalTeste(true);
  };
  return (
    <>
      <Sidebar />
      <Table />
      <TituloCobranca />
      <button onClick={handleModal}>Abrir Modal</button>

      {<>{modalTeste && <Modal />}</>}
    </>
  );
}
