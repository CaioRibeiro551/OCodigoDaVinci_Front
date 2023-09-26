import Modal from '../../components/ModalEditUser';
import Sidebar from '../../components/Sidebar/index';
import TituloCobranca from '../../components/TituloCobranca';
import Header from '../../components/Header/index';
import { useMainContext } from '../../hooks/useMainContext';
import './style.css';
import ResumeTable from '../../components/ResumeTable';
import { ResumeTableHeader, cards } from '../../utils/data';

export default function Home() {
  const { modalTeste } = useMainContext();
  const title = 'Resumo das cobranças';
  return (
    <div className="container-home ">
      <Sidebar />
      <div className="caitainer-back">
        <Header title={title} />

        <div className="container-clients">
          <div className="contents-title">
            {cards.map((item, index) => (
              <TituloCobranca item={item} key={index} />
            ))}
          </div>
          {modalTeste ? <Modal /> : ''}
          <div className="contents-small-table">
            <div>
              {ResumeTableHeader.map((item, index) => (
                <ResumeTable item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
