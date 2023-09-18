import Modal from "../../components/ModalTeste";
import Sidebar from "../../components/Sidebar/index";
import TituloCobranca from "../../components/TituloCobranca";
import Header from "../../components/Header/index";
import { useMainContext } from "../../hooks/useMainContext";
import "./style.css";
import ResumeTable from "../../components/ResumeTable";
import { ResumeTableHeader, cards } from "../../utils/data";

export default function Home() {
  const { modalTeste } = useMainContext();

  return (
    <div className="container-home ">
      <Sidebar />
      <div>
        <Header />
        <main>
          <div className="contents-home">
            <div className="contents-title">
              {cards.map((item, index) => (
                <TituloCobranca item={item} key={index} />
              ))}
            </div>
            {modalTeste ? <Modal /> : ""}
            <div className="contents-small-table">
              <div>
                {ResumeTableHeader.map((item, index) => (
                  <ResumeTable item={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
